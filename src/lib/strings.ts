/** Site-wide UI strings. Single language — see also src/lib/path.ts. */
export const strings = {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.homeLabel": "Arthur Rodolfo — Home",
    "nav.primary": "Primary navigation",
    "nav.footer": "Footer navigation",
    "skip.content": "Skip to content",
    "a11y.newTab": "opens in a new tab",
    "a11y.capabilities": "capabilities",
    "a11y.dateTo": "to",
    "404.title": "Page not found",
    "404.description": "Sorry, we could not find",
} as const;

export type StringKey = keyof typeof strings;

export function t(key: StringKey): string {
    return strings[key];
}
