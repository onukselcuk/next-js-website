import Layout from "../components/Layout";
import Link from "next/link";
import heroImage from "../public/hero-image-optimized.jpg";
import atakoyTowersImage from "../public/atakoy-towers-image.jpg";
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

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2)
	},
	button: {
		margin: theme.spacing(0),
		backgroundColor: theme.palette.secondary.main,
		padding: "20px 120px",
		marginTop: "30px",
		borderRadius: "35px",
		fontFamily: theme.typography.sansSerif,
		fontSize: "2rem",
		letterSpacing: "1px",
		color: theme.palette.primary.main,
		"&:hover": {
			color: theme.palette.secondary.main,
			backgroundColor: theme.palette.primary.main
		}
	},
	regularButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.primary.main,
		fontFamily: theme.typography.sansSerif,
		letterSpacing: "1px",
		padding: "10px 25px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main
		}
	},
	servicePaper: {
		textAlign: "center",
		minWidth: "160px",
		width: "18%",
		margin: "1rem 1rem",
		padding: "1rem",
		border: `1px solid ${theme.palette.primary.main}`,
		transition: "all 200ms ease-in-out",
		"&:hover": {
			transform: "scale(1.05)"
		}
	},
	servicePaperCard: {
		minWidth: "300px",
		width: "23%",
		padding: 0,
		"&:hover": {
			transform: "scale(1)"
		}
	},
	svgIcon: {
		marginTop: "5px",
		width: "100px",
		minHeight: "100px"
	},
	svgIconTreatment: {
		marginTop: "15px"
	},
	servicePaperTitle: {
		textAlign: "center",
		color: theme.palette.primary.main,
		fontFamily: theme.typography.serif,
		marginTop: "10px",
		fontSize: "2rem"
	},
	servicePaperText: {
		textAlign: "center",
		fontFamily: theme.typography.sansSerif,
		color: theme.palette.secondary.dark
	},
	cardContent: {
		paddingTop: 0
	},
	servicePaperCardTitle: {
		fontSize: "2.8rem"
	},
	servicePaperCardText: {
		fontSize: "1.7rem"
	},
	treatmentsButton: {
		marginRight: "auto",
		marginLeft: "50%",
		transform: "translateX(-50%)",
		padding: "1rem 6rem"

		// position: "relative",
		// left: "50%",
	},
	cardActionArea: {
		display: "flex",
		flexDirection: "column",
		height: "100%",
		justifyContent: "flex-start"
	}
}));

const Index = (props) => {
	const paperElevation = 2;

	const classes = useStyles();
	return (
		<Layout>
			<div className="hero-image-div">
				<img className="hero-image" src={heroImage} alt="" />
				<div className="hero-image-perfect-wrapper">
					<h1 className="hero-image-perfect">
						Let's make your <br /> smile perfect
					</h1>
					<Button variant="contained" color="primary" className={classes.button}>
						Chat with us
					</Button>
				</div>
			</div>
			<section className="our-services-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Our Services</h2>
					<p className="our-services-header-paragraph-text">
						At Istanbul Smile Center, we offer unique and free services to our international patients to
						make their dental treatments super easy and enjoying like no other clinic can.
					</p>
				</div>
				<div className="our-services-wrapper">
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<LiveChat />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Live Chat
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Whenever you need us, we are always here to give you the answers you need instantly. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<VideoCallConsultation />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Video Call Consultation
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Wherever you are in the world, our doctors will give you a free consultation over video
							call. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<TreatmentPlan />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Treatment Plan
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Send us your teeth x-ray or pictures via live chat or form, you will get a detailed free
							treatment plan. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<AirportGreeting />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Airport Greeting
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Never feel lost in a foreign country, you will be greeted by our professional team right
							inside the airport. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<AirportHotelTransfer />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Airport-Hotel Transfers
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Whether you are arriving or leaving, you will be transferred with a VIP car between airport
							and your hotel. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<ClinicHotelTransfer />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Clinic-Hotel Transfers
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* On your every appointment with our clinic, our team will pick you up from and take you back
							to your hotel free of charge. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<HotelBookingAssistance />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Hotel Booking Assistance
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* No need to spend your time trying to figure out which hotel to book, let us do it for you. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<HotelDiscounts />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Hotel Discounts
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Special discounts for our patients are available on 4-5 star hotels. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<MultilingualAssistance />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Multilingual Assistance
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Our international patients coordination team and doctors know perfect English. We even have
							Spanish and Russian speaking doctors and staff. */}
						</Typography>
					</Paper>
					<Paper className={classes.servicePaper} elevation={paperElevation}>
						<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
							<TravelToursDiscounts />
						</SvgIcon>
						<Typography variant="h5" component="h3" className={classes.servicePaperTitle}>
							Travel Tours Discounts
						</Typography>
						<Typography component="p" className={classes.servicePaperText}>
							{/* Turn your dental treatment to a perfect holiday in Turkey. Special discounts for our
							patients are available for amazing tours. */}
						</Typography>
					</Paper>
				</div>
			</section>
			<section className="isc-intro-section">
				<div className="clinic-image-collage-div">
					<img className="clinic-image-collage" src={atakoyTowersImage} alt="" />
				</div>
				<div className="clinic-intro-div">
					<div className="clinic-intro-wrapper">
						<h4 className="clinic-exclusive-text">An Exclusive Dental Clinic</h4>
						<h2 className="clinic-name-header">Istanbul Smile Center</h2>
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
							<Button variant="contained" color="primary" className={classes.regularButton}>
								Chat Now
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
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
									Orthodontics
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
									Smile Makeover
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam
									excepturi, assumenda ab obcaecati magnam aspernatur culpa vitae.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={clsx(classes.servicePaper, classes.servicePaperCard)} elevation={paperElevation}>
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
								<Typography
									variant="body2"
									component="p"
									className={clsx(classes.servicePaperText, classes.servicePaperCardText)}
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste sequi libero dolore
									consequuntur temporibus delectus, in tenetur quaerat aut ea autem, aliquam Lorem
									ipsum, dolor sit amet consectetur adipisicing elit.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
				<div className="dental-treatments-buttons-div">
					<Button
						variant="contained"
						color="primary"
						className={clsx(classes.regularButton, classes.treatmentsButton)}
					>
						Chat Now
					</Button>
					<Link href="/treatments">
						<a className="clinic-intro-link">See all treatments</a>
					</Link>
				</div>
			</section>

			<style jsx>{`
				.hero-image-div {
					width: 100%;
					height: 100%;
					position: relative;
				}
				.hero-image {
					width: 100%;
				}
				.hero-image-perfect-wrapper {
					position: absolute;
					left: 10%;
					top: 18%;
				}
				.hero-image-perfect {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-weight: normal;
					font-size: 7rem;
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
				.our-services-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}
				.our-services-wrapper {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					width: 80%;
					margin-top: 3rem;
				}
				.isc-intro-section {
					display: flex;
					margin-top: 2.5rem;
				}
				.clinic-image-collage-div {
					display: flex;
					align-items: center;
					min-width: 50%;
				}
				.clinic-image-collage {
					width: 100%;
					border-top-right-radius: 20px;
					border-bottom-right-radius: 20px;
				}
				.clinic-intro-div {
					display: flex;
					align-items: center;
				}
				.clinic-intro-wrapper {
					background-color: ${sTheme.palette.secondary.main};
					border-top: 1px solid ${sTheme.palette.primary.main};
					border-bottom: 1px solid ${sTheme.palette.primary.main};
					margin: 3rem 0;
					padding: 5rem;
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
				.clinic-intro-link:hover {
					text-decoration: underline;
				}

				.dental-treatments-buttons-div {
					display: flex;
					justify-content: flex-start;
					width: 78%;
					align-items: baseline;
					margin: 0 auto;
					margin-top: 1.5rem;
				}
			`}</style>
		</Layout>
	);
};

export default Index;
