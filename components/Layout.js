import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";

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
			fontFamily: theme.typography.sansSerif
		},
		body: {
			fontSize: "1.6rem",
			fontWeight: 400
		},
		".colorPath": {
			transition: "all 200ms"
		}
	},
	root: {
		margin: 0,
		padding: 0
	},
	button: {
		margin: theme.spacing(1),
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.primary.main,
		fontFamily: theme.typography.sansSerif,
		letterSpacing: "1px",
		padding: "5px 20px",
		"&:hover": {
			backgroundColor: theme.palette.primary.light
		}
	},
	toolbar: {
		padding: 0,
		margin: 0,
		backgroundColor: theme.palette.secondary.main
	},
	header: {
		width: "100%"
	},

	headerDiv: {
		margin: "0 auto",
		height: "100%",
		width: "80%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center"
	},
	navLink: {
		textDecoration: "none",
		margin: "0 10px",
		color: theme.palette.secondary.dark,
		fontWeight: "600",
		fontSize: "1.8rem",
		transition: "all 200ms ease-in-out",
		"&:hover": {
			color: theme.palette.primary.main
		}
	}
}));

const Layout = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Toolbar className={classes.toolbar} disableGutters={true}>
				<header className={classes.header}>
					<div className={classes.headerDiv}>
						<div>
							<Link href="/">
								<a>
									<Logo />
								</a>
							</Link>
						</div>
						<nav className="navBar">
							<Link href="/">
								<a className={classes.navLink}>Home</a>
							</Link>
							<Link href="/treatments">
								<a className={classes.navLink}>About Us</a>
							</Link>
							<Link href="/treatments">
								<a className={classes.navLink}>Treatments</a>
							</Link>
							<Link href="/before-after">
								<a className={classes.navLink}>Before-After</a>
							</Link>
							<Link href="/prices">
								<a className={classes.navLink}>Prices</a>
							</Link>
							<Link href="/contact">
								<a className={classes.navLink}>Contact Us</a>
							</Link>
						</nav>
						<div>
							<Button variant="contained" color="primary" className={classes.button}>
								Chat Now
							</Button>
						</div>
					</div>
				</header>
			</Toolbar>
			{props.children}
		</div>
	);
};

export default Layout;
