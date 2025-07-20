// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const offset = 50;

    if (window.scrollY > offset) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
});

// Enhanced smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
            
            // Enhanced smooth scroll with easing
            const startPosition = window.pageYOffset;
            const distance = offsetTop - startPosition;
            const duration = 1000; // 1 second
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            
            // Easing function for smooth animation
            function easeInOutQuad(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }
            
            requestAnimationFrame(animation);
        }
    });
});

// Removed duplicate scroll handlers - now using optimized versions below

// Parallax effect for hero section - disabled for better performance
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroSection = document.querySelector('#inicio');
//     if (heroSection) {
//         heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
}, observerOptions);

// Observe all elements that need animation
const animatedElements = document.querySelectorAll('.service-card, .contact-button');
animatedElements.forEach(el => {
    el.classList.add('loading');
    observer.observe(el);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Counter animation
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentValue = Math.floor(start + (end - start) * progress);
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Lazy loading for images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Form validation (if needed in the future)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-40 opacity-0 pointer-events-none';
scrollToTopBtn.id = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Performance optimization: Throttled scroll handler for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Force navbar to stay fixed - AGGRESSIVE APPROACH
const forceNavbarFixed = () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        // FORCE fixed position every frame
        navbar.style.setProperty('position', 'fixed', 'important');
        navbar.style.setProperty('top', '0', 'important');
        navbar.style.setProperty('left', '0', 'important');
        navbar.style.setProperty('right', '0', 'important');
        navbar.style.setProperty('width', '100%', 'important');
        navbar.style.setProperty('z-index', '999999', 'important');
        navbar.style.setProperty('display', 'block', 'important');
        navbar.style.setProperty('visibility', 'visible', 'important');
        navbar.style.setProperty('opacity', '1', 'important');
        navbar.style.setProperty('transform', 'translateY(0) translateZ(0)', 'important');
        
        // Visual effects based on scroll
        if (window.scrollY > 50) {
            navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.98)', 'important');
            navbar.style.setProperty('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.15)', 'important');
        } else {
            navbar.style.setProperty('background', 'rgba(255, 255, 255, 0.95)', 'important');
            navbar.style.setProperty('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)', 'important');
        }
    }
};

// Run every animation frame to ensure navbar stays fixed
const runForceNavbar = () => {
    forceNavbarFixed();
    requestAnimationFrame(runForceNavbar);
};

// Start forcing navbar position
runForceNavbar();

const optimizedActiveNavHandler = throttle(() => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('text-primary');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-primary');
            link.classList.remove('text-gray-700');
        }
    });
}, 100);

// Apply optimized handlers - only for active nav highlighting
window.addEventListener('scroll', optimizedActiveNavHandler, { passive: true });

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        // Add any critical images here
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadCriticalResources();
    initializeLanguage();
    
    // Add any additional initialization here
    console.log('Kenzie Clinic website loaded successfully!');
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}