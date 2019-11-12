import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
	dropdownListWrapper: {
		paddingTop: 0,
		paddingBottom: 0
	},
	dropdownItemText: {
		color: theme.palette.secondary.main
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
						<p className={classes.topBarText}>WhatsApp</p>
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
										<Link href="/treatments/dental-implants">
											<ListItem button>
												<ListItemText
													className={classes.dropdownItemText}
													primary="Dental Implants"
												/>
											</ListItem>
										</Link>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Dental Veneers" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Dental Crowns" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Pediatric Dentistry" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Smile Makeover" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Teeth Whitening" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Dental Prosthesis" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Dental Bridge" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Inlay and Onlay Dental Restorations" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Root Canal Treatment" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Gummy Smile Correction" />
										</ListItem>
										<ListItem className={classes.dropdownItemText} button>
											<ListItemText primary="Composite Fillings" />
										</ListItem>
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
