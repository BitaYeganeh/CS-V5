/**
 * Mobile Enhancement Utilities
 * Provides better UX for mobile users
 */
// Detect if user is on mobile
export const isMobileDevice = () => {
    if (typeof window === 'undefined')
        return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
// Smooth scroll with offset for sticky header
export const smoothScrollToElement = (elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (!element)
        return;
    const yOffset = -offset;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
        top: y,
        behavior: 'smooth'
    });
};
// Add haptic feedback for mobile interactions
export const triggerHapticFeedback = (type = 'medium') => {
    if (!navigator.vibrate)
        return;
    const patterns = {
        light: 10,
        medium: 20,
        heavy: 50
    };
    navigator.vibrate(patterns[type]);
};
// Prevent accidental double-tap zoom
export const preventDoubleTapZoom = () => {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
};
// Mobile keyboard detection
export const isKeyboardOpen = () => {
    if (typeof window === 'undefined')
        return false;
    return window.innerHeight < document.documentElement.clientHeight;
};
// Add touch feedback to interactive elements
export const addTouchFeedback = () => {
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element) => {
        element.addEventListener('touchstart', () => {
            element.classList.add('active');
        });
        element.addEventListener('touchend', () => {
            element.classList.remove('active');
        });
        element.addEventListener('touchcancel', () => {
            element.classList.remove('active');
        });
    });
};
// Optimize scrolling performance
export const optimizeScrolling = () => {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Perform scroll operations here
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};
// Handle viewport changes on mobile
export const handleViewportChange = (callback) => {
    const checkOrientation = () => {
        const isPortrait = window.innerHeight > window.innerWidth;
        callback(isPortrait);
    };
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);
    // Initial check
    checkOrientation();
};
// Prevent body scroll on modal open
export const lockBodyScroll = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    // Return unlock function
    return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };
};
// Mobile menu management
export const setupMobileMenu = () => {
    const trigger = document.getElementById('mobile-trigger');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    const closeButton = menu?.querySelector('[data-close]');
    if (!trigger || !menu)
        return;
    const toggleMenu = (open) => {
        if (open) {
            menu.classList.remove('translate-x-full');
            backdrop?.classList.remove('opacity-0', 'invisible');
            trigger.setAttribute('aria-expanded', 'true');
            lockBodyScroll();
        }
        else {
            menu.classList.add('translate-x-full');
            backdrop?.classList.add('opacity-0', 'invisible');
            trigger.setAttribute('aria-expanded', 'false');
        }
    };
    trigger.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('translate-x-full');
        toggleMenu(!isOpen);
    });
    closeButton?.addEventListener('click', () => {
        toggleMenu(false);
    });
    backdrop?.addEventListener('click', () => {
        toggleMenu(false);
    });
    // Close menu on link click
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });
    // Close menu on escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.classList.contains('translate-x-full')) {
            toggleMenu(false);
        }
    });
};
// Initialize all mobile enhancements
export const initMobileEnhancements = () => {
    if (!isMobileDevice())
        return;
    preventDoubleTapZoom();
    addTouchFeedback();
    optimizeScrolling();
    handleViewportChange((isPortrait) => {
        if (!isPortrait) {
            // Handle landscape mode
            document.documentElement.style.setProperty('--header-height', '3.5rem');
        }
        else {
            // Handle portrait mode
            document.documentElement.style.removeProperty('--header-height');
        }
    });
    setupMobileMenu();
};
// Auto-initialize on load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', initMobileEnhancements);
}
//# sourceMappingURL=mobile-enhancements.js.map