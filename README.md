# Orient Rods UK website

A static website designed for Hostinger Single Web Hosting. It uses only HTML, CSS and JavaScript, so no server setup, database or framework is required.

## What is included

- Responsive home, Rods, Throwing Sticks, product and Contact pages
- Screenshot-matched Rods navigation: Carp, Feeder, Seafishing and Casting sections
- Desktop and mobile navigation with all product sub-menus
- One product data file for descriptions, specifications and prices
- Product galleries populated with selected product photography from the supplied archive
- Basic SEO files: `robots.txt`, `sitemap.xml` and a favicon
- Clean Hostinger URLs, including `/rods`, `/v2`, `/bestia-casting` and `/contact`

## Update a price or description

Open `data/products.js`. Every product is one clearly labelled block. For pages with several options, change each price in the product's `models` array; `price` is the catalogue price. Edit `description` for the text below the gallery. An optional `characteristics` array displays a spaced list with red-square markers beneath that text. After an update, increase the `products.js?v=` number in all four HTML files so visitors load the new data.

## Add product photographs

For each product, make a folder inside `assets/products/` using that product's `slug` in `data/products.js`.

Example for IVA 13' 3.5lb:

```text
assets/products/iva-13-35lb/
  1.jpg
  2.jpg
  3.jpg
```

`1.jpg` appears on the product listing and as the first product-page image. `2.jpg` and `3.jpg` appear in the gallery. The supplied archive has already been matched to 16 product galleries. Chameleon S1 / S2 and Inventa do not have identifiable photo sets in that archive, so they intentionally use the neutral fallback until their images are added.

For larger galleries, set `imageCount` to the total number of sequentially named images. For a format other than JPG, specify that image's extension using `imageExtensions`, for example `{ 2: "webp", 3: "jpeg" }`. When replacing an existing photograph, change the product's `imageVersion` value too; this prevents an old cached image from appearing. Optional `imageAlts` entries describe the images in the same order for accessibility.

The completed Astra gallery has nineteen full-resolution JPG images in numerical filename order, from `2021Astra1.jpg` through `2021Astra19.jpg`. Bestia VC has seventeen full-resolution JPG images, from `2021Bestia1.jpg` through `2021Bestia17.jpg`. See `ASTRA_UPDATE.md` and `BESTIA_VC_UPDATE.md` for the gallery and content details.

VekTra, V-2 and V-3 now have seven, ten and eight original JPG images respectively, also in numerical filename order. Their complete English descriptions and characteristics match the manufacturer's main website. See `VEKTRA_VENUS_UPDATE.md` for details.

`descriptionTable` adds an accessible model-specification table. `characteristicsGap: true` leaves a bigger gap before the red-square characteristics section. `characteristicsTitle` adds an optional heading directly above its list. `additionalCharacteristics` supports a separate follow-on list. `orderEmail` adds the order-contact sentence at the bottom, also with a bigger gap above it. These options are used on the completed Astra, Bestia VC, VekTra, V-2 and V-3 pages.

## Add contact details

Open `data/site.js` and fill in any of these fields:

```js
email: "your-email@example.com",
phone: "+44 ...",
socialUrl: "https://..."
```

Only filled-in contact methods appear on the Contact page.

## Upload to Hostinger

1. In Hostinger, open **Websites** → **Manage** → **File Manager**.
2. Open `public_html`.
3. Remove the default Hostinger page files only after keeping a copy if you want one.
4. Upload the **contents** of this folder into `public_html`, including the hidden `.htaccess` file. Do not upload the enclosing `orient-rods-uk` folder itself.
5. Visit `/rods`, `/v2`, `/bestia-casting` and `/contact` to confirm that clean links work.
6. Test the menu, Rods, Throwing Sticks and a product page on a phone.

## Put it on GitHub

Create an empty GitHub repository, upload this whole project folder, and commit it. The website will still be hosted by Hostinger; GitHub is your safe editable copy.
