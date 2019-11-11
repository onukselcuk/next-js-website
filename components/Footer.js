import Link from "next/link";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
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
		margin: "4px 0",
		lineHeight: "1.2",
		"& svg, & a": {
			transition: "all 250ms ease-in-out"
		},
		"&:hover svg, &:hover a": {
			color: theme.palette.third.dark
		}
	},
	footerLink: {
		color: theme.palette.secondary.main,
		textDecoration: "none",
		transition: "all 250ms ease-in-out",
		marginLeft: "6px",
		fontSize: "1.7rem",
		"&:hover": {
			color: theme.palette.third.dark
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
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.secondary.main,
		borderTop: `2px solid ${theme.palette.primary.alternative8}`
	},
	secondFooterWrapper: {
		width: "80%",
		margin: "0 auto",
		padding: "10px 0",
		display: "flex",
		justifyContent: "space-between"
	},
	developerLink: {
		textDecoration: "none",
		color: theme.palette.secondary.main,
		transition: "all 250ms ease-in-out",
		"&:visited": {
			textDecoration: "none"
		},
		"&:hover": {
			color: theme.palette.third.dark
		}
	}
}));

export default () => {
	const classes = useStyles();
	return (
		<React.Fragment>
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
						<div className={classes.footerLinkDiv}>
							<div className={classes.fontAwesomeIconWrapper}>
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faChrome} />
							</div>
							<a target="_blank" href="https://istanbulsmilecenter.com" className={classes.footerLink}>
								Our Turkish Website
							</a>
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
