import { makeStyles } from "@material-ui/core/styles";
import NavbarAd from "./NavbarAd";
import FooterAd from "./FooterAd";

const useStyles = makeStyles((theme) => ({
	"@global": {
		"*, *::before, *::after": {
			margin: 0,
			padding: 0,
			boxSizing: "inherit"
			// border: "1px solid black"
		},
		html: {
			fontSize: "62.5%",
			boxSizing: "border-box",
			fontFamily: theme.typography.sansSerif,
			scrollBehavior: "smooth",
			width: "100%"
		},
		body: {
			fontSize: "1.6rem",
			fontWeight: 400,
			overflowX: "hidden",
			backgroundColor: theme.palette.secondary.alternative2,
			width: "100%"
		},
		".colorPath": {
			transition: "all 200ms"
		},
		"#__next": {
			width: "100%"
		}
	},
	root: {
		margin: 0,
		padding: 0,
		minHeight: "100vh",
		width: "100%"
	}
}));

const LayoutAd = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<NavbarAd />
			{props.children}
			<FooterAd handleCallbackOpen={props.handleCallbackOpen} />
		</div>
	);
};

export default LayoutAd;
