/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type Lenis from "lenis";

declare global {
    interface Window {
        /**
         * Shared Lenis instance, absent when reduced motion is requested or on
         * touch devices. Deliberately not called `lenis` — the library ships its
         * own `Window.lenis` global whose shape would win and break this.
         */
        __arLenis?: Lenis;
        /** Set once the intro sequence has handed off to the page. */
        __introDone?: boolean;
    }
}

export {};
