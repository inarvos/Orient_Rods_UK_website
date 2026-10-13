# Bombus and AnacondaS — 12 October 2026

This complete website ZIP retains all previous updates and updates `/bombus` and `/anacondas`. Extract its contents directly into Hostinger's `public_html`, including `.htaccess`. There is no enclosing website folder. Separate photo ZIPs are included for review and reuse.

## Models and prices

Bombus models are 23mm (BMBS23), 27mm (BMBS27), 32mm (BMBS32) and 34mm (BMBS34). AnacondaS is 26mm, code AN26. Both offer lengths of 1000, 1100, 1200 and 1300mm; these options appear in the model labels on desktop and mobile.

The manufacturer currently displays "Call for price" on both pages, including after changing options. No numeric £ amounts have been invented: all models display "Price on request". Later prices can be entered in the products' `models` arrays in `data/products.js`.

## Descriptions

- Bombus source: https://www.orientrods.com/en/throwing-sticks/bombus. All source wording is retained: introductory sentence, four-row model/diameter/length/boilie table, and nine description items. The source introduction says "three sizes" although its table and selector contain four; the requested exact source wording is preserved alongside all four available models.
- AnacondaS source: https://www.orientrods.com/en/throwing-sticks/anacondas. All thirteen description items are retained, including reverse-bend performance, manufacturing, patents, rear valve, supplied case and the sunlight caution.
- Lists use the approved red-square markers and spacing. Both descriptions end with the clickable UK order-email sentence.
- The Bombus manufacturer table sits within the description and uses the existing responsive, horizontally scrollable table wrapper. The old separate Specification section and enquiry buttons are not restored.

## Photos and layout

Each archive supplied nine square 1280×1280 JPGs. All 18 are byte-identical to the supplied originals: no padding, resizing, cropping or recompression was necessary. Filenames are sorted by their final photo number, so `2021AnacondaS1.jpg` comes first despite its different year prefix. Gallery files are `1.jpg` through `9.jpg` in each product folder.

The approved product template and menu links remain. Both imageVersion values are refreshed, and product-data cache references are version 37 in all four HTML entry pages.

Checks: all 18 original image bytes and numerical order, gallery controls, correct model codes/options, identical desktop/mobile prices, complete source text/table, unchanged other 20 product routes and unrelated product data/files, and ZIP integrity. Browser layout QA was unavailable.
