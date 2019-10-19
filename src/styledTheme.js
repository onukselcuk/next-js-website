import { red } from "@material-ui/core/colors";

const theme = {
	palette: {
		primary: {
			main: "#004C97",
			light: "#0060a7"
		},
		secondary: {
			main: "#f9f9f6",
			dark: "#6c675c"
		},
		third: {
			main: "#edfcff",
			dark: "#dff0f7"
		},
		original: {
			main: "#038989",
			secondary: "#FFA300",
			third: "#000"
		},
		error: {
			main: red.A400
		},
		background: {
			default: "#fff"
		}
	},
	typography: {
		htmlFontSize: 10,
		sansSerif: "Source Sans Pro, sans-serif",
		serif: "Sorts Mill Goudy, serif"
	}
};

export default theme;
