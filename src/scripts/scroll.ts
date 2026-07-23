/**
 * Shared rAF-throttled scroll binding.
 *
 * Replaces the `ticking` / `requestUpdate` / scroll+resize boilerplate that was
 * copy-pasted across the motion components — and which one call site (the
 * header tone) had simply forgotten, leaving it unthrottled.
 *
 * Pass `within` to gate the work on an element being anywhere near the
 * viewport. Handlers for sections far down the page otherwise keep measuring
 * and writing on every frame of every scroll.
 */
export function onScroll(update: () => void, within?: Element | null): () => void {
    let ticking = false;
    let attached = false;

    const tick = () => {
        ticking = false;
        update();
    };

    const request = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(tick);
    };

    const attach = () => {
        if (attached) return;
        attached = true;
        window.addEventListener("scroll", request, { passive: true });
        window.addEventListener("resize", request, { passive: true });
        request();
    };

    const detach = () => {
        if (!attached) return;
        attached = false;
        window.removeEventListener("scroll", request);
        window.removeEventListener("resize", request);
    };

    let observer: IntersectionObserver | undefined;

    if (within) {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => (entry.isIntersecting ? attach() : detach()));
            },
            // Generous margin so the effect is already settled before it shows.
            { rootMargin: "100% 0px" }
        );
        observer.observe(within);
        update();
    } else {
        attach();
    }

    return () => {
        detach();
        observer?.disconnect();
    };
}
