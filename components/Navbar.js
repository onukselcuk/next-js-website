import ActiveLink from "./ActiveLink";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	button: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.main,
		fontFamily: theme.typography.sansSerif,
		letterSpacing: "1px",
		padding: "8px 25px",
		"&:hover": {
			backgroundColor: theme.palette.third.dark,
			color: theme.palette.secondary.main
		}
	},
	topBar: {
		width: "100%",
		height: "30px",
		backgroundColor: theme.palette.third.dark,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	topBarWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		color: theme.palette.primary.main
	},
	topBarContacts: {
		display: "flex",
		alignItems: "center",
		color: theme.palette.third.main
	},
	topBarText: {
		margin: "0 1rem",
		fontSize: "1.6rem"
	},
	topBarLink: {
		textDecoration: "none",
		fontSize: "1.6rem",
		"&:hover": {
			textDecoration: "underline"
		},
		"&:visited": {
			textDecoration: "none",
			color: theme.palette.third.main
		}
	},
	toolbar: {
		padding: 0,
		margin: 0,
		backgroundColor: theme.palette.primary.main,
		overflow: "hidden"
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
	navBar: {
		display: "flex",
		alignItems: "baseline"
	},
	navLink: {
		position: "relative",
		textDecoration: "none",
		margin: "0 10px",
		color: theme.palette.secondary.main,
		fontWeight: "600",
		fontSize: "2rem",
		transition: "all 200ms ease-in-out",
		"&::before": {
			content: "close-quote",
			position: "absolute",
			width: 0,
			height: "120%",
			borderBottom: `2px solid ${theme.palette.third.dark} `,
			top: 0,
			left: "-3%",
			transition: "all 400ms ease-in-out"
		},
		"& svg": {
			transition: "all 400ms ease-in-out"
		},
		"&:hover": {
			"&::before": {
				width: "106%"
			},
			"& svg": {
				transform: "rotate(180deg)"
			}
		}
	},
	expandMoreIcon: {
		position: "relative",
		top: "5px"
	},
	activeLink: {
		"&::before": {
			content: "close-quote",
			position: "absolute",
			width: "106%",
			height: "120%",
			borderBottom: `2px solid ${theme.palette.third.dark} `,
			top: 0,
			left: "-3%"
		}
	}
}));

export default () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={classes.topBar}>
				<div className={classes.topBarWrapper}>
					<div className={classes.languageSelections}>
						<a target="_blank" href="https://www.istanbulsmilecenter.com" className={classes.topBarLink} />
					</div>
					<div className={classes.topBarContacts}>
						<WhatsAppIcon />
						<p className={classes.topBarText}>Call or Text us on Whatsapp</p>
						<a
							target="_blank"
							href="https://wa.me/905309492470?text=Hi+Istanbul+Smile+Center.+I+have+a+question."
							className={classes.topBarLink}
						>
							+90 530 949 24 70
						</a>
					</div>
				</div>
			</div>
			<Toolbar className={classes.toolbar} disableGutters={true}>
				<header className={classes.header}>
					<div className={classes.headerDiv}>
						<div>
							<Logo />
						</div>
						<nav className={classes.navBar}>
							<ActiveLink href="/" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Home</a>
							</ActiveLink>
							<ActiveLink href="/treatments" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>About Us</a>
							</ActiveLink>
							<ActiveLink href="/treatments" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>
									Treatments<ExpandMoreIcon className={classes.expandMoreIcon} />
								</a>
							</ActiveLink>
							<ActiveLink href="/privileges" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Privileges & Itinerary</a>
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
		</React.Fragment>
	);
};