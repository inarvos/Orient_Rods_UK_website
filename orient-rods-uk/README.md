# Orient Rods UK website

A static website designed for Hostinger Single Web Hosting. It uses only HTML, CSS and JavaScript, so no server setup, database or framework is required.

## What is included

- Responsive home, Rods, Throwing Sticks, product and Contact pages
- Desktop and mobile navigation with product sub-menus
- One product data file for descriptions, specifications and prices
- Product galleries populated with selected product photography from the supplied archive
- Basic SEO files: `robots.txt`, `sitemap.xml` and a favicon

## Update a price or description

Open `data/products.js`. Every product is one clearly labelled block. Change the value after `price:` or edit the `summary`, `description` and `specs` fields. No other files need changing.

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
4. Upload the **contents** of this folder into `public_html`. Do not upload the enclosing `orient-rods-uk` folder itself.
5. Visit your domain and test the home page, menu, Rods, Throwing Sticks and a product page on a phone.

## Put it on GitHub

Create an empty GitHub repository, upload this whole project folder, and commit it. The website will still be hosted by Hostinger; GitHub is your safe editable copy.
