import sTheme from "../../src/styledTheme";
import { NextSeo } from "next-seo";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../src/sizes";
import {
	faStarOfLife,
	faCalendarCheck,
	faCalendarAlt,
	faHeartbeat,
	faHeart as faHeartFull,
	faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CostCalculator from "../../components/CostCalculator";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Form from "../../components/Form";
import DentalImplantsInIstanbul from "../../components/DentalImplantsInIstanbul";
import WhyChooseIsc from "../../components/WhyChooseIsc";
import HowAreWeAffordable from "../../components/HowAreWeAffordable";
import Layout from "../../components/Layout";
const useStyles = makeStyles((theme) => ({
	fontAwesomeIcon: {
		fontSize: "3rem",
		marginRight: ".5rem",
		color: theme.palette.third.dark,
		[sizes.down("lg")]: {
			fontSize: "2.8rem"
		},
		[sizes.down("md")]: {
			fontSize: "2.5rem"
		}
	},
	fontAwesomeIconCheck: {
		fontSize: "2.5rem",
		position: "relative",
		top: "3px",
		marginRight: "1rem",
		color: theme.palette.third.dark,
		[sizes.down("lg")]: {
			fontSize: "2.3rem"
		},
		[sizes.down("md")]: {
			fontSize: "2rem"
		}
	},
	regularButton: {
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
			// background:
			// 	"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			"&::before": {
				opacity: 1
			},
			color: theme.palette.secondary.main
		}
	},
	pricesButton: {
		marginRight: "auto",
		marginLeft: "50%",
		transform: "translateX(-50%)",
		padding: "1rem 6rem"
	}
}));

const treatmentTemplate = (props) => {
	const classes = useStyles();

	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};
	const { open, handleCallbackClose, handleCallbackOpen } = props;
	return (
		<Layout openCallback={open} handleCallbackOpen={handleCallbackOpen} handleCallbackClose={handleCallbackClose}>
			<NextSeo
				title="Dental Veneers in Istanbul, Turkey - Dental Cost Calculator | Istanbul Smile Center"
				description="Calculate your dental veneer cost with our dental cost calculator. We provide high quality and affordable dental veneer treatments. Learn more about our easy dental veneer treatment process."
				openGraph={{
					url: "https://www.istanbulsmilecenter.co/dental-veneers",
					title: "Dental Veneers in Istanbul, Turkey - Dental Cost Calculator | Istanbul Smile Center",
					description:
						"Calculate your dental veneer cost with our dental cost calculator. We provide high quality and affordable dental veneer treatments. Learn more about our easy dental veneer treatment process."
				}}
			/>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Dental Veneers</h1>
				</div>
				<section className="treatment-paragraph-section">
					<DentalImplantsInIstanbul treatmentName="Dental Veneers" />
				</section>
				<section className="treatment-paragraph-section">
					<WhyChooseIsc treatmentName="" />
				</section>
				<section className="our-prices-section cost-calculator-section">
					<div className="our-prices-header">
						<h2 className="our-prices-header-text">Dental Cost Calculator</h2>
						<p className="our-prices-header-paragraph-text">
							We even provide you a cost calculator to calculate the dental cost by yourself for your
							convenience. If you got your teeth checked up by a doctor and know your exact treatment
							needs or you need an estimated cost, feel free to use our calculator.
						</p>
					</div>
					<div className="cost-calculator-wrapper">
						<CostCalculator />
					</div>

					<div className="dental-treatments-buttons-div">
						<Button
							variant="contained"
							color="primary"
							className={clsx(classes.regularButton, classes.pricesButton)}
							onClick={handleChat}
						>
							Chat&nbsp;Now
						</Button>
					</div>
				</section>
				<section className="treatment-paragraph-section">
					<div className="treatment-paragraph-img-div-div">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-3" />
					</div>
					<div className="treatment-general-text-div treatment-general-text-div-double treatment-general-text-div-double-extra ">
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Are
								Dental Veneers?
							</h2>
							<p className="treatment-paragraph">
								Leaf teeth, leaf porcelain, leaf veneer and similar names actually show the same
								process. However, the most accurate explanation of this treatment is the veneer coating.
								Veneer coating provides an effective solution against problems such as fracture on tooth
								surfaces or deformations. Porcelains that offer a similar texture and a similar color to
								the natural tooth are integrated into the front surfaces of the teeth. Perfectly matched
								with other teeth, veneers are as durable as possible, although they appear
								semi-permeable and thin.
							</p>
							<p className="treatment-paragraph">
								Veneer coating can also be applied after the procedures such as implant treatment.
								During the process, small abrasions are made on the tooth surfaces ranging from 0.3
								millimeters to 0.5 millimeters. This ensures that healthy tooth tissue is not lost.
							</p>
							<p className="treatment-paragraph">
								Conditions such as fractures or deformations due to traumas adversely affect dental
								health. In addition, caries may occur if dental care is ignored. Veneer coating gives
								perfect results to prevent negative conditions on the tooth such as breaking or
								deforming.
							</p>
						</div>

						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Are The
								Advantages of Dental Veneers?
							</h2>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Veneers are very close to the natural tooth. They are as durable as possible despite
								their thin structure, so they can be used for a long time.
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Neighboring teeth are not filed down. As a result of the scans performed on your teeth,
								the model is determined and the created model is bonded directly onto the teeth.
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								You can choose veneers regardless of the number of teeth to be treated
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								The color of the veneers doesn't change over time.
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Veneers are like natural teeth. You do not feel any difference during chewing
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Veneers show high resistance to fracture
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> How Long
								Does The Treatment Process Take?
							</h2>
							<p className="treatment-paragraph">
								Veneer coating is considered as one of the fastest and easiest treatment processes among
								aesthetic applications. Depending on the number and structure of the teeth to be coated,
								the veneers can be completed in 2-3 visits.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Who Needs
								Dental Veneers?
							</h2>
							<p className="treatment-paragraph">
								If you have one of the following conditions you may need dental veneer treatment.
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								A detachment between anterior teeth (front teeth)
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Structural defects on tooth surfaces
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Deformation of color
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Aging of fillings
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Yellow spots due to lack of care
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Curved or skewed teeth
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Restoration requirement for tooth fractures
							</p>
						</div>

						<div className="dental-treatments-buttons-div">
							<Button
								variant="contained"
								color="primary"
								className={clsx(classes.regularButton, classes.pricesButton)}
								onClick={handleChat}
							>
								Chat&nbsp;Now
							</Button>
						</div>
					</div>
				</section>
				<section className="treatment-paragraph-section">
					<div className="treatment-general-text-div treatment-general-text-div-double treatment-general-text-div-multiple">
						<h2 className="treatment-paragraph-header treatment-process-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faCalendarCheck} /> Dental Veneer
							Treatment Process
						</h2>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faCalendarAlt} /> 1)
								Scheduling
							</h2>
							<p className="treatment-paragraph">
								You can contact us through many channels, the fastest way is{" "}
								<b> Live Chat and WhatsApp </b>, you can also send us a form or an email. Sending an
								X-Ray image is crucial in pinpointing your treatment plan and cost. You can also request
								a video call with a doctor. After the treatment plan is determined, our international
								patients' department will be in contact with you to find the perfect date for your
								treatment. There is no waiting period, we will schedule your appointment to the exact
								date you request or maybe the next day but not further. We value our patient's time.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeartbeat} /> 2) First
								Visit
							</h2>
							<p className="treatment-paragraph">
								On the day of your appointment with our clinic, you will be picked up by one of our
								international patient coordinators right from your hotel. At the clinic, you will be
								greeted by our doctors, and your treatment will start. Our doctor will initially examine
								your teeth physically and take measurements of your teeth for the veneers to be designed
								with Computer Aided Design (CAD/CAM) software. Later the measurements are sent to the
								lab for veneers to be designed. Then your your teeth are prepared for veneers. Our
								doctor will file down the teeth that the veneers will be placed very slightly
								(0,3-0,5mm). (Veneers are going to be placed on the filed down teeth later when they are
								ready) Later, you will be taken back to your hotel.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeart} /> 3) Trials Visit
							</h2>
							<p className="treatment-paragraph">
								After the veneers are designed and made, you will visit our clinic. In this visit, our
								doctor will place the veneers on your teeth temporarily so that our doctor can see if
								they fit. Also in trials, you get the opportunity to see how the veneers look and feel.
								During trials you can discuss the shape and color of the veneers to match them with your
								other teeth for a natural look and smile. After the trials visit the lab will make the
								final adjustments to the veneers.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeartFull} /> 4)
								Finalization
							</h2>
							<p className="treatment-paragraph">
								On this last visit, your veneers will be placed on your teeth permanently. We suggest
								staying in Turkey for a day or two more, if you have time, so that you can try your
								veneers and can come back to our clinic for a final check.
							</p>
						</div>
						<div className="dental-treatments-buttons-div">
							<Button
								variant="contained"
								color="primary"
								className={clsx(classes.regularButton, classes.pricesButton)}
								onClick={handleChat}
							>
								Chat&nbsp;Now
							</Button>
						</div>
					</div>
				</section>
				<section className="treatment-paragraph-section">
					<HowAreWeAffordable />
				</section>
				<section className="our-prices-section form-section">
					<div className="our-prices-header">
						<h2 className="our-prices-header-text">Get A Free Quote</h2>
						<p className="our-prices-header-paragraph-text">
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
			</section>
			<style jsx>{`
				.treatment-img-section {
					width: 100%;
				}

				:global(.webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/dental-veneers-page/dental-veneers-entrance-img.webp")});
				}

				:global(.no-webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/dental-veneers-page/dental-veneers-entrance-img.jpg")});
				}

				.treatment-img-div {
					width: 100%;
					height: 65vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 42% bottom 80%;
					clip-path: ellipse(100% 100% at 50% 0%);
				}

				.treatment-section {
					display: flex;
					align-items: center;
					flex-direction: column;
					padding: 2rem 1rem;
				}
				.treatment-header {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					width: 100%;
					text-align: center;
				}
				.treatment-process-header {
					width: 100%;
					text-align: center;
					margin-bottom: 1rem;
				}
				.treatment-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
				}
				.treatment-paragraph-section {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 2rem;
				}
				.treatment-paragraph-img-div-div {
					width: 65%;
				}
				.treatment-paragraph-img-div {
					height: 300px;
					border-top-left-radius: 20px;
					border-top-right-radius: 20px;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 50% bottom 80%;
					background-color: ${sTheme.palette.secondary.main};
				}

				:global(.webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/dental-veneers-page/dental-veneers-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/dental-veneers-page/dental-veneers-img.jpg")});
				}

				.treatment-paragraph-img-3 {
					max-height: 750px;
					height: 35vmax;
					background-position: left 20% bottom 80%;
				}

				.treatment-general-text-div {
					width: 65%;
					border: 0px solid ${sTheme.palette.primary.main};
					border-bottom-left-radius: 20px;
					border-bottom-right-radius: 20px;
					border-top: none;
					padding: 3rem;
					background-color: ${sTheme.palette.secondary.main};
					margin-top: 0;
				}
				.treatment-general-text-div-single {
					border-radius: 20px;
				}

				.treatment-general-text-div-double {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				.treatment-general-text-div-double-extra {
					align-items: center;
				}

				.treatment-general-text-div-multiple {
					flex-wrap: wrap;
					border-radius: 20px;
					align-items: center;
				}

				.treatment-general-text-side-div {
					width: 48%;
				}

				.treatment-paragraph-header {
					font-size: 3rem;
					color: ${sTheme.palette.primary.main};
					font-family: ${sTheme.typography.serif};
				}
				.treatment-paragraph {
					font-size: 2rem;
					font-weight: normal;
					margin-bottom: 1rem;
				}

				.our-prices-section {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					margin-top: -5px;
					padding-bottom: 4rem;
					width: 100%;
				}

				.our-prices-header {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					width: 100%;
					text-align: center;
				}
				.our-prices-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
				}

				.our-prices-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}

				.cost-calculator-section {
					margin-top: 2rem;
				}

				.cost-calculator-wrapper {
					width: 70%;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.cost-calculator-wrapper {
						width: 80%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.cost-calculator-wrapper {
						width: 90%;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.cost-calculator-wrapper {
						width: 95%;
					}
				}

				.dental-treatments-buttons-div {
					display: flex;
					justify-content: flex-start;
					width: 100%;
					align-items: baseline;
					margin: 0 auto;
					margin-top: 4rem;
				}

				.form-section {
					margin-top: 2rem;
				}

				.form-wrapper {
					width: 97%;
				}
				.guarantees-div {
					margin: 1rem 0 2rem 0;
				}

				.guarantees-div .treatment-paragraph {
					font-weight: bold;
					color: ${sTheme.palette.primary.main};
				}
				@media (min-width: ${sizes.sizes.fullhd}) {
					.treatment-paragraph-img-4 {
						height: 400px;
					}
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 70%;
					}
					.our-prices-header-paragraph-text {
						width: 60%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 80%;
					}
					.our-prices-header-paragraph-text {
						width: 70%;
						font-size: 1.8rem;
					}
					.our-prices-header-text {
						font-size: 3.5rem;
					}
					.treatment-header-text {
						font-size: 3.5rem;
					}
					.treatment-paragraph-header {
						font-size: 2.5rem;
					}
					.treatment-paragraph {
						font-size: 1.8rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.treatment-img-div {
						height: 50vh;
					}

					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 90%;
					}
					.our-prices-header-paragraph-text {
						width: 80%;
						font-size: 1.6rem;
					}
					.our-prices-header-text {
						font-size: 3rem;
					}
					.treatment-header-text {
						font-size: 3rem;
					}
					.treatment-paragraph-header {
						font-size: 2.2rem;
					}
					.treatment-paragraph {
						font-size: 1.6rem;
					}
				}

				@media (max-width: ${sizes.sizes.mdsm}) {
					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 100%;
					}
					.treatment-paragraph-img-1 {
						height: 250px;
					}
				}

				@media (max-width: ${sizes.sizes.sm}) {
					.treatment-general-text-div {
						padding: 2.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.xs}) {
					.treatment-img-div {
						height: 40vh;
					}
					.treatment-paragraph-img-1 {
						height: 200px;
					}
					.treatment-general-text-side-div {
						width: 100%;
					}
					.treatment-general-text-div-double-extra {
						flex-wrap: wrap;
					}
					.treatment-general-text-div {
						text-align: center;
					}
				}

				@media (max-width: ${sizes.sizes.xxs}) {
					.treatment-general-text-div {
						padding: 2rem;
					}
				}
			`}</style>
		</Layout>
	);
};

export default treatmentTemplate;
