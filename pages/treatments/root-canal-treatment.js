import sTheme from "../../src/styledTheme";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../src/sizes";
import { faStarOfLife, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CostCalculator from "../../components/CostCalculator";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import clsx from "clsx";
import Form from "../../components/Form";
import DentalImplantsInIstanbul from "../../components/DentalImplantsInIstanbul";
import WhyChooseIsc from "../../components/WhyChooseIsc";
import HowAreWeAffordable from "../../components/HowAreWeAffordable";

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

const treatmentTemplate = () => {
	const classes = useStyles();
	const [ currentCurrency, setCurrentCurrency ] = useState("euro");
	const [ currentSign, setCurrentSign ] = useState("€");
	const handleCurrencyChange = (e) => {
		setCurrentCurrency(e.currentTarget.name);
		setCurrentSign(e.currentTarget.dataset.sign);
	};
	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};
	return (
		<React.Fragment>
			<Head>
				<title key="title">
					Root Canal Treatment in Istanbul, Turkey | Dental Cost Calculator | Istanbul Smile Center | Let's
					Make Your Smile Perfect
				</title>
			</Head>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Root Canal Treatment</h1>
				</div>
				<section className="treatment-paragraph-section">
					<DentalImplantsInIstanbul treatmentName="Root Canal Treatment" />
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
						<CostCalculator
							currentCurrency={currentCurrency}
							handleCurrencyChange={handleCurrencyChange}
							currentSign={currentSign}
						/>
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
						<div className="treatment-paragraph-img-div treatment-paragraph-img-2" />
					</div>
					<div className="treatment-general-text-div treatment-general-text-div-double treatment-general-text-div-double-extra ">
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Is Root
								Canal Treatment?
							</h2>
							<p className="treatment-paragraph">
								The process of removing the nerve of the tooth, cleaning and shaping the cavity and
								filling special canal filling materials is referred to as root canal treatment. The
								patient's condition is important for staging the process. Results can be obtained in one
								or two sessions. Not only the problems in the teeth but also the problems in the gums
								may require canal treatment. Cases requiring root canal treatment can be;
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Severe pain in contact with hot or cold foods
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Unknown pain
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Aggravated pain during sleep
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Is The
								Treatment Painful?
							</h2>
							<p className="treatment-paragraph">
								Root canal treatment does not cause any pain during treatment. Since local anesthesia is
								applied, the patient feels no pain at all. However, it is also possible to experience
								some pain after treatment. It is recommended that the patient does not use that tooth
								during the healing period. Then the pain in the tooth will gradually go away.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> How Is The
								Treatment Process?
							</h2>
							<p className="treatment-paragraph">
								Before the treatment, rubber cover is applied to ensure sterilization. The rubber cover
								is intended to eliminate the possibility of bacteria in the saliva entering the canal
								during canal treatment. Thus, the process proceeds in a more comfortable and hygienic
								way. Local anesthesia is carried out after the rubber cover.
							</p>
							<p className="treatment-paragraph">
								First, all caries on the tooth surface are removed and the decays are cleaned. At this
								stage, the entrance to the section called the canal room starts in the middle of the
								tooth. The canal length is determined using signaling instruments to ensure that the
								detection of the canal ends is perfect. It is possible to open one or more canals as
								required. At this stage of treatment, canal forming procedures are performed. Hand tools
								are used at the beginning of the stage. With the help of rotating tools, interventions
								to shape the root canals are made.
							</p>
							<p className="treatment-paragraph">
								The canals are now open and shaped. With the help of an antibacterial solution, all
								canals are purified from bacteria. Opened, cleaned, shaped canals are filled with
								special dental fillings which completes the treatment.
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
					background-image: url(${require("../../public/treatments/root-canal-treatment-page/root-canal-treatment-intro-img.webp")});
				}

				:global(.no-webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/root-canal-treatment-page/root-canal-treatment-intro-img.jpg")});
				}

				.treatment-img-div {
					width: 100%;
					height: 65vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 42% bottom 60%;
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

				:global(.webp) .treatment-paragraph-img-2 {
					background-image: url(${require("../../public/treatments/root-canal-treatment-page/root-canal-treatment-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-2 {
					background-image: url(${require("../../public/treatments/root-canal-treatment-page/root-canal-treatment-img.jpg")});
				}

				.treatment-paragraph-img-2 {
					height: 40vmax;
					max-height: 1000px;
					background-position: left 50% bottom 60%;
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
				.treatment-paragraph-small-header {
					color: ${sTheme.palette.primary.main};
					font-family: ${sTheme.typography.serif};
					font-weight: bold;
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
		</React.Fragment>
	);
};

export default treatmentTemplate;
