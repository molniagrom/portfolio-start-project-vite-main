import "@testing-library/jest-dom";

// jsdom doesn't provide ResizeObserver — mock it for hooks like useParallax
class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}
(globalThis as unknown as { ResizeObserver: typeof ResizeObserverMock }).ResizeObserver = ResizeObserverMock;

// jsdom doesn't provide IntersectionObserver — mock it for framer-motion inView
class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}
(globalThis as unknown as { IntersectionObserver: typeof IntersectionObserverMock }).IntersectionObserver = IntersectionObserverMock;

// jsdom doesn't provide matchMedia — mock it for hooks like useReducedMotion
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    }),
});

// Initialize i18next so useTranslation() works in tests
import "../src/i18n/i18n";