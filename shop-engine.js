// Initialize Stripe Publishable Key
const stripe = typeof Stripe !== 'undefined' ? Stripe('pk_live_51TvOw0Ro3U7iX6n70n5R4pFcXXF0u8I4HlBmII94w02RSTFVDjj6fNOOJ5ZVdAu7lebXSHRC64aQfH4DsyZGzB4s00tbw9BVG5') : null;

// --- Product Database ---
const STICKER_PRODUCTS = [
    { 
        id: 1, 
        stripePriceId: "price_1TvPApRo3U7iX6n7a2b0j8j3", 
        name: "Customizable Missionary Name Tag Sticker", 
        price: 4.99, 
        isCustomizable: true,
        isBestseller: true,
        category: ["youth", "primary"], 
        color: "black", 
        photos: ["images/nametag1.jpg", "images/nametag2.jpg", "images/nametag3.jpg", "images/nametag4.jpg", "images/namtag5.jpg"], 
        desc: "Our best-selling classic missionary replica tag. High-durability matte vinyl finish. Enter your custom name text line below before adding to your cart.", 
        reviews: ["Looks exactly like the real thing! Perfect for my mission journal. - Sister Adams."] 
    },
    { 
        id: 2, 
        stripePriceId: "price_1TvPq4Ro3U7iX6n75Rj4QeFU", 
        name: "Lost Sheep Sticker", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: ["bible", "religious"], 
        color: "black", 
        photos: ["images/lostsheep1.jpg", "images/lostsheep2.jpg", "images/lostsheep3.jpg", "images/lostsheep4.jpg"], 
        desc: "Premium thick die-cut outdoor weather-proof vinyl statement piece.", 
        reviews: ["Stunning colors. Looks fantastic on water bottles. - Sarah M."] 
    },
    { 
        id: 3, 
        stripePriceId: "price_1Tw3mvRo3U7iX6n7uj8dSJt7", 
        name: "But If Not", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: "bible", 
        color: "blue", 
        photos: ["images/butifnot1.jpg", "images/butifnot2.jpg"], 
        desc: "Clean typography sticker designed to remind you of His constant protective cover.", 
        reviews: ["Beautiful text clarity. - Grace L."] 
    },
    { 
        id: 4, 
        stripePriceId: "price_1Tw3nkRo3U7iX6n7QeRR07Ye", 
        name: "Love One Another", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pink", 
        photos: ["images/love1.jpg", "images/love2.jpg"], 
        desc: "Delicate lavender-toned script wrapped with pristine wildflower outlines.", 
        reviews: ["Perfect addition to my scripture journal. - Hannah P."] 
    },
    { 
        id: 5, 
        stripePriceId: "price_1Tw3nTRo3U7iX6n7AZlLZ2gt", 
        name: "God Is Greater Than the Highs and Lows", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "black", 
        photos: ["images/godisgreat1.jpg", "images/godisgreat2.jpg", "images/godisgreat3.jpg"], 
        desc: "Understated minimalist styling detailing 2 Corinthians 5:7.", 
        reviews: ["Subtle, clean, elegant layout. - Mark T."] 
    },
    { 
        id: 6, 
        stripePriceId: "price_1Tw3aiRo3U7iX6n7t9fbkujK", 
        name: "Fisher of Men", 
        price: 3.99, 
        isCustomizable: false, 
        category: "bible", 
        color: "blue",
        photos: ["images/fisherofmen.jpg"], 
        desc: "Bold astronomical sunrise landscape highlighting shared global purpose.", 
        reviews: ["Striking background art depth. - Anna V."] 
    },
    { 
        id: 7, 
        stripePriceId: "price_1Tw3b4Ro3U7iX6n7CF0JpJRv", 
        name: "Hear Him", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pastelle", 
        photos: ["images/hearhim.jpg"], 
        desc: "Organic, earthy floral layout defining Ephesians structural context.", 
        reviews: ["High-grade adhesion, colors don't sun-fade. - Lucas R."] 
    },
    { 
        id: 8, 
        stripePriceId: "price_1Tw1OzRo3U7iX6n7u9JMMeyO", 
        name: "Jesus Loves Me", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pink", 
        photos: ["images/jesuslovesme1.jpg", "images/jesuslovesme2.jpg", "images/jesuslovesme3.jpg"], 
        desc: "Delicate composition summarizing beautiful structural design statements.", 
        reviews: ["Sweet gift layout for daughters! - Kelly O."] 
    },
    { 
        id: 9, 
        stripePriceId: "price_1Tw6cIRo3U7iX6n7EHoEr0Ku", 
        name: "Let God Prevail", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "colorful", 
        photos: ["images/prevail1.jpg", "images/prevail2.jpg"], 
        desc: "Classic traditional foundational hymn quote formatted cleanly.", 
        reviews: ["Calming and elegant text layout. - James P."] 
    },
    { 
        id: 10, 
        stripePriceId: "price_1Tw6ekRo3U7iX6n71Qk0tyTq", 
        name: "Child of God", 
        price: 3.99, 
        isCustomizable: false, 
        category: "primary", 
        color: "colorful", 
        photos: ["images/cog1.jpg", "images/cog2.jpg"], 
        desc: "Forest woodland layout profile mirroring peaceful vine branches.", 
        reviews: ["Deep artistic detailing. - Chloe B."] 
    },
    { 
        id: 11, 
        stripePriceId: "price_1Tw1QYRo3U7iX6n7cgnhNhYL", 
        name: "I Can Do Hard Things", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "colorful", 
        photos: ["images/hardthings1.jpg"], 
        desc: "Bold ocean wave graphic displaying empowering verse definitions.", 
        reviews: ["Powerful reminder for daily workspace views. - Eric W."] 
    },
    { 
        id: 12, 
        stripePriceId: "price_1Tw6iQRo3U7iX6n7iEZrMt4x", 
        name: "Fruits of the Spirit", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "pink", 
        photos: ["images/fruit2.jpg", "images/fruit1.jpg", "images/fruit3.jpg"], 
        desc: "Elegant floral garland framing historic trust statements perfectly.", 
        reviews: ["The matte texture feels premium. - Megan H."] 
    },
    { 
        id: 13, 
        stripePriceId: "price_1Tw1PqRo3U7iX6n7aMy4MZNW", 
        name: "NYC Rat Sticker", 
        price: 3.99, 
        isCustomizable: false, 
        isBestseller: true,
        category: "other", 
        color: "yellow", 
        photos: ["images/rat1.jpg", "images/rat2.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 14, 
        stripePriceId: "price_1Tw6kmRo3U7iX6n7uP7wwJAE", 
        name: "Be Still & Know", 
        price: 3.99, 
        isCustomizable: false, 
        category: "bible", 
        color: "blue", 
        photos: ["images/bestill1.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 15, 
        stripePriceId: "price_1Tw83DRo3U7iX6n7xbhGoCDh", 
        name: "If the Stars Were Made to Worship, So Will I", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "blue", 
        photos: ["images/stars1.jpg", "images/stars2.jpg", "images/stars3.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 16, 
        stripePriceId: "price_1TwCWjRo3U7iX6n7zZkP3pSF", 
        name: "Builders of Faith", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "colorful", 
        photos: ["images/builders1.jpg", "images/builders2.jpg", "images/yw1.jpg", "images/yw2.jpg", "images/yw3.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 17, 
        stripePriceId: "price_1TwCVsRo3U7iX6n7KwRpqrqN", 
        name: "Messengers of Hope", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "colorful", 
        photos: ["images/messengers1.jpg", "images/messengers2.jpg", "images/yw1.jpg", "images/yw2.jpg", "images/yw3.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 18, 
        stripePriceId: "price_1TwCXORo3U7iX6n7GNHmV0a3", 
        name: "Gatherers of Light", 
        price: 3.99, 
        isCustomizable: false, 
        category: "youth", 
        color: "colorful", 
        photos: ["images/gather1.jpg", "images/gather2.jpg", "images/gather3.jpg", "images/yw1.jpg", "images/yw2.jpg", "images/yw3.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 19, 
        stripePriceId: "price_1TwQkXRo3U7iX6n7lA5sUmXX", 
        name: "Future Missionary", 
        price: 3.99, 
        isCustomizable: false, 
        category: ["youth", "primary"],
        color: "black", 
        photos: ["images/futuremissionary1.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 20, 
        stripePriceId: "price_1TwQm8Ro3U7iX6n7eT5whY7M", 
        name: "Choose The Right", 
        price: 3.99, 
        isCustomizable: false, 
        category: "primary", 
        color: "green", 
        photos: ["images/ctr1.jpg", "images/ctr2.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
     { 
        id: 21, 
        stripePriceId: "price_1TwQxsRo3U7iX6n7p9hYd73F", 
        name: "NYC Subway Map", 
        price: 3.99, 
        isCustomizable: false, 
        category: "other", 
        color: "yellow", 
        photos: ["images/nycmap1.jpg", "images/nycmap2.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 22, 
        stripePriceId: "price_1TwR02Ro3U7iX6n78e9g7DSc", 
        name: "Not Forgotten, Found", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "blue", 
        photos: ["images/notforgotten1.jpg", "images/notforgotten2.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 23, 
        stripePriceId: "price_1TwR5iRo3U7iX6n7GBpupsF7", 
        name: "Glory to God", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "yellow", 
        photos: ["images/glory1.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    { 
        id: 24, 
        stripePriceId: "price_1TwR4PRo3U7iX6n7H7kwsOrb", 
        name: "Faith Is Like A Seed", 
        price: 3.99, 
        isCustomizable: false, 
        category: "religious", 
        color: "green", 
        photos: ["images/seed1.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    },
    // --- EXCLUSIVE CART-ONLY MYSTERY STICKER ---
    {
        id: 999,
        stripePriceId: "price_1Tw7lTRo3U7iX6n7SJbdu1wp", 
        name: "Mystery Sticker",
        price: 1.99,
        isCustomizable: false,
        isExclusive: true, 
        category: "other",
        color: "other",
        photos: ["images/carthero.JPG"], 
        desc: "A surprise high-quality sticker selected randomly from our shop!",
        reviews: []
    }
];

function toggleMobileNavMenu(btn) {
    const drawer = document.getElementById('navbar-links-drawer');
    if (drawer) drawer.classList.toggle('mobile-open');
    if (btn) btn.classList.toggle('is-active');
}

// --- Tiered Pricing Matrix Calculator ---
function getTieredPricePerUnit(basePrice, quantity) {
    if (quantity >= 100) return basePrice * 0.50; 
    if (quantity >= 50)  return basePrice * 0.60; 
    if (quantity >= 24)  return basePrice * 0.70; 
    if (quantity >= 12)  return basePrice * 0.80; 
    if (quantity >= 6)   return basePrice * 0.90; 
    return basePrice;
}

// --- Lifecycle Initialization Engine ---
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    initScrollAnimations();

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Handle return success/cancel status
    if (urlParams.get('success') === 'true') {
        localStorage.removeItem('sticker_cart');
        alert("Thank you for your order! Your payment was processed successfully.");
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (document.getElementById('products-grid')) {
        if (productId) {
            renderProductDetails(parseInt(productId));
        } else {
            renderCatalog(STICKER_PRODUCTS);
        }
    }

    if (document.getElementById('cart-items-hook')) {
        renderCart();
    }
});

function initScrollAnimations() {
    // Select static containers and review cards
    const targets = document.querySelectorAll('.home-section, .container, .blog-summary-card, .checkout-box, .review-card, .about-text');
    targets.forEach(sec => sec.classList.add('scroll-reveal'));

    // Global observer function
    window.globalScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                window.globalScrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

    // Observe static elements
    targets.forEach(sec => window.globalScrollObserver.observe(sec));
}

// --- Cart Badge Management ---
function updateCartBadge() {
    const badge = document.getElementById('cart-count-badge') || document.querySelector('.cart-count-badge');
    if (!badge) return;

    const cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + (parseInt(item.chosenQty) || 1), 0);

    if (totalCount > 0) {
        badge.textContent = totalCount;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

// --- Filter Engine & Side Panel ---
function toggleFilterPanel(open) {
    const panel = document.getElementById('filter-panel');
    const backdrop = document.getElementById('filter-backdrop');

    if (panel) {
        if (open) {
            panel.classList.add('open');
            if (backdrop) backdrop.classList.add('open');
        } else {
            panel.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
        }
    }
}

function applyFilters() {
    // Collect all checked values into arrays
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedColors = Array.from(document.querySelectorAll('input[name="color-filter"]:checked')).map(cb => cb.value);

    // Filter out cart-exclusive products (like the Mystery Sticker) first
    let filtered = STICKER_PRODUCTS.filter(p => !p.isExclusive);

    // Filter by categories if any are checked (handles string or array category formats)
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => {
            if (Array.isArray(p.category)) {
                return p.category.some(cat => selectedCategories.includes(cat));
            }
            return selectedCategories.includes(p.category);
        });
    }

    // Filter by colors if any are checked
    if (selectedColors.length > 0) {
        filtered = filtered.filter(p => selectedColors.includes(p.color));
    }

    renderCatalog(filtered);
    renderActiveFilterBadges();
}

function renderActiveFilterBadges() {
    const badgesContainer = document.getElementById('active-filter-badges');
    if (!badgesContainer) return;

    badgesContainer.innerHTML = '';

    const selectedCategoryBoxes = document.querySelectorAll('input[name="category"]:checked');
    const selectedColorBoxes = document.querySelectorAll('input[name="color-filter"]:checked');

    // Create an individual removable badge for every checked category
    selectedCategoryBoxes.forEach(cb => {
        const labelText = cb.parentElement.textContent.trim();
        const badge = document.createElement('span');
        badge.className = 'filter-badge';
        badge.innerHTML = `${labelText} <button onclick="removeIndividualFilter('category', '${cb.value}')">&times;</button>`;
        badgesContainer.appendChild(badge);
    });

    // Create an individual removable badge for every checked color
    selectedColorBoxes.forEach(cb => {
        const labelText = cb.parentElement.textContent.trim();
        const badge = document.createElement('span');
        badge.className = 'filter-badge';
        badge.innerHTML = `${labelText} <button onclick="removeIndividualFilter('color-filter', '${cb.value}')">&times;</button>`;
        badgesContainer.appendChild(badge);
    });
}

function removeIndividualFilter(groupName, value) {
    const targetCheckbox = document.querySelector(`input[name="${groupName}"][value="${value}"]`);
    if (targetCheckbox) {
        targetCheckbox.checked = false;
        applyFilters();
    }
}

function renderCatalog(productsList) {
    const catalogGrid = document.getElementById('products-grid');
    const heroElement = document.getElementById('shop-hero-banner');
    
    if (heroElement) heroElement.style.display = 'block';
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    // Filter out exclusive/cart-only items so they never show in shop catalog
    const publicProducts = productsList.filter(p => !p.isExclusive);

    if (publicProducts.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px 0; font-weight: 600; color: #64748b;">No stickers match your active filters.</p>`;
        return;
    }

    publicProducts.forEach(product => {
        // Taped-On Bestseller Badge HTML
        const bestsellerBadge = product.isBestseller 
            ? `<div class="card-tape-badge">Bestseller</div>` 
            : '';

        // ADDED: scroll-reveal class added to card container
        const cardHtml = `
            <div class="product-card scroll-reveal ${product.isBestseller ? 'has-tape-badge' : ''}" onclick="location.href='products.html?id=${product.id}'">
                ${bestsellerBadge}
                <div class="product-img-wrapper">
                    <img src="${product.photos[0]}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title" style="margin:0;">${product.name}</h3>
                    <p class="product-price" style="margin:0; font-weight:700;">$${product.price.toFixed(2)}</p>
                    <button class="quick-add-btn" onclick="event.stopPropagation(); quickAddCatalogItem(${product.id}, this);" aria-label="Quick Add to Cart">+ Add to Cart</button>
                </div>
            </div>
        `;
        catalogGrid.insertAdjacentHTML('beforeend', cardHtml);
    });

    // Observe newly rendered product cards for scroll-up effect
    if (window.globalScrollObserver) {
        const dynamicCards = catalogGrid.querySelectorAll('.product-card.scroll-reveal');
        dynamicCards.forEach(card => window.globalScrollObserver.observe(card));
    }
}

function triggerButtonCheckmark(btnElement, originalText) {
    if (!btnElement) return;
    const oldBg = btnElement.style.backgroundColor;
    const oldColor = btnElement.style.color;

    btnElement.innerText = "✓ Added!";
    btnElement.style.backgroundColor = "#2e7d32";
    btnElement.style.color = "#ffffff";

    setTimeout(() => {
        btnElement.innerText = originalText;
        btnElement.style.backgroundColor = oldBg;
        btnElement.style.color = oldColor;
    }, 1500);
}

function quickAddCatalogItem(productId, btnElement) {
    const product = STICKER_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    if (product.isCustomizable) {
        window.location.href = `products.html?id=${product.id}`;
        return;
    }

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    let existingIndex = cart.findIndex(item => item.id === productId && !item.customText);

    if (existingIndex > -1) {
        cart[existingIndex].chosenQty += 1;
        const unitCost = getTieredPricePerUnit(product.price, cart[existingIndex].chosenQty);
        cart[existingIndex].totalLineCost = unitCost * cart[existingIndex].chosenQty;
    } else {
        cart.push({
            id: product.id,
            stripePriceId: product.stripePriceId,
            name: product.name,
            photo: product.photos[0],
            chosenQty: 1,
            customText: "",
            totalLineCost: product.price
        });
    }

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    triggerButtonCheckmark(btnElement, "+ Add to Cart");
}

function renderProductDetails(id) {
    const product = STICKER_PRODUCTS.find(p => p.id === id);
    if (!product || product.isExclusive) return; // Block details rendering for cart-only exclusives

    const catalogElement = document.getElementById('catalog-view');
    const detailElement = document.getElementById('detail-view');
    const heroElement = document.getElementById('shop-hero-banner');
    const mainTitleElement = document.getElementById('page-main-title');

    if (catalogElement) catalogElement.style.display = 'none';
    if (detailElement) detailElement.style.display = 'block';
    if (heroElement) heroElement.style.display = 'none';
    if (mainTitleElement) mainTitleElement.innerText = product.name;

    const detailHook = document.getElementById('dynamic-product-content');
    if (!detailHook) return;
    
    let thumbsHtml = product.photos.map((photo, i) => `
        <img src="${photo}" class="thumb-item ${i === 0 ? 'active' : ''}" onclick="switchDetailPhoto(this, '${photo}')" alt="Product view ${i+1}">
     `).join('');

    let reviewsHtml = product.reviews.map(r => `
        <div class="review-item">
            <div class="review-stars">★★★★★</div>
            <p style="font-weight: 500; font-size:0.95rem;">"${r}"</p>
        </div>
     `).join('');

    let personalizationBoxHtml = '';
    if (product.isCustomizable) {
        personalizationBoxHtml = `
            <div class="form-group" style="margin: 20px 0;">
                <label style="font-size:0.85rem; font-weight:700; color:var(--brand-navy);">Custom Tag Text Wording (e.g. ELDER SMITH / SISTER JONES)</label>
                <input type="text" id="sticker-custom-text" maxlength="40" placeholder="Type name precisely here..." style="margin-top:5px;">
            </div>
        `;
    }

    detailHook.innerHTML = `
        <div class="product-media-column">
            <div class="main-display-frame">
                <img id="main-gallery-target" src="${product.photos[0]}" alt="${product.name}">
            </div>
            <div class="thumbnail-carousel-strip">${thumbsHtml}</div>
        </div>
        
        <div class="product-info-column">
            <h2>${product.name}</h2>
            <div class="detail-price" id="live-price-target">$${product.price.toFixed(2)}</div>
            <p class="detail-desc">${product.desc}</p>
            
            ${personalizationBoxHtml}

            <div class="form-group" style="margin-bottom:25px;">
                <label style="font-size:0.85rem; font-weight:700;">Select Pack Quantity</label>
                <select id="sticker-quantity-dropdown" onchange="updateLiveDetailsPrice(${product.price})" style="width:100%; padding:12px; border:1px solid var(--border-subtle); border-radius:6px; margin-top:5px; font-weight:700;">
                    <option value="1" selected>1 Sticker</option>
                    <option value="2">2 Stickers</option>
                    <option value="3">3 Stickers</option>
                    <option value="6">6 Stickers (10% wholesale discount)</option>
                    <option value="12">12 Stickers (20% wholesale discount)</option>
                    <option value="18">18 Stickers (20% wholesale discount)</option>
                    <option value="24">24 Stickers (30% wholesale discount)</option>
                    <option value="30">30 Stickers (30% wholesale discount)</option>
                    <option value="50">50 Stickers (40% wholesale rate)</option>
                    <option value="75">75 Stickers (40% wholesale rate)</option>
                    <option value="100">100 Stickers (50% wholesale bulk rate)</option>
                </select>
            </div>

            <button class="btn-cute" onclick="processAddToBag(${product.id}, this)" style="width:100%;">Add To Cart</button>

            <div class="reviews-section">
                <h3>Verified Product Feedback</h3>
                <div style="margin-top:15px;">${reviewsHtml}</div>
            </div>
        </div>
    `;
}

function switchDetailPhoto(element, targetUrl) {
    document.getElementById('main-gallery-target').src = targetUrl;
    document.querySelectorAll('.thumb-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function updateLiveDetailsPrice(basePrice) {
    const qty = parseInt(document.getElementById('sticker-quantity-dropdown').value);
    const costPerUnit = getTieredPricePerUnit(basePrice, qty);
    const totalCost = costPerUnit * qty;
    document.getElementById('live-price-target').innerText = `$${totalCost.toFixed(2)} (Subtotal)`;
}

function processAddToBag(id, btnElement) {
    const product = STICKER_PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const chosenQty = parseInt(document.getElementById('sticker-quantity-dropdown').value);
    const customText = product.isCustomizable ? document.getElementById('sticker-custom-text').value.trim() : "";

    if (product.isCustomizable && customText === "") {
        alert("Please specify custom name tag details before placing items into the cart!");
        return;
    }

    const unitCost = getTieredPricePerUnit(product.price, chosenQty);
    const totalLineCost = unitCost * chosenQty;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    
    cart.push({
        id: product.id,
        stripePriceId: product.stripePriceId,
        name: product.name,
        photo: product.photos[0],
        chosenQty: chosenQty,
        customText: customText,
        totalLineCost: totalLineCost
    });

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    triggerButtonCheckmark(btnElement, "Add To Cart");

    if (document.getElementById('cart-items-hook')) {
        renderCart();
    }
}

function renderCart() {
    const cartHook = document.getElementById('cart-items-hook');
    const totalHook = document.getElementById('cart-total-price');
    if (!cartHook) return;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];

    if (cart.length === 0) {
        cartHook.innerHTML = `<p style="text-align:center; padding: 40px 0; font-weight: 500;">Your cart is currently empty.</p>`;
        if (totalHook) totalHook.innerText = "$0.00";
        return;
    }

    cartHook.innerHTML = '';
    let totalCartDue = 0;

    cart.forEach((item, index) => {
        const currentLineCost = parseFloat(item.totalLineCost) || 0;
        totalCartDue += currentLineCost;
        
        let customLabel = item.customText ? `<p style="font-size:0.85rem; color:var(--brand-purple); margin:4px 0 0 0;">Customization: <strong>${item.customText}</strong></p>` : '';
        
        let qtyOptions = '';
        for (let qty = 1; qty <= 20; qty++) {
            const isSelected = (parseInt(item.chosenQty) === qty) ? 'selected' : '';
            qtyOptions += `<option value="${qty}" ${isSelected}>${qty}</option>`;
        }

        const itemHtml = `
            <div class="cart-item">
                <div style="display:flex; align-items:center; gap: 20px;">
                    <img src="${item.photo}" style="width:65px; height:65px; object-fit:cover; border-radius:6px; border: 1px solid var(--border-subtle);">
                    <div>
                        <h4 style="margin:0; font-family:var(--font-heading); text-transform:uppercase; font-size:0.95rem;">${item.name}</h4>
                        
                        <div style="margin-top: 6px; display: flex; align-items: center; gap: 8px;">
                            <label for="qty-select-${index}" style="font-size:0.85rem; color:#666;">Qty:</label>
                            <select id="qty-select-${index}" onchange="updateCartItemQuantity(${index}, this.value)" style="padding: 4px 8px; border: 1px solid var(--border-subtle); border-radius: 4px; font-weight: 600; cursor: pointer;">
                                ${qtyOptions}
                            </select>
                        </div>

                        ${customLabel}
                        <div style="color:var(--brand-purple); font-weight:700; margin-top:4px;">$${currentLineCost.toFixed(2)}</div>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#c46262; cursor:pointer; font-weight:700; font-size:0.85rem; text-transform:uppercase;">Remove</button>
            </div>
        `;
        cartHook.insertAdjacentHTML('beforeend', itemHtml);
    });

    // --- Balanced & Clean Mystery Sticker Upsell ---
    const mysteryHtml = `
        <div style="margin-top: 24px; padding: 14px 18px; border: 1px solid var(--border-subtle); border-radius: 8px; background-color: var(--bg-soft, #fcfcfc); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
            <div>
                <h4 style="margin: 0; font-family: var(--font-heading); text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.5px; color: var(--brand-navy);">Add a Mystery Sticker</h4>
                <p style="margin: 2px 0 0 0; font-size: 0.82rem; color: #64748b;">A surprise sticker from our shop added to your cart for <strong style="color: var(--brand-purple);">$1.99</strong></p>
            </div>
            <button onclick="addMysteryStickerToCart(this)" class="btn-cute" style="font-size: 0.8rem; padding: 8px 14px; width: auto; margin: 0;">
                + Add to Order
            </button>
        </div>
    `;
    cartHook.insertAdjacentHTML('beforeend', mysteryHtml);

    if (totalHook) totalHook.innerText = `$${totalCartDue.toFixed(2)}`;
}

function addMysteryStickerToCart(btnElement) {
    const mysteryProduct = STICKER_PRODUCTS.find(p => p.id === 999);
    if (!mysteryProduct) return;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    let existingIndex = cart.findIndex(item => item.id === 999);

    if (existingIndex > -1) {
        cart[existingIndex].chosenQty += 1;
        cart[existingIndex].totalLineCost = mysteryProduct.price * cart[existingIndex].chosenQty;
    } else {
        cart.push({
            id: mysteryProduct.id,
            stripePriceId: mysteryProduct.stripePriceId,
            name: mysteryProduct.name,
            photo: mysteryProduct.photos[0],
            chosenQty: 1,
            customText: "",
            totalLineCost: mysteryProduct.price
        });
    }

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    triggerButtonCheckmark(btnElement, "+ Add to Order");
    renderCart();
}

function updateCartItemQuantity(index, newQty) {
    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    if (!cart[index]) return;

    const qty = parseInt(newQty) || 1;
    const product = STICKER_PRODUCTS.find(p => p.id === cart[index].id);
    const basePrice = product ? product.price : (cart[index].totalLineCost / (cart[index].chosenQty || 1));

    const unitCost = cart[index].id === 999 ? basePrice : getTieredPricePerUnit(basePrice, qty);
    
    cart[index].chosenQty = qty;
    cart[index].totalLineCost = unitCost * qty;

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    renderCart();
    updateCartBadge();
}

// --- Dynamic Form Integration Handler (Stripe Checkout) ---
async function handleCheckout(event) {
    event.preventDefault();

    const submitBtn = event.target.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Processing...";
    }

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is currently empty.");
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Proceed to Secure Payment";
        }
        return;
    }

    const clientEmail = document.getElementById('cust-email')?.value || '';

    try {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cart: cart,
                customerEmail: clientEmail,
            }),
        });

        const data = await response.json();

        if (response.ok && data.url) {
            window.location.href = data.url;
        } else {
            alert("Error creating checkout session: " + (data.error || "Unknown error"));
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = "Proceed to Secure Payment";
            }
        }
    } catch (err) {
        console.error("Checkout Request Error:", err);
        alert("Failed to connect to checkout service. Please ensure serverless functions are deployed.");
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Proceed to Secure Payment";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('reviews-strip-track');
    const btnLeft = document.getElementById('reviews-scroll-left');
    const btnRight = document.getElementById('reviews-scroll-right');

    if (!track) return;

    // 1. Clone cards for infinite seamless scrolling
    const originalCards = Array.from(track.children);
    
    // Append clones to the end
    originalCards.forEach(card => {
        const cloneAfter = card.cloneNode(true);
        track.appendChild(cloneAfter);
    });

    // Prepend clones to the beginning
    originalCards.slice().reverse().forEach(card => {
        const cloneBefore = card.cloneNode(true);
        track.insertBefore(cloneBefore, track.firstChild);
    });

    // Calculate card offset + gap
    const getCardOffset = () => {
        const firstCard = track.querySelector('.review-card');
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 16;
        return firstCard.offsetWidth + gap;
    };

    // Center the active card in view on load so BOTH sides bleed in immediately
    const centerInitialCard = () => {
        const cardWidth = getCardOffset();
        const setWidth = originalCards.length * cardWidth;
        
        // Calculate offset to place the card exactly in the center of the viewport
        const trackWidth = track.clientWidth;
        const singleCardWidth = track.querySelector('.review-card').offsetWidth;
        const centerPadding = (trackWidth - singleCardWidth) / 2;

        track.style.scrollBehavior = 'auto'; // Disable smooth scroll for instant placement
        track.scrollLeft = setWidth - centerPadding;
        track.style.scrollBehavior = 'smooth';
    };

    // Run centering immediately
    centerInitialCard();

    // Re-center on window resize to preserve the exact center peek ratio
    window.addEventListener('resize', centerInitialCard);

    // Helper function to animate scroll with custom speed/duration
    function slowScrollTrack(container, distance, duration) {
        const startPos = container.scrollLeft;
        const startTime = performance.now();

        // Ease-in-out quadratic curve for a natural, buttery-smooth feel
        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const ease = easeInOutQuad(progress);

            container.scrollLeft = startPos + distance * ease;

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    // 2. Arrow Controls with Custom Speed
    if (btnLeft && btnRight) {
        // Change this value to adjust speed (e.g., 800ms = 0.8s, 1200ms = 1.2s)
        const SCROLL_DURATION = 500; // Slower, elegant scroll duration

        btnLeft.addEventListener('click', () => {
            slowScrollTrack(track, -getCardOffset(), SCROLL_DURATION);
        });

        btnRight.addEventListener('click', () => {
            slowScrollTrack(track, getCardOffset(), SCROLL_DURATION);
        });
    }

    // 3. Infinite Seamless Reset Loop
    let isResetting = false;

    track.addEventListener('scroll', () => {
        if (isResetting) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        const currentScroll = track.scrollLeft;
        const setWidth = originalCards.length * getCardOffset();

        // Far right reset
        if (currentScroll >= maxScroll - 50) {
            isResetting = true;
            track.style.scrollBehavior = 'auto';
            track.scrollLeft = currentScroll - setWidth;
            track.style.scrollBehavior = 'smooth';
            isResetting = false;
        }

        // Far left reset
        if (currentScroll <= 50) {
            isResetting = true;
            track.style.scrollBehavior = 'auto';
            track.scrollLeft = currentScroll + setWidth;
            track.style.scrollBehavior = 'smooth';
            isResetting = false;
        }
    });
});