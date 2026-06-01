/**
 * Mobile Enhancement Utilities
 * Provides better UX for mobile users
 */
export declare const isMobileDevice: () => boolean;
export declare const smoothScrollToElement: (elementId: string, offset?: number) => void;
export declare const triggerHapticFeedback: (type?: "light" | "medium" | "heavy") => void;
export declare const preventDoubleTapZoom: () => void;
export declare const isKeyboardOpen: () => boolean;
export declare const addTouchFeedback: () => void;
export declare const optimizeScrolling: () => void;
export declare const handleViewportChange: (callback: (isPortrait: boolean) => void) => void;
export declare const lockBodyScroll: () => (() => void);
export declare const setupMobileMenu: () => void;
export declare const initMobileEnhancements: () => void;
//# sourceMappingURL=mobile-enhancements.d.ts.map