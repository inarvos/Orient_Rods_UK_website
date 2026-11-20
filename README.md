# Orient Rods UK

The UK catalogue for Orient carp, feeder, sea fishing and casting rods, plus carbon throwing sticks. Product pages show photos, specifications and model prices. Customers can enquire by email.

**Website:** [orientrodsuk.com](https://orientrodsuk.com/)

**Browse:** [Rods](https://orientrodsuk.com/rods) | [Throwing sticks](https://orientrodsuk.com/throwing-sticks) | [Contact](https://orientrodsuk.com/contact)

The site runs on Hostinger and uses plain HTML, CSS and JavaScript. There is no build step or database. The `.htaccess` file maps clean URLs such as `/rods` and `/galax` to the shared page templates.

## Project structure

| Path | Purpose |
| --- | --- |
| [`index.html`](index.html), [`catalogue.html`](catalogue.html), [`product.html`](product.html), [`contact.html`](contact.html) | Homepage and page templates |
| [`app.js`](app.js), [`styles.css`](styles.css) | Navigation, page rendering, photo galleries and styling |
| [`data/products.js`](data/products.js), [`data/site.js`](data/site.js) | Product catalogue and site settings |
| [`assets/products/`](assets/products/), [`assets/site/`](assets/site/) | Product photos, branding and homepage artwork |
| [`.htaccess`](.htaccess), [`sitemap.xml`](sitemap.xml), [`robots.txt`](robots.txt) | URL routing, redirects and search indexing |

## Preview locally

From the repository root, run this command with Python 3 installed:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` for the homepage. This server does not apply `.htaccess` rules, so use these direct URLs to preview the other templates:

- Rods: `http://127.0.0.1:8000/catalogue.html?route=rods`
- Throwing sticks: `http://127.0.0.1:8000/catalogue.html?route=throwing-sticks`
- Galax product page: `http://127.0.0.1:8000/product.html?route=galax`
- Contact: `http://127.0.0.1:8000/contact.html`

## Maintain the catalogue

- **Prices and descriptions:** Edit the relevant entry in [`data/products.js`](data/products.js). `price` is used on product cards. `models` contains the labels, codes and prices shown in **Available models**. If a record has no `models` array, the product page uses `officialPrice` when set, otherwise `price`. Use `description`, `characteristics` and `descriptionTable` for product copy, bullet points and specifications.
- **Photos:** Use sequential filenames inside `assets/products/<slug>/`, or the folder named in `imageSlug` when set. Image 1 is the cover; numbers set the gallery order. Set `imageCount` to the total and use `imageExtensions` for files that are not `.jpg`. For example, Galax uses `1.jpg` as its cover and `2.png` through `9.png` for the remaining photos. Keep `imageAlts` in gallery order and change `imageVersion` when replacing or reordering photos.
- **Contact email:** Update `email` in [`data/site.js`](data/site.js) and the fallback link, displayed address and page description in [`contact.html`](contact.html). Update any product `orderEmail` values separately if the order address changes.

After changing a shared script, stylesheet or data file, increase its `?v=` value in the HTML pages that load it so visitors get the latest version.

## Deploy to Hostinger

1. In Hostinger's File Manager, back up the current site before replacing files in `public_html`.
2. Upload the four HTML pages, `app.js`, `styles.css`, `data/`, `assets/`, `favicon.ico`, `robots.txt`, `sitemap.xml` and the hidden `.htaccess` file directly into `public_html`. Keep the folder structure. Git files and Markdown documentation do not need to be uploaded.
3. Check `/rods`, `/throwing-sticks`, `/galax` and `/contact` on the live site. On a phone, open the menu and swipe through a product gallery. Confirm that the Contact link opens an email draft to the correct address.
