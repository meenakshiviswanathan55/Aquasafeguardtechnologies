// Aqua Safeguard Technologies - Main JavaScript File

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
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

// Mobile Navigation Toggle - FIXED VERSION
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!navToggle || !navMenu) return;

    function toggleMenu() {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        } else {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; // Prevent scroll when menu is open
        }
    }

    // Click toggle
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Touch support for mobile
    navToggle.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Keyboard toggle
    navToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Close on link click
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click (but not on toggle button)
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && 
            !navMenu.contains(event.target) && 
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}

// Hero Slider Functionality - ENHANCED VERSION
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
        // Ensure index is within bounds
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
    
    // Button event listeners
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
    
    // Dot navigation
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
    
    // Touch/swipe support for mobile
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
                    nextSlide(); // Swipe left - next slide
                } else {
                    prevSlide(); // Swipe right - previous slide
                }
            }
        }
        
        // Pause auto-slide on hover/focus
        sliderContainer.addEventListener('mouseenter', () => {
            isUserInteracting = true;
            stopAutoSlide();
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            isUserInteracting = false;
            startAutoSlide();
        });
    }
    
    // Keyboard navigation
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
    
    // Initialize slider
    showSlide(0);
    startAutoSlide();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        stopAutoSlide();
    });
}

// Enhanced Button Click Handling
function initButtonHandling() {
    const exploreButtons = document.querySelectorAll('.explore-btn, .btn-primary');
    
    exploreButtons.forEach(button => {
        // Remove any existing event listeners
        button.style.pointerEvents = 'auto';
        button.style.position = 'relative';
        button.style.zIndex = '15';
        
        // Add click handler
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Add visual feedback
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle navigation
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
        
        // Add touch support
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Add visual feedback
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
                
                // Navigate after animation
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    window.location.href = href;
                }
            }, 150);
        });
    });
}

// Smooth Scrolling
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

// Intersection Observer Animations
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

// Form Handling
function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validation
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
            
            // Simulate form submission
            setTimeout(() => {
                showAlert('Thank you for your message! We will get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Custom Alert Function
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
    
    // Animate in
    setTimeout(() => {
        alert.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }, 5000);
}

// Lazy Loading
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

// Back to Top Button
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
    
    // Show/hide based on scroll position
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
    
    // Click handler
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Error Handling for Images
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Create a simple placeholder SVG
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
            this.alt = 'Image not available';
        });
    });
}

// Accessibility Enhancements
function initAccessibility() {
    // Enhanced keyboard navigation for slider
    const sliderElements = document.querySelectorAll('.slider-dot, .slider-arrow');
    
    sliderElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Focus trap for mobile menu
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

// Enhanced Button Click Handling - CRITICAL FOR MOBILE
function initButtonHandling() {
    // Wait a bit to ensure DOM is fully loaded
    setTimeout(() => {
        const exploreButtons = document.querySelectorAll('.explore-btn, .btn-primary');
        
        exploreButtons.forEach(button => {
            // Ensure button is clickable
            button.style.pointerEvents = 'auto';
            button.style.position = 'relative';
            button.style.zIndex = '15';
            button.style.touchAction = 'manipulation';
            button.style.webkitTapHighlightColor = 'transparent';
            
            // Remove any existing handlers to prevent duplicates
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Add comprehensive click handling
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Button clicked:', this.textContent);
                
                // Visual feedback
                this.style.transform = 'translateY(-2px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    
                    // Navigate after animation
                    const href = this.getAttribute('href');
                    if (href && href !== '#' && href !== '') {
                        console.log('Navigating to:', href);
                        window.location.href = href;
                    }
                }, 200);
            });
            
            // Touch handling for mobile
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
            
            // Keyboard support
            newButton.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }, 500);
}

// Product Image Switching (if needed for other pages)
function changeProductImage(productId, newImageSrc) {
    const imageElement = document.getElementById(`product-image-${productId}`);
    if (imageElement) {
        imageElement.src = newImageSrc;
    }
}

// Debounce Utility
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

// Print Styles Handler
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

// Error Handling Wrapper
function safeExecute(func, context = 'Unknown') {
    try {
        return func();
    } catch (error) {
        console.error(`Error in ${context}:`, error);
        return null;
    }
}

// Performance Monitoring
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        });
    }
}

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Aqua Safeguard website...');
    
    // Initialize all functionality with error handling
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
    
    console.log('Website initialization complete!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        if (document.hidden) {
            // Page is hidden, pause animations
            const slideInterval = window.slideInterval;
            if (slideInterval) clearInterval(slideInterval);
        } else {
            // Page is visible, restart animations
            safeExecute(initHeroSlider, 'Hero Slider Restart');
        }
    }
});

// Window resize handler
window.addEventListener('resize', debounce(function() {
    // Recalculate any position-dependent elements
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }
}, 250));