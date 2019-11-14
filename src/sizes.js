export default {
	up () {},
	down (size) {
		const sizes = {
			xs: "36em", // 576px
			sm: "46.875em", // 750px
			md: "68.75em", //1100px
			lg: "82.5em", //1320px
			xl: "93.75em" //1500px
		};
		return `@media (max-width:${sizes[size]})`;
	},
	sizes: {
		xs: "36em", // 576px
		sm: "46.875em", // 750px
		md: "68.75em", //1100px
		lg: "82.5em", //1320px
		xl: "93.75em" //1500px
	}
};
