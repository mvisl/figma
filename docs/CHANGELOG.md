# Changelog

## 1.1.0 - 2026-10-20

- Separate observed, proposed, approved, implemented, and verified states.
- Review variants in small visual packets and continue independent work.
- Keep visual generation separate from jurisdiction and product behavior.
- Inspect components, resize screens, compare generations, and export matching recipes.
- Retain instrument-label meanings while adopting their approved shared neutral F1/F2 treatment.

## 1.0.8 - 2026-07-16

Added:

- UX Core as an active agent decision library for interface and flow design, with a strong 80% adherence expectation where its heuristics are applicable.
- A required workflow for selecting relevant cognitive heuristics before design and translating them into concrete hierarchy, wording, grouping, feedback, disclosure, and interaction decisions.
- Explicit safeguards against using framing, anchoring, loss aversion, authority, social proof, defaults, or urgency as dark patterns.
- A rule to document intentional departures from clearly applicable UX Core heuristics.
- A strict layer boundary: DSL components stay intact, while UX Core reviews how they are ordered, grouped, prioritized, and sequenced into screens and flows.
- A prohibition on detaching or internally modifying DSL components to satisfy cognitive heuristics; missing patterns must be logged as DSL gaps.

Clarified:

- UX Core governs agent UX decisions; it does not change DSL migration architecture, replace Mobile App tokens/components, or authorize reinterpretation of exact source geometry.
- Rule priority remains explicit requirements and safety first, followed by confirmed product behavior, Mobile App DSL/source, applicable UX Core heuristics, and only then agent preference.

## 1.0.7 - 2026-07-10

Added:

- More exact rules from the Mobile App Figma working guide: fix broken masters instead of patching instances, keep component/layer names clean, and avoid debug/version suffixes in visible names.
- Card-specific rules for AI Ideas and Top Profit: exact 32 px icon instances, semantic value blocks, source header spacing, buy/sell arrows, and variable-bound padding.
- Stronger spacing and text guidance: all non-zero gaps and paddings must use DSL variables, descriptive text uses secondary text color, and positive values use the DSL positive token.
- Category label and icon rules for card metadata, including compact 16 px labels and existing Markets category assets.
- Icon and asset safeguards: no ad-hoc PNGs, overlays, screenshots, or loose replacement layers inside components when a component, instance, glyph, or trusted source can be used.
- Verification safeguards: after text, badge, row, card, or section edits, re-check text style bindings and do not detach `textStyleId` silently.

Changed:

- Clarified that subtle diagonal logo-tint gradients must stay at or below 10% opacity unless the source is already lower.
- Clarified small product-pattern details: section subtitles usually avoid trailing periods, card labels should preserve the rest of the card layout, and dividend cards should keep dividend context instead of repeating stock category labels.

## 1.0.6 - 2026-07-09

Added:

- Explicit rule that design-system documentation, mini-sites, release pages, review boards, and examples must follow the same Mobile App DSL tokens, text styles, spacing, radii, icons, and component behavior as the product UI.
- Rule that user requests such as a bigger title, more air, stronger rounding, softer glass, or a new card must first be resolved through existing DSL components, text styles, spacing, radius, color, and effect tokens.
- Automatic publishing rule: when the DSL or AI-agent rules change materially, bump the version, update the manifest and changelog, refresh the downloadable `DESIGN.md` package, and publish the GitHub/site copy in the same session.
- Required deviation logging for any artifact that cannot use an existing DSL token, style, or component.

Changed:

- Clarified that the design reference is not just documentation: it is a source-of-truth artifact and must not visually contradict the design system it describes.

## 1.0.5 - 2026-07-08

Added:

- Stricter AI-agent rules for exact source transfer, token/style binding, and clear DRAFT labeling.
- Clearer instruction that approximation is allowed only when the exact source node is technically unavailable.

Changed:

- Tightened the working method: do not invent colors, fonts, spacing, radius, shadows, icons, or geometry when the source already contains values.
- Clarified that repeated source gaps must be recorded as open items instead of silently filled by plausible-looking values.

## 1.0.4 - 2026-07-08

Added:

- Expanded Facelift 2 coverage for dark surfaces, orange active states, matte-glass plates, rounded pills, Tabbar, Top Navigation, badges, and migration decisions.

Changed:

- Clarified the split between token swaps, structural component variants, and disconnected duplicate components.
- Clarified when to use variables instead of variants for simple show/hide or spacing logic.

## 1.0.3 - 2026-07-08

Added:

- Figma source references for DSL 2.0, DSL 0.6, Facelift 2, and product screen research.
- Connected-mode recommendation for agents with Figma MCP access.
- Offline fallback tokens and rules for agents that only receive this file.

Changed:

- Moved the reference from a visual note into a practical AI prototyping guide.

## 1.0.2 - 2026-07-08

Added:

- Canonical GitHub URLs for the first hosted repository.
- `design-manifest.json` for lightweight version checks.
- Mini-site files for a black/orange Facelift 2 download page.

Changed:

- Updated `DESIGN.md` freshness logic to prefer `manifest_url` when available.

## 1.0.1 - 2026-07-08

Added:

- Freshness check instructions for AI agents.
- Metadata block with version, update date, canonical URL placeholder, and freshness policy.
- Guidance for GitHub/raw-file update workflows.
- `README.md` with short usage instructions.
- This changelog.
- Once-per-day freshness policy for long-running work.

Changed:

- Clarified that an outdated or unverifiable file must be reported clearly before use.

## 1.0.0 - 2026-07-08

Added:

- First working `DESIGN.md` for Mobile App mobile AI prototyping.
- Visual direction for Mobile App DSL / V9 / DSL 2.0.
- Connected Figma mode and offline fallback mode.
- Core color, typography, spacing, radius, and layout guidance.
- Component rules for Tabbar, Top Navigation, badges, cards, feed sections, and AI-agent workflow.
- Maintenance rules for keeping the document alive alongside DSL 2.0 work.
