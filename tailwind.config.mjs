/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				primary: "Aeonik"
			},
			backgroundImage: {
				'sample-one-desktop': "url('https://firebasestorage.googleapis.com/v0/b/dev-system2023.appspot.com/o/360%2Fservice3.webp?alt=media&token=a229d11a-e567-43cb-a82a-fd4cda28392d')"
			}
		},
	},
	plugins: [],
}
