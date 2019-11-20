import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
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
		height: "35px",
		// backgroundColor: theme.palette.primary.alternative9,
		background: "linear-gradient(to left, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
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
		color: theme.palette.third.main
	},
	topBarText: {
		margin: "0 1rem",
		fontSize: "1.6rem"
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
		}
	},
	toolbar: {
		padding: 0,
		margin: 0,
		// backgroundColor: theme.palette.primary.main,
		background: "linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)"
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
		alignItems: "center",
		[sizes.down("xl")]: {
			width: "90%"
		},
		[sizes.down("lg")]: {
			width: "95%"
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
		color: theme.palette.secondary.main
	},
	drawerButtonWrapper: {
		display: "none",

		[sizes.down("lg")]: {
			display: "block"
		}
	},
	menuButton: {},
	menuIcon: {
		fontSize: "3.5rem"
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
		Tawk_API.maximize();
	};

	return (
		<React.Fragment>
			<div className={classes.topBar}>
				<div className={classes.topBarWrapper}>
					<div className={classes.languageSelections}>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.istanbulsmilecenter.com"
							className={classes.topBarLink}
						/>
					</div>
					<div className={classes.topBarContacts}>
						<WhatsAppIcon />
						<p className={classes.topBarText}>WhatsApp</p>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://wa.me/905510413230?text=Hi%20Istanbul%20Smile%20Center"
							className={classes.topBarLink}
						>
							+90 551 041 32 30
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
							<ActiveLink href="/about" activeClassName={classes.activeLink}>
								<a className={classes.navLink}>About Us</a>
							</ActiveLink>
							<div className={classes.treatmentsLinkWrapper}>
								<ActiveLink href="/treatments" activeClassName={classes.activeLink}>
									<a className={clsx(classes.navLink, classes.treatmentsLink, "treatmentLinkExtra")}>
										Treatments<ExpandMoreIcon className={classes.expandMoreIcon} />
									</a>
								</ActiveLink>
								<div className={classes.treatmentsDropdownWrapper}>
									<List
										className={classes.dropdownListWrapper}
										component="nav"
										aria-label="secondary treatments"
									>
										<Link href="/treatments/[pid]" as="/treatments/dental-implants">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dental Implants" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/dental-crowns">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dental Crowns" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/dental-veneers">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dental Veneers" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/cosmetic-dentistry">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Cosmetic Dentistry" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/cosmetic-dentistry">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Orthodontics & Invisalign" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/dentures">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Dentures" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/pediatric-dentistry">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Pediatric Dentistry" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/root-canal-treatment">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Root Canal Treatment" />
												</ListItem>
											</a>
										</Link>
										<Link href="/treatments/teeth-whitening">
											<a className={classes.treatmentLink}>
												<ListItem className={classes.dropdownItemText} button>
													<ListItemText primary="Teeth Whitening" />
												</ListItem>
											</a>
										</Link>
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
