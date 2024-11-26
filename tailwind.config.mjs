/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				wdbg : "#008080",
				wdbar : "#000278",
				wdwd : "#BEBEBE",
			},
			fontFamily :{
				'W98' : 'w98'
			  }
		},
	},
	plugins: [],
}
