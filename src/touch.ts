import { ref } from 'vue';

const isWindows = globalThis.navigator?.userAgent.includes('Windows');

const detectedTouch = ('ontouchstart' in globalThis) ||
    (globalThis.navigator?.maxTouchPoints > 0) ||
    ((globalThis.navigator as any)?.msMaxTouchPoints > 0);

export const isTouchDevice = ref((detectedTouch && !isWindows));
