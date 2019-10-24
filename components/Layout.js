import Link from "next/link";
import Head from "next/head";
import ActiveLink from "./ActiveLink";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./logos-icons/Logo";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import {
	faClipboardList,
	faTeeth,
	faTag,
	faPhoneAlt,
	faTooth,
	faMapMarkerAlt,
	faGlobe
} from "@fortawesome/free-solid-svg-icons";
import LogoFooter from "./logos-icons/LogoFooter";
import clsx from "clsx";

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
	},
	footerToolbar: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.secondary.main
	},
	footer: {
		display: "flex",
		width: "80%",
		margin: "1rem auto",
		justifyContent: "space-between",
		paddingBottom: "1.5rem"
	},
	footerHeader: {
		fontSize: "2.1rem",
		fontWeight: "400",
		margin: "10px 0 5px 0"
	},
	treatmentsWrapperBox: {
		display: "flex"
	},
	treatmentsRightBox: {
		marginLeft: "3rem"
	},
	footerNavigation: {
		display: "flex",
		flexDirection: "column"
	},
	footerLinkDiv: {
		display: "flex",
		margin: "4px 0"
	},
	footerLink: {
		color: theme.palette.secondary.main,
		textDecoration: "none",
		transition: "all 400ms ease-in-out",
		marginLeft: "6px",
		fontSize: "1.7rem",
		"&:hover": {
			textDecoration: "underline"
		}
	},

	fontAwesomeIconWrapper: {
		width: "20px"
	},
	footerAddressWrapper: {
		display: "flex"
	},
	footerGetInTouchDiv: {
		width: "35%"
	},
	addressLink: {
		marginLeft: 0
	},
	footerInternationalWrapper: {
		marginTop: "1rem"
	},
	footerParagraph: {
		marginLeft: "6px",
		fontSize: "1.7rem"
	},
	secondFooter: {
		backgroundColor: theme.palette.third.dark,
		color: theme.palette.secondary.main
	},
	secondFooterWrapper: {
		width: "80%",
		margin: "0 auto",
		padding: "5px 0",
		display: "flex",
		justifyContent: "space-between"
	},
	developerLink: {
		textDecoration: "none",
		color: theme.palette.secondary.main,
		"&:visited": {
			textDecoration: "none"
		},
		"&:hover": {
			textDecoration: "underline"
		}
	}
}));

const Layout = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Head>
				<title key="title">{props.title}</title>
			</Head>
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
			{props.children}
			<Toolbar className={classes.footerToolbar}>
				<footer className={classes.footer}>
					<div>
						<LogoFooter />
					</div>
					<div className={classes.footerNavigation}>
						<h3 className={classes.footerHeader}>Navigation</h3>
						<div className={classes.footerLinkDiv}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faAddressCard} />
							</div>
							<Link href="/about">
								<a className={classes.footerLink}>About Us</a>
							</Link>
						</div>
						<div className={classes.footerLinkDiv}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faClipboardList} />
							</div>
							<Link href="/privileges">
								<a className={classes.footerLink}>Privileges & Itinerary</a>
							</Link>
						</div>
						<div className={classes.footerLinkDiv}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTeeth} />
							</div>
							<Link href="/before-after">
								<a className={classes.footerLink}>Before-After</a>
							</Link>
						</div>
						<div className={classes.footerLinkDiv}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTag} />
							</div>
							<Link href="/prices">
								<a className={classes.footerLink}>Prices & Cost Calculator</a>
							</Link>
						</div>
						<div className={classes.footerLinkDiv}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faPhoneAlt} />
							</div>
							<Link href="/contact">
								<a className={classes.footerLink}>Contact Us</a>
							</Link>
						</div>
					</div>
					<div className={classes.footerNavigation}>
						<h3 className={classes.footerHeader}>Popular Treatments</h3>
						<div className={classes.treatmentsWrapperBox}>
							<div className={classes.treatmentsLeftBox}>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/about">
										<a className={classes.footerLink}>Dental Implants</a>
									</Link>
								</div>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/privileges">
										<a className={classes.footerLink}>Dental Crowns</a>
									</Link>
								</div>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/before-after">
										<a className={classes.footerLink}>Dental Veneers</a>
									</Link>
								</div>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/prices">
										<a className={classes.footerLink}>Orthodontics</a>
									</Link>
								</div>
							</div>
							<div className={classes.treatmentsRightBox}>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/contact">
										<a className={classes.footerLink}>Cosmetic Dentistry</a>
									</Link>
								</div>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/contact">
										<a className={classes.footerLink}>Pediatric Dentistry</a>
									</Link>
								</div>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/contact">
										<a className={classes.footerLink}>Smile Makeover</a>
									</Link>
								</div>
								<div className={classes.footerLinkDiv}>
									<div className={classes.fontAwesomeIconWrapper}>
										<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
									</div>
									<Link href="/contact">
										<a className={classes.footerLink}>Teeth Whitening</a>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className={clsx(classes.footerNavigation, classes.footerGetInTouchDiv)}>
						<h3 className={classes.footerHeader}>Get in Touch</h3>
						<div className={classes.footerAddressWrapper}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faMapMarkerAlt} />
							</div>
							<p className={classes.footerParagraph}>Our Address</p>
						</div>
						<a
							target="_blank"
							href="https://www.google.com/maps/place/%C4%B0stanbul+Smile+Center+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi/@40.9914481,28.832006,17z/data=!3m1!4b1!4m5!3m4!1s0x14caa3147e2cba65:0xb6eaeab3d94bfd80!8m2!3d40.9914441!4d28.8341947"
							className={clsx(classes.footerLink, classes.addressLink)}
						>
							Ataköy 7-8-9-10. Kısım Mah. Çobançeşme E-5 Yanyol Cad. Ataköy Towers B Blok No:20 Kat:1
							Daire:24, 34212 Bakırköy/Istanbul/Turkey
						</a>
						<div className={clsx(classes.footerAddressWrapper, classes.footerInternationalWrapper)}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGlobe} />
							</div>
							<p className={classes.footerParagraph}>International Patients Department</p>
						</div>
						<a target="_blank" href="/" className={clsx(classes.footerLink, classes.addressLink)}>
							Chat with Us
						</a>
						<a
							target="_blank"
							href="https://wa.me/905309492470?text=Hi+Istanbul+Smile+Center.+I+have+a+question."
							className={clsx(classes.footerLink, classes.addressLink)}
						>
							Call Us On Whatsapp Free at +90 530 949 24 70
						</a>

						<a
							target="_blank"
							href="mailto:contact@istanbulsmilecenter.com"
							className={clsx(classes.footerLink, classes.addressLink)}
						>
							Or Send us an email at contact@istanbulsmilecenter.com
						</a>
					</div>
				</footer>
			</Toolbar>
			<footer className={classes.secondFooter}>
				<div className={classes.secondFooterWrapper}>
					<div>&copy; 2019 Istanbul Smile Center Dental Clinic</div>
					<a className={classes.developerLink} href="mailto:devonukselcuk@gmail.com">
						Developed and designed by onukDesign
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
