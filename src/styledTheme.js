import { red } from "@material-ui/core/colors";

const theme = {
	palette: {
		primary: {
			// main: "#004C97",
			main: "#1a3a6f",
			//main: "#18334e",
			//main: "rgb(40, 85, 130)",
			light: "#0060a7"
		},
		secondary: {
			// main: "#f9f9f6",
			main: "#eceff4",
			alternative: "#fff5ee",
			//dark: "#6c675c"
			//dark: "#666a6e"
			dark: "rgb(40, 85, 130)"
		},
		third: {
			main: "#edfcff",
			lightBlue: "#dff0f7",
			//dark: "#c3eef5",
			dark: "#E94D65"
			// dark: "#0abea0"
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
		sansSerif: "'Source Sans Pro', sans-serif",
		// sansSerif: "Avenir, sans-serif",
		// serif: "Avenir, serif",
		serif: "Sorts Mill Goudy, serif"
		//avenir: "Avenir, sans-serif"
	}
};

export default theme;
