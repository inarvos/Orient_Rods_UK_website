# Inventa update — 12 October 2026

This complete website archive includes all previous updates plus the updated `/inventa` product page. Extract its contents directly into Hostinger's `public_html`, including `.htaccess`. There is no enclosing website folder inside the archive. Do not upload the separate image review ZIP as website content.

## Inventa

- Available model: Inventa 13' 3.7lb, code INV1337, £420.00. As requested, the manufacturer's $420 numeric price is displayed with £; no currency conversion is applied.
- Full English manufacturer description: all seven paragraphs and eight general characteristics, checked at https://www.orientrods.com/en/rods/carp-fishing-rods/inventa.
- Characteristics use the existing red-square bullets and larger section spacing; the description ends with the clickable UK order-email sentence.
- Ten uploaded images appear in numerical filename order. The prepared first PNG is unchanged. Photos 2–10 retain their original 1920×1080 pixels and have 420 white pixels added above and below, producing 1920×1920 lossless PNGs.
- Photos are in `assets/products/inventa-13-37lb/1.png` through `10.png`; imageVersion refreshes cached photo URLs.
- The existing desktop/mobile product template, clickable album and navigation are preserved. Product-data cache references are now version 32 in all four HTML entry pages.

## Later edits

Edit Inventa's entry in `data/products.js` to change the price, model details or description. Both desktop and mobile use the same model-price data. After future edits, increase the `products.js?v=` number in all four HTML files and change the product's imageVersion when replacing photos.

## Verification

The actual product renderer and album controls passed local DOM checks. The 21 other product routes and all unrelated product data remain unchanged. All square images passed decoded-pixel checks, and both ZIP archives passed integrity checks. Browser layout QA was unavailable in this environment.
