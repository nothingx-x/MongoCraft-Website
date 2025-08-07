/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./mdx-components.tsx"
	],
	theme: {
		extend: {
			aspectRatio: {},
			screens: {
				"medium-phone": "375px"
			},
			fontFamily: {
				sans: ["var(--font-atkinson-hyperlegible)"],
				header: ["var(--font-inter)"],
				mono: ["var(--font-jetbrains-mono)"]
			},
			colors: {
				primary: {
					50: "#e8f6ed",
					100: "#b9e3c9",
					200: "#8bd1a5",
					300: "#5cbf80",
					400: "#2dac5c",
					500: "#16a34a",
					600: "#12823b",
					700: "#0d622c",
					800: "#09411e",
					900: "#04210f"
				},

				secondary: {
					50: "#e8f2ec",
					100: "#b9d9c5",
					200: "#8ac09e",
					300: "#5ba677",
					400: "#2c8d50",
					500: "#15803D",
					600: "#116631",
					700: "#0d4d25",
					800: "#083318",
					900: "#041a0c"
				},

				accent: {},

				yellow: {
					50: "#fff9e8",
					100: "#fff3d1",
					200: "#ffe6a4",
					300: "#feda76",
					400: "#fecd49",
					500: "#fec11b",
					600: "#cb9a16",
					700: "#987410",
					800: "#664d0b",
					900: "#332705"
				},
				zinc: {
					50: "#F2F2F3",
					100: "#E4E6E7",
					200: "#C6C9CC",
					300: "#ACB0B4",
					400: "#91969C",
					500: "#747A81",
					600: "#5B6166",
					700: "#43474B",
					800: "#292B2E",
					900: "#111213",
					950: "#070808"
				}
			}
		}
	},
	plugins: []
};
