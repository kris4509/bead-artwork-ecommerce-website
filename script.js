// Scroll Animations using Intersection Observer
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile Menu Toggle
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

if (menuOpen && menuClose && drawer && overlay) {
    menuOpen.addEventListener('click', () => {
        drawer.classList.add('active');
        overlay.classList.add('active');
    });

    const closeMenu = () => {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    };

    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close on link click
    drawer.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// Back to Top Button visibility & Click
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Pre-fill WhatsApp link helper
function updateWhatsAppLink(productName) {
    const phone = "254707546201";
    const message = `Hello, I am interested in the ${productName} table mat from Asili Creations.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
