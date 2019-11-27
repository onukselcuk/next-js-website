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
					Pediatric Dentistry in Istanbul, Turkey | General Anesthesia and Sedation in Children | Dental Cost
					Calculator | Istanbul Smile Center | Let's Make Your Smile Perfect
				</title>
			</Head>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Pediatric Dentistry</h1>
				</div>
				<section className="treatment-paragraph-section">
					<DentalImplantsInIstanbul treatmentName="Pediatric Dentistry" />
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
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Pediatric
								Dentistry
							</h2>
							<p className="treatment-paragraph">
								Pediatric dentistry is a science that examines and provides solutions to oral and dental
								health problems of children from birth to the end of adolescence. As the teeth of the
								children start to emerge, the dental system goes through different periods until the
								permanent teeth emerge. Pediatric dentistry includes different applications such as;
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Following and preventing dental disorders
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Treatment of decay in milk (baby teeth) and permanent teeth
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Preservation of toothless areas that will occur as a result of early tooth extraction
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> General
								Anesthesia and Sedation in Children
							</h2>
							<p className="treatment-paragraph">
								General anesthesia and sedation in children make the treatments easier, faster and
								practical. With the new anesthesia techniques we use, anesthesia is a very easy process
								in Istanbul Smile Center. Our clinic is considered one of the best places in Pediatric
								Dentistry.
							</p>
							<p className="treatment-paragraph">
								Sedation is different from general anesthesia. In sedation applications, children can
								communicate with dentists during treatment as well as answer questions. No respiratory
								support is required in sedations.
							</p>
						</div>

						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Why Is
								Anesthesia Applied In Children's Dental Problems?
							</h2>
							<p className="treatment-paragraph">
								Dental caries are the most common problem in the oral health of children. Dental caries
								may occur in children who do not brush their teeth regularly. In addition, general
								anesthesia can be applied if there are suitable conditions for tooth fractures or bigger
								problems in children.
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								If local anesthesia or sedation is not sufficient for the treatment
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								To prevent intense fear and anxiety
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Physical or mental disability
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								Communication is not possible with the patient
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={classes.fontAwesomeIconCheck}
									icon={faChevronCircleRight}
								/>{" "}
								If baby bottle caries are seen at an early age
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> After
								General Anesthesia
							</h2>
							<p className="treatment-paragraph">
								After general anesthesia, the parents and the patient are hosted in our clinic for a
								period of one to two hours. The waiting time may vary depending on the condition of the
								patient. After a day's rest, patient can continue their daily life.
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
					<div className="treatment-paragraph-img-div-div">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-3" />
					</div>
					<div className="treatment-general-text-div treatment-general-text-div-double treatment-general-text-div-double-extra ">
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Is
								Fluoride Treatment?
							</h2>
							<p className="treatment-paragraph">
								The World Health Organization report states that inadequate intake of fluoride adversely
								affects health and leads to tooth decay. The UK National Health Service's (NHS) study of
								children with and without drinking water fluoride reported that children who drink
								fluorinated water have less than 60 percent tooth decay.
							</p>
							<p className="treatment-paragraph">
								Fluoride treatment in children is the safest and cost-effective preventive application
								that has been developed both to protect teeth and prevent the progression of caries. It
								reduces tooth decay by 30-40%.
							</p>
						</div>

						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> How Does
								Fluoride Treatment Protect Teeth?
							</h2>
							<p className="treatment-paragraph">
								Milk teeth complete an important part of the development before birth. Jaws continue to
								develop slowly over the years. In a 7-8-year-old child, the development of permanent
								teeth is completed.
							</p>
							<p className="treatment-paragraph">
								During the development of the teeth, the fluoride taken by the child using fluorinated
								water is dispersed throughout the body and some of them participate in the structure of
								the developing teeth. Fluoride strengthens the tooth structure and increases its
								resistance to caries.
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
					<div className="treatment-paragraph-img-div-div">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-4" />
					</div>
					<div className="treatment-general-text-div treatment-general-text-div-double treatment-general-text-div-double-extra ">
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Is
								Fissure Sealant?
							</h2>
							<p className="treatment-paragraph">
								No matter how much we brush our teeth, in some cases, we may not be able to prevent
								caries. Because toothbrushes cannot be designed to reach every point of the tooth.
								Fissures formed on molar teeth located at the back of our mouth cause caries. However,
								with the application of fissure sealant, we can prevent the formation of caries by
								sealing these fissures. Fissure sealing process, especially applied to molars in
								children, is done to prevent the accumulation of nutrients in the recesses and grooves
								that may cause caries formation.
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Is It An
								Easy Procedure?
							</h2>
							<p className="treatment-paragraph">
								It is an easy and painless procedure. The treatment duration is 3-5 minutes depending on
								the adaptation of the child.
							</p>

							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Is Fissure
								Sealing a Repeated Application Like Fluoride?
							</h2>
							<p className="treatment-paragraph">
								Fissure sealing is not a repeated application like fluoride. It is done once per tooth.
							</p>
						</div>

						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> When Should
								Fissure Sealant Be Applied?
							</h2>
							<p className="treatment-paragraph">
								It is necessary to consult a pediatric dentist for a fissure sealing process at the time
								when the molars of the child and the permanent teeth start to come out. Because new
								teeth can decay much faster. Therefore, it is very important to start preventive
								applications in the early period.
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Happens
								If The Fissure Sealing Is Not Done?
							</h2>
							<p className="treatment-paragraph">
								If the fissure sealing is not made on time, the teeth are at risk of caries. Over time,
								the teeth may begin to decay from the pitted surfaces prone to caries. Depending on the
								depth of caries, filling, root canal treatment or tooth extraction may be required.
								These treatments are both higher in cost and more tedious for children.
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
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/pediatric-dentistry-intro-img.webp")});
				}

				:global(.no-webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/pediatric-dentistry-intro-img.jpg")});
				}

				.treatment-img-div {
					width: 100%;
					height: 70vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 50% bottom 50%;
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
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/pediatric-dentistry-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-2 {
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/pediatric-dentistry-img.jpg")});
				}

				.treatment-paragraph-img-2 {
					max-height: 750px;
					height: 32vmax;
					background-position: left 50% bottom 65%;
				}

				:global(.webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/fluoride-treatment-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/fluoride-treatment-img.jpg")});
				}
				.treatment-paragraph-img-3 {
					max-height: 750px;
					height: 32vmax;
					background-position: left 60% bottom 55%;
				}

				:global(.webp) .treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/fissure-sealing-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/pediatric-dentistry-page/fissure-sealing-img.jpg")});
				}
				.treatment-paragraph-img-4 {
					max-height: 750px;
					height: 30vmax;
					background-position: left 40% bottom 65%;
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
