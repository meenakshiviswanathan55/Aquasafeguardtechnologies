document.addEventListener('DOMContentLoaded', function() {
    initPageRedirect();
    initMobileNavigation();
    initHeroSlider();
    initSmoothScrolling();
    initIntersectionObserver();
    initFormHandling();
    initLazyLoading();
    initBackToTop();
    initImageErrorHandling();
    initAccessibility();
});
function initPageRedirect() {
    // Check if this is a page refresh and we're not on the home page
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        const currentPath = window.location.pathname;
        const fileName = currentPath.split('/').pop() || 'index.html';
        
        // If not on index.html and it's a refresh, redirect to home
        if (fileName !== 'index.html' && fileName !== '') {
            window.location.href = 'index.html';
            return;
        }
    }
}

function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    if (!navToggle || !navMenu) return;

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden';
            body.classList.add('menu-open');
        } else {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    }

    // Handle touch events for mobile
    navToggle.addEventListener('touchstart', function(e) {
        e.preventDefault();
    }, { passive: false });

    navToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    }, { passive: false });

    // Handle click events
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Handle keyboard navigation
    navToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close menu when clicking on navigation links
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMenuOpen) {
                isMenuOpen = false;
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
                body.classList.remove('menu-open');
            }
        });
    });
    document.querySelectorAll('.nav-menu a').forEach((link, i) => {
    link.style.setProperty('--delay', `${i * 0.1 + 0.2}s`);
});


    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && 
            !navMenu.contains(event.target) && 
            isMenuOpen) {
            isMenuOpen = false;
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            isMenuOpen = false;
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isMenuOpen) {
            isMenuOpen = false;
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    });

    // Ensure all menu items are visible on initialization
    setTimeout(function() {
        const allNavItems = navMenu.querySelectorAll('li');
        allNavItems.forEach(function(item) {
            item.style.display = '';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
        });
    }, 100);
}

function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    const sliderContainer = document.querySelector('.slider-container');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    let isUserInteracting = false;
    
    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        requestAnimationFrame(() => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        });
    }
    
    function nextSlide() {
        showSlide((currentSlide + 1) % slides.length);
    }
    
    function prevSlide() {
        showSlide((currentSlide - 1 + slides.length) % slides.length);
    }
    
    function startAutoSlide() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            if (!isUserInteracting) {
                nextSlide();
            }
        }, 5000);
    }
    
    function stopAutoSlide() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isUserInteracting = true;
            stopAutoSlide();
            nextSlide();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoSlide();
            }, 1000);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isUserInteracting = true;
            stopAutoSlide();
            prevSlide();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoSlide();
            }, 1000);
        });
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            isUserInteracting = true;
            stopAutoSlide();
            showSlide(index);
            setTimeout(() => {
                isUserInteracting = false;
                startAutoSlide();
            }, 1000);
        });
    });
    
    if (sliderContainer) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        sliderContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
            isUserInteracting = true;
            stopAutoSlide();
        }, { passive: true });
        
        sliderContainer.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoSlide();
            }, 1000);
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const swipeDistance = touchEndX - touchStartX;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance < 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
        
        sliderContainer.addEventListener('mouseenter', () => {
            isUserInteracting = true;
            stopAutoSlide();
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            isUserInteracting = false;
            startAutoSlide();
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (document.activeElement && 
            (document.activeElement.classList.contains('slider-dot') || 
             document.activeElement.classList.contains('slider-arrow'))) {
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                isUserInteracting = true;
                stopAutoSlide();
                prevSlide();
                setTimeout(() => {
                    isUserInteracting = false;
                    startAutoSlide();
                }, 1000);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                isUserInteracting = true;
                stopAutoSlide();
                nextSlide();
                setTimeout(() => {
                    isUserInteracting = false;
                    startAutoSlide();
                }, 1000);
            }
        }
    });
    
    showSlide(0);
    startAutoSlide();
    
    window.addEventListener('beforeunload', function() {
        stopAutoSlide();
    });
}

function initButtonHandling() {
    setTimeout(() => {
        const exploreButtons = document.querySelectorAll('.explore-btn, .btn-primary');
        
        exploreButtons.forEach(button => {
            button.style.pointerEvents = 'auto';
            button.style.position = 'relative';
            button.style.zIndex = '15';
            button.style.touchAction = 'manipulation';
            button.style.webkitTapHighlightColor = 'transparent';
            
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                this.style.transform = 'translateY(-2px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    
                    const href = this.getAttribute('href');
                    if (href && href !== '#' && href !== '') {
                        window.location.href = href;
                    }
                }, 200);
            });
            
            newButton.addEventListener('touchstart', function(e) {
                this.style.transform = 'translateY(-1px) scale(0.99)';
            }, { passive: true });
            
            newButton.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                this.style.transform = 'translateY(-2px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    
                    const href = this.getAttribute('href');
                    if (href && href !== '#' && href !== '') {
                        window.location.href = href;
                    }
                }, 200);
            });
            
            newButton.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }, 500);
}

function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.product-card, .testimonial-card, .value-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            if (!data.name || !data.email || !data.phone || !data.message) {
                showAlert('Please fill in all required fields.', 'error');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showAlert('Please enter a valid email address.', 'error');
                return;
            }
            
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
                showAlert('Please enter a valid phone number.', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showAlert('Thank you for your message! We will get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

function showAlert(message, type = 'info') {
    const alert = document.createElement('div');
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `;
    
    if (type === 'error') {
        alert.style.background = 'var(--red-600)';
    } else if (type === 'success') {
        alert.style.background = 'var(--green-600)';
    } else {
        alert.style.background = 'var(--aqua-blue)';
    }
    
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }, 5000);
}

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--aqua-blue);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    const handleScroll = debounce(function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    }, 100);
    
    window.addEventListener('scroll', handleScroll);
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
            this.alt = 'Image not available';
        });
    });
}

function initAccessibility() {
    const sliderElements = document.querySelectorAll('.slider-dot, .slider-arrow');
    
    sliderElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu && navToggle) {
        document.addEventListener('keydown', function(e) {
            if (navMenu.classList.contains('active') && e.key === 'Tab') {
                const focusableElements = navMenu.querySelectorAll('a[href], button');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
}

function changeProductImage(productId, newImageSrc) {
    const imageElement = document.getElementById(`product-image-${productId}`);
    if (imageElement) {
        imageElement.src = newImageSrc;
    }
}

function debounce(func, wait) {
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

function initPrintHandlers() {
    window.addEventListener('beforeprint', function() {
        const elementsToHide = document.querySelectorAll('.nav-toggle, .slider-arrow, .back-to-top');
        elementsToHide.forEach(el => {
            el.style.display = 'none';
        });
    });

    window.addEventListener('afterprint', function() {
        const elementsToShow = document.querySelectorAll('.nav-toggle, .slider-arrow, .back-to-top');
        elementsToShow.forEach(el => {
            el.style.display = '';
        });
    });
}

function safeExecute(func, context = 'Unknown') {
    try {
        return func();
    } catch (error) {
        console.error(`Error in ${context}:`, error);
        return null;
    }
}

function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        });
    }
}

// Debug function to check menu visibility
function debugMenuVisibility() {
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('.nav-link');
    
    console.log('Total navigation links found:', navLinks.length);
    navLinks.forEach((link, index) => {
        console.log(`Link ${index + 1}:`, link.textContent, 'Visible:', window.getComputedStyle(link).display !== 'none');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    safeExecute(initMobileNavigation, 'Mobile Navigation');
    safeExecute(initHeroSlider, 'Hero Slider');
    safeExecute(initButtonHandling, 'Button Handling');
    safeExecute(initSmoothScrolling, 'Smooth Scrolling');
    safeExecute(initIntersectionObserver, 'Intersection Observer');
    safeExecute(initFormHandling, 'Form Handling');
    safeExecute(initLazyLoading, 'Lazy Loading');
    safeExecute(initBackToTop, 'Back to Top');
    safeExecute(initImageErrorHandling, 'Image Error Handling');
    safeExecute(initAccessibility, 'Accessibility');
    safeExecute(initPrintHandlers, 'Print Handlers');
    safeExecute(initPerformanceMonitoring, 'Performance Monitoring');
    
    // Debug menu visibility after a short delay
    setTimeout(() => {
        safeExecute(debugMenuVisibility, 'Menu Debug');
    }, 1000);
});

document.addEventListener('visibilitychange', function() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        if (document.hidden) {
            const slideInterval = window.slideInterval;
            if (slideInterval) clearInterval(slideInterval);
        } else {
            safeExecute(initHeroSlider, 'Hero Slider Restart');
        }
    }
});

window.addEventListener('resize', debounce(function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
    }
}, 250));
