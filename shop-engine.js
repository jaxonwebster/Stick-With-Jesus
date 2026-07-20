// --- Product Database (12 Items with Tiered Pricing & Customization) ---
const STICKER_PRODUCTS = [
    { 
        id: 1, 
        name: "Customizable Missionary Name Tag Sticker", 
        price: 5.00, 
        isCustomizable: true,
        category: "minimal", 
        color: "dark", 
        photos: ["https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?q=80&w=600"], 
        desc: "Our best-selling classic elder/sister replica tag. High-durability matte vinyl finish. Enter your custom name text line below before adding to basket.", 
        reviews: ["Looks exactly like the real thing! Perfect for my mission journal. - Sister Adams."] 
    },
    { id: 2, name: "Faith Moves Mountains", price: 4.50, isCustomizable: false, category: "nature", color: "pastel", photos: ["https://images.unsplash.com/photo-1572375995301-4516aa31b249?q=80&w=600", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600"], desc: "Premium thick die-cut outdoor weather-proof vinyl statement piece.", reviews: ["Stunning colors. Looks fantastic on water bottles. - Sarah M."] },
    { id: 3, name: "Be Still & Know", price: 4.50, isCustomizable: false, category: "minimal", color: "dark", photos: ["https://images.unsplash.com/photo-1589987607627-616cac5c2c5a?q=80&w=600"], desc: "Clean typography sticker designed to remind you of His constant protective cover.", reviews: ["Beautiful text clarity. - Grace L."] },
    { id: 4, name: "Grace Upon Grace", price: 4.50, isCustomizable: false, category: "floral", color: "lavender", photos: ["https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=600"], desc: "Delicate lavender-toned script wrapped with pristine wildflower outlines.", reviews: ["Perfect addition to my scripture journal. - Hannah P."] },
    { id: 5, name: "Walk By Faith", price: 3.95, isCustomizable: false, category: "minimal", color: "pastel", photos: ["https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600"], desc: "Understated minimalist styling detailing 2 Corinthians 5:7.", reviews: ["Subtle, clean, elegant layout. - Mark T."] },
    { id: 6, name: "Light of the World", price: 4.95, isCustomizable: false, category: "nature", color: "dark", photos: ["https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=600"], desc: "Bold astronomical sunrise landscape highlighting shared global purpose.", reviews: ["Striking background art depth. - Anna V."] },
    { id: 7, name: "Rooted in Love", price: 4.25, isCustomizable: false, category: "floral", color: "lavender", photos: ["https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600"], desc: "Organic, earthy floral layout defining Ephesians structural context.", reviews: ["High-grade adhesion, colors don't sun-fade. - Lucas R."] },
    { id: 8, name: "Fearfully Made", price: 4.50, isCustomizable: false, category: "floral", color: "pastel", photos: ["https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600"], desc: "Delicate composition summarizing beautiful structural design statements.", reviews: ["Sweet gift layout for daughters! - Kelly O."] },
    { id: 9, name: "It Is Well", price: 3.75, isCustomizable: false, category: "minimal", color: "dark", photos: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600"], desc: "Classic traditional foundational hymn quote formatted cleanly.", reviews: ["Calming and elegant text layout. - James P."] },
    { id: 10, name: "Abide In Me", price: 4.50, isCustomizable: false, category: "nature", color: "lavender", photos: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600"], desc: "Forest woodland layout profile mirroring peaceful vine branches.", reviews: ["Deep artistic detailing. - Chloe B."] },
    { id: 11, name: "Strong & Courageous", price: 4.95, isCustomizable: false, category: "minimal", color: "dark", photos: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600"], desc: "Bold ocean wave graphic displaying Joshua text definitions.", reviews: ["Powerful reminder for daily workspace views. - Eric W."] },
    { id: 12, name: "Blessed Assurance", price: 4.50, isCustomizable: false, category: "floral", color: "lavender", photos: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600"], desc: "Elegant floral garland framing historic trust statements perfectly.", reviews: ["The matte texture feels premium. - Megan H."] }
];

// --- Rich Blog Database Arrays ---
const BLOG_POSTS = [
    { id: 1, title: "Carrying Your Faith Daily", date: "July 20, 2026", readTime: "4 min read", snippet: "How modern objects act as daily reminders of peace in our busy routines.", body: "It's easy to focus on our spiritual walk during church on Sunday mornings, but what about the rest of the week? The moments when we're stuck in traffic or working at our desks? That's exactly why we started designing stickers. They aren't just cute illustrations; they are mini reminders of truth. When you look down at your water bottle, a simple verse can ground you back in His peace instantly." },
    { id: 2, title: "The Power of Visual Reminders", date: "June 14, 2026", readTime: "5 min read", snippet: "Exploring how environmental scriptures condition and focus psychological calm.", body: "Scripture urges us to write truths on the doorposts of our homes. In the modern workspace digital world, applying waterproof vinyl to the items we handle daily serves as that historical boundary marker. Countless customers tell us that glancing at a phrase like 'Be Still' instantly de-escalates stress during chaotic work shifts." },
    { id: 3, title: "Designing With Scriptural Intent", date: "May 02, 2026", readTime: "7 min read", snippet: "A technical dive behind matching artwork profiles to historic verse metrics.", body: "When pairing floral or geometric art with historical text, tone matching is critical. A verse concerning courage demands bold navy borders, while texts regarding deep grace match fluid pastel scripts. We dive deep into font structures and layout balance to ensure every piece commands respect while looking highly elegant." }
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

    if (document.getElementById('products-grid')) {
        if (productId) {
            renderProductDetails(parseInt(productId));
        } else {
            renderCatalog(STICKER_PRODUCTS);
        }
    }

    if (document.getElementById('blog-posts-container')) {
        renderBlogList();
    }

    if (document.getElementById('cart-items-hook')) {
        renderCart();
    }
});

// --- Scroll Reveal Animations Framework ---
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

    const statsSection = document.querySelector('.stats-banner');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runStatsCounter();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05 });
        statsObserver.observe(statsSection);
    }
}

function runStatsCounter() {
    const counters = document.querySelectorAll('.stat-counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 60; 

        const updateCount = () => {
            count += speed;
            if(count < target) {
                counter.innerText = Math.floor(count).toLocaleString() + "+";
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target.toLocaleString() + "+";
            }
        };
        updateCount();
    });
}

// --- Global Cart Icon Badge Management ---
function updateCartBadge() {
    const badge = document.getElementById('cart-count-badge');
    if (!badge) return;
    
    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + (parseInt(item.chosenQty) || 1), 0);
    
    if (totalItems > 0) {
        badge.innerText = totalItems;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// --- Filter Drawer Controls ---
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

// --- Catalog Grid Rendering ---
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
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
        catalogGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// --- Dynamic Product Detail View ---
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

            <button class="btn-cute" onclick="processAddToBag(${product.id})" style="width:100%;">Add To Cart Bag</button>

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

// --- Process Cart Submissions ---
function processAddToBag(id) {
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
        name: product.name,
        photo: product.photos[0],
        chosenQty: chosenQty,
        customText: customText,
        totalLineCost: totalLineCost
    });

    localStorage.setItem('sticker_cart', JSON.stringify(cart));
    updateCartBadge();
    alert(`Added ${chosenQty}x to your basket successfully!`);
    
    if (document.getElementById('cart-items-hook')) {
        renderCart();
    }
}

// --- Cart Calculations Layout ---
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
        // Bulletproof fix: handles older string objects gracefully by defaulting to 0 instead of crashing loops
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

// --- Blog Component Utilities ---
function renderBlogList() {
    const container = document.getElementById('blog-posts-container');
    if(!container) return;
    container.innerHTML = '';

    BLOG_POSTS.forEach(post => {
        const blogHtml = `
            <article class="blog-summary-card">
                <div class="blog-summary-info">
                    <h3>${post.title}</h3>
                    <div class="blog-meta">Published ${post.date} | ${post.readTime}</div>
                    <p style="color:#4f546d; margin-bottom:20px; font-size:1.05rem;">${post.snippet}</p>
                    <div class="blog-content-full" id="post-body-${post.id}" style="display:none; margin-top:20px; border-top:1px solid var(--border-subtle); padding-top:20px;">
                        <p>${post.body}</p>
                    </div>
                    <button class="btn-cute btn-secondary" id="btn-read-${post.id}" onclick="toggleBlogPost(${post.id})" style="padding: 8px 20px; font-size:0.85rem; transform:none;">Expand Article</button>
                </div>
            </article>
        `;
        container.insertAdjacentHTML('beforeend', blogHtml);
    });
}

function toggleBlogPost(id) {
    const target = document.getElementById(`post-body-${id}`);
    const button = document.getElementById(`btn-read-${id}`);
    if(target.style.display === "none") {
        target.style.display = "block";
        button.innerText = "Collapse Article";
    } else {
        target.style.display = "none";
        button.innerText = "Expand Article";
    }
}

function handleCheckout(event) {
    event.preventDefault();
    let cart = JSON.parse(localStorage.getItem('sticker_cart')) || [];
    if(cart.length === 0) return;

    const name = document.getElementById('cust-name').value;
    alert(`Thank you, ${name}.\nYour sticker order tracking data form has been recorded successfully!`);
    
    localStorage.removeItem('sticker_cart');
    window.location.href = 'index.html';
}