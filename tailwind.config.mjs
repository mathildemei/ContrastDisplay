/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                primary: ["ContrastDisplay"], // Definer primær skrifttype
                secondary: ["Inter", "sans-serif"], // Definer sekundær skrifttype
              },
            colors: {
                white: "#ffffff",
                black: "#000000",
                "beige": "#F3F1E6",
              },
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
