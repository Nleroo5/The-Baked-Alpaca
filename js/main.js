/* Main JavaScript - Initialization */

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality
  initMobileMenu();
  initHeaderScroll();
  setActiveNavLink();
  initSmoothScroll();

  // Interactive components
  initContactForm();
  initGalleryLightbox();
  initVideoBackground();
  initScrollAnimations();
  initCookieConsent();

  // Initialize sliders
  const heroSlider = new ImageSlider('.hero-slider', {
    autoplay: true,
    interval: 5000
  });

  const featuredSlider = new ImageSlider('.featured-slider', {
    autoplay: true,
    interval: 4000
  });

  // Lazy load images
  lazyLoadImages();

  // Accessibility: Skip to main content
  const skipLink = document.querySelector('.skip-to-content');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
      }
    });
  }
});

/**
 * Handle window resize events
 */
window.addEventListener('resize', debounce(() => {
  // Close mobile menu on resize to desktop
  if (window.innerWidth > 1024) {
    const mobileNav = document.querySelector('.nav-mobile');
    const toggle = document.querySelector('.mobile-menu-toggle');

    if (mobileNav && mobileNav.classList.contains('active')) {
      mobileNav.classList.remove('active');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}, 250));

/**
 * Handle page visibility changes (pause videos when tab is hidden)
 */
document.addEventListener('visibilitychange', () => {
  const videos = document.querySelectorAll('video');

  if (document.hidden) {
    videos.forEach(video => video.pause());
  } else {
    videos.forEach(video => {
      if (video.classList.contains('hero-video')) {
        video.play().catch(e => console.log('Video play prevented:', e));
      }
    });
  }
});

/**
 * Performance: Preload critical resources
 */
function preloadCriticalResources() {
  // Preload hero image if it exists
  const heroImg = document.querySelector('.hero img');
  if (heroImg && heroImg.dataset.src) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImg.dataset.src;
    document.head.appendChild(link);
  }
}

// Call on page load
preloadCriticalResources();

/**
 * Google Analytics (if needed)
 * Uncomment and add your GA tracking ID
 */
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
*/

/**
 * Console welcome message (optional)
 */
if (window.console && console.log) {
  console.log('%c🥐 Welcome to The Baked Alpaca! 🦙', 'font-size: 20px; color: #05908C; font-weight: bold;');
  console.log('%cLooking to work with us? Visit our contact page!', 'font-size: 14px; color: #012E40;');
}
