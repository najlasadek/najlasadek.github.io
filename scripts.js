// Portfolio Website JavaScript

// Global Variables
let currentGallery = [];
let currentGalleryIndex = 0;

// Utility Functions
const utils = {
    // Get current page from body data attribute or filename
    getCurrentPage() {
        const bodyPage = document.body.dataset.page;
        if (bodyPage) return bodyPage;
        
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename.replace('.html', '') || 'index';
    },

    findItemById(id) {
        const collections = [
            'experience_full', 'education_full', 'projects_full', 
            'recitals_full', 'masterclasses_full', 'honors_full', 
            'features_full', 'events_full', 'contact_info'  // Add this line
        ];
        
        for (const collection of collections) {
            const items = window.DATA[collection];
            if (items) {
                const item = items.find(item => item.id === id);
                if (item) return item;
            }
        }
        return null;
    },

    // Get items for a section with filtering and limits
    getSectionItems(dataSource, options = {}) {
        const items = window.DATA[dataSource];
        if (!items) return [];

        let filteredItems = [...items];

        // Filter by specific IDs if provided
        if (options.ids && options.ids.length > 0) {
            filteredItems = filteredItems.filter(item => options.ids.includes(item.id));
        }

        // Apply limit if specified
        if (options.limit) {
            filteredItems = filteredItems.slice(0, options.limit);
        }

        // Sort by date if available (most recent first)
        filteredItems.sort((a, b) => {
            if (a.date && b.date) {
                return new Date(b.date) - new Date(a.date);
            }
            if (a.featured_rank && b.featured_rank) {
                return a.featured_rank - b.featured_rank;
            }
            return 0;
        });

        return filteredItems;
    },

    // Format date
    formatDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
};

// Card Rendering Functions
const cardRenderer = {
    // Render a standard card
    renderCard(item, mode = 'both') {
        if (!item) return '';

        const showImage = (mode === 'images' || mode === 'both') && item.img;
        const showText = mode === 'text' || mode === 'both';
        const showEmbed = item.embed && (mode === 'both' || mode === 'embed');

        let imageContent = '';
        if (showEmbed) {
            imageContent = `<div class="video-container"><iframe src="${item.embed}"></iframe></div>`;
        } else if (showImage) {
            imageContent = `<img src="${item.img}" alt="${item.title}" class="card-image" loading="lazy" onclick="openGallery('${item.id}')">`;
        }

        return `
            <div class="card" data-id="${item.id}">
                ${imageContent}
                ${showText ? `
                <div class="card-header">
                    <h3 class="card-title">${item.title}</h3>
                    ${item.subtitle ? `<p class="card-subtitle">${item.subtitle}</p>` : ''}
                </div>
                ${item.text ? `<p class="card-text">${item.text}</p>` : ''}
                ${this.renderCardFooter(item)}
                ${this.renderTags(item.tags)}
                ` : ''}
            </div>
        `;
    },

    // Render featured card for hero section
    renderFeaturedCard(item) {
        if (!item) return '';
        
        const imageContent = item.embed ? 
            `<div class="video-container"><iframe src="${item.embed}"></iframe></div>` :
            `<img src="${item.img}" alt="${item.title}" class="card-image" loading="lazy" onclick="openGallery('${item.id}')">`;

        return `
            <div class="featured-card" data-id="${item.id}">
                <div class="featured-badge">✨ FEATURED</div>
                ${imageContent}
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="card-title">${item.title}</h3>
                        ${item.subtitle ? `<p class="card-subtitle">${item.subtitle}</p>` : ''}
                    </div>
                    ${item.text ? `<p class="card-text">${item.text}</p>` : ''}
                    ${this.renderCardFooter(item)}
                    ${this.renderTags(item.tags)}
                </div>
            </div>
        `;
    },

    // Render card footer with links
    renderCardFooter(item) {
        if (!item.links && !item.url) return '';
        
        let links = [];
        if (item.links) {
            links = item.links.map(link => 
                `<a href="${link.url}" target="_blank" class="card-link">${link.label}</a>`
            );
        }
        if (item.url && !item.links) {
            links.push(`<a href="${item.url}" target="_blank" class="card-link">View</a>`);
        }

        return links.length > 0 ? `
            <div class="card-footer">
                ${links.join('')}
            </div>
        ` : '';
    },

    // Render tags
    renderTags(tags) {
        if (!tags || tags.length === 0) return '';
        
        return `
            <div class="tags">
                ${tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
            </div>
        `;
    }
};

// Page-specific initialization functions
const pageInit = {
    // Initialize homepage
    initHomepage() {
        this.initHeroSection();
        this.initFeaturedCards();
        this.initHomepageSections();
        this.initContactPreview(); // Add this line
    },

    // Initialize hero section
    initHeroSection() {
        const { site } = window.DATA;
        
        // Update hero content
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        const heroDescription = document.getElementById('heroDescription');
        const heroActions = document.getElementById('heroActions');

        if (heroTitle) heroTitle.textContent = site.heroTitle;
        if (heroSubtitle) heroSubtitle.textContent = site.heroSubtitle;
        if (heroDescription) heroDescription.textContent = site.heroDescription;
        
        if (heroActions && site.heroButtons) {
            heroActions.innerHTML = site.heroButtons.map(btn => 
                `<a href="${btn.page}.html" class="btn btn-${btn.style}">${btn.text}</a>`
            ).join('');
        }
    },

    // Initialize featured cards
    initFeaturedCards() {
        const heroFeatures = document.getElementById('heroFeatures');
        if (!heroFeatures || !window.DATA.hero_features) return;

        const featuredItems = window.DATA.hero_features.map(feature => 
            utils.findItemById(feature.ref)
        ).filter(Boolean);

        heroFeatures.innerHTML = featuredItems.map(item => 
            cardRenderer.renderFeaturedCard(item)
        ).join('');
    },

    // Initialize homepage sections
// In scripts.js, replace initHomepageSections with:
// In scripts.js, replace initHomepageSections with:
// scripts.js
    initHomepageSections() {
    const container = document.getElementById('homepageSections');
    if (!container || !window.DATA.homepage_sections) return;

    let html = '';
    window.DATA.homepage_sections.forEach((section, index) => {
        let items = section.data_source === 'contact_info'
        ? (window.DATA.contact_info || [])
        : utils.getSectionItems(section.data_source, section.display || {});
        if (!items || items.length === 0) return;

        const sectionClass = section.id === 'contact-preview' ? 'contact-preview-section' : '';
        const gridClass = (section.display && section.display.grid) || 'grid-3';
        const mode = (section.display && section.display.mode) || 'both';

        html += `
        <section class="section slide-in-${index % 2 === 0 ? 'left' : 'right'} ${sectionClass}">
            <div class="section-header">
            <h2 class="section-title">${section.title}</h2>
            </div>
            <div class="grid ${gridClass}">
            ${items.map(item => cardRenderer.renderCard(item, mode)).join('')}
            </div>
            <div class="text-center">
            <a href="${section.target_page}.html" class="btn btn-${section.id === 'contact-preview' ? 'primary' : 'secondary'}">
                ${section.id === 'contact-preview' ? 'Get In Touch' : `View All ${section.title}`}
            </a>
            </div>
        </section>
        `;
    });

    // IMPORTANT: use innerHTML, not textContent
    container.innerHTML = html;
    },

    // Initialize engineering page
    initEngineering() {
        this.populateGrid('experienceGrid', 'experience_full', 'both');
        this.populateGrid('educationGrid', 'education_full', 'text');
        this.populateGrid('projectsGrid', 'projects_full', 'both');
        this.populateGrid('competitionsGrid', 'competitions_full', 'text');
    },

    // Initialize art page
    initArt() {
        this.populateGrid('recitalsGrid', 'recitals_full', 'both');
        this.populateGrid('masterclassesGrid', 'masterclasses_full', 'text');
    },

    // Initialize honors page
    initHonors() {
        this.populateGrid('honorsGrid', 'honors_full', 'text');
    },

    // Initialize features page
    initFeatures() {
        this.populateGrid('featuresGrid', 'features_full', 'both');
    },

    // Initialize events page
    initEvents() {
        this.populateGrid('eventsGrid', 'events_full', 'both');
    },

    // Initialize contact page
    initContact() {
        this.initContactInfo();
        this.initResumeSection();
    },

    // Initialize contact information
    // In scripts.js, find initContactInfo and replace it with:
// In scripts.js, replace initContactInfo with:
initContactInfo() {
    const container = document.getElementById('contactInfo');
    if (!container) return;

    // Use contact_info as primary source, contact as fallback
    const contactData = window.DATA.contact_info;
    const contactFallback = window.DATA.contact;
    
    if (!contactData || contactData.length === 0) return;

    const contactItem = contactData[0];
    
    const contactCards = [
        {
            icon: '',
            title: 'Email',
            link: contactItem.links.find(link => link.label === 'Email')?.url || `mailto:${contactFallback?.email}`,
            text: contactFallback?.email || 'Email me'
        },
        {
            icon: '',
            title: 'LinkedIn',
            link: contactItem.links.find(link => link.label === 'LinkedIn')?.url || contactFallback?.linkedin,
            text: 'Connect with me'
        },

        {
            icon: '',
            title: 'Instagram',
            link: contactItem.links.find(link => link.label === 'Instagram')?.url || contactFallback?.instagram,
            text: 'Follow Me'
        },

        {
            icon: '',
            title: 'YouTube Channel',
            link: contactItem.links.find(link => link.label === 'Youtube')?.url || contactFallback?.youtube,
            text: 'Subscribe'
        }
    ];

    if (contactFallback?.github) {
        contactCards.push({
            icon: '💻',
            title: 'GitHub',
            link: contactFallback.github,
            text: 'View my code'
        });
    }

    if (contactFallback?.instagram) {
        contactCards.push({
            icon: '🎵',
            title: 'Instagram',
            link: contactFallback.instagram,
            text: 'Follow my journey'
        });
    }

    container.innerHTML = contactCards.map(card => `
        <div class="contact-card">
            <span class="contact-icon">${card.icon}</span>
            <h3>${card.title}</h3>
            <a href="${card.link}" target="_blank" class="contact-link">${card.text}</a>
        </div>
    `).join('');
},

    // Initialize resume section
    initResumeSection() {
        const container = document.getElementById('resumeSection');
        if (!container || !window.DATA.resumePdfUrl) return;

        container.innerHTML = `
            <a href="${window.DATA.resumePdfUrl}" target="_blank" class="btn btn-primary">
                📄 Download Resume
            </a>
        `;
    },


    // In scripts.js, add this special handling for contact sections
    initContactPreview() {
        // Special handling for contact preview section
        const contactSections = document.querySelectorAll('[data-section="contact-preview"]');
        contactSections.forEach(section => {
            section.classList.add('contact-preview-section');
        });
    },

    // Generic function to populate a grid
    populateGrid(gridId, dataSource, mode = 'both', options = {}) {
        const grid = document.getElementById(gridId);
        if (!grid) return;

        const items = utils.getSectionItems(dataSource, options);
        grid.innerHTML = items.map(item => cardRenderer.renderCard(item, mode)).join('');
    }
};

// Carousel Functions
const carousel = {
    init() {
        const container = document.getElementById('carousel');
        if (!container || !window.DATA.carousel_ids) return;

        const carouselItems = window.DATA.carousel_ids.map(id => {
            const item = utils.findItemById(id);
            return item ? {
                id: item.id,
                img: item.img,
                title: item.title
            } : null;
        }).filter(Boolean);

        container.innerHTML = carouselItems.map(item => `
            <div class="carousel-item" onclick="carousel.scrollToItem('${item.id}')">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
            </div>
        `).join('');
    },

    scrollToItem(id) {
        const element = document.querySelector(`[data-id="${id}"]`);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
            
            // Highlight the item briefly
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = '';
            }, 300);
        }
    }
};

// Gallery/Lightbox Functions
function openGallery(itemId) {
    const item = utils.findItemById(itemId);
    if (!item) return;

    if (item.gallery && item.gallery.length > 0) {
        currentGallery = item.gallery;
        currentGalleryIndex = 0;
    } else if (item.img) {
        currentGallery = [item.img];
        currentGalleryIndex = 0;
    } else {
        return;
    }

    showLightbox();
}

function showLightbox() {
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightboxImage');
    
    if (currentGallery.length > 0) {
        image.src = currentGallery[currentGalleryIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function lightboxNav(direction) {
    if (currentGallery.length <= 1) return;
    
    currentGalleryIndex += direction;
    
    if (currentGalleryIndex >= currentGallery.length) {
        currentGalleryIndex = 0;
    } else if (currentGalleryIndex < 0) {
        currentGalleryIndex = currentGallery.length - 1;
    }
    
    document.getElementById('lightboxImage').src = currentGallery[currentGalleryIndex];
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

// Social Links Initialization
function initSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;

    const { contact } = window.DATA;
    
    const links = [
        { url: contact.linkedin, icon: '💼', label: 'LinkedIn' },
        { url: contact.instagram, icon: '📷', label: 'Instagram' },
        { url: contact.youtube, icon: '🎬', label: 'YouTube' }
    ].filter(link => link.url);

    if (contact.github) {
        links.push({ url: contact.github, icon: '💻', label: 'GitHub' });
    }

    container.innerHTML = links.map(link => 
        `<a href="${link.url}" target="_blank" class="social-link" title="${link.label}">${link.icon}</a>`
    ).join('');
}

// Animation Functions
const animations = {
    // Initialize scroll-triggered animations
    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    },

    // Add stagger animations to grids
    staggerGridItems() {
        document.querySelectorAll('.grid').forEach(grid => {
            const items = grid.querySelectorAll('.card');
            items.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });
    }
};

// Performance optimizations
const performance = {
    // Lazy load images
    initLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        // Observe all images with lazy loading
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    },

    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Event Listeners
function initEventListeners() {
    // Keyboard navigation for lightbox
    window.addEventListener('keydown', (event) => {
        if (document.getElementById('lightbox').classList.contains('active')) {
            switch (event.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    lightboxNav(-1);
                    break;
                case 'ArrowRight':
                    lightboxNav(1);
                    break;
            }
        }
    });

    // Touch events for mobile gallery
    let touchStartX = 0;
    let touchEndX = 0;

    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                lightboxNav(-1); // Swipe right = previous
            } else {
                lightboxNav(1);  // Swipe left = next
            }
        }
    }

    // Header hide/show on scroll
    let lastScrollY = 0;
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', performance.debounce(() => {
        const currentScrollY = window.pageYOffset;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    }, 10));

    // Responsive carousel visibility
    window.addEventListener('resize', performance.debounce(() => {
        const carouselContainer = document.getElementById('carouselContainer');
        if (carouselContainer) {
            if (window.innerWidth > 1200) {
                carouselContainer.style.display = 'block';
            } else {
                carouselContainer.style.display = 'none';
            }
        }
    }, 250));

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        const nav = document.getElementById('nav');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        
        if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
}

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Check if DATA is available
        if (typeof window.DATA === 'undefined') {
            console.error('DATA object not found. Make sure data.js is loaded.');
            return;
        }

        // Initialize based on current page
        const currentPage = utils.getCurrentPage();
        
        switch (currentPage) {
            case 'index':
                pageInit.initHomepage();
                break;
            case 'engineering':
                pageInit.initEngineering();
                break;
            case 'art':
                pageInit.initArt();
                break;
            case 'honors':
                pageInit.initHonors();
                break;
            case 'features':
                pageInit.initFeatures();
                break;
            case 'events':
                pageInit.initEvents();
                break;
            case 'contact':
                pageInit.initContact();
                break;
        }

        // Initialize common components
        carousel.init();
        initSocialLinks();
        animations.initScrollAnimations();
        performance.initLazyLoading();
        initEventListeners();

        // Stagger animations after content is loaded
        setTimeout(() => {
            animations.staggerGridItems();
        }, 100);

        console.log(`Portfolio website initialized successfully for page: ${currentPage}`);

    } catch (error) {
        console.error('Error initializing portfolio website:', error);
    }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for global access
window.openGallery = openGallery;
window.closeLightbox = closeLightbox;
window.lightboxNav = lightboxNav;
window.toggleMobileMenu = toggleMobileMenu;