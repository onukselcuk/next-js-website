import Link from "next/link";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import SvgIcon from "@material-ui/core/SvgIcon";
import LiveChat from "../components/logos-icons/LiveChat";
import VideoCallConsultation from "../components/logos-icons/VideoCallConsultation";
import TreatmentPlan from "../components/logos-icons/TreatmentPlan";
import AirportGreeting from "../components/logos-icons/AirportGreeting";
import AirportHotelTransfer from "../components/logos-icons/AirportHotelTransfer";
import ClinicHotelTransfer from "../components/logos-icons/ClinicHotelTransfer";
import HotelBookingAssistance from "../components/logos-icons/HotelBookingAssistance";
import HotelDiscounts from "../components/logos-icons/HotelDiscounts";
import MultilingualAssistance from "../components/logos-icons/MultilingualAssistance";
import TravelToursDiscounts from "../components/logos-icons/TravelToursDiscounts";
import DentalImplant from "../components/logos-icons/DentalImplants";
import sTheme from "../src/styledTheme";
import clsx from "clsx";
import DentalCrown from "../components/logos-icons/DentalCrown";
import DentalVeneer from "../components/logos-icons/DentalVeneer";
import Braces from "../components/logos-icons/Braces";
import CosmeticDentistry from "../components/logos-icons/CosmeticDentistry";
import PediatricDentistry from "../components/logos-icons/PediatricDentistry";
import SmileMakeover from "../components/logos-icons/SmileMakeover";
import TeethWhitening from "../components/logos-icons/TeethWhitening";
import IstanbulSilhouette from "../components/logos-icons/IstanbulSilhouette";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarIcon from "@material-ui/icons/Star";
import GoogleLogo from "../components/logos-icons/GoogleLogo";
import MobileDetect from "mobile-detect";
import GoogleLogoFull from "../components/logos-icons/GoogleLogoFull";
import GoogleMyBusinessLogo from "../components/logos-icons/GoogleMyBusinessLogo";
import { useState } from "react";
import sizes from "../src/sizes";
import reviews from "../src/reviews";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2)
	},
	button: {
		margin: theme.spacing(0),
		// backgroundColor: theme.palette.third.dark,
		backgroundImage: `linear-gradient(to right,${theme.palette.third.dark},${theme.palette.third.dark})`,
		padding: "20px 120px",
		marginTop: "30px",
		borderRadius: "35px",
		fontSize: "2rem",
		letterSpacing: "1px",
		color: theme.palette.secondary.main,
		position: "relative",
		zIndex: 100,
		"&::before": {
			borderRadius: "inherit",
			content: "close-quote",
			backgroundImage:
				"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 0,
			width: "100%",
			height: "100%",
			zIndex: -100,
			transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
			display: "block"
		},
		"&:hover": {
			// color: theme.palette.secondary.main,
			// backgroundColor: theme.palette.primary.main
			"&::before": {
				opacity: 1
			}
			// backgroundImage:
			// 	"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)"
		},
		[sizes.down("lg")]: {
			padding: "20px 90px"
		},
		[sizes.down("mdsm")]: {
			padding: "15px 70px",
			fontSize: "1.8rem"
		},
		[sizes.down("sm")]: {
			padding: "10px 50px",
			fontSize: "1.6rem"
		},
		[sizes.down("xs")]: {
			padding: "5px 40px"
		}
	},
	regularButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		// backgroundColor: theme.palette.third.dark,
		backgroundImage: `linear-gradient(to right,${theme.palette.third.dark},${theme.palette.third.dark})`,
		zIndex: 100,
		letterSpacing: "1px",
		padding: "10px 25px",
		color: theme.palette.secondary.main,
		position: "relative",
		"&::before": {
			borderRadius: "inherit",
			content: "close-quote",
			letterSpacing: "inherit",
			backgroundImage:
				"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 0,
			width: "100%",
			height: "100%",
			zIndex: -100,
			transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
			display: "block"
		},
		"&:hover": {
			// backgroundColor: theme.palette.primary.main,
			"&::before": {
				opacity: 1
			}
			// background:
			// 	"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			// color: theme.palette.secondary.main
		}
	},
	servicePaper: {
		textAlign: "center",
		minWidth: "12rem",
		width: "18%",
		margin: "1rem 1rem",
		padding: "1rem",
		border: `1px solid ${theme.palette.primary.main}`,
		transition: "all 200ms ease-in-out",
		cursor: "pointer",
		backgroundColor: theme.palette.secondary.alternative2
	},
	servicePaperCard: {
		minWidth: "12rem",
		width: "23%",
		padding: 0
	},
	svgIcon: {
		marginTop: "5px",
		width: "10rem",
		minHeight: "10rem",
		[sizes.down("xl")]: {
			width: "9rem",
			minHeight: "9rem"
		},
		[sizes.down("lg")]: {
			width: "8rem",
			minHeight: "8rem"
		},
		[sizes.down("md")]: {
			width: "6rem",
			minHeight: "6rem"
		}
	},
	svgIconTreatment: {
		marginTop: "15px"
	},
	servicePaperTitle: {
		textAlign: "center",
		color: theme.palette.primary.main,
		marginTop: "10px",
		fontSize: "2.5rem",
		[sizes.down("xl")]: {
			fontSize: "2rem"
		},
		[sizes.down("lg")]: {
			fontSize: "1.8rem"
		}
	},
	cardContent: {
		paddingTop: 0
	},
	servicePaperCardTitle: {
		fontSize: "3rem",
		[sizes.down("xl")]: {
			fontSize: "2.5rem"
		},
		[sizes.down("lg")]: {
			fontSize: "2rem"
		}
	},
	treatmentsButton: {
		marginRight: "auto",
		marginLeft: "50%",
		transform: "translateX(-50%)",
		padding: "1rem 6rem"
	},
	cardActionArea: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "flex-start"
	},
	istanbulSilhoutteSvg: {
		width: "100%",
		height: "400px",
		[sizes.down("md")]: {
			height: "300px"
		},
		[sizes.down("sm")]: {
			height: "250px"
		},
		[sizes.down("xs")]: {
			height: "200px"
		}
	},
	".react-multi-carousel-item": {
		width: "100px",
		height: "100px",
		backgroundColor: "black"
	},
	reviewPaper: {
		width: "95%",
		textAlign: "center"
	},
	star: {
		color: "#e7711b",
		[sizes.down("xxxs")]: {
			fontSize: "2rem"
		}
	},
	googleSvgIcon: {
		position: "absolute",
		width: "20%",
		height: "30%",
		top: "15%",
		right: 0
	},
	googleReviewBannerPaper: {
		width: "560px",
		padding: "1rem",
		borderRadius: "25px",
		[sizes.down("xs")]: {
			width: "400px"
		},
		[sizes.down("xxxs")]: {
			width: "290px"
		}
	},
	googleLogoFull: {
		width: "200px",
		height: "80px",
		marginLeft: "2rem",
		[sizes.down("xxxs")]: {
			width: "125px",
			height: "50px"
		}
	},
	googleMyBusinessLogo: {
		width: "150px",
		height: "100px",
		[sizes.down("xs")]: {
			display: "none"
		}
	},
	patientImg: {
		width: "90%",
		minWidth: "144px",
		flexShrink: 0,
		borderRadius: "200px",
		boxShadow: "2px 2px 14px 3px rgba(0,0,0,0.3)",
		[sizes.down("xl")]: {
			fontSize: "2.5rem"
		}
	}
}));

const Index = (props) => {
	const paperElevation = 2;
	const reviewPaperElevation = 5;

	// const pics = {
	// 	yasin: [ doctorImg, doctorImg2 ],
	// 	sevil: [ doctorImg, doctorImg2 ],
	// 	yavuz: [ doctorImg, doctorImg2 ]
	// };

	// const handleMouseOver = (e) => {
	// 	e.target.src = pics[e.target.name][1];
	// };
	// const handleMouseOut = (e) => {
	// 	e.target.src = pics[e.target.name][0];
	// };

	const classes = useStyles();
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

	const [ autoPlay, setAutoPlay ] = useState(true);
	const handleReviewPaperAutoPlay = () => {
		setAutoPlay(!autoPlay);
	};

	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};

	return (
		<React.Fragment>
			<Head>
				<title key="title">Istanbul Smile Center | Let's Make Your Smile Perfect</title>
			</Head>
			<div className="hero-image-div">
				<div className="hero-image-perfect-wrapper">
					<h1 className="hero-image-perfect">
						Let's make your <br className="perfect-break" />
						<span className="hero-image-perfect-smile-text">smile</span>
						<br className="perfect-break" /> perfect
					</h1>
					<Button variant="contained" color="primary" className={classes.button} onClick={handleChat}>
						Chat with us
					</Button>
				</div>
			</div>
			<section className="our-services-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Your Privileges</h2>
					<p className="our-services-header-paragraph-text">
						At Istanbul Smile Center, we offer unique and free services to our international patients to
						make their dental treatments super easy and enjoying as no other clinic can.
					</p>
				</div>
				<div className="our-services-wrapper">
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<LiveChat />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Live Chat
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<VideoCallConsultation />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Video Call Consultation
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<TreatmentPlan />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Treatment Plan
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<AirportGreeting />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Airport Greeting
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<AirportHotelTransfer />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Airport-Hotel Transfers
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<ClinicHotelTransfer />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Clinic-Hotel Transfers
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<HotelBookingAssistance />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Hotel Booking Assistance
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<HotelDiscounts />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Hotel Discounts
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<MultilingualAssistance />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Multilingual Assistance
							</Typography>
						</Paper>
					</Link>
					<Link href="/privileges&itinerary">
						<Paper className={classes.servicePaper} elevation={paperElevation}>
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<TravelToursDiscounts />
							</SvgIcon>
							<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
								Travel Tours Discounts
							</Typography>
						</Paper>
					</Link>
				</div>
				<div className="dental-treatments-buttons-div">
					<Button
						variant="contained"
						color="primary"
						className={clsx(classes.regularButton, classes.treatmentsButton)}
						onClick={handleChat}
					>
						Chat&nbsp;Now
					</Button>
					<Link href="/privileges">
						<a className="clinic-intro-link">Learn more abut your privileges and itinerary</a>
					</Link>
				</div>
			</section>
			<section className="isc-intro-section">
				<div className="clinic-image-collage-div" />
				<div className="clinic-intro-div">
					<div className="clinic-intro-wrapper">
						<h4 className="clinic-exclusive-text">An Exclusive Dental Clinic</h4>
						<h2 className="clinic-name-header">
							Istanbul <span className="clinic-smile-center-text">Smile </span> Center
						</h2>
						<p className="clinic-intro-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel eaque dignissimos error.
							Fugit, corporis laboriosam. Minus dolor harum facilis, optio eius, saepe, nesciunt
							voluptatem suscipit temporibus labore expedita quidem molestiae! Lorem ipsum, dolor sit amet
							consectetur adipisicing elit. Doloribus rem ducimus quidem tempore fugiat obcaecati.
							Necessitatibus quod consequuntur libero error vel dicta ad ullam ea! Facilis beatae sapiente
							voluptatem vel. Error optio, totam laborum rem nihil culpa quidem odio numquam corporis sunt
							tenetur veniam, reiciendis dicta eum obcaecati eaque similique hic quae voluptate sapiente,
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti soluta alias aliquam ipsa
							a, ducimus dolorem quisquam inventore! Sapiente velit quae facilis aperiam possimus
							distinctio laudantium odio, quidem suscipit accusamus?
						</p>
						<div className="clinic-intro-buttons-div">
							<Button
								variant="contained"
								color="primary"
								className={classes.regularButton}
								onClick={handleChat}
							>
								Chat&nbsp;Now
							</Button>
							<Link href="/about">
								<a className="clinic-intro-link">Learn more about us</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="our-services-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Dental Treatments</h2>
					<p className="our-services-header-paragraph-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia deleniti beatae quam
						incidunt doloribus. Culpa numquam tenetur fugiat modi debitis, est, aut earum perspiciatis ut
						incidunt dignissimos quos. Voluptate.
					</p>
				</div>
				<div className="our-services-wrapper">
					<Link href="/treatments/dental-implants">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<DentalImplant />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Dental Implants
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/treatments/dental-crowns">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<DentalCrown />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Dental Crowns
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/treatments/dental-veneers">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<DentalVeneer />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Dental Veneers
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/treatments/cosmetic-dentistry">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<CosmeticDentistry />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Cosmetic Dentistry
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/treatments/invisalign">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<Braces />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Invisalign
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
					<Link href="/treatments/cosmetic-dentistry#hollywood-smile">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<SmileMakeover />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Hollywood Smile
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>

					<Link href="/treatments/pediatric-dentistry">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<PediatricDentistry />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Pediatric Dentistry
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>

					<Link href="/treatments/teeth-whitening">
						<Card
							className={clsx(classes.servicePaper, classes.servicePaperCard)}
							elevation={paperElevation}
						>
							<CardActionArea className={classes.cardActionArea}>
								<SvgIcon
									className={clsx(classes.svgIcon, classes.svgIconTreatment)}
									viewBox="0 0 84.8 84.8"
								>
									<TeethWhitening />
								</SvgIcon>
								<CardContent className={classes.cardContent}>
									<Typography
										variant="h5"
										component="h3"
										className={clsx(classes.servicePaperTitle, classes.servicePaperCardTitle)}
									>
										Teeth Whitening
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Link>
				</div>
				<div className="dental-treatments-buttons-div">
					<Button
						variant="contained"
						color="primary"
						className={clsx(classes.regularButton, classes.treatmentsButton)}
						onClick={handleChat}
					>
						Chat&nbsp;Now
					</Button>
				</div>
			</section>
			<section className="our-doctors-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Our Doctors</h2>
					<p className="our-services-header-paragraph-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia deleniti beatae quam
						incidunt doloribus. Culpa numquam tenetur fugiat modi debitis, est, aut earum perspiciatis ut
						incidunt dignissimos quos. Voluptate.
					</p>
				</div>
				<div className="our-doctors-wrapper">
					<div className="doctor-wrapper">
						<img
							className="doctor-image"
							src={require("../public/shutterstock_1498270505.jpg")}
							alt=""
							name="yasin"
						/>
						<Link href="/about#dr-yasin-akgul">
							<a className="doctor-link">Spec. Dr. Yasin Akgül</a>
						</Link>
						<p className="doctor-specialty">Orthodontic Specialist</p>
					</div>
					<div className="doctor-wrapper">
						<img
							className="doctor-image"
							src={require("../public/shutterstock_1498270505.jpg")}
							alt=""
							name="sevil"
						/>
						<Link href="/about#dr-sevil-akgul">
							<a className="doctor-link">Spec. Dr. Sevil Akgül</a>
						</Link>
						<p className="doctor-specialty">Pediatric Dentistry Specialist</p>
					</div>
					<div className="doctor-wrapper">
						<img
							className="doctor-image"
							src={require("../public/shutterstock_1498270505.jpg")}
							alt=""
							name="yavuz"
						/>
						<Link href="/about#dr-yavuz-eker">
							<a className="doctor-link">Dr. Yavuz Eker</a>
						</Link>
						<p className="doctor-specialty">Aesthetic Dentistry Specialist</p>
					</div>
				</div>
			</section>
			<section className="why-choose-us-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Why Choose Us?</h2>
					<h4 className="clinic-exclusive-text">
						Dental Treatments in Istanbul Smile Center <br /> At Affordable Prices
					</h4>
					<p className="our-services-header-paragraph-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia deleniti beatae quam
						incidunt doloribus. Culpa numquam tenetur fugiat modi debitis, est, aut earum perspiciatis ut
						incidunt dignissimos quos. Voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Eveniet atque sit fuga consequatur dolorem quia tempore harum in est doloribus, necessitatibus
						porro earum obcaecati inventore expedita iure eaque voluptate aspernatur.
					</p>
				</div>
				<div className="istanbul-silhouette-wrapper-div">
					<SvgIcon className={classes.istanbulSilhoutteSvg} viewBox="0 0 5802.9 1838.3">
						<IstanbulSilhouette />
					</SvgIcon>
				</div>
			</section>
			<section className="why-choose-us-section perfect-smile-gallery">
				<div className="our-services-header perfect-smile-header">
					<h2 className="our-services-header-text">
						Our Perfect <span style={{ color: "#E94D65" }}>Smile</span> Gallery
					</h2>
				</div>
				<div className="reviews-wrapper">
					<Carousel
						swipeable={props.deviceType === "mobile" || "tablet" ? true : false}
						draggable={false}
						showDots={false}
						centerMode={true}
						responsive={responsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						autoPlay={props.deviceType !== "mobile" ? autoPlay : false}
						autoPlaySpeed={20000}
						keyBoardControl={true}
						customTransition="all 400ms ease-in-out"
						transitionDuration={400}
						containerClass="carousel-container"
						removeArrowOnDeviceType={[ "tablet", "mobile" ]}
						deviceType={props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-1-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-1-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-1-img.jpg")}
								alt="Patient Image 1"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-2-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-2-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-2-img.jpg")}
								alt="Patient Image 2"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-3-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-3-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-3-img.jpg")}
								alt="Patient Image 3"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-4-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-4-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-4-img.jpg")}
								alt="Patient Image 4"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-5-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-5-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-5-img.jpg")}
								alt="Patient Image 5"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-6-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-6-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-6-img.jpg")}
								alt="Patient Image 6"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-7-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-7-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-7-img.jpg")}
								alt="Patient Image 7"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-8-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-8-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-8-img.jpg")}
								alt="Patient Image 8"
							/>
						</picture>
						<picture className="carouselPaper-item">
							<source
								srcSet={require("../public/patient-pictures/patient-9-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/patient-pictures/patient-9-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className={classes.patientImg}
								src={require("../public/patient-pictures/patient-9-img.jpg")}
								alt="Patient Image 9"
							/>
						</picture>
					</Carousel>
				</div>
			</section>
			<section className="reviews-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">
						Our Patients <span style={{ color: "#E94D65" }}>Love</span> Us
					</h2>

					<p className="our-services-header-paragraph-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia deleniti beatae quam
						incidunt doloribus. Culpa numquam tenetur fugiat modi debitis, est, aut earum perspiciatis ut
						incidunt dignissimos quos. Voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Eveniet atque sit fuga consequatur dolorem quia tempore harum in est doloribus, necessitatibus
						porro earum obcaecati inventore expedita iure eaque voluptate aspernatur.
					</p>
				</div>
				<div className="isc-google-review-banner-wrapper">
					<Paper className={classes.googleReviewBannerPaper}>
						<div className="google-logos-wrapper">
							<SvgIcon className={classes.googleLogoFull} viewBox="0 0 272 92">
								<GoogleLogoFull />
							</SvgIcon>
							<SvgIcon className={classes.googleMyBusinessLogo} viewBox="0 0 2500 2185">
								<GoogleMyBusinessLogo />
							</SvgIcon>
							<div className="rating-stars-div">
								<h2 className="rating">4.9</h2>
								<div className="stars-div">
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
									<StarIcon className={classes.star} />
								</div>
							</div>
						</div>
						<div className="review-summary-wrapper">
							<div>
								<h3 className="my-business">My Business</h3>
							</div>
							<div className="review-number-div">
								<p className="review-number">64 Patient Reviews</p>
							</div>
						</div>
					</Paper>
				</div>
				<div className="reviews-wrapper">
					<Carousel
						swipeable={props.deviceType === "mobile" || "tablet" ? true : false}
						draggable={false}
						showDots={false}
						centerMode={true}
						responsive={responsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						autoPlay={props.deviceType !== "mobile" ? autoPlay : false}
						autoPlaySpeed={20000}
						keyBoardControl={true}
						customTransition="all 400ms ease-in-out"
						transitionDuration={400}
						containerClass="carousel-container"
						removeArrowOnDeviceType={[ "tablet", "mobile" ]}
						deviceType={props.deviceType}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						{reviews.reviews.map((cur) => (
							<div key={cur.reviewId} className="carouselPaper-item">
								<Paper
									className={classes.reviewPaper}
									onMouseOver={handleReviewPaperAutoPlay}
									onMouseOut={handleReviewPaperAutoPlay}
									elevation={reviewPaperElevation}
								>
									<div className="reviewer-image-wrapper">
										<a target="_blank" rel="noopener noreferrer" href={cur.reviewUrl}>
											<img className="reviewer-image" src={cur.reviewer.profilePhotoUrl} alt="" />
											<SvgIcon className={classes.googleSvgIcon} viewBox="0 0 533.5 544.3">
												<GoogleLogo />
											</SvgIcon>
										</a>
									</div>
									<div className="reviewer-name-wrapper">
										<h3 className="reviewer-name">{cur.reviewer.displayName}</h3>
									</div>
									<div className="review-date-wrapper">
										<span className="review-date">
											{moment(cur.updateTime).startOf("day").fromNow()}
										</span>
									</div>
									<div className="stars-wrapper">
										<StarIcon className={classes.star} />
										<StarIcon className={classes.star} />
										<StarIcon className={classes.star} />
										<StarIcon className={classes.star} />
										<StarIcon className={classes.star} />
									</div>
									<div className="review-wrapper">
										<p className="review">{cur.comment}</p>
									</div>
								</Paper>
							</div>
						))}
					</Carousel>
				</div>
				<div className="dental-treatments-buttons-div">
					<Button
						variant="contained"
						color="primary"
						className={clsx(classes.regularButton, classes.treatmentsButton)}
						onClick={handleChat}
					>
						Chat&nbsp;Now
					</Button>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.google.com/maps/place/%C4%B0stanbul+Smile+Center+A%C4%9F%C4%B1z+ve+Di%C5%9F+Sa%C4%9Fl%C4%B1%C4%9F%C4%B1+Poliklini%C4%9Fi/@40.9914076,28.8309331,17z/data=!4m5!3m4!1s0x14caa3147e2cba65:0xb6eaeab3d94bfd80!8m2!3d40.9914441!4d28.8341947"
						className="clinic-intro-link"
					>
						See all reviews
					</a>
				</div>
			</section>
			<style jsx global>{`
				.react-multi-carousel-list {
					display: flex;
					align-items: center;
					overflow: hidden;
					position: relative;
				}
				.react-multi-carousel-track {
					list-style: none;
					padding: 0;
					margin: 1rem;
					display: flex;
					flex-direction: row;
					position: relative;
					transform-style: preserve-3d;
					backface-visibility: hidden;
					will-change: transform, transition;
				}
				.react-multiple-carousel__arrow {
					position: absolute;
					outline: 0;
					transition: all .5s;
					border-radius: 35px;
					z-index: 1000;
					border: 0;
					background: rgba(0, 0, 0, 0.5);
					min-width: 43px;
					min-height: 43px;
					opacity: 1;
					cursor: pointer;
				}
				.react-multiple-carousel__arrow:hover {
					background: rgba(0, 0, 0, 0.8);
				}
				.react-multiple-carousel__arrow::before {
					font-size: 20px;
					color: #fff;
					display: block;
					font-family: revicons;
					text-align: center;
					z-index: 2;
					position: relative;
				}
				/**this one */
				.react-multiple-carousel__arrow--left {
					left: calc(2% + 1px);
				}
				.react-multiple-carousel__arrow--left::before {
					content: "\e824";
				}
				/**this one */
				.react-multiple-carousel__arrow--right {
					right: calc(2% + 1px);
				}
				.react-multiple-carousel__arrow--right::before {
					content: "\e825";
				}
				.react-multi-carousel-dot-list {
					position: absolute;
					bottom: 0;
					display: flex;
					left: 0;
					right: 0;
					justify-content: center;
					margin: auto;
					padding: 0;
					margin: 0;
					list-style: none;
					text-align: center;
				}
				.react-multi-carousel-dot button {
					display: inline-block;
					width: 12px;
					height: 12px;
					border-radius: 50%;
					opacity: 1;
					padding: 5px 5px 5px 5px;
					box-shadow: none;
					transition: background .5s;
					border-width: 2px;
					border-style: solid;
					border-color: grey;
					padding: 0;
					margin: 0;
					margin-right: 6px;
					outline: 0;
					cursor: pointer;
				}
				.react-multi-carousel-dot button:hover {
					background: #080808;
				}
				.react-multi-carousel-dot--active button {
					background: #080808;
				}
				.react-multi-carousel-item {
					transform-style: preserve-3d;
					backface-visibility: hidden;
				}
				@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
					.react-multi-carousel-item {
						flex-shrink: 0 !important;
					}
					.react-multi-carousel-track {
						overflow: visible !important;
					}
				}
			`}</style>

			<style jsx>{`
				:global(.webp) .hero-image-div {
					background-image: url(${require("../public/hero-image.webp")});
				}

				:global(.no-webp) .hero-image-div {
					background-image: url(${require("../public/hero-image.jpg")});
				}

				.hero-image-div {
					width: 100vw;
					height: calc(100vh - 141px);
					position: relative;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: right 25% bottom 30%;
				}

				.hero-image-perfect-wrapper {
					position: absolute;
					padding: 2rem;
					border-radius: 10px;
					left: 10%;
					top: 23%;
					background-color: rgba(255, 255, 255, .2);
				}
				.hero-image-perfect {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-weight: normal;
					font-size: 7rem;
				}

				@media (min-width: ${sizes.sizes.fullhd}) {
					.hero-image-div {
						background-position: right 25% bottom 60%;
					}
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.hero-image-perfect-wrapper {
						left: 5%;
					}
					.hero-image-perfect {
						font-size: 5rem;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.hero-image-perfect-wrapper {
						left: 2.5%;
					}
					.hero-image-perfect {
						font-size: 4.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.sm}) {
					.hero-image-perfect-wrapper {
						top: 65%;
						background-color: rgba(255, 255, 255, .7);
						padding: 1rem;
					}
					.hero-image-perfect {
						font-size: 4rem;
					}

					.perfect-break {
						display: none;
					}
				}

				@media (max-width: ${sizes.sizes.xs}) {
					.hero-image-perfect-wrapper {
						top: 60%;
						padding: .5rem;
						padding-bottom: 1rem;
					}
					.hero-image-perfect {
						font-size: 3rem;
					}
				}

				.hero-image-perfect-smile-text {
					color: ${sTheme.palette.third.dark};
				}
				.our-services-section {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					margin-top: -5px;
					padding: 4rem 0;
				}
				.our-services-header {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					width: 100%;
					text-align: center;
				}
				.our-services-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
				}
				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-header-text {
						font-size: 3.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-services-header-text {
						font-size: 3rem;
					}
				}
				.our-services-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.our-services-header-paragraph-text {
						width: 60%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-header-paragraph-text {
						width: 70%;
						font-size: 1.8rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-services-header-paragraph-text {
						width: 80%;
						font-size: 1.6rem;
					}
				}
				.our-services-wrapper {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					width: 80%;
					margin-top: 3rem;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.our-services-wrapper {
						width: 90%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-wrapper {
						width: 95%;
					}
				}

				.isc-intro-section {
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 auto;
					margin-top: 2.5rem;
					width: 80%;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.isc-intro-section {
						width: 95%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.isc-intro-section {
						width: 100%;
						flex-wrap: wrap;
					}
				}
				.clinic-image-collage-div {
					width: 50%;
					height: 50rem;
					background-image: url("/atakoy-towers-image.jpg");
					background-repeat: no-repeat;
					background-position: center;
					background-size: cover;
					border-top-left-radius: 20px;
					border-bottom-left-radius: 20px;
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.clinic-image-collage-div {
						width: 100%;
						height: 30rem;
						border-radius: 0;
					}
				}

				.clinic-intro-div {
					width: 50%;
					display: flex;
					align-items: center;
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.clinic-intro-div {
						width: 100%;
						justify-content: center;
						text-align: center;
					}
				}
				.clinic-intro-wrapper {
					background-color: ${sTheme.palette.secondary.main};
					border-top: 1px solid ${sTheme.palette.primary.main};
					border-bottom: 1px solid ${sTheme.palette.primary.main};
					border-right: 1px solid ${sTheme.palette.primary.main};
					border-radius: 20px;
					margin: 3rem 0;
					padding: 5rem;
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.clinic-intro-wrapper {
						border: none;
						border-radius: 0;
						margin: 0;
						padding: 3rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.clinic-intro-wrapper {
						padding: 2rem;
					}
				}

				.clinic-exclusive-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 1.8rem;
				}
				.clinic-name-header {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
					margin-top: .5rem;
					font-size: 4.5rem;
				}

				.clinic-smile-center-text {
					color: ${sTheme.palette.third.dark};
				}
				.clinic-intro-text {
					width: 95%;
					color: ${sTheme.palette.secondary.dark};
					font-size: 1.7rem;
					line-height: 1.6;
				}

				.clinic-intro-buttons-div {
					margin-top: 2rem;
					display: flex;
					justify-content: space-between;
					align-items: baseline;
					width: 95%;
				}

				.clinic-intro-link {
					color: ${sTheme.palette.primary.main};
					text-decoration: none;
					font-size: 1.7rem;
					transition: all 200ms ease-in-out;
				}

				@media (max-width: ${sizes.sizes.md}) {
					.clinic-intro-link {
						margin-top: 1.5rem;
					}
				}
				.clinic-intro-link:hover {
					text-decoration: underline;
				}

				.dental-treatments-buttons-div {
					display: flex;
					justify-content: flex-start;
					width: 78%;
					align-items: baseline;
					margin: 0 auto;
					margin-top: 4rem;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.dental-treatments-buttons-div {
						width: 88%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.dental-treatments-buttons-div {
						width: 93%;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.dental-treatments-buttons-div {
						flex-direction: column;
						align-items: center;
					}
				}
				.our-doctors-section {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 2rem;
					padding: 6rem 0;
				}
				.our-doctors-wrapper {
					display: flex;
					justify-content: center;
					margin-top: 5rem;
					width: 80%;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.our-doctors-wrapper {
						width: 95%;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-doctors-wrapper {
						flex-wrap: wrap;
					}
				}
				.doctor-wrapper {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: center;
					width: 30%;
					min-width: 28rem;
					margin: 0 3rem;
				}

				@media (max-width: ${sizes.sizes.md}) {
					.doctor-wrapper {
						width: 35%;
					}
				}

				@media (max-width: ${sizes.sizes.sm}) {
					.doctor-wrapper {
						width: 50%;
					}
				}

				.doctor-image {
					border-radius: 300px;
					width: 100%;
				}
				.doctor-link {
					text-decoration: none;
					font-size: 2.8rem;
					margin-top: 3rem;
					color: ${sTheme.palette.primary.main};
					font-family: ${sTheme.typography.serif};
					font-weight: bold;
					transition: all 250ms ease-in-out;
				}
				.doctor-link:hover {
					cursor: pointer;
					color: ${sTheme.palette.third.dark};
				}
				.doctor-specialty {
					font-size: 2rem;
					color: ${sTheme.palette.secondary.dark};
				}

				.why-choose-us-section {
					width: 100%;
				}
				.istanbul-silhouette-wrapper-div {
					display: flex;
					justify-content: center;
					margin: 0 auto;
					width: 80%;
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.istanbul-silhouette-wrapper-div {
						width: 90%;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.istanbul-silhouette-wrapper-div {
						width: 95%;
					}
				}
				.reviews-section {
					padding-top: 2rem;
					padding-bottom: 4rem;
				}

				.isc-google-review-banner-wrapper {
					display: flex;
					justify-content: center;
					margin: 4rem 0;
				}

				.google-logos-wrapper {
					display: flex;
				}

				.rating-stars-div {
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					bottom: 5px;
					right: 5px;
					margin-left: 20px;
				}

				@media (max-width: ${sizes.sizes.xxxs}) {
					.rating-stars-div {
						margin-left: 10px;
					}
				}

				.rating {
					font-size: 5rem;
					font-family: Roboto, sans-serif;
					color: #e7711b;
					font-weight: 400;
				}

				@media (max-width: ${sizes.sizes.xxxs}) {
					.rating {
						font-size: 3rem;
					}
				}

				.review-summary-wrapper {
					display: flex;
					position: relative;
				}

				.my-business,
				.banner-reviews {
					font-family: "Roboto", sans-serif;
					color: #747474;
				}

				.my-business {
					font-weight: 400;
					font-size: 3rem;
					margin-top: -3.5rem;
					margin-left: 2rem;
				}

				@media (max-width: ${sizes.sizes.xs}) {
					.my-business {
						margin-top: -2.2rem;
					}
				}

				@media (max-width: ${sizes.sizes.xxxs}) {
					.my-business {
						font-size: 2rem;
						margin-top: -2rem;
					}
				}

				.banner-reviews {
					font-size: 2rem;
					margin-left: 2rem;
					font-weight: 400;
				}

				.review-number-div {
					position: absolute;
					right: 25px;
					bottom: 0;
					text-align: center;
					font-size: 1.6rem;
					font-family: Roboto, sans-serif;
					color: #747474;
					font-weight: 400;
				}

				@media (max-width: ${sizes.sizes.xs}) {
					.review-number-div {
						right: 20px;
						font-size: 1.5rem;
						bottom: 5px;
					}
				}

				@media (max-width: ${sizes.sizes.xxxs}) {
					.review-number-div {
						right: 15px;
						font-size: 1.3rem;
						bottom: 2px;
					}
				}

				.carouselPaper-item {
					display: flex;
					justify-content: center;
				}

				.reviewer-image-wrapper {
					position: relative;
				}
				.reviewer-image {
					width: 20%;
					border-radius: 50%;
					margin-top: 2rem;
				}

				.review-date-wrapper {
					color: ${sTheme.palette.secondary.dark};
					margin-top: .5rem;
				}

				.review-date {
					font-size: 1.4rem;
				}
				.reviewer-name-wrapper {
					margin-top: 1rem;
					color: ${sTheme.palette.primary.main};
					font-size: 1.8rem;
				}

				.review-wrapper {
					color: ${sTheme.palette.secondary.dark};
				}
				.reviews-wrapper {
					margin-top: 3rem;
					padding-bottom: 3rem;
				}
				.stars-wrapper {
					margin-top: 1rem;
				}
				.review-wrapper {
					margin-top: 1rem;
					padding-bottom: 2rem;
				}
				.review {
					width: 90%;
					margin: 0 auto;
					font-size: 1.7rem;
				}
				.perfect-smile-gallery {
				}
				.perfect-smile-header {
					padding-top: 4rem;
				}
			`}</style>
		</React.Fragment>
	);
};

Index.getInitialProps = async ({ req }) => {
	let userAgent;
	let deviceType;
	if (req) {
		userAgent = req.headers["user-agent"];
	} else {
		userAgent = navigator.userAgent;
	}
	const md = new MobileDetect(userAgent);
	if (md.tablet()) {
		deviceType = "tablet";
	} else if (md.mobile()) {
		deviceType = "mobile";
	} else {
		deviceType = "desktop";
	}

	return { deviceType };
};

export default Index;
