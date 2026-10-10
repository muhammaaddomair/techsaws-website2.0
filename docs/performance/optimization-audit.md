# Performance audit - 2026-10-10

The current website was audited and optimized without changing its CSS, layout, colors, artwork, or ordinary animation appearance. This covers the implemented homepage and shared layout; other pages have not been built yet.

## Changes

- Canvas mask paths now follow GSAP boundary paths directly. Wave animation no longer triggers React state updates, JSON serialization, or full canvas geometry reads each frame. React still handles actual layout changes, including FAQ expansion and responsive resizing.
- Header and tooltip surface detection share one set of scroll/resize listeners, one ResizeObserver, one mutation observer, and one geometry pass per frame. Animated wave changes only request surface measurement when a boundary is under a tracked control. Resources are disconnected after the last subscriber unmounts.
- Lenis uses an interaction-driven animation clock instead of an always-running requestAnimationFrame loop. It stops when idle or the document is hidden and responds to changes in reduced-motion preferences.
- Motion components use the lightweight m renderer with shared LazyMotion/domAnimation features. Unused drag/layout features are excluded; reduced-motion handling is centralized.
- The mobile sidebar is dynamically imported when opened. Its visuals, focus trap, Escape handling, and body-scroll cleanup remain intact.
- The robot uses Lottie's SVG-only player and pauses while the document is hidden. Existing reduced-motion behavior is preserved.
- Header, footer, and mobile-menu logo images have explicit responsive sizes to avoid downloading oversized variants. Existing next/image optimization and lazy loading remain active.
- Removed the unused sidebar-curve component and unused sidebar animation exports. Replaced default starter page metadata with TechSaws metadata.

## Verification

- npm.cmd run lint: passes without warnings.
- npx.cmd --no-install tsc --noEmit: passes.
- npm.cmd run build: passes; homepage is statically prerendered.
- node scripts/check-production.mjs http://localhost:3100: passes against next start. Confirms HTTP 200, six server-rendered section headings, all 14 initial script assets returning JavaScript successfully, and image optimization returning WebP.
- Production browser checks: mobile sidebar loads and closes via Escape; body scrolling is restored; FAQ expands; robot SVG renders; no horizontal mobile overflow; no console errors observed.
- Desktop checks: dark/light header switching, both canvas masks matching each wave path, and offscreen service/why stories paused.

## Bundle measurement

Baseline and optimized JSON files contain reproducible local build measurements. These sum every emitted JavaScript chunk, including deferred chunks and framework code; they are not the actual initial-page network transfer or a Lighthouse score.

| Metric | Before | After |
| --- | ---: | ---: |
| All emitted JavaScript, uncompressed | 1,377,710 bytes | 1,303,110 bytes |
| All emitted JavaScript, individually gzipped | 419,390 bytes | 408,538 bytes |

The final homepage's initial script set totals 382,695 bytes when individually gzipped. The initial-script baseline was not captured, so no before/after claim is made for that metric. Extra chunks reflect code splitting. No live Core Web Vitals or device CPU benchmark was performed; those should be measured on the deployed site after the hero is implemented.

## Remaining launch work

- The hero is still placeholder content, as planned.
- Only / and Next's not-found route are implemented. /connect, service destinations, and the other header/footer page destinations currently return 404.
- Header and robot contact buttons set isConnectModalOpen, but no component renders that modal yet.
- Newsletter submission only changes local React state and does not store or send the email. A real subscription endpoint/provider is needed before launch.

These are unfinished product integrations and pages. They were documented rather than replaced with invented content or integrations during this performance-only task.
