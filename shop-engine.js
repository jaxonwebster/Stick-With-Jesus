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
        category: "minimal", 
        color: "dark", 
        photos: ["images/nametag1.jpg", "images/nametag2.jpg", "images/nametag3.jpg", "images/nametag4.jpg", "images/namtag5.jpg"], 
        desc: "Our best-selling classic elder/sister replica tag. High-durability matte vinyl finish. Enter your custom name text line below before adding to basket.", 
        reviews: ["Looks exactly like the real thing! Perfect for my mission journal. - Sister Adams."] 
    },
    { 
        id: 2, 
        stripePriceId: "price_1TvPq4Ro3U7iX6n75Rj4QeFU", 
        name: "Lost Sheep Sticker", 
        price: 3.99, 
        isCustomizable: false, 
        category: "nature", 
        color: "pastel", 
        photos: ["images/lostsheep1.jpg", "images/lostsheep2.jpg", "images/lostsheep3.jpg", "images/lostsheep4.jpg"], 
        desc: "Premium thick die-cut outdoor weather-proof vinyl statement piece.", 
        reviews: ["Stunning colors. Looks fantastic on water bottles. - Sarah M."] 
    },
    { 
        id: 3, 
        stripePriceId: "price_REPLACE_3", 
        name: "Be Still & Know", 
        price: 4.50, 
        isCustomizable: false, 
        category: "minimal", 
        color: "dark", 
        photos: ["images/bestill.jpg"], 
        desc: "Clean typography sticker designed to remind you of His constant protective cover.", 
        reviews: ["Beautiful text clarity. - Grace L."] 
    },
    { 
        id: 4, 
        stripePriceId: "price_REPLACE_4", 
        name: "Grace Upon Grace", 
        price: 4.50, 
        isCustomizable: false, 
        category: "floral", 
        color: "lavender", 
        photos: ["images/graceupon grace.jpg"], 
        desc: "Delicate lavender-toned script wrapped with pristine wildflower outlines.", 
        reviews: ["Perfect addition to my scripture journal. - Hannah P."] 
    },
    { 
        id: 5, 
        stripePriceId: "price_REPLACE_5", 
        name: "Walk By Faith", 
        price: 3.95, 
        isCustomizable: false, 
        category: "minimal", 
        color: "pastel", 
        photos: ["images/walkbyfaith.jpg"], 
        desc: "Understated minimalist styling detailing 2 Corinthians 5:7.", 
        reviews: ["Subtle, clean, elegant layout. - Mark T."] 
    },
    { 
        id: 6, 
        stripePriceId: "price_REPLACE_6", 
        name: "Light of the World", 
        price: 4.95, 
        isCustomizable: false, 
        category: "nature", 
        color: "dark", 
        photos: ["images/lightoftheworld.jpg"], 
        desc: "Bold astronomical sunrise landscape highlighting shared global purpose.", 
        reviews: ["Striking background art depth. - Anna V."] 
    },
    { 
        id: 7, 
        stripePriceId: "price_REPLACE_7", 
        name: "Rooted in Love", 
        price: 4.25, 
        isCustomizable: false, 
        category: "floral", 
        color: "lavender", 
        photos: ["images/rootedinlove.jpg"], 
        desc: "Organic, earthy floral layout defining Ephesians structural context.", 
        reviews: ["High-grade adhesion, colors don't sun-fade. - Lucas R."] 
    },
    { 
        id: 8, 
        stripePriceId: "price_1Tw1OzRo3U7iX6n7u9JMMeyO", 
        name: "Jesus Loves Me", 
        price: 4.50, 
        isCustomizable: false, 
        category: "floral", 
        color: "pastel", 
        photos: ["images/jesuslovesme.jpg"], 
        desc: "Delicate composition summarizing beautiful structural design statements.", 
        reviews: ["Sweet gift layout for daughters! - Kelly O."] 
    },
    { 
        id: 9, 
        stripePriceId: "price_REPLACE_9", 
        name: "It Is Well", 
        price: 3.75, 
        isCustomizable: false, 
        category: "minimal", 
        color: "dark", 
        photos: ["images/itiswell.jpg"], 
        desc: "Classic traditional foundational hymn quote formatted cleanly.", 
        reviews: ["Calming and elegant text layout. - James P."] 
    },
    { 
        id: 10, 
        stripePriceId: "price_REPLACE_10", 
        name: "Abide In Me", 
        price: 4.50, 
        isCustomizable: false, 
        category: "nature", 
        color: "lavender", 
        photos: ["images/abideinme.jpg"], 
        desc: "Forest woodland layout profile mirroring peaceful vine branches.", 
        reviews: ["Deep artistic detailing. - Chloe B."] 
    },
    { 
        id: 11, 
        stripePriceId: "price_1Tw1QYRo3U7iX6n7cgnhNhYL", 
        name: "I Can Do Hard Things", 
        price: 3.99, 
        isCustomizable: false, 
        category: "minimal", 
        color: "dark", 
        photos: ["images/hardthings1.jpg"], 
        desc: "Bold ocean wave graphic displaying empowering verse definitions.", 
        reviews: ["Powerful reminder for daily workspace views. - Eric W."] 
    },
    { 
        id: 12, 
        stripePriceId: "price_REPLACE_12", 
        name: "Blessed Assurance", 
        price: 4.50, 
        isCustomizable: false, 
        category: "floral", 
        color: "lavender", 
        photos: ["images/blessedassurance.jpg"], 
        desc: "Elegant floral garland framing historic trust statements perfectly.", 
        reviews: ["The matte texture feels premium. - Megan H."] 
    },
    { 
        id: 13, 
        stripePriceId: "price_1Tw1PqRo3U7iX6n7aMy4MZNW", 
        name: "NYC Rat Sticker", 
        price: 3.99, 
        isCustomizable: false, 
        category: "minimal", 
        color: "dark", 
        photos: ["images/rat1.jpg", "images/rat2.jpg"], 
        desc: "Fun and durable high-grade outdoor vinyl sticker.", 
        reviews: ["Super fun sticker design! - Alex P."] 
    }
];

// --- Mobile Navigation Bar Drawer Open Toggler ---
function toggleMobileNavMenu() {
    const linksDrawer = document.getElementById('navbar-links-drawer');
    if (linksDrawer) {
        linksDrawer.classList.toggle('mobile-open');
    }
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
    const targets = document.querySelectorAll('.home-section, .container, .blog-summary-card, .checkout-box, .product-card, .review-card, .about-text');
    targets.forEach(sec => sec.classList.add('scroll-reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.02, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(sec => revealObserver.observe(sec));
}

// --- Cart Badge Management (Badge Removed) ---
function updateCartBadge() {
    const badge = document.getElementById('cart-count-badge');
    if (badge) {
        badge.style.display = 'none'; // Badge hidden completely
    }
}

function toggleFilterPanel(open) {
    const panel = document.getElementById('filter-panel');
    if(panel) {
        if (open) panel.classList.add('open');
        else panel.classList.remove('open');
    }
}

function applyFilters() {
    const categoryValue = document.querySelector('input[name="category"]:checked')?.value || 'all';
    const colorValue = document.querySelector('input[name="color-filter"]:checked')?.value || 'all';
    const priceLimit = document.querySelector('input[name="price-filter"]:checked')?.value || 'all';

    let filtered = STICKER_PRODUCTS;

    if (categoryValue !== 'all') filtered = filtered.filter(p => p.category === categoryValue);
    if (colorValue !== 'all') filtered = filtered.filter(p => p.color === colorValue);
    if (priceLimit !== 'all') {
        const max = parseFloat(priceLimit);
        filtered = filtered.filter(p => p.price <= max);
    }

    toggleFilterPanel(false);
    renderCatalog(filtered);
}

function renderCatalog(productsList) {
    const catalogGrid = document.getElementById('products-grid');
    if(!catalogGrid) return;
    catalogGrid.innerHTML = '';

    productsList.forEach(product => {
        const cardHtml = `
            <div class="product-card" onclick="location.href='products.html?id=${product.id}'">
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
}

// Helper to animate button checkmark state
function triggerButtonCheckmark(btnElement, originalText) {
    if (!btnElement) return;
    const oldBg = btnElement.style.backgroundColor;
    const oldColor = btnElement.style.color;

    btnElement.innerText = "✓ Added!";
    btnElement.style.backgroundColor = "#2e7d32"; // Green success state
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
    if(!product) return;

    const catalogElement = document.getElementById('catalog-view');
    const detailElement = document.getElementById('detail-view');
    const mainTitleElement = document.getElementById('page-main-title');

    if (catalogElement) catalogElement.style.display = 'none';
    if (detailElement) detailElement.style.display = 'block';
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
        <div class="gallery-showcase">
            <div class="main-display-frame">
                <img id="main-gallery-target" src="${product.photos[0]}" alt="${product.name}">
            </div>
            <div class="thumbnail-carousel-strip">${thumbsHtml}</div>
        </div>
        <div class="detail-meta">
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
    if(!cartHook) return;

    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];

    if(cart.length === 0) {
        cartHook.innerHTML = `<p style="text-align:center; padding: 40px 0; font-weight: 500;">Your selection basket is empty.</p>`;
        totalHook.innerText = "$0.00";
        return;
    }

    cartHook.innerHTML = '';
    let totalCartDue = 0;

    cart.forEach((item, index) => {
        const currentLineCost = parseFloat(item.totalLineCost) || 0;
        totalCartDue += currentLineCost;
        
        let customLabel = item.customText ? `<p style="font-size:0.85rem; color:var(--brand-purple); margin:4px 0 0 0;">Customization: <strong>${item.customText}</strong></p>` : '';
        
        const itemHtml = `
            <div class="cart-item">
                <div style="display:flex; align-items:center; gap: 20px;">
                    <img src="${item.photo}" style="width:65px; height:65px; object-fit:cover; border-radius:6px; border: 1px solid var(--border-subtle);">
                    <div>
                        <h4 style="margin:0; font-family:var(--font-heading); text-transform:uppercase; font-size:0.95rem;">${item.name}</h4>
                        <span style="font-size:0.85rem; color:#666;">Quantity Package Size: ${item.chosenQty}</span>
                        ${customLabel}
                        <div style="color:var(--brand-purple); font-weight:700; margin-top:2px;">$${currentLineCost.toFixed(2)}</div>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#c46262; cursor:pointer; font-weight:700; font-size:0.85rem; text-transform:uppercase;">Remove</button>
            </div>
        `;
        cartHook.insertAdjacentHTML('beforeend', itemHtml);
    });

    totalHook.innerText = `$${totalCartDue.toFixed(2)}`;
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