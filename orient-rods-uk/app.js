(() => {
  const site = window.ORIENT_SITE;
  const products = window.ORIENT_PRODUCTS;
  const params = new URLSearchParams(window.location.search);

  const esc = (value = "") => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  const productUrl = product => `product.html?product=${encodeURIComponent(product.slug)}`;
  const categoryUrl = category => `catalogue.html?category=${category}`;
  const rodGroupUrl = group => `catalogue.html?category=rods&group=${encodeURIComponent(group)}`;
  const formatPrice = price => price || "Price on request";
  const productImage = (product, n = 1) => `assets/products/${product.imageSlug || product.slug}/${n}.jpg`;
  const rodGroups = [
    { slug: 'carp', title: 'Carp fishing rods', intro: 'Carp, distance, spod and marker models from the main Orient range.' },
    { slug: 'feeder', title: 'Feeder rods', intro: 'The complete Chameleon feeder family: Ultimate, Distance and FX.' },
    { slug: 'sea-fishing', title: 'Sea fishing & casting rods', intro: 'Orient’s specialist casting range for maximum-load work.' }
  ];
  const seriesDefinitions = {
    carp: [
      { slug: 'astra', title: 'Astra Series' },
      { slug: 'bestia', title: 'Bestia Series', children: [{ slug: 'vc', title: 'Varnish coating (VC)' }, { slug: 'pp', title: 'Film coated (PP)' }] },
      { slug: 'vektra', title: 'VekTra 12\', 13\'' },
      { slug: 'venus', title: 'Venus Series' },
      { slug: 'galax', title: 'Galax Series' },
      { slug: 'iva', title: 'IVA Series' },
      { slug: 'inventa', title: 'Inventa' },
      { slug: 'chameleon', title: 'Chameleon Series' },
      { slug: 'distance', title: 'Distance' }
    ],
    feeder: [{ slug: 'chameleon-feeder', title: 'Chameleon Feeder' }],
    'sea-fishing': [{ slug: 'bestia-casting', title: 'Bestia Casting' }]
  };
  const rodGroup = slug => rodGroups.find(group => group.slug === slug);
  const rodSeries = (group, slug) => (seriesDefinitions[group] || []).find(series => series.slug === slug);
  const seriesUrl = (group, series, finish = '') => `catalogue.html?category=rods&group=${encodeURIComponent(group)}&series=${encodeURIComponent(series)}${finish ? `&finish=${encodeURIComponent(finish)}` : ''}`;
  const productsForSeries = (group, series, finish = '') => products.filter(product => product.category === 'rods' && product.group === group && product.series === series && (!finish || !product.finishes || product.finishes.includes(finish)));

  function productImageMarkup(product, className = "product-card__image") {
    return `<div class="${className}" data-product-image>
      <img src="${productImage(product)}" alt="${esc(product.name)} ${esc(product.variant)}" loading="lazy" />
      <div class="image-fallback" aria-hidden="true"></div>
    </div>`;
  }

  function productCard(product) {
    return `<article class="product-card">
      <a class="product-card__visual" href="${productUrl(product)}" aria-label="View ${esc(product.name)} ${esc(product.variant)}">${productImageMarkup(product)}</a>
      <div class="product-card__body">
        <p class="product-card__family">${esc(product.action)}</p>
        <h3><a href="${productUrl(product)}">${esc(product.name)}</a></h3>
        <p class="product-card__variant">${esc(product.variant)}</p>
        <div class="product-card__bottom"><span class="product-card__price">${esc(formatPrice(product.price))}</span><a href="${productUrl(product)}" class="product-card__view">Details</a></div>
      </div>
    </article>`;
  }

  function installImageFallbacks(scope = document) {
    scope.querySelectorAll('[data-product-image] img').forEach(img => {
      const showFallback = () => img.closest('[data-product-image]').classList.add('is-fallback');
      if (img.complete && img.naturalWidth === 0) showFallback();
      img.addEventListener('error', showFallback, { once: true });
    });
  }

  function createHeader() {
    const rodLinks = products.filter(p => p.category === 'rods');
    const stickLinks = products.filter(p => p.category === 'sticks');
    const desktopDirectGroup = (title, category, items) => `<li class="nav-item nav-item--has-menu">
      <a href="${categoryUrl(category)}">${title}</a>
      <button class="nav-trigger" type="button" aria-label="Show ${title} models" aria-expanded="false"><span aria-hidden="true">+</span></button>
      <div class="nav-panel">
        ${items.map(p => `<a href="${productUrl(p)}">${esc(p.name)} <small>${esc(p.variant)}</small></a>`).join('')}
      </div>
    </li>`;
    const desktopSeries = (group, series) => {
      const items = productsForSeries(group.slug, series.slug);
      const destinations = series.children
        ? series.children.map(child => `<a class="nav-series__child" href="${seriesUrl(group.slug, series.slug, child.slug)}">${esc(child.title)}<small>${items.length} model${items.length === 1 ? '' : 's'}</small></a>`).join('')
        : items.map(product => `<a class="nav-series__child" href="${productUrl(product)}">${esc(product.name)}<small>${esc(product.variant)}</small></a>`).join('');
      return `<div class="nav-series"><a class="nav-series__title" href="${seriesUrl(group.slug, series.slug)}">${esc(series.title)}</a><div class="nav-series__children">${destinations}</div></div>`;
    };
    const desktopRodsGroup = () => `<li class="nav-item nav-item--has-menu">
      <a href="${categoryUrl('rods')}">Rods</a>
      <button class="nav-trigger" type="button" aria-label="Show rod categories" aria-expanded="false"><span aria-hidden="true">+</span></button>
      <div class="nav-panel nav-panel--hierarchy">
        ${rodGroups.map(group => `<div class="nav-level-two">
          <a href="${rodGroupUrl(group.slug)}">${esc(group.title)}<span aria-hidden="true">›</span></a>
          <div class="nav-level-three">${(seriesDefinitions[group.slug] || []).map(series => desktopSeries(group, series)).join('')}</div>
        </div>`).join('')}
      </div>
    </li>`;
    const mobileDirectGroup = (title, category, items) => `<li class="mobile-menu-node mobile-drawer__item">
      <div class="mobile-drawer__row"><a href="${categoryUrl(category)}">${title}</a><button class="mobile-drawer__expander" type="button" aria-label="Show ${title} models" aria-expanded="false"><span aria-hidden="true">+</span></button></div>
      <ul class="mobile-drawer__submenu">${items.map(p => `<li><a href="${productUrl(p)}">${esc(p.name)} <small>${esc(p.variant)}</small></a></li>`).join('')}</ul>
    </li>`;
    const mobileSeries = (group, series) => {
      const items = productsForSeries(group.slug, series.slug);
      const children = series.children
        ? series.children.map(child => `<li><a href="${seriesUrl(group.slug, series.slug, child.slug)}">${esc(child.title)}<small>${items.length} models</small></a></li>`).join('')
        : items.map(product => `<li><a href="${productUrl(product)}">${esc(product.name)} <small>${esc(product.variant)}</small></a></li>`).join('');
      return `<li class="mobile-menu-node mobile-drawer__series"><div class="mobile-drawer__row"><a href="${seriesUrl(group.slug, series.slug)}">${esc(series.title)}</a><button class="mobile-drawer__expander" type="button" aria-label="Show ${esc(series.title)} models" aria-expanded="false"><span aria-hidden="true">+</span></button></div><ul class="mobile-drawer__submenu mobile-drawer__submenu--models">${children}</ul></li>`;
    };
    const mobileRodsGroup = () => `<li class="mobile-menu-node mobile-drawer__item">
      <div class="mobile-drawer__row"><a href="${categoryUrl('rods')}">Rods</a><button class="mobile-drawer__expander" type="button" aria-label="Show rod categories" aria-expanded="false"><span aria-hidden="true">+</span></button></div>
      <ul class="mobile-drawer__submenu">
        ${rodGroups.map(group => `<li class="mobile-menu-node mobile-drawer__group">
          <div class="mobile-drawer__row"><a href="${rodGroupUrl(group.slug)}">${esc(group.title)}</a><button class="mobile-drawer__expander" type="button" aria-label="Show ${esc(group.title)} models" aria-expanded="false"><span aria-hidden="true">+</span></button></div>
          <ul class="mobile-drawer__submenu mobile-drawer__submenu--models">${(seriesDefinitions[group.slug] || []).map(series => mobileSeries(group, series)).join('')}</ul>
        </li>`).join('')}
      </ul>
    </li>`;
    document.querySelectorAll('[data-site-header]').forEach(host => {
      const drawerId = `mobile-navigation-${Math.random().toString(36).slice(2, 8)}`;
      host.innerHTML = `<div class="container nav-shell">
        <a class="brand" href="index.html" aria-label="${site.name} home"><span class="brand__mark">O</span><span>Orient <b>Rods</b><small>UK</small></span></a>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="${drawerId}"><span></span><span></span><span></span></button>
        <nav id="site-navigation" class="site-nav" aria-label="Main navigation"><ul>
          ${desktopRodsGroup()}
          ${desktopDirectGroup('Throwing sticks', 'sticks', stickLinks)}
          <li class="nav-item"><a href="contact.html">Contact</a></li>
        </ul></nav>
      </div>`;
      host.insertAdjacentHTML('afterend', `<aside class="mobile-drawer" id="${drawerId}" aria-hidden="true">
        <button class="mobile-drawer__backdrop" type="button" aria-label="Close navigation"></button>
        <nav class="mobile-drawer__panel" aria-label="Mobile navigation">
          <div class="mobile-drawer__top"><a class="brand" href="index.html" aria-label="${site.name} home"><span class="brand__mark">O</span><span>Orient <b>Rods</b><small>UK</small></span></a><button class="mobile-drawer__close" type="button" aria-label="Close navigation">×</button></div>
          <ul class="mobile-drawer__list">
            ${mobileRodsGroup()}
            ${mobileDirectGroup('Throwing sticks', 'sticks', stickLinks)}
            <li class="mobile-drawer__item"><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </aside>`);
      const toggle = host.querySelector('.menu-toggle');
      const nav = host.querySelector('.site-nav');
      const drawer = document.getElementById(drawerId);
      const closeDrawer = () => {
        document.body.classList.remove('mobile-menu-open');
        drawer.setAttribute('aria-hidden', 'true');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
      };
      const openDrawer = () => {
        document.body.classList.add('mobile-menu-open');
        drawer.setAttribute('aria-hidden', 'false');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Close navigation');
      };
      toggle.addEventListener('click', () => document.body.classList.contains('mobile-menu-open') ? closeDrawer() : openDrawer());
      drawer.querySelector('.mobile-drawer__close').addEventListener('click', closeDrawer);
      drawer.querySelector('.mobile-drawer__backdrop').addEventListener('click', closeDrawer);
      const desktopNavigation = window.matchMedia('(min-width: 901px)');
      const closeMobileNavigation = () => {
        if (!desktopNavigation.matches) return;
        closeDrawer();
      };
      desktopNavigation.addEventListener('change', closeMobileNavigation);
      host.querySelectorAll('.nav-trigger').forEach(trigger => trigger.addEventListener('click', () => {
        const parent = trigger.closest('.nav-item');
        const wasOpen = parent.classList.contains('menu-open');
        host.querySelectorAll('.nav-item--has-menu').forEach(item => item.classList.remove('menu-open'));
        host.querySelectorAll('.nav-trigger').forEach(button => button.setAttribute('aria-expanded', 'false'));
        if (!wasOpen) { parent.classList.add('menu-open'); trigger.setAttribute('aria-expanded', 'true'); }
      }));
      drawer.querySelectorAll('.mobile-drawer__expander').forEach(trigger => trigger.addEventListener('click', () => {
        const parent = trigger.closest('.mobile-menu-node');
        const wasOpen = parent.classList.contains('is-open');
        [...parent.parentElement.children].filter(item => item.classList.contains('mobile-menu-node')).forEach(item => {
          item.classList.remove('is-open');
          item.querySelector(':scope > .mobile-drawer__row .mobile-drawer__expander')?.setAttribute('aria-expanded', 'false');
        });
        if (!wasOpen) { parent.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true'); }
      }));
      nav.addEventListener('keydown', event => { if (event.key === 'Escape') { host.querySelectorAll('.nav-item--has-menu').forEach(item => item.classList.remove('menu-open')); } });
      drawer.addEventListener('keydown', event => { if (event.key === 'Escape') closeDrawer(); });
    });
  }

  function createFooter() {
    document.querySelectorAll('[data-site-footer]').forEach(host => {
      host.innerHTML = `<div class="container footer-grid">
        <a class="brand brand--footer" href="index.html"><span class="brand__mark">O</span><span>Orient <b>Rods</b><small>UK</small></span></a>
        <p>${esc(site.footerNote)}</p>
        <div class="footer-links"><a href="${categoryUrl('rods')}">Rods</a><a href="${categoryUrl('sticks')}">Throwing sticks</a><a href="contact.html">Contact</a></div>
        <p class="footer-copy">© <span data-year></span> ${esc(site.name)}</p>
      </div>`;
      host.querySelector('[data-year]').textContent = new Date().getFullYear();
    });
  }

  function renderHome() {
    const host = document.querySelector('[data-featured-products]');
    if (!host) return;
    const featured = ['venus-v2-13-35lb', 'astra-10-35lb', 'iva-13-35lb'].map(slug => products.find(p => p.slug === slug));
    host.innerHTML = featured.map(productCard).join('');
    installImageFallbacks(host);
  }

  function renderCatalogue() {
    const category = params.get('category') === 'sticks' ? 'sticks' : 'rods';
    const selectedGroup = category === 'rods' ? rodGroup(params.get('group')) : null;
    const selectedSeries = selectedGroup ? rodSeries(selectedGroup.slug, params.get('series')) : null;
    const selectedFinish = params.get('finish') || '';
    const text = category === 'rods' && selectedSeries
      ? { title: selectedFinish && selectedSeries.children ? selectedSeries.children.find(item => item.slug === selectedFinish)?.title || selectedSeries.title : selectedSeries.title, intro: selectedGroup.intro }
      : category === 'rods' && selectedGroup
      ? { title: selectedGroup.title, intro: selectedGroup.intro }
      : category === 'rods'
      ? { title: 'Rods', intro: 'Choose a rod category, then explore every model in the range.' }
      : { title: 'Throwing sticks', intro: 'Carbon throwing sticks designed for accurate, long-range baiting.' };
    document.title = `${text.title} | ${site.name}`;
    document.querySelector('[data-catalogue-title]').textContent = text.title;
    document.querySelector('[data-catalogue-intro]').textContent = text.intro;
    document.querySelectorAll('.catalogue-tabs a').forEach(link => link.classList.toggle('is-active', link.href.includes(`category=${category}`)));
    const host = document.querySelector('[data-catalogue-products]');
    if (category === 'rods' && !selectedGroup) {
      host.className = 'catalogue-group-grid';
      host.innerHTML = rodGroups.map((group, index) => {
        const sample = products.find(product => product.category === 'rods' && product.group === group.slug);
        const count = products.filter(product => product.category === 'rods' && product.group === group.slug).length;
        return `<a class="catalogue-group-card" href="${rodGroupUrl(group.slug)}"><span class="catalogue-group-card__number">0${index + 1}</span>${productImageMarkup(sample, 'catalogue-group-card__image')}<span class="catalogue-group-card__content"><strong>${esc(group.title)}</strong><small>${count} model${count === 1 ? '' : 's'} · ${esc(group.intro)}</small><em>Explore models →</em></span></a>`;
      }).join('');
    } else if (category === 'rods' && selectedGroup && !selectedSeries) {
      host.className = 'catalogue-group-grid';
      host.innerHTML = (seriesDefinitions[selectedGroup.slug] || []).map((series, index) => {
        const seriesProducts = productsForSeries(selectedGroup.slug, series.slug);
        const sample = seriesProducts[0];
        const count = seriesProducts.length;
        const detail = series.children ? series.children.map(child => child.title).join(' · ') : `${count} model${count === 1 ? '' : 's'}`;
        return `<a class="catalogue-group-card" href="${seriesUrl(selectedGroup.slug, series.slug)}"><span class="catalogue-group-card__number">${String(index + 1).padStart(2, '0')}</span>${productImageMarkup(sample, 'catalogue-group-card__image')}<span class="catalogue-group-card__content"><strong>${esc(series.title)}</strong><small>${esc(detail)}</small><em>Explore models →</em></span></a>`;
      }).join('');
    } else {
      host.className = 'product-grid';
      host.innerHTML = products.filter(product => product.category === category && (!selectedGroup || product.group === selectedGroup.slug) && (!selectedSeries || product.series === selectedSeries.slug) && (!selectedFinish || !product.finishes || product.finishes.includes(selectedFinish))).map(productCard).join('');
    }
    installImageFallbacks(host);
  }

  function renderProduct() {
    const product = products.find(item => item.slug === params.get('product')) || products[0];
    document.title = `${product.name} ${product.variant} | ${site.name}`;
    const photoSlots = [1, 2, 3].map((n, index) => `<button class="gallery-thumb ${index === 0 ? 'is-active' : ''}" type="button" data-gallery-image="${productImage(product, n)}" aria-label="Show image ${n} of ${esc(product.name)}">
      <img src="${productImage(product, n)}" alt="" loading="lazy" /><span class="gallery-thumb__fallback"></span>
    </button>`).join('');
    const groupLink = product.category === 'rods' ? rodGroup(product.group) : null;
    const seriesLink = groupLink && product.series ? rodSeries(groupLink.slug, product.series) : null;
    document.querySelector('[data-product-page]').innerHTML = `<section class="container breadcrumbs"><a href="index.html">Home</a><span>/</span><a href="${categoryUrl(product.category)}">${product.category === 'rods' ? 'Rods' : 'Throwing sticks'}</a>${groupLink ? `<span>/</span><a href="${rodGroupUrl(groupLink.slug)}">${esc(groupLink.title)}</a>` : ''}${seriesLink ? `<span>/</span><a href="${seriesUrl(groupLink.slug, seriesLink.slug)}">${esc(seriesLink.title)}</a>` : ''}<span>/</span><span>${esc(product.name)}</span></section>
      <section class="container product-layout">
        <div class="product-gallery">
          <div class="product-gallery__main" data-gallery-main>${productImageMarkup(product, 'product-gallery__image')}</div>
          <div class="product-gallery__thumbs">${photoSlots}</div>
        </div>
        <article class="product-detail">
          <p class="eyebrow">${esc(product.action)}</p>
          <h1>${esc(product.name)}</h1>
          <p class="product-detail__variant">${esc(product.variant)}</p>
          <p class="product-detail__price">${esc(formatPrice(product.price))}</p>
          <p class="product-detail__summary">${esc(product.summary)}</p>
          <a class="button button--primary" href="contact.html?product=${encodeURIComponent(product.slug)}">Enquire about this model</a>
          <div class="product-detail__rule"></div>
          <h2>Specification</h2>
          <dl class="spec-list">${product.specs.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>
        </article>
      </section>
      <section class="container section product-description"><p class="eyebrow">About this model</p><h2>Built with purpose.</h2><p>${esc(product.description)}</p></section>`;
    const main = document.querySelector('[data-gallery-main]');
    installImageFallbacks(main);
    const mainImage = main.querySelector('img');
    document.querySelectorAll('[data-gallery-image]').forEach(button => {
      const thumbImage = button.querySelector('img');
      thumbImage.addEventListener('error', () => button.classList.add('is-missing'), { once: true });
      button.addEventListener('click', () => {
        if (button.classList.contains('is-missing')) return;
        mainImage.src = button.dataset.galleryImage;
        main.querySelector('[data-product-image]').classList.remove('is-fallback');
        document.querySelectorAll('[data-gallery-image]').forEach(item => item.classList.toggle('is-active', item === button));
      });
    });
  }

  function renderContact() {
    const product = products.find(item => item.slug === params.get('product'));
    if (product) document.querySelector('[data-contact-subject]').textContent = `Enquire about ${product.name} ${product.variant}`;
    const host = document.querySelector('[data-contact-details]');
    const methods = [];
    if (site.email) methods.push(`<a class="contact-method" href="mailto:${esc(site.email)}"><span>Email</span><strong>${esc(site.email)}</strong></a>`);
    if (site.phone) methods.push(`<a class="contact-method" href="tel:${esc(site.phone.replace(/\s/g, ''))}"><span>Telephone</span><strong>${esc(site.phone)}</strong></a>`);
    if (site.socialUrl) methods.push(`<a class="contact-method" href="${esc(site.socialUrl)}" target="_blank" rel="noopener"><span>Social</span><strong>Follow Orient Rods UK</strong></a>`);
    host.innerHTML = methods.length ? methods.join('') : `<p class="contact-details__note">Contact details will appear here once they are added to <code>data/site.js</code>.</p>`;
  }

  createHeader();
  createFooter();
  if (document.body.dataset.page === 'home') renderHome();
  if (document.body.dataset.page === 'catalogue') renderCatalogue();
  if (document.body.dataset.page === 'product') renderProduct();
  if (document.body.dataset.page === 'contact') renderContact();
})();
