import Layout from "../components/Layout";
import heroImage from "../public/hero-image-optimized.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
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
import sTheme from "../src/styledTheme";

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
	svgIcon: {
		marginTop: "5px",
		width: "100px",
		minHeight: "100px"
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
		color: theme.palette.third.main
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
					background-color: ${sTheme.palette.secondary.main};
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
			`}</style>
		</Layout>
	);
};

export default Index;
