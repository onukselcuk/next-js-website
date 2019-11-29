import { NextSeo } from "next-seo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import sTheme from "../src/styledTheme";
import Form from "../components/Form";
import sizes from "../src/sizes";

const useStyles = makeStyles((theme) => ({
	privilegeActionButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.third.dark,
		letterSpacing: "1px",
		padding: "10px 25px",
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
			// backgroundColor: theme.palette.primary.main,
			"&::before": {
				opacity: 1
			},
			// background:
			// 	"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			color: theme.palette.secondary.main
		},
		[sizes.down("md")]: {
			padding: "8px 20px",
			fontSize: "1.3rem"
		}
	}
}));

const Privileges = () => {
	const classes = useStyles();

	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};

	return (
		<React.Fragment>
			<NextSeo
				title="Patient Privileges & Dental Tourism Process | Istanbul Smile Center"
				description="Our patients have privileges. We offer unique and free services to our international patients to make their dental treatments super easy and enjoying as no other clinic can."
			/>

			<section className="your-privileges-section">
				<div className="privilege-vip-img-div" />
				<section className="your-privileges-header-section">
					<div className="your-privileges-header-wrapper">
						<h2 className="your-privileges-header-text">Patient Privileges and Itinerary</h2>
						<p className="your-privileges-header-paragraph-text">
							At Istanbul Smile Center, we offer unique and free services to our international patients to
							make their dental treatments super easy and enjoying as no other clinic can. Here is your
							privileges and treatment process in Istanbul Smile Center.
						</p>
					</div>
				</section>
				<section className="privilege-section">
					<div className="privilege-image-div privilege-image-1" />
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">1) Contacting Us</h2>
							<p className="privilege-text-paragraph">
								The fastest way of contacting us is through Live Chat or WhatsApp. You may prefer
								sending us a form or even just an e-mail. When you contact us, you can ask us anything
								and tell us your dental needs. You can send your teeth pictures and/or X-Ray images
								through all channels, including live chat. Please keep in mind, providing us as much
								information as possible, and an X-Ray image will help us in giving you an exact quote
								and a treatment plan. You can also request a video call consultation.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="privilege-section" id="treatment-and-video-call">
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">2) Treatment Plan & Video Call</h2>
							<p className="privilege-text-paragraph">
								If you have requested a video call consultation, we will schedule a call as soon as
								possible (usually the same day), and one of our doctors is going to call you. You can
								show your teeth to your doctor, explain more about your dental needs, and make a
								treatment plan with your doctor right then and there. After that call or your contact
								(if you didn't request a video call), we will send you a detailed treatment plan and a
								quote.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
					<div className="privilege-image-div privilege-image-2" />
				</section>
				<section className="privilege-section">
					<div className="privilege-image-div privilege-image-3" />
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">3) Scheduling An Appointment</h2>
							<p className="privilege-text-paragraph">
								Scheduling an appointment for your treatment in Istanbul Smile Center is so easy. Our
								international patients' department will be in contact with you to find the perfect date
								for you. There is no waiting period, we will schedule your appointment to the exact date
								you request or maybe the next day but not further. We value our patient's time.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="privilege-section" id="hotel-booking">
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">4) Hotel Booking & Travel Plan</h2>
							<p className="privilege-text-paragraph">
								Our team will be helping you with your travel plan and hotel booking. We offer deals to
								our international patients for hotel bookings in our partner hotels. This is only for
								the benefit of our patients. During the scheduling, we will send you current hotel deals
								and selection of hotels you can choose. And upon your choice, we will book the hotel for
								you. You don't need to do anything else. Your room will be ready and waiting for you
								when you arrive. We only partner with 4-5 star hotels and value our patients' comfort
								during their stay in Istanbul. Of course, if you wish, you can always book a hotel you
								prefer yourself.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
					<div className="privilege-image-div privilege-image-4" />
				</section>
				<section className="privilege-section" id="arrival-to-istanbul">
					<div className="privilege-image-div privilege-image-5" />
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">5) Arrival to Istanbul</h2>
							<p className="privilege-text-paragraph">
								Welcome to Istanbul! We are happy to have you here as our patient and guest. You will
								never feel lost in Istanbul. Before your flight's landing, our professional team will be
								waiting for you and greet you right inside the airport when you land. You will be
								accompanied to your VIP car, which will take you directly to your hotel (free of
								charge). You won't be wasting your time with the airport shuttle or public
								transportation to arrive at your hotel.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="privilege-section" id="your-treatment">
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">6) Your Treatment</h2>
							<p className="privilege-text-paragraph">
								On the day of your appointment with our clinic, which is usually the next day, you will
								be picked up by one of our international patient coordinators right from your hotel. At
								the clinic, you will be greeted by our doctors, and your treatment will start. Feel free
								to ask anything to your doctor and discuss further your treatment plan. After your
								treatment, you will be taken back to your hotel. You may need to come to our clinic a
								few times during your stay. This depends on your treatment plan. On your every
								appointment, you will be picked up from and taken back to your hotel.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
					<div className="privilege-image-div privilege-image-6" />
				</section>
				<section className="privilege-section" id="dental-holiday">
					<div className="privilege-image-div privilege-image-7" />
					<div className="privilege-explanation-div">
						<div className="privilege-name-wrapper">
							<h2 className="privilege-name-header">7) Dental Holiday in Istanbul</h2>
							<p className="privilege-text-paragraph">
								Your trip to Istanbul is a perfect opportunity for a great holiday. Istanbul is one of
								the oldest and most historical cities in the world. It's many tourists' favorite city
								located on two separate continents. With its multicultural society and neighborhoods,
								wherever you go, there is always something to be amazed, not to mention delicious
								Turkish food to enjoy. Nightlife in Istanbul is beyond many prominent cities of the
								world. Among historical places, Bosphorous, Topkapi Palace, Hagia Sophia and Karia
								Museums, Galata Tower and Maiden Tower are only a few of the places you can visit. We
								also offer travel tours discounts to our international patients for them to enjoy
								Istanbul more.
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
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
								We always encourage our patients to come back to our clinic for a final check of your
								treatment. If your treatment is completed then we only need your flight information so
								that we can provide VIP Airport transfer from your hotel. Before your flight you will be
								picked up from your hotel and taken to the airport. We are sure we'll miss you being
								here as our guest. Bon voyage!
							</p>
							<div className="privilege-action-button-div">
								<Button
									onClick={handleChat}
									variant="contained"
									color="primary"
									className={classes.privilegeActionButton}
								>
									Chat&nbsp;Now
								</Button>
							</div>
						</div>
					</div>
					<div className="privilege-image-div privilege-image-8" />
				</section>
				<section className="our-prices-section">
					<div className="our-prices-header">
						<h2 className="your-privileges-header-text">Get A Free Quote</h2>
						<p className="your-privileges-header-paragraph-text">
							Contacting us through live chat or WhatsApp is always the fastest way, but you may prefer
							sending us a good old form. Tell us your dental needs, and don't forget to attach at least
							the pictures of your teeth to the form. If you have an X-Ray or CT Scan, it's even better
							and crucial for most patients; this will help our doctors to make the right dental plan for
							you. It will also help us in giving you a more accurate quote for your treatment. Go ahead
							and fill out the form! Let's make your smile perfect!
						</p>
					</div>
					<div className="form-wrapper">
						<Form />
					</div>
				</section>
				<style jsx>{`
					.your-privileges-section {
						margin-bottom: 2rem;
					}

					:global(.webp) .privilege-vip-img-div {
						background-image: url(${require("../public/privileges-page/vip-intro-img.webp")});
					}
					:global(.no-webp) .privilege-vip-img-div {
						background-image: url(${require("../public/privileges-page/vip-intro-img.jpg")});
					}

					.privilege-vip-img-div {
						height: 62vh;
						background-repeat: no-repeat;
						background-size: cover;
						background-position: bottom 63% right 50%;
						clip-path: ellipse(100% 100% at 50% 0%);
					}

					@media (max-width: ${sizes.sizes.mdsm}) {
						.your-privileges-section {
							margin-bottom: 0;
							background-color: ${sTheme.palette.secondary.main};
						}
					}

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

					@media (max-width: ${sizes.sizes.lg}) {
						.your-privileges-header-text {
							font-size: 3.5rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.your-privileges-header-text {
							font-size: 3rem;
						}
					}
					.your-privileges-header-paragraph-text {
						color: ${sTheme.palette.secondary.dark};
						font-size: 2rem;
						width: 50%;
					}

					@media (max-width: ${sizes.sizes.xl}) {
						.your-privileges-header-paragraph-text {
							width: 60%;
						}
					}

					@media (max-width: ${sizes.sizes.lg}) {
						.your-privileges-header-paragraph-text {
							width: 70%;
							font-size: 1.8rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.your-privileges-header-paragraph-text {
							width: 80%;
							font-size: 1.6rem;
						}
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
						background-size: cover;
						background-repeat: no-repeat;
						background-position: right 25% bottom 30%;
						border-radius: 20px;
					}

					:global(.webp) .privilege-image-1 {
						background-image: url(${require("../public/privileges-page/contact-us-img.webp")});
					}
					:global(.no-webp) .privilege-image-1 {
						background-image: url(${require("../public/privileges-page/contact-us-img.jpg")});
					}

					:global(.webp) .privilege-image-2 {
						background-image: url(${require("../public/privileges-page/video-call-img.webp")});
					}
					:global(.no-webp) .privilege-image-2 {
						background-image: url(${require("../public/privileges-page/video-call-img.jpg")});
					}

					.privilege-image-2 {
						background-position: right 50% bottom 55%;
					}
					:global(.webp) .privilege-image-3 {
						background-image: url(${require("../public/privileges-page/schedule-an-appointment-img.webp")});
					}
					:global(.no-webp) .privilege-image-3 {
						background-image: url(${require("../public/privileges-page/schedule-an-appointment-img.jpg")});
					}

					:global(.webp) .privilege-image-4 {
						background-image: url(${require("../public/privileges-page/hotel-booking-img.webp")});
					}
					:global(.no-webp) .privilege-image-4 {
						background-image: url(${require("../public/privileges-page/hotel-booking-img.jpg")});
					}

					:global(.webp) .privilege-image-5 {
						background-image: url(${require("../public/privileges-page/istanbul-arrival-collage-img.webp")});
					}
					:global(.no-webp) .privilege-image-5 {
						background-image: url(${require("../public/privileges-page/istanbul-arrival-collage-img.jpg")});
					}

					.privilege-image-5 {
						background-color: ${sTheme.palette.secondary.main};
						background-position: center;
					}

					:global(.webp) .privilege-image-6 {
						background-image: url(${require("../public/privileges-page/your-treatment-img.webp")});
					}
					:global(.no-webp) .privilege-image-6 {
						background-image: url(${require("../public/privileges-page/your-treatment-img.jpg")});
					}

					.privilege-image-6 {
						background-position: right 10% bottom 40%;
					}

					:global(.webp) .privilege-image-7 {
						background-image: url(${require("../public/privileges-page/istanbul-holiday-collage.webp")});
					}
					:global(.no-webp) .privilege-image-7 {
						background-image: url(${require("../public/privileges-page/istanbul-holiday-collage.jpg")});
					}

					.privilege-image-7 {
						height: 700px;
						background-color: ${sTheme.palette.secondary.main};
						background-position: center;
					}

					:global(.webp) .privilege-image-8 {
						background-image: url(${require("../public/privileges-page/departure-img.webp")});
					}
					:global(.no-webp) .privilege-image-8 {
						background-image: url(${require("../public/privileges-page/departure-img.jpg")});
					}

					.privilege-image-8 {
						background-position: right 60% bottom 50%;
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
						font-size: 3.5rem;
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
						justify-content: flex-end;
						width: 95%;
					}

					@media (max-width: ${sizes.sizes.xl}) {
						.privilege-image-div.privilege-image-5 {
							width: 55%;
						}
					}

					@media (max-width: ${sizes.sizes.lg}) {
						.privilege-section {
							width: 90%;
						}
						.privilege-name-header {
							font-size: 3rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.privilege-section {
							width: 100%;
						}
						.privilege-name-header {
							font-size: 2.5rem;
						}
						.privilege-text-paragraph {
							font-size: 1.5rem;
						}
					}

					@media (max-width: ${sizes.sizes.mdsm}) {
						.your-privileges-header-section {
							background-color: ${sTheme.palette.secondary.main};
						}
						.privilege-section {
							flex-direction: column;
						}
						.privilege-image-div {
							width: 100%;
							height: 300px;
							border-radius: 0;
							margin-top: -10px;
						}

						.privilege-image-div.privilege-image-5 {
							height: 600px;
							background-position: center;
							background-size: contain;
							width: 100%;
						}

						.privilege-image-div.privilege-image-7 {
							height: 600px;
							background-size: contain;
							background-position: center;
						}
						.privilege-image-div:nth-of-type(even) {
							order: -1;
						}
						.privilege-name-wrapper {
							border-radius: 0;
							border: none;
							margin: 0;
							text-align: center;
							padding: 3rem;
						}
						.privilege-action-button-div {
							justify-content: center;
							width: 100%;
						}
					}

					@media (max-width: ${sizes.sizes.sm}) {
						.privilege-image-div.privilege-image-5 {
							height: 400px;
						}
						.privilege-image-div.privilege-image-7 {
							height: 500px;
						}
					}

					@media (max-width: ${sizes.sizes.xs}) {
						.privilege-image-div.privilege-image-5 {
							height: 300px;
						}
					}

					@media (max-width: ${sizes.sizes.xxs}) {
						.privilege-image-div.privilege-image-5 {
							height: 250px;
						}

						.privilege-image-div.privilege-image-7 {
							height: 350px;
						}
					}

					.our-prices-section {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						margin-top: -5px;
						padding: 4rem 0 0 0;
					}
					.our-prices-header {
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						width: 100%;
						text-align: center;
					}
					.form-wrapper {
						width: 100%;
					}
				`}</style>
			</section>
		</React.Fragment>
	);
};

export default Privileges;
