const phone = document.querySelector(".phone");
const track = document.querySelector(".slider-track");
const thumb = document.querySelector(".slider-thumb");
const chevrons = [...document.querySelectorAll(".chevrons span")];
const slideState = document.querySelector(".slide-state");
const requestedState = document.querySelector(".requested-state");

let progress = 0;
let drag = null;

const clamp = (value) => Math.max(0, Math.min(1, value));
const travel = () => Math.max(0, track.clientWidth - thumb.offsetWidth);

function render(nextProgress) {
  progress = clamp(nextProgress);
  const left = progress * travel();
  phone.style.setProperty("--progress", progress.toFixed(3));
  phone.style.setProperty("--thumb-left", `${left}px`);
  thumb.style.transform = `translate3d(${left}px, 0, 0)`;

  chevrons.forEach((chevron, index) => {
    const wave = clamp(progress * 3 - index * 0.08);
    chevron.style.setProperty("--lit", wave.toFixed(3));
  });
}

function requestCompensation() {
  render(1);
  window.setTimeout(() => {
    thumb.blur();
    phone.dataset.state = "requested";
    slideState.setAttribute("aria-hidden", "true");
    requestedState.setAttribute("aria-hidden", "false");
  }, 120);
}

function finish(pointerId) {
  if (!drag || (pointerId !== undefined && drag.pointerId !== pointerId)) return;
  drag = null;
  phone.dataset.dragging = "false";
  if (progress >= 0.94) requestCompensation();
  else render(0);
}

thumb.addEventListener("pointerdown", (event) => {
  if (phone.dataset.state === "requested") return;
  event.preventDefault();
  thumb.setPointerCapture(event.pointerId);
  drag = { pointerId: event.pointerId, startX: event.clientX, startProgress: progress };
  phone.dataset.dragging = "true";
});

thumb.addEventListener("pointermove", (event) => {
  if (!drag || drag.pointerId !== event.pointerId) return;
  render(drag.startProgress + (event.clientX - drag.startX) / travel());
});

thumb.addEventListener("pointerup", (event) => finish(event.pointerId));
thumb.addEventListener("pointercancel", (event) => finish(event.pointerId));
thumb.addEventListener("lostpointercapture", (event) => finish(event.pointerId));

thumb.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  requestCompensation();
});

window.addEventListener("resize", () => render(progress));
render(0);

if (new URLSearchParams(window.location.search).get("state") === "requested") {
  requestCompensation();
}
