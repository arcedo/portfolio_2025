/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat'],
				"dm-sans": ["DMSans"],
			},
			colors: {
				'black': '#222222',
				'accent': '#FFD60A',
				'primary': '#E2EAFC',
				'blue': '#C1D3FE',
			}
		},
	},
	plugins: [],
}
