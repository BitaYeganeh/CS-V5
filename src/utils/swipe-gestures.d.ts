/**
 * Mobile swipe gestures utility for enhanced mobile UX
 */
export interface SwipeConfig {
    threshold?: number;
    restraint?: number;
    allowedTime?: number;
    element?: HTMLElement;
}
export interface SwipeEvent {
    direction: 'left' | 'right' | 'up' | 'down';
    distance: number;
    duration: number;
    startPoint: {
        x: number;
        y: number;
    };
    endPoint: {
        x: number;
        y: number;
    };
}
export declare class SwipeHandler {
    private element;
    private threshold;
    private restraint;
    private allowedTime;
    private startX;
    private startY;
    private startTime;
    constructor(config?: SwipeConfig);
    private init;
    private handleTouchStart;
    private handleTouchEnd;
    private dispatchSwipeEvent;
    destroy(): void;
}
export declare function initCarouselSwipe(carousel: HTMLElement, onSwipe: (direction: 'left' | 'right') => void): SwipeHandler;
export declare function initNavigationSwipe(element: HTMLElement, onSwipe: (direction: SwipeEvent['direction']) => void): SwipeHandler;
export declare function initMobileSwipeGestures(): void;
export declare function addTouchFeedback(element: HTMLElement): void;
//# sourceMappingURL=swipe-gestures.d.ts.map