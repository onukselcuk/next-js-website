import Head from "next/head";
import atakoyTowersImage from "../public/atakoy-towers-image.jpg";
import contactUsImg from "../public/privileges-page/stock-photo-contact-us-businesswoman-work-by-modern-devices-she-uses-digital-tablet-computer-mobile-1214757019.jpg";
import doctorChatImg from "../public/privileges-page/stock-photo-video-chat-with-patient-by-doctor-1145467625.jpg";
import schedulingImg from "../public/privileges-page/stock-photo-regular-medical-examination-concept-stethoscope-on-calendar-page-219952843.jpg";
import hotelBookingImg from "../public/privileges-page/stock-photo-young-traveler-planning-vacation-trip-and-searching-information-or-booking-hotel-on-laptop-travel-1334566982.jpg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import sTheme from "../src/styledTheme";

const useStyles = makeStyles((theme) => ({
	privilegeActionButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.third.dark,
		letterSpacing: "1px",
		padding: "10px 25px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.secondary.main
		}
	}
}));

const Privileges = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Head>
				<title key="title">
					Patient Privileges & Itinerary | Istanbul Smile Center | Let's Make Your Smile Perfect
				</title>
			</Head>
			<section className="your-privileges-header-section">
				<div className="your-privileges-header-wrapper">
					<h2 className="your-privileges-header-text">Patient Privileges and Itinerary</h2>
					<p className="your-privileges-header-paragraph-text">
						At Istanbul Smile Center, we offer unique and free services to our international patients to
						make their dental treatments super easy and enjoying as no other clinic can.
					</p>
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-image-div">
					<img className="privilege-image" src={contactUsImg} alt="" />
				</div>
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">1) Contacting Us</h2>
						<p className="privilege-text-paragraph">
							The fastest way of contacting us is through Live Chat or WhatsApp. You may prefer sending us
							a form or even just an e-mail. When you contact us, you can ask us anything and tell us your
							dental needs. You can send your teeth pictures and/or X-Ray images through all channels,
							including live chat. Please keep in mind, providing us as much information as possible, and
							an X-Ray image will help us in giving you an exact quote and a treatment plan.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">2) Treatment Plan & Video Call</h2>
						<p className="privilege-text-paragraph">
							If you have requested a video call consultation, we will schedule a call as soon as possible
							(during the day), and one of our doctors is going to call you. You can show your teeth to
							your doctor, explain more about your dental needs, and make a treatment plan with your
							doctor right then and there. After that call or your contact (if you didn't request a video
							call), we will send you a detailed treatment plan and a quote.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
				<div className="privilege-image-div">
					<img className="privilege-image" src={doctorChatImg} alt="" />
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-image-div">
					<img className="privilege-image" src={schedulingImg} alt="" />
				</div>
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">3) Scheduling An Appointment</h2>
						<p className="privilege-text-paragraph">
							The fastest way of contacting us is through Live Chat or WhatsApp. You may prefer sending us
							a form or even just an e-mail. When you contact us, you can ask us anything and tell us your
							dental needs. You can send your teeth pictures and/or X-Ray images through all channels,
							including live chat. Please keep in mind, providing us as much information as possible, and
							an X-Ray image will help us in giving you an exact quote and a treatment plan.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">4) Hotel Booking & Travel Plan</h2>
						<p className="privilege-text-paragraph">
							If you have requested a video call consultation, we will schedule a call as soon as possible
							(during the day), and one of our doctors is going to call you. You can show your teeth to
							your doctor, explain more about your dental needs, and make a treatment plan with your
							doctor right then and there. After that call or your contact (if you didn't request a video
							call), we will send you a detailed treatment plan and a quote.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
				<div className="privilege-image-div">
					<img className="privilege-image" src={hotelBookingImg} alt="" />
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-image-div">
					<img className="privilege-image" src={atakoyTowersImage} alt="" />
				</div>
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">5) Arrival to Istanbul</h2>
						<p className="privilege-text-paragraph">
							The fastest way of contacting us is through Live Chat or WhatsApp. You may prefer sending us
							a form or even just an e-mail. When you contact us, you can ask us anything and tell us your
							dental needs. You can send your teeth pictures and/or X-Ray images through all channels,
							including live chat. Please keep in mind, providing us as much information as possible, and
							an X-Ray image will help us in giving you an exact quote and a treatment plan.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">6) Your Treatment</h2>
						<p className="privilege-text-paragraph">
							If you have requested a video call consultation, we will schedule a call as soon as possible
							(during the day), and one of our doctors is going to call you. You can show your teeth to
							your doctor, explain more about your dental needs, and make a treatment plan with your
							doctor right then and there. After that call or your contact (if you didn't request a video
							call), we will send you a detailed treatment plan and a quote.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
				<div className="privilege-image-div">
					<img className="privilege-image" src={atakoyTowersImage} alt="" />
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-image-div">
					<img className="privilege-image" src={atakoyTowersImage} alt="" />
				</div>
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">7) Dental Holiday in Istanbul</h2>
						<p className="privilege-text-paragraph">
							The fastest way of contacting us is through Live Chat or WhatsApp. You may prefer sending us
							a form or even just an e-mail. When you contact us, you can ask us anything and tell us your
							dental needs. You can send your teeth pictures and/or X-Ray images through all channels,
							including live chat. Please keep in mind, providing us as much information as possible, and
							an X-Ray image will help us in giving you an exact quote and a treatment plan.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
			</section>
			<section className="privilege-section">
				<div className="privilege-explanation-div">
					<div className="privilege-name-wrapper">
						<h2 className="privilege-name-header">8) Departure</h2>
						<p className="privilege-text-paragraph">
							If you have requested a video call consultation, we will schedule a call as soon as possible
							(during the day), and one of our doctors is going to call you. You can show your teeth to
							your doctor, explain more about your dental needs, and make a treatment plan with your
							doctor right then and there. After that call or your contact (if you didn't request a video
							call), we will send you a detailed treatment plan and a quote.
						</p>
						<div className="privilege-action-button-div">
							<Button variant="contained" color="primary" className={classes.privilegeActionButton}>
								Chat Now
							</Button>
						</div>
					</div>
				</div>
				<div className="privilege-image-div">
					<img className="privilege-image" src={atakoyTowersImage} alt="" />
				</div>
			</section>
			<style jsx>{`
				.your-privileges-header-section {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					margin-top: -5px;
					padding: 4rem 0 1rem 0;
				}
				.your-privileges-header-wrapper {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					width: 100%;
					text-align: center;
				}
				.your-privileges-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
				}
				.your-privileges-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}
				.privilege-section {
					display: flex;
					justify-content: center;
					margin: 0 auto;
					margin-top: 1rem;
					width: 80%;
				}
				.privilege-image-div {
					display: flex;
					align-items: center;
					width: 49%;
					flex-shrink: 0;
				}
				.privilege-image {
					width: 100%;
					border-radius: 20px;
				}
				.privilege-explanation-div {
					display: flex;
					align-items: center;
				}
				.privilege-name-wrapper {
					background-color: ${sTheme.palette.secondary.main};
					border: 1px solid ${sTheme.palette.primary.main};
					border-radius: 20px;
					margin: 3rem 0;
					padding: 5rem;
				}
				.clinic-exclusive-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 1.8rem;
				}
				.privilege-name-header {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
					margin-top: .5rem;
				}
				.privilege-text-paragraph {
					width: 95%;
					color: ${sTheme.palette.secondary.dark};
					font-size: 1.7rem;
					line-height: 1.6;
				}

				.privilege-action-button-div {
					margin-top: 2rem;
					display: flex;
					justify-content: space-between;
					align-items: baseline;
					width: 95%;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Privileges;
