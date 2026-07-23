/**
 * The site builds with `build.format: "file"` so Cloudflare serves slash-less
 * URLs without a 308, which leaves a `.html` suffix on `Astro.url.pathname` at
 * build time. Anything comparing against a public URL must normalise first.
 */
export function getCleanPath(url: URL): string {
    const path = url.pathname.replace(/\.html$/, "").replace(/\/index$/, "");
    return path === "" ? "/" : path;
}
