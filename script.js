// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

// Mobile Menu Logic
function initMobileMenu() {
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');

    if (menuOpen && drawer && overlay) {
        const toggleMenu = (open) => {
            drawer.classList.toggle('active', open);
            overlay.classList.toggle('active', open);
        };

        menuOpen.addEventListener('click', () => toggleMenu(true));
        if (menuClose) menuClose.addEventListener('click', () => toggleMenu(false));
        overlay.addEventListener('click', () => toggleMenu(false));

        drawer.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
        });
    }
}

// Dynamic Product Rendering
function renderProducts(containerId, filter = 'all', onlyFeatured = false) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    grid.innerHTML = '';
    const items = window.asiliProducts;

    Object.keys(items).forEach(id => {
        const p = items[id];

        // Apply filters
        if (onlyFeatured && !p.featured) return;
        if (filter !== 'all' && p.category !== filter) return;

        const card = document.createElement('div');
        card.className = 'etsy-card';
        card.innerHTML = `
            <a href="product.html?id=${id}" style="text-decoration: none; color: inherit;">
                ${p.badge ? `<div class="whatsapp-badge">${p.badge}</div>` : ''}
                <div class="card-img-wrapper">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3>${p.title}</h3>
                    <p class="card-price">${p.price}</p>
                    <span class="card-btn">View Details</span>
                </div>
            </a>
        `;
        grid.appendChild(card);
    });
}

// Product Detail Page Population
function initProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const products = window.asiliProducts;

    if (productId && products[productId]) {
        const p = products[productId];

        const elements = {
            'p-title': p.title,
            'p-price': p.price,
            'p-desc': p.description,
            'p-materials': p.materials,
            'p-dimensions': p.dimensions
        };

        Object.keys(elements).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerText = elements[id];
        });

        const imgEl = document.getElementById('main-img');
        if (imgEl) imgEl.src = p.image;

        const waBtn = document.getElementById('whatsapp-btn');
        if (waBtn) {
            const phone = "254707546201";
            const message = `Hello, I am interested in ordering the ${p.title} (${p.price}) from Asili Creations.`;
            waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        }

        document.title = `${p.title} | Asili Creations`;
    }
}

// Back to Top Logic
function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initBackToTop();
    initProductDetail();

    // Render Grids only if they exist on the current page
    if (document.getElementById('featured-grid')) {
        renderProducts('featured-grid', 'all', true); // Featured only
    }
    if (document.getElementById('product-grid')) {
        renderProducts('product-grid', 'all', false); // Shop all
    }

    // Initial observer call for static sections
    document.querySelectorAll('section, .hero-content').forEach(el => {
        el.classList.add('fade-in-target');
        observer.observe(el);
    });
});
