/**
 * Mobile swipe gestures utility for enhanced mobile UX
 */
export class SwipeHandler {
    element;
    threshold;
    restraint;
    allowedTime;
    startX = 0;
    startY = 0;
    startTime = 0;
    constructor(config = {}) {
        this.element = config.element || document.body;
        this.threshold = config.threshold || 150; // Required min distance
        this.restraint = config.restraint || 100; // Maximum perpendicular distance
        this.allowedTime = config.allowedTime || 300; // Maximum time allowed
        this.init();
    }
    init() {
        this.element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
        this.element.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
    }
    handleTouchStart(e) {
        const touch = e.touches[0];
        this.startX = touch.pageX;
        this.startY = touch.pageY;
        this.startTime = new Date().getTime();
    }
    handleTouchEnd(e) {
        const touch = e.changedTouches[0];
        const endX = touch.pageX;
        const endY = touch.pageY;
        const endTime = new Date().getTime();
        const distanceX = endX - this.startX;
        const distanceY = endY - this.startY;
        const elapsedTime = endTime - this.startTime;
        if (elapsedTime <= this.allowedTime) {
            if (Math.abs(distanceX) >= this.threshold && Math.abs(distanceY) <= this.restraint) {
                // Horizontal swipe
                const direction = distanceX < 0 ? 'left' : 'right';
                this.dispatchSwipeEvent(direction, Math.abs(distanceX), elapsedTime);
            }
            else if (Math.abs(distanceY) >= this.threshold && Math.abs(distanceX) <= this.restraint) {
                // Vertical swipe
                const direction = distanceY < 0 ? 'up' : 'down';
                this.dispatchSwipeEvent(direction, Math.abs(distanceY), elapsedTime);
            }
        }
    }
    dispatchSwipeEvent(direction, distance, duration) {
        const swipeEvent = new CustomEvent('swipe', {
            detail: {
                direction,
                distance,
                duration,
                startPoint: { x: this.startX, y: this.startY },
                endPoint: { x: this.startX + (direction === 'left' ? -distance : distance), y: this.startY }
            }
        });
        this.element.dispatchEvent(swipeEvent);
    }
    destroy() {
        this.element.removeEventListener('touchstart', this.handleTouchStart.bind(this));
        this.element.removeEventListener('touchend', this.handleTouchEnd.bind(this));
    }
}
// Utility functions for common swipe patterns
export function initCarouselSwipe(carousel, onSwipe) {
    const swipeHandler = new SwipeHandler({ element: carousel });
    carousel.addEventListener('swipe', (e) => {
        const swipeEvent = e.detail;
        if (swipeEvent.direction === 'left' || swipeEvent.direction === 'right') {
            onSwipe(swipeEvent.direction);
        }
    });
    return swipeHandler;
}
export function initNavigationSwipe(element, onSwipe) {
    const swipeHandler = new SwipeHandler({
        element,
        threshold: 100, // Lower threshold for navigation
        allowedTime: 250
    });
    element.addEventListener('swipe', (e) => {
        const swipeEvent = e.detail;
        onSwipe(swipeEvent.direction);
    });
    return swipeHandler;
}
// Initialize swipe gestures for mobile enhancements
export function initMobileSwipeGestures() {
    // Service cards carousel swipe
    const serviceGrids = document.querySelectorAll('[data-swipe-carousel]');
    serviceGrids.forEach(grid => {
        initCarouselSwipe(grid, (direction) => {
            const cards = grid.querySelectorAll('.group');
            const cardWidth = cards[0]?.offsetWidth || 300;
            const currentScroll = grid.scrollLeft;
            if (direction === 'left') {
                grid.scrollTo({
                    left: currentScroll + cardWidth + 24, // Include gap
                    behavior: 'smooth'
                });
            }
            else {
                grid.scrollTo({
                    left: currentScroll - cardWidth - 24,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Testimonials swipe
    const testimonialSections = document.querySelectorAll('[data-testimonial-swipe]');
    testimonialSections.forEach(section => {
        initCarouselSwipe(section, (direction) => {
            // Implementation for testimonial swiping
            const testimonials = section.querySelectorAll('.testimonial-card');
            let currentIndex = parseInt(section.getAttribute('data-current-testimonial') || '0');
            if (direction === 'left' && currentIndex < testimonials.length - 1) {
                currentIndex++;
            }
            else if (direction === 'right' && currentIndex > 0) {
                currentIndex--;
            }
            section.setAttribute('data-current-testimonial', currentIndex.toString());
            testimonials.forEach((testimonial, index) => {
                const element = testimonial;
                element.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        });
    });
    // Quick access sidebar swipe to close
    const sidebar = document.querySelector('#quick-action-sidebar');
    if (sidebar) {
        initNavigationSwipe(sidebar, (direction) => {
            if (direction === 'right') {
                const closeButton = sidebar.querySelector('#sidebar-close');
                closeButton?.click();
            }
        });
    }
    // Industry cards horizontal scroll
    const industryGrids = document.querySelectorAll('[data-industry-grid]');
    industryGrids.forEach(grid => {
        initCarouselSwipe(grid, (direction) => {
            const scrollAmount = 300;
            if (direction === 'left') {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
            else {
                grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    });
    console.log('Mobile swipe gestures initialized');
}
// Touch feedback utility
export function addTouchFeedback(element) {
    element.addEventListener('touchstart', () => {
        element.classList.add('touch-active');
    }, { passive: true });
    element.addEventListener('touchend', () => {
        setTimeout(() => {
            element.classList.remove('touch-active');
        }, 150);
    }, { passive: true });
    element.addEventListener('touchcancel', () => {
        element.classList.remove('touch-active');
    }, { passive: true });
}
// Auto-initialize on mobile devices
if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    document.addEventListener('DOMContentLoaded', initMobileSwipeGestures);
}
//# sourceMappingURL=swipe-gestures.js.map