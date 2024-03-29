import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import LogoFooter from "./logos-icons/LogoFooter";
import clsx from "clsx";
import sizes from "../src/sizes";

const useStyles = makeStyles((theme) => ({
	footerToolbar: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.secondary.main
	},
	footer: {
		display: "flex",
		width: "80%",
		margin: "1rem auto",
		justifyContent: "space-between",
		paddingBottom: "1.5rem",
		[sizes.down("xl")]: {
			width: "90%"
		},
		[sizes.down("lg")]: {
			width: "95%"
		},
		[sizes.down("md")]: {
			flexWrap: "wrap"
		}
	},
	footerHeader: {
		fontSize: "2.1rem",
		fontWeight: "400",
		margin: "10px 0 5px 0"
	},
	treatmentsWrapperBox: {},
	treatmentsRightBox: {},
	footerNavigation: {
		display: "flex",
		flexDirection: "column",
		minWidth: "22rem"
	},
	popularTreatmentsNavigation: {},
	footerLinkDiv: {
		display: "flex",
		margin: "4px 0",
		lineHeight: "1.2",
		"& svg, & a": {
			transition: "all 250ms ease-in-out"
		},
		"&:hover svg, &:hover a": {
			color: theme.palette.third.dark
		}
	},
	treatmentLinkDiv: {
		marginBottom: ".8rem"
	},
	footerLink: {
		color: theme.palette.secondary.main,
		textDecoration: "none",
		transition: "all 250ms ease-in-out",
		marginLeft: "6px",
		fontSize: "1.7rem",
		cursor: "pointer",
		"&:hover": {
			color: theme.palette.third.dark
		}
	},
	logoDiv: {
		marginRight: "2rem",
		[sizes.down("md")]: {
			marginRight: 0
		}
	},

	fontAwesomeIconWrapper: {
		width: "20px"
	},
	footerAddressWrapper: {
		display: "flex"
	},
	footerGetInTouchDiv: {
		minWidth: "27rem",
		maxWidth: "38rem"
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
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.secondary.main,
		borderTop: `1px solid ${theme.palette.primary.alternative3}`
	},
	secondFooterWrapper: {
		width: "80%",
		padding: "10px 20px",
		display: "flex",
		justifyContent: "space-between",
		margin: "0 auto",
		[sizes.down("xl")]: {
			width: "90%"
		},
		[sizes.down("lg")]: {
			width: "95%"
		},
		[sizes.down("md")]: {
			flexWrap: "wrap",
			padding: "10px 0",
			width: "90%"
		}
	},
	copyright: {
		width: "40%",
		[sizes.down("md")]: {
			width: "100%"
		}
	},
	developerLink: {
		width: "60%",
		textDecoration: "none",
		color: theme.palette.secondary.main,
		transition: "all 250ms ease-in-out",
		"&:visited": {
			textDecoration: "none"
		},
		"&:hover": {
			color: theme.palette.third.dark
		},
		[sizes.down("md")]: {
			width: "100%"
		}
	}
}));

export default ({ handleCallbackOpen }) => {
	const classes = useStyles();
	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};

	return (
		<React.Fragment>
			<Toolbar className={classes.footerToolbar}>
				<footer className={classes.footer}>
					<div className={classes.logoDiv}>
						<LogoFooter />
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
							rel="noopener noreferrer nofollow"
							href="https://g.page/istanbulsmilecenter?share"
							className={clsx(classes.footerLink, classes.addressLink)}
						>
							Ataköy 7-8-9-10. Kısım Mah. Çobançeşme E-5 Yanyol Cad. Ataköy Towers B Blok No:20 Kat:1
							Daire:24, 34212 Bakırköy/Istanbul/Turkey
						</a>
					</div>
					<div className={clsx(classes.footerNavigation, classes.footerGetInTouchDiv)}>
						<h3 className={classes.footerHeader}>International Patients Department</h3>

						<a onClick={handleChat} className={clsx(classes.footerLink, classes.addressLink)}>
							Chat with Us
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer nofollow"
							href="https://wa.me/905362520072?text=Hi%20Istanbul%20Smile%20Center"
							className={clsx(classes.footerLink, classes.addressLink)}
						>
							WhatsApp / International: +90 536 252 00 72
						</a>

						<a className={clsx(classes.footerLink, classes.addressLink)} onClick={handleCallbackOpen}>
							Request A Call Back
						</a>
						<a href="/contact#form" className={clsx(classes.footerLink, classes.addressLink)}>
							Send Us A Form
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="mailto:contact@istanbulsmilecenter.com"
							className={clsx(classes.footerLink, classes.addressLink)}
						>
							Email: contact@istanbulsmilecenter.com
						</a>
					</div>
				</footer>
			</Toolbar>
			<footer className={classes.secondFooter}>
				<div className={classes.secondFooterWrapper}>
					<div className={classes.copyright}>&copy; Istanbul Smile Center Dental Clinic</div>
					<a
						className={classes.developerLink}
						href="mailto:devonukselcuk@gmail.com?subject=Web%20Development%20and%20Design&body=Hey%20onukDesign%2C"
						target="_blank"
						rel="noopener noreferrer"
					>
						Designed and Developed by onukDesign
					</a>
				</div>
			</footer>
		</React.Fragment>
	);
};
