# Chameleon S1 / S2 — 12 October 2026

Product page: `/chameleon-s1-s2`. This update starts from the completed Iva / Ultimate / SM website package.

## Photographs

The ten supplied photos appear in numerical filename order. `2026ChameleonS1.jpg` is already square and is retained byte-for-byte as the main preview.

Images 2–10 were originally 1920 × 1080. Each now sits, unscaled and uncropped, in the centre of a 1920 × 1920 white canvas. Exactly 420 pixels of pure white have been added above and below it. Every original decoded RGB pixel has been checked against the corresponding centre region of the finished image.

Padded results use lossless PNG to avoid another JPEG compression pass. The website gallery therefore uses `1.jpg` and `2.png` through `10.png`; the matching extensions are declared in `data/products.js`. The separate photo download uses `2026ChameleonS1.jpg` and `2026ChameleonS2.png` through `2026ChameleonS10.png`.

## Description and models

The complete English text and original nine-item characteristic list were read directly from:
https://www.orientrods.com/en/rods/carp-fishing-rods/chameleon-series/s1-s2

The description retains the manufacturer's four paragraphs, including its reference to the 2022 introduction. The supplied 2026 filenames do not alter that original text. General properties use the established red-square markers and a 3.2rem gap. The page ends with the same order sentence, after another 3.2rem gap:

To make an order contact us via email - uk.orientrods@gmail.com.

Both model selections were checked on the live page. The numeric USD amounts are shown with £ without conversion, following the owner's rule:

| Model | Displayed price |
| --- | --- |
| Chameleon S1 13' 3.5lb | £350.00 |
| Chameleon S2 13' 3–5oz | £360.00 |

The catalogue shows `From £350.00`. Both desktop and mobile use the same model rows.

## Upload

The four HTML files now reference product data v31. Application code v44 and styles v48 are unchanged. The gallery cache key is `chameleon-s1-s2-20261012-1`.

Extract the full website ZIP and upload its contents to Hostinger `public_html`, including `.htaccess`. The separate image ZIP is for reviewing or reusing the finished photos.

Image dimensions, white borders, source-pixel preservation, gallery paths/order and controls, model prices, email links, preserved pages and ZIP integrity are checked locally. Browser layout QA is unavailable. Hostinger and GitHub have not been modified.
