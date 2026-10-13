# Iva, Chameleon Ultimate and Chameleon SM — 11 October 2026

This update uses the attached latest website as its base. Existing completed pages, menu, approved logo and responsive layout are preserved.

## Product pages and galleries

| Page | Supplied files | Image count |
| --- | --- | --- |
| `/iva-37` | `Iva.zip`: `2021Iva(3,7)1.jpg` through `2021Iva(3,7)10.jpg` | 10 |
| `/chameleon-ultimate` | `Chameleon Ultimate.zip`: `2021Chameleon1.jpg` through `2021Chameleon8.jpg` | 8 |
| `/chameleon-sm` | `Chameleon SM.zip`: `2021ChameleonSM1.jpg` through `2021ChameleonSM9.jpg` | 9 |

All twenty-seven JPGs are copied without resizing or re-encoding. Numbered filenames define the gallery order; image 1 is the main preview. Each preview opens its full gallery, with previous/next, keyboard navigation, counters and close controls. The uploaded source archives are unchanged.

## Original descriptions

The complete English descriptions and original characteristic lists were read from the live manufacturer pages on 11 October 2026:

- Iva: https://www.orientrods.com/en/rods/carp-fishing-rods/iva-series/iva-3-7
- Chameleon Ultimate: https://www.orientrods.com/en/rods/carp-fishing-rods/chameleon-series/chameleon-ultimate
- Chameleon SM: https://www.orientrods.com/en/rods/carp-fishing-rods/chameleon-series/sm

Iva retains two introductory paragraphs and eleven additional specifications. Ultimate retains four introductory paragraphs and ten general properties. SM retains two paragraphs, including the manufacturer's three explicit line breaks within the second paragraph, and eight general properties. Text and list order are retained, with incidental HTML whitespace normalized.

Each characteristic section has the established red-square markers and a 3.2rem gap before it. Each description ends with another 3.2rem gap followed by the same clickable order sentence:

To make an order contact us via email - uk.orientrods@gmail.com.

SM's current manufacturer text specifies casting loads up to 150 grams. The product's stored specification is updated to agree with that text.

## Models and prices

The live manufacturer pages show USD 550, 380 and 350 respectively. Following the owner's price rule, the same numeric amounts are displayed with £, without exchange-rate conversion.

| Model | Manufacturer code | Displayed price |
| --- | --- | --- |
| Iva 13' 3.7lb | IVA1337 | £550.00 |
| Chameleon Ultimate 13' 3–6oz | CHU1336 | £380.00 |
| Chameleon SM 13' 5.0lb (Design 2025) | CHSM1350 | £350.00 |

Iva's code is shown on its live detail page. The Chameleon codes are supplied by the manufacturer's indexed catalogue. The same model rows and prices appear in both desktop and mobile layouts.

## Update and upload

Prices, descriptions, model rows and gallery information remain editable in `data/products.js`. The three galleries use separate new image cache keys. All four HTML pages use product data v30, application code v44 and the existing styles v48.

Extract the website ZIP and upload its contents to Hostinger `public_html`, including `.htaccess`, replacing the existing files. The ZIP is a complete website, with files at its root.

JavaScript syntax, original photo bytes, gallery order and controls, models/prices, text, email links, preserved pages and ZIP integrity are checked locally. Browser layout QA is unavailable in this environment. Hostinger and GitHub have not been modified.
