// Translation system for Kenzie Clinic
const translations = {
    es: {
        // Navigation
        nav: {
            home: "Inicio",
            services: "Servicios",
            about: "Nosotras",
            location: "Localización",
            contact: "Contacto"
        },
        
        // Hero Section
        hero: {
            title: "Belleza",
            titleHighlight: "Natural",
            subtitle: "Descubre tu mejor versión con nuestros tratamientos de medicina estética de última generación",
            cta1: "Conoce nuestros servicios",
            cta2: "Agenda tu cita"
        },
        
        // Services Section
        services: {
            title: "Nuestros Servicios",
            subtitle: "Ofrecemos una amplia gama de tratamientos estéticos personalizados para realzar tu belleza natural",
            service1: {
                title: "Tratamientos Faciales",
                description: "Rejuvenecimiento facial con tecnología avanzada y productos de alta calidad"
            },
            service2: {
                title: "Tratamientos Corporales",
                description: "Moldea tu figura con nuestros tratamientos corporales no invasivos"
            },
            service3: {
                title: "Medicina Estética",
                description: "Procedimientos seguros y efectivos realizados por profesionales certificados"
            }
        },
        
        // About Section
        about: {
            title: "Nosotras",
            paragraph1: "En Kenzie Clinic, somos un equipo de profesionales apasionadas por la medicina estética y el bienestar integral. Nuestro compromiso es brindarte la mejor atención personalizada.",
            paragraph2: "Con años de experiencia y formación continua, utilizamos las técnicas más avanzadas para ayudarte a sentirte segura y radiante.",
            feature1: {
                title: "Certificadas",
                description: "Profesionales certificadas"
            },
            feature2: {
                title: "Cuidado Personalizado",
                description: "Atención individualizada"
            }
        },
        
        // Contact Section
        contact: {
            title: "Contacto",
            subtitle: "Estamos aquí para ayudarte. Contáctanos y agenda tu consulta personalizada",
            whatsapp: "WhatsApp",
            instagram: "Instagram"
        },
        
        // Location Section
        location: {
            title: "Localización",
            subtitle: "Visítanos en nuestro centro en el corazón de Barcelona",
            info: {
                title: "Información de Contacto",
                address: {
                    title: "Dirección",
                    text: "Avenida Diagonal, 466\nBarcelona, España"
                },
                phone: {
                    title: "Teléfono"
                },
                hours: {
                    title: "Horarios",
                    text: "Lunes - Viernes: 9:00 - 20:00"
                },
                directions: "Cómo llegar"
            }
        },
        
        // Footer
        footer: {
            description: "Medicina estética profesional y personalizada",
            copyright: "© 2024 Kenzie Clinic. Todos los derechos reservados."
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: "Home",
            services: "Services",
            about: "About Us",
            location: "Location",
            contact: "Contact"
        },
        
        // Hero Section
        hero: {
            title: "Natural",
            titleHighlight: "Beauty",
            subtitle: "Discover your best version with our state-of-the-art aesthetic medicine treatments",
            cta1: "Explore our services",
            cta2: "Book your appointment"
        },
        
        // Services Section
        services: {
            title: "Our Services",
            subtitle: "We offer a wide range of personalized aesthetic treatments to enhance your natural beauty",
            service1: {
                title: "Facial Treatments",
                description: "Facial rejuvenation with advanced technology and high-quality products"
            },
            service2: {
                title: "Body Treatments",
                description: "Shape your figure with our non-invasive body treatments"
            },
            service3: {
                title: "Aesthetic Medicine",
                description: "Safe and effective procedures performed by certified professionals"
            }
        },
        
        // About Section
        about: {
            title: "About Us",
            paragraph1: "At Kenzie Clinic, we are a team of professionals passionate about aesthetic medicine and comprehensive wellness. Our commitment is to provide you with the best personalized care.",
            paragraph2: "With years of experience and continuous training, we use the most advanced techniques to help you feel confident and radiant.",
            feature1: {
                title: "Certified",
                description: "Certified professionals"
            },
            feature2: {
                title: "Personalized Care",
                description: "Individualized attention"
            }
        },
        
        // Contact Section
        contact: {
            title: "Contact",
            subtitle: "We are here to help you. Contact us and schedule your personalized consultation",
            whatsapp: "WhatsApp",
            instagram: "Instagram"
        },
        
        // Location Section
        location: {
            title: "Location",
            subtitle: "Visit us at our center in the heart of Barcelona",
            info: {
                title: "Contact Information",
                address: {
                    title: "Address",
                    text: "Avenida Diagonal, 466\nBarcelona, Spain"
                },
                phone: {
                    title: "Phone"
                },
                hours: {
                    title: "Opening Hours",
                    text: "Monday - Friday: 9:00 - 20:00\nSaturdays: 10:00 - 14:00"
                },
                directions: "Get Directions"
            }
        },
        
        // Footer
        footer: {
            description: "Professional and personalized aesthetic medicine",
            copyright: "© 2024 Kenzie Clinic. All rights reserved."
        }
    }
};

// Language management
let currentLanguage = 'es'; // Default language

function setLanguage(lang) {
    currentLanguage = lang;
    updateContent();
    localStorage.setItem('kenzie-clinic-language', lang);
}

function getCurrentLanguage() {
    return currentLanguage;
}

function translate(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        value = value[k];
        if (!value) break;
    }
    
    return value || key;
}

function updateContent() {
    // Update navigation
    updateTextContent('[data-translate="nav.home"]', translate('nav.home'));
    updateTextContent('[data-translate="nav.services"]', translate('nav.services'));
    updateTextContent('[data-translate="nav.about"]', translate('nav.about'));
    updateTextContent('[data-translate="nav.location"]', translate('nav.location'));
    updateTextContent('[data-translate="nav.contact"]', translate('nav.contact'));
    
    // Update hero section
    updateTextContent('[data-translate="hero.title"]', translate('hero.title'));
    updateTextContent('[data-translate="hero.titleHighlight"]', translate('hero.titleHighlight'));
    updateTextContent('[data-translate="hero.subtitle"]', translate('hero.subtitle'));
    updateTextContent('[data-translate="hero.cta1"]', translate('hero.cta1'));
    updateTextContent('[data-translate="hero.cta2"]', translate('hero.cta2'));
    
    // Update services section
    updateTextContent('[data-translate="services.title"]', translate('services.title'));
    updateTextContent('[data-translate="services.subtitle"]', translate('services.subtitle'));
    updateTextContent('[data-translate="services.service1.title"]', translate('services.service1.title'));
    updateTextContent('[data-translate="services.service1.description"]', translate('services.service1.description'));
    updateTextContent('[data-translate="services.service2.title"]', translate('services.service2.title'));
    updateTextContent('[data-translate="services.service2.description"]', translate('services.service2.description'));
    updateTextContent('[data-translate="services.service3.title"]', translate('services.service3.title'));
    updateTextContent('[data-translate="services.service3.description"]', translate('services.service3.description'));
    
    // Update about section
    updateTextContent('[data-translate="about.title"]', translate('about.title'));
    updateTextContent('[data-translate="about.paragraph1"]', translate('about.paragraph1'));
    updateTextContent('[data-translate="about.paragraph2"]', translate('about.paragraph2'));
    updateTextContent('[data-translate="about.feature1.title"]', translate('about.feature1.title'));
    updateTextContent('[data-translate="about.feature1.description"]', translate('about.feature1.description'));
    updateTextContent('[data-translate="about.feature2.title"]', translate('about.feature2.title'));
    updateTextContent('[data-translate="about.feature2.description"]', translate('about.feature2.description'));
    
    // Update contact section
    updateTextContent('[data-translate="contact.title"]', translate('contact.title'));
    updateTextContent('[data-translate="contact.subtitle"]', translate('contact.subtitle'));
    updateTextContent('[data-translate="contact.whatsapp"]', translate('contact.whatsapp'));
    updateTextContent('[data-translate="contact.instagram"]', translate('contact.instagram'));
    
    // Update location section
    updateTextContent('[data-translate="location.title"]', translate('location.title'));
    updateTextContent('[data-translate="location.subtitle"]', translate('location.subtitle'));
    updateTextContent('[data-translate="location.info.title"]', translate('location.info.title'));
    updateTextContent('[data-translate="location.info.address.title"]', translate('location.info.address.title'));
    updateTextContent('[data-translate="location.info.address.text"]', translate('location.info.address.text'));
    updateTextContent('[data-translate="location.info.phone.title"]', translate('location.info.phone.title'));
    updateTextContent('[data-translate="location.info.hours.title"]', translate('location.info.hours.title'));
    updateTextContent('[data-translate="location.info.hours.text"]', translate('location.info.hours.text'));
    updateTextContent('[data-translate="location.info.directions"]', translate('location.info.directions'));
    
    // Update footer
    updateTextContent('[data-translate="footer.description"]', translate('footer.description'));
    updateTextContent('[data-translate="footer.copyright"]', translate('footer.copyright'));
    
    // Update language buttons
    updateLanguageButtons();
}

function updateTextContent(selector, text) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.textContent = text;
    });
}

function updateLanguageButtons() {
    const languageButtons = document.querySelectorAll('[data-lang]');
    languageButtons.forEach(button => {
        const lang = button.getAttribute('data-lang');
        if (lang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize language from localStorage or default
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('kenzie-clinic-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    updateContent();
}

// Export functions for global use
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.translate = translate;
window.initializeLanguage = initializeLanguage;