/* Interactive Components */

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      toggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, 100);

  window.addEventListener('scroll', handleScroll);
}

/**
 * Image Slider/Carousel
 */
class ImageSlider {
  constructor(selector, options = {}) {
    this.slider = document.querySelector(selector);
    if (!this.slider) return;

    this.track = this.slider.querySelector('.slider-track');
    this.slides = this.slider.querySelectorAll('.slider-slide');
    this.currentIndex = 0;
    this.autoplay = options.autoplay !== false;
    this.interval = options.interval || 5000;
    this.autoplayTimer = null;

    this.init();
  }

  init() {
    if (this.slides.length <= 1) return;

    this.createControls();
    this.createArrows();

    if (this.autoplay) {
      this.startAutoplay();
      this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
      this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }

    // Touch/swipe support
    this.initTouchSupport();
  }

  createControls() {
    const controls = document.createElement('div');
    controls.className = 'slider-controls';

    this.slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      if (index === 0) dot.classList.add('active');

      dot.addEventListener('click', () => this.goToSlide(index));
      controls.appendChild(dot);
    });

    this.slider.appendChild(controls);
    this.dots = controls.querySelectorAll('.slider-dot');
  }

  createArrows() {
    const prevArrow = document.createElement('button');
    prevArrow.className = 'slider-arrow slider-arrow-prev';
    prevArrow.innerHTML = '&#8249;';
    prevArrow.setAttribute('aria-label', 'Previous slide');
    prevArrow.addEventListener('click', () => this.prev());

    const nextArrow = document.createElement('button');
    nextArrow.className = 'slider-arrow slider-arrow-next';
    nextArrow.innerHTML = '&#8250;';
    nextArrow.setAttribute('aria-label', 'Next slide');
    nextArrow.addEventListener('click', () => this.next());

    this.slider.appendChild(prevArrow);
    this.slider.appendChild(nextArrow);
  }

  goToSlide(index) {
    this.currentIndex = index;
    const offset = -100 * index;
    this.track.style.transform = `translateX(${offset}%)`;

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.goToSlide(this.currentIndex);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(this.currentIndex);
  }

  startAutoplay() {
    if (!this.autoplay) return;
    this.autoplayTimer = setInterval(() => this.next(), this.interval);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  initTouchSupport() {
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    this.slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    this.slider.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
    });

    this.slider.addEventListener('touchend', () => {
      if (!isDragging) return;
      isDragging = false;

      const diff = startX - currentX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    });
  }
}

/**
 * Modal/Popup
 */
class Modal {
  constructor(selector) {
    this.modal = document.querySelector(selector);
    if (!this.modal) return;

    this.backdrop = this.modal.querySelector('.modal-backdrop');
    this.closeBtn = this.modal.querySelector('.modal-close');

    this.init();
  }

  init() {
    // Close on backdrop click
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    // Close on close button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open() {
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    const focusableElements = this.modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
      focusableElements[0].focus();
    }
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Image Gallery with Lightbox
 */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length === 0) return;

  // Create modal for lightbox
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'gallery-lightbox';
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-content" style="padding: 0; background: transparent; max-width: 95vw;">
      <button class="modal-close" aria-label="Close">&times;</button>
      <img src="" alt="" style="max-width: 100%; max-height: 90vh; border-radius: 8px;">
    </div>
  `;
  document.body.appendChild(modal);

  const lightbox = new Modal('#gallery-lightbox');
  const lightboxImg = modal.querySelector('img');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.open();
      }
    });

    // Keyboard accessibility
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/**
 * Form Submission Handler
 */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm(form)) {
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // TODO: Replace with actual form submission endpoint
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success message
      showFormMessage(form, 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
      form.reset();

    } catch (error) {
      showFormMessage(form, 'Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

/**
 * Show form message
 * @param {HTMLFormElement} form - Form element
 * @param {string} message - Message to display
 * @param {string} type - Message type (success/error)
 */
function showFormMessage(form, message, type) {
  // Remove existing messages
  const existingMessage = form.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${type}`;
  messageDiv.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background-color: ${type === 'success' ? '#d1fae5' : '#fee2e2'};
    color: ${type === 'success' ? '#065f46' : '#991b1b'};
    border: 2px solid ${type === 'success' ? '#10b981' : '#ef4444'};
  `;
  messageDiv.textContent = message;

  form.appendChild(messageDiv);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

/**
 * Scroll animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Video Background Handler
 */
function initVideoBackground() {
  const videoElements = document.querySelectorAll('.hero-video');

  videoElements.forEach(video => {
    // Ensure video is muted and plays inline
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;

    // Play video when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(e => console.log('Video autoplay prevented:', e));
        } else {
          video.pause();
        }
      });
    });

    observer.observe(video);
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Ignore empty hash or hash-only links
      if (href === '#' || href === '#!') return;

      e.preventDefault();
      scrollToElement(href);
    });
  });
}
