
// Initialize Lucide icons
lucide.createIcons();

// Sticky Header
const header = document.getElementById('main-header');
const logoText = document.getElementById('logo-text');
const headerCta = document.getElementById('header-cta');
const menuIconBtn = document.getElementById('mobile-menu-toggle');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-3');
        header.classList.remove('bg-transparent', 'py-5');
        logoText.classList.add('text-gray-900');
        logoText.classList.remove('text-white');
        menuIconBtn.classList.add('text-gray-900');
        menuIconBtn.classList.remove('text-white');
        headerCta.classList.add('border-blue-600', 'text-blue-600');
        headerCta.classList.remove('border-white', 'text-white');
        navLinks.forEach(link => {
            link.classList.add('text-gray-600');
            link.classList.remove('text-white/90');
        });
    } else {
        header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-3');
        header.classList.add('bg-transparent', 'py-5');
        logoText.classList.remove('text-gray-900');
        logoText.classList.add('text-white');
        menuIconBtn.classList.remove('text-gray-900');
        menuIconBtn.classList.add('text-white');
        headerCta.classList.remove('border-blue-600', 'text-blue-600');
        headerCta.classList.add('border-white', 'text-white');
        navLinks.forEach(link => {
            link.classList.remove('text-gray-600');
            link.classList.add('text-white/90');
        });
    }
});

// Mobile Menu
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Portfolio Lightbox
const portfolioItems = document.querySelectorAll('.portfolio-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.classList.add('modal-open');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.classList.remove('modal-open');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.classList.remove('modal-open');
    }
});

// Form Submission
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = '<div class="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>';
    
    // Simulate API call
    setTimeout(() => {
        contactForm.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
});

window.resetForm = () => {
    contactForm.reset();
    contactForm.classList.remove('hidden');
    formSuccess.classList.add('hidden');
};
