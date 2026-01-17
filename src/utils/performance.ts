/**
 * Performance optimization utilities for Cyber Security Finland website
 */

// Lazy loading for images
export const initLazyLoading = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Optimize resource loading
export const optimizeResources = () => {
  // Preload critical resources
  const preloadLink = (href, as) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  };

  // Preload critical images only; fonts are managed by system/font stacks now.
  // If you want to preload a specific font file, ensure it exists under /public/fonts
};

// Optimize CLS (Cumulative Layout Shift)
export const preventLayoutShift = () => {
  // Reserve space for images that are loading
  const reserveImageSpace = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete && !img.dataset.reserved) {
        const aspectRatio = img.naturalHeight ? img.naturalWidth / img.naturalHeight : 16/9;
        img.style.height = `${img.offsetWidth / aspectRatio}px`;
        img.dataset.reserved = 'true';
      }
    });
  };

  // Run on load and resize
  window.addEventListener('load', reserveImageSpace);
  window.addEventListener('resize', reserveImageSpace);
};

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window !== 'undefined') {
    // Initialize optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initLazyLoading();
        optimizeResources();
        preventLayoutShift();
      });
    } else {
      initLazyLoading();
      optimizeResources();
      preventLayoutShift();
    }
  }
};