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

// Mobile Menu Toggle (To be implemented when adding burger menu)

// Back to Top Button visibility
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Pre-fill WhatsApp link helper (if needed for dynamic buttons)
function updateWhatsAppLink(productName) {
    const phone = "254707546201";
    const message = `Hello, I am interested in the ${productName} from Asili Creations.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
