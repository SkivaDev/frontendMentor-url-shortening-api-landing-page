/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cyan': 'hsl(180, 66%, 49%)',
				'light-cyan': 'hsl(180, 65%, 74%)',
				'dark-violet': 'hsl(257, 27%, 26%)',
				'red': 'hsl(0, 87%, 67%)',
				'gray': 'hsl(0, 0%, 75%)',
				'grayish-violet': 'hsl(257, 7%, 63%)',
				'very-dark-blue': 'hsl(255, 11%, 22%)',
				'very-dark-violet': 'hsl(260, 8%, 14%)',
				"light-gray": "hsl(230, 25%, 95.29%)"
			},
			backgroundColor: {
				'cyan': 'hsl(180, 66%, 49%)',
				'light-cyan': 'hsl(180, 65%, 74%)',
				'dark-violet': 'hsl(257, 27%, 26%)',
				'red': 'hsl(0, 87%, 67%)',
				'gray': 'hsl(0, 0%, 75%)',
				'grayish-violet': 'hsl(257, 7%, 63%)',
				'very-dark-blue': 'hsl(255, 11%, 22%)',
				'very-dark-violet': 'hsl(260, 8%, 14%)',
				"light-gray": "hsl(230, 25%, 95.29%)"
			},
			borderColor: {
				'grayish-violet': 'hsl(257, 7%, 63%)'
			}
		},
	},
	plugins: [],
}
