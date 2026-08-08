export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "inverse-primary": "#7A5B00",
                "on-primary-fixed": "#261C00",
                "surface-container-highest": "#323536",
                "outline-variant": "#444932",
                "on-tertiary": "#2d3133",
                "primary-fixed-dim": "#E0A800",
                "tertiary-container": "#e0e3e5",
                "surface-variant": "#323536",
                "surface": "#111415",
                "on-primary-container": "#7A5B00",
                "surface-container-lowest": "#0c0f10",
                "on-primary-fixed-variant": "#523A00",
                "primary-fixed": "#FFC400",
                "tertiary": "#ffffff",
                "primary": "#ffffff",
                "on-secondary-container": "#b3b5b6",
                "secondary-fixed": "#e1e3e4",
                "on-background": "#e1e3e4",
                "background": "#111415",
                "on-tertiary-container": "#616567",
                "tertiary-fixed-dim": "#c4c7c9",
                "on-tertiary-fixed": "#181c1e",
                "secondary-fixed-dim": "#c5c7c8",
                "on-surface": "#e1e3e4",
                "error-container": "#93000a",
                "surface-bright": "#373a3b",
                "surface-container-high": "#282a2b",
                "inverse-on-surface": "#2e3132",
                "on-tertiary-fixed-variant": "#434749",
                "error": "#ffb4ab",
                "secondary": "#c5c7c8",
                "on-surface-variant": "#c5c9ac",
                "outline": "#8f9378",
                "on-primary": "#3D2E00",
                "on-secondary-fixed": "#191c1d",
                "surface-dim": "#111415",
                "surface-container-low": "#191c1d",
                "on-secondary-fixed-variant": "#444748",
                "secondary-container": "#444748",
                "on-error-container": "#ffdad6",
                "inverse-surface": "#e1e3e4",
                "primary-container": "#FFC400",
                "surface-container": "#1d2021",
                "surface-tint": "#E0A800",
                "on-error": "#690005",
                "tertiary-fixed": "#e0e3e5",
                "on-secondary": "#2e3132"
            },
            "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            "spacing": {
                "base": "8px",
                "container-max": "1280px",
                "gutter": "24px",
                "margin-mobile": "16px",
                "margin-desktop": "48px",
                "section-gap": "120px"
            },
            "fontFamily": {
                "headline-xl-mobile": ["Anton"],
                "body-md": ["Hanken Grotesk"],
                "headline-xl": ["Anton"],
                "stats-number": ["Anton"],
                "display-lg": ["Anton"],
                "body-lg": ["Hanken Grotesk"],
                "label-caps": ["JetBrains Mono"],
                "headline-md": ["Anton"]
            },
            "fontSize": {
                "headline-xl-mobile": ["36px", { "lineHeight": "40px", "fontWeight": "400" }],
                "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "headline-xl": ["48px", { "lineHeight": "52px", "letterSpacing": "0.02em", "fontWeight": "400" }],
                "stats-number": ["32px", { "lineHeight": "32px", "fontWeight": "400" }],
                "display-lg": ["80px", { "lineHeight": "84px", "letterSpacing": "0.02em", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
                "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600" }],
                "headline-md": ["24px", { "lineHeight": "28px", "fontWeight": "400" }]
            },
            "keyframes": {
                "marquee": {
                    "0%": { "transform": "translateX(0%)" },
                    "100%": { "transform": "translateX(-50%)" }
                }
            },
            "animation": {
                "marquee": "marquee 40s linear infinite"
            }
        }
    },
    plugins: [],
}
