/* Utility Functions */

/**
 * Debounce function to limit rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
function debounce(func, wait = 300) {
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

/**
 * Throttle function to limit rate of function execution
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function}
 */
function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean}
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Smooth scroll to element
 * @param {string} selector - Element selector
 * @param {number} offset - Offset from top (default: header height)
 */
function scrollToElement(selector, offset = 80) {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Form validation helper
 * @param {HTMLFormElement} form - Form element to validate
 * @returns {boolean}
 */
function validateForm(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

  inputs.forEach(input => {
    const errorElement = input.parentElement.querySelector('.form-error');

    // Remove previous error states
    input.classList.remove('error');
    if (errorElement) {
      errorElement.remove();
    }

    // Email validation
    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showError(input, 'Please enter a valid email address');
        isValid = false;
        return;
      }
    }

    // Phone validation
    if (input.type === 'tel' && input.value) {
      const phoneRegex = /^[\d\s\-\(\)\+]+$/;
      if (!phoneRegex.test(input.value) || input.value.replace(/\D/g, '').length < 10) {
        showError(input, 'Please enter a valid phone number');
        isValid = false;
        return;
      }
    }

    // Required field validation
    if (input.hasAttribute('required') && !input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Show error message for form input
 * @param {HTMLElement} input - Input element
 * @param {string} message - Error message
 */
function showError(input, message) {
  input.classList.add('error');
  const errorElement = document.createElement('span');
  errorElement.className = 'form-error';
  errorElement.textContent = message;
  input.parentElement.appendChild(errorElement);
}

/**
 * Sanitize HTML to prevent XSS
 * @param {string} str - String to sanitize
 * @returns {string}
 */
function sanitizeHTML(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string}
 */
function formatPhoneNumber(phone) {
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return phone;
}

/**
 * Lazy load images
 * @param {string} selector - Image selector (default: img[data-src])
 */
function lazyLoadImages(selector = 'img[data-src]') {
  const images = document.querySelectorAll(selector);

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

/**
 * Generate unique ID
 * @returns {string}
 */
function generateId() {
  return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise}
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text:', err);
    return false;
  }
}

/**
 * Get query parameter from URL
 * @param {string} param - Parameter name
 * @returns {string|null}
 */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (currentPath === linkPath ||
        (currentPath === '/' && linkPath.includes('index.html')) ||
        (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Detect if user prefers reduced motion
 * @returns {boolean}
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

