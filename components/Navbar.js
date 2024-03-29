import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import sizes from "../src/sizes";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer";

const useStyles = makeStyles((theme) => ({
	button: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.main,
		fontFamily: theme.typography.sansSerif,
		letterSpacing: "1px",
		padding: "8px 25px",
		fontWeight: "bold",
		"&:hover": {
			backgroundColor: theme.palette.third.dark,
			color: theme.palette.secondary.main
		},
		[sizes.down("lg")]: {
			display: "none"
		}
	},
	topBar: {
		width: "100%",
		// backgroundColor: theme.palette.primary.alternative9,
		background: "linear-gradient(to left, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[sizes.down("xs")]: {
			display: "none"
		}
	},
	topBarWrapper: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		color: theme.palette.primary.main,
		[sizes.down("xl")]: {
			width: "90%"
		},
		[sizes.down("lg")]: {
			width: "95%"
		}
	},
	topBarContacts: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		color: theme.palette.third.main,
		margin: "0 auto",
		width: "100%",
		flexWrap: "wrap"
	},
	topBarContact: {
		display: "flex",
		alignItems: "center",
		color: theme.palette.third.main,
		margin: ".7rem 0"
	},
	topBarText: {
		margin: "0 1rem 0 .5rem",
		fontSize: "1.6rem",
		[sizes.down("xxs")]: {
			fontSize: "1.5rem"
		}
	},
	topBarLink: {
		textDecoration: "none",
		fontSize: "1.6rem",
		transition: "all 250ms ease-in-out",
		"&:visited, &:link": {
			textDecoration: "none",
			color: theme.palette.third.main
		},
		"&:hover": {
			color: theme.palette.third.dark
		},
		[sizes.down("xxs")]: {
			fontSize: "1.5rem"
		}
	},
	topBarIcon: {
		color: theme.palette.third.dark
	},
	toolbar: {
		padding: 0,
		margin: 0,
		width: "100%",
		// backgroundColor: theme.palette.primary.main,
		background: "linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
		[sizes.down("lg")]: {
			overflow: "hidden"
		}
	},
	header: {
		width: "100%"
	},

	logoDiv: {
		[sizes.down("lg")]: {
			marginLeft: "50%",
			marginRight: "auto",
			transform: "translateX(-50%)"
		}
	},

	headerDiv: {
		margin: "0 auto",
		height: "100%",
		width: "80%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		[sizes.down("xl")]: {
			width: "90%"
		},
		[sizes.down("lg")]: {
			width: "95%",
			justifyContent: "flex-start"
		}
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
		transition: "all 400ms ease-in-out",
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
		},
		[sizes.down("lg")]: {
			display: "none"
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
	},
	activeTreatmentLink: {
		"& div": {
			color: theme.palette.third.dark
		}
	},
	treatmentsLink: {
		"&:hover ~ div": {
			visibility: "visible",
			opacity: 0.95
		}
	},
	treatmentsLinkWrapper: {
		position: "relative",
		"&:hover .treatmentLinkExtra::before": {
			content: "close-quote",
			position: "absolute",
			width: "106%",
			height: "120%",
			borderBottom: `2px solid ${theme.palette.third.dark} `,
			top: 0,
			left: "-3%"
		},
		"&:hover svg": {
			transform: "rotate(180deg)"
		}
	},
	treatmentsDropdownWrapper: {
		zIndex: 1000,
		width: "200%",
		backgroundColor: "black",
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		borderRadius: "5px",
		// border: `1px solid ${theme.palette.primary.main}`,
		top: "120%",
		left: "2%",
		// backgroundColor: theme.palette.primary.main,
		backgroundImage:
			"linear-gradient(to right bottom, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
		visibility: "hidden",
		opacity: 0,
		transition: "opacity 400ms ease-in-out",
		"&:hover": {
			visibility: "visible",
			opacity: 0.95
		}
	},
	treatmentLink: {
		textDecoration: "none"
	},
	dropdownListWrapper: {
		paddingTop: 0,
		paddingBottom: 0
	},
	dropdownItemText: {
		color: theme.palette.secondary.main,
		"& span": {
			fontSize: "1.8rem"
		}
	},
	drawerButtonWrapper: {
		display: "none",

		[sizes.down("lg")]: {
			display: "block"
		}
	},
	menuButton: {},
	menuIcon: {
		fontSize: "3.5rem",
		[sizes.down("sm")]: {
			fontSize: "3.2rem"
		},
		[sizes.down("xxs")]: {
			fontSize: "2.9rem"
		}
	}
}));

export default () => {
	const classes = useStyles();

	const [ state, setState ] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => (event) => {
		if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};

	return (
		<React.Fragment>
			<div className={classes.topBar}>
				<div className={classes.topBarWrapper}>
					<div className={classes.topBarContacts}>
						<div className={classes.topBarContact}>
							<WhatsAppIcon className={classes.topBarIcon} />
							<p className={classes.topBarText}>WhatsApp / International</p>
							<a
								target="_blank"
								rel="noopener noreferrer nofollow"
								href="https://wa.me/905362520072?text=Hi%20Istanbul%20Smile%20Center"
								className={classes.topBarLink}
							>
								+90 536 252 00 72
							</a>
						</div>
					</div>
				</div>
			</div>
			<Toolbar className={classes.toolbar} disableGutters={true}>
				<header className={classes.header}>
					<div className={classes.headerDiv}>
						<div className={classes.logoDiv}>
							<Logo />
						</div>
						<nav className={classes.navBar}>
							<ActiveLink href="/" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Home</a>
							</ActiveLink>
							<ActiveLink href="/about" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>About Us</a>
							</ActiveLink>
							<div className={classes.treatmentsLinkWrapper}>
								<Link href="#">
									<a className={clsx(classes.navLink, classes.treatmentsLink, "treatmentLinkExtra")}>
										Treatments<ExpandMoreIcon className={classes.expandMoreIcon} />
									</a>
								</Link>
								<div className={classes.treatmentsDropdownWrapper}>
									<List
										className={classes.dropdownListWrapper}
										component="nav"
										aria-label="secondary treatments"
									>
										<ActiveLink
											href="/treatments/dental-implants"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dental Implants" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/dental-crowns"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dental Crowns" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/dental-veneers"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dental Veneers" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/cosmetic-dentistry"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Cosmetic Dentistry" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/invisalign"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Invisalign" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/dentures"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dentures" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/pediatric-dentistry"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Pediatric Dentistry" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/root-canal-treatment"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Root Canal Treatment" />
												</ListItem>
											</a>
										</ActiveLink>
										<ActiveLink
											href="/treatments/teeth-whitening"
											activeClassName={classes.activeTreatmentLink}
										>
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Teeth Whitening" />
												</ListItem>
											</a>
										</ActiveLink>
									</List>
								</div>
							</div>
							<ActiveLink href="/privileges" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Privileges & Itinerary</a>
							</ActiveLink>
							<ActiveLink href="/prices" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Prices & Cost Calculator</a>
							</ActiveLink>
							<ActiveLink href="/contact" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>Contact Us</a>
							</ActiveLink>
						</nav>
						<div>
							<Button variant="contained" color="primary" className={classes.button} onClick={handleChat}>
								Chat&nbsp;Now
							</Button>
						</div>
						<div className={classes.drawerButtonWrapper}>
							<IconButton
								onClick={toggleDrawer("right", true)}
								edge="start"
								className={classes.menuButton}
								color="secondary"
								aria-label="menu"
							>
								<MenuIcon className={classes.menuIcon} />
							</IconButton>
						</div>
					</div>
				</header>
			</Toolbar>
			<div>
				<NavDrawer state={state} setState={setState} toggleDrawer={toggleDrawer} />
			</div>
		</React.Fragment>
	);
};
