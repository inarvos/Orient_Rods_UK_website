# Iva, VekTra photo and mobile swiping — 12 October 2026

This complete website archive includes all earlier product updates. Extract its contents into Hostinger's `public_html`, replacing the current files, including `.htaccess`.

## Iva

- Iva is now a direct menu item like VekTra, in desktop and mobile navigation.
- It links straight to the existing `/iva-37` product page. The extra 3.7lb submenu is removed.
- The Carp Fishing Rods catalogue card leads directly to the product and says "Explore".
- The product breadcrumb no longer includes an Iva Series page.
- The old `/rods/carp-fishing-rods/iva-series` and `/rods/carp-fishing-rods/iva-series/37lb` links redirect permanently to `/iva-37` through `.htaccess`.

## VekTra

The first image at `assets/products/vektra-vt1-13-35lb/1.jpg` is the supplied `2026VekTra1(1).jpg`, copied byte-for-byte. It is already square. Its alternate text and photo cache version are refreshed. The other six gallery images and all product text/model/price data are retained.

## Mobile photo gestures

- All product galleries support horizontal finger swipes on the main preview and on the enlarged album image.
- Swipe left for the next photo and right for the previous photo. The first and last photos loop in both directions.
- The preview and album stay on the same selected photo, and the photo counter updates when browsing.
- A swipe on the main preview does not accidentally open the album through the browser's generated click. A normal subsequent tap opens it at the selected photo.
- Vertical scrolling, diagonal/short movements, cancellation and multiple fingers do not advance the gallery. Two-finger pinch gestures are left to the browser.
- Existing arrow buttons, keyboard navigation, Escape/close and focus return are retained. Single-photo galleries do not install swipe handlers.
- The shared gallery hint now mentions swiping on a phone.

Cache references are refreshed in all four HTML entry files: products version 38, application version 45, stylesheet version 49.

Verification: actual renderer/menu/catalogue functions and simulated touch gestures across all 22 products; each image and wrap-around; ordinary taps, swipe-click suppression, vertical/diagonal/short gestures, pinch/cancellation/finger identity, arrow buttons/keyboard/focus; direct Iva links and redirects; exact supplied VekTra image bytes; all unrelated descriptions/model/price data and assets; JavaScript syntax and ZIP integrity. Physical-device/browser layout testing was unavailable.
