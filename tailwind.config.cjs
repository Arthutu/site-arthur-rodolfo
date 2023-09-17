/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
        screens: {
            "xs": "375px",
            ...defaultTheme.screens,
        },
        extend: {
            keyframes: {   
                wave: {
                    "0%": {transform: "rotate(0.0deg)"},
                    "10%": {transform: "rotate(14.0deg)"},
                    "20%": {transform: "rotate(-8.0deg)"},
                    "30%": {transform: "rotate(14.0deg)"},
                    "40%": {transform: "rotate(-4.0deg)"},
                    "50%": {transform: "rotate(10.0deg)"},
                    "60%": {transform: "rotate(0.0deg)"},
                    "100%": {transform: "rotate(0.0deg)"},
                }
            }
        },
        animation: {
            wave: "wave 3.5s  infinite"
        }
    },
    darkMode: "class",
    plugins: [],
};
