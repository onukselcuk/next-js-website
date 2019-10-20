import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";
import ActiveLink from "./ActiveLink";

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
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.primary.main,
		fontFamily: theme.typography.sansSerif,
		letterSpacing: "1px",
		padding: "8px 25px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main
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
		position: "relative",
		textDecoration: "none",
		margin: "0 10px",
		color: theme.palette.secondary.dark,
		fontWeight: "600",
		fontSize: "2rem",
		transition: "all 200ms ease-in-out",
		"&::before": {
			content: "close-quote",
			position: "absolute",
			width: 0,
			height: "120%",
			borderBottom: `2px solid ${theme.palette.primary.main} `,
			top: 0,
			left: "-5%",
			transition: "all 400ms ease-in-out"
		},
		"&:hover": {
			color: theme.palette.primary.main,
			"&::before": {
				width: "110%"
			}
		}
	},
	activeLink: {
		color: theme.palette.primary.main
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
							<ActiveLink href="/" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Home</a>
							</ActiveLink>
							<ActiveLink href="/treatments" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>About Us</a>
							</ActiveLink>
							<ActiveLink href="/treatments" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Treatments</a>
							</ActiveLink>
							<ActiveLink href="/before-after" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Before-After</a>
							</ActiveLink>
							<ActiveLink href="/prices" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Prices & Cost Calculator</a>
							</ActiveLink>
							<ActiveLink href="/contact" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Contact Us</a>
							</ActiveLink>
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
