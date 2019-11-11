import { red } from "@material-ui/core/colors";

const theme = {
	palette: {
		primary: {
			// main: "#004C97",
			// main: "#1a3a6f",
			main: "#1A3B70",
			alternative1: "#00a4bd",
			alternative2: "#1C418A",
			alternative3: "rgb(40, 85, 130)",
			alternative4: "#234D9F",
			alternative5: "#186087",
			alternative6: "#0E203D",
			alternative7: "#2B63BD",
			alternative8: "#1D427D",
			alternative9: "#3A85FC",
			light: "#0060a7"
		},
		secondary: {
			// main: "#f9f9f6",
			main: "#eceff4",
			alternative: "#fff5ee",
			//dark: "#6c675c"
			dark: "#666a6e"
			//dark: "rgb(40, 85, 130)"
		},
		third: {
			main: "#edfcff",
			lightBlue: "#dff0f7",
			lightBlue2: "#c3eef5",
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
		// sansSerif: "'Source Sans Pro', sans-serif",
		sansSerif: "'Nunito', sans-serif",
		// sansSerif: "Avenir, sans-serif",
		// serif: "Avenir, serif",
		// serif: "Sorts Mill Goudy, serif",
		serif: "'Laila',serif",
		//avenir: "Avenir, sans-serif"
		// fontFamily: [ "Source Sans Pro", "Roboto", "sans-serif" ].join(",")
		fontFamily: [ "Nunito", "Roboto", "sans-serif" ].join(",")
	}
};

export default theme;
