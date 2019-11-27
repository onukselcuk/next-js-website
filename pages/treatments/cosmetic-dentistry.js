import sTheme from "../../src/styledTheme";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../src/sizes";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
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
					Cosmetic Dentistry in Istanbul, Turkey | Hollywood Smile | Gum Contouring | Dental Cost Calculator |
					Istanbul Smile Center | Let's Make Your Smile Perfect
				</title>
			</Head>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Cosmetic Dentistry</h1>
				</div>
				<section className="treatment-paragraph-section">
					<DentalImplantsInIstanbul treatmentName="Cosmetic Dentistry" />
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
				<section className="treatment-paragraph-section" id="hollywood-smile">
					<div className="treatment-paragraph-img-div-div">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-3" />
					</div>
					<div className="treatment-general-text-div treatment-general-text-div-double treatment-general-text-div-double-extra ">
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Hollywood
								Smile
							</h2>
							<p className="treatment-paragraph">
								A perfect smile makes you feel better and improves your self-confidence. Hollywood Smile
								not only makes your smile perfect but also removes your other dental problems. This
								treatment will provide the patient an aesthetic smile.
							</p>
							<p className="treatment-paragraph">
								Our doctors examine patient's mouth and decide the stages of the treatment. The
								treatment may vary from person to person such as using veneers or crowns, teeth
								whitening, implantation, and gummy smile correction.
							</p>

							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> How Long
								Does The Treatment Take?
							</h2>
							<p className="treatment-paragraph">
								After examination, the treatment is planned according to the shape of teeth and gums.
								Thanks to the latest and advanced computer technology, it is possible to design a
								perfect smile in a few hours. Even if the treatment can vary depending on the process,
								it only takes 5 to 7 days if your treatment plan doesn't include dental implants.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What
								Treatments Are Applied?
							</h2>

							<p className="treatment-paragraph treatment-paragraph-small-header">Dental Implants</p>
							<p className="treatment-paragraph">
								The implant can be referred to as screw-like structures made of titanium. If you have
								missing teeth, then missing teeth are filled with implants.
							</p>
							<p className="treatment-paragraph treatment-paragraph-small-header">Dental Veneers</p>
							<p className="treatment-paragraph">
								Porcelain veneer provides an effective solution against problems such as fracture on
								tooth surfaces or deformations and applied to the front of the teeth. Porcelain offers a
								very similar texture and color as natural tooth.
							</p>
							<p className="treatment-paragraph treatment-paragraph-small-header">
								Gummy Smile Correction
							</p>
							<p className="treatment-paragraph">
								Gums are important as teeth. It is necessary that the teeth and gums match with each
								other for a healthy and beautiful-looking smile. Pink aesthetic treatment is applied to
								make the gum structure, mouth, and tooth structure ideal.
							</p>
							<p className="treatment-paragraph treatment-paragraph-small-header">Teeth Whitening</p>
							<p className="treatment-paragraph">
								Teeth Whitening is essential for a perfect smile. Teeth whitening can be applied in a
								method determined by your dentist. There are home teeth whitening and clinic teeth
								whitening. Depending on the patient's condition, home or clinic teeth whitening is
								applied to the patient.
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
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Gummy Smile
								Correction
							</h2>
							<p className="treatment-paragraph">
								Gummy Smile Correction is also known as pink aesthetic, gum contouring or gummy
								aesthetics. Gummy smile correction is a treatment that make the gum look more beautiful
								and healthy. In practice, the gums are treated with the help of laser. The entire gums
								are considered during treatment and the necessary procedures are applied during the
								process. If level differences are observed, cuts can be performed for shortening or
								lengthening purposes. Surgical interventions are performed in the gummy smile problem.
								If surgical procedures are not sufficient, the botox method can also be considered.
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Who Should
								Have Gummy Smile Correction?
							</h2>
							<p className="treatment-paragraph">
								Gummy smile correction treatment can be applied to any adult who wants to add aesthetic
								beauty to his/her smile. There are many situations in which it is recommended, with or
								without an aesthetic concern. Gummy smile correction make the gum structure, the mouth
								and teeth structure ideal. For this reason, this treatment method can be recommended for
								those who have different tooth lengths. The problematic teeth will be equal to other
								teeth with pink aesthetics. Aesthetics can also be used in cases of gingival
								inflammation or teeth inflammation. One of the effective solutions for those problems is
								the pink aesthetic treatment. Because the treatment process is completely without any
								pain.
							</p>
						</div>

						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> How Is The
								Treatment Process?
							</h2>
							<p className="treatment-paragraph">
								After veneer, zirconium coating, or root canal treatment, pink aesthetic might be
								necessary. Problems in the gums are removed and aesthetic operations start. The
								treatment varies according to the patient's gum status. Respective and regeneration can
								be mentioned in aesthetic procedures for the gum. Respective procedures are performed
								for problems such as irregularities of the gums and occasional growth. In these
								procedures, the gums are cut with the help of laser. If these procedures do not solve
								the problem, a larger treatment can be applied. In addition to the gums, styling touches
								to the bones around the teeth can be also required. In regeneration procedures, tissue
								is added to the areas where the gum is extracted. With this added tissue, teeth lengths
								have reach their ideal levels. Pink aesthetic dental treatments are very short. It
								depends on the patient's mouth structure and it can take approximately 30 minutes. If
								the post-treatment care is performed completely, complete recovery may occur within a
								period of two weeks. Detailed information about what the patient should do after the
								treatment, what to pay attention to and what to avoid will be clearly stated by our
								specialist dentists before and after the treatment.
							</p>
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> How Long
								Does The Treatment Take?
							</h2>
							<p className="treatment-paragraph">
								Pink aesthetic dental treatments are very short. It depends on the patient's mouth
								structure and it can take approximately 30 minutes. If the post-treatment care is
								performed completely, complete recovery may occur within a period of two weeks.
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
					background-image: url(${require("../../public/treatments/cosmetic-dentistry-page/cosmetic-dentistry-intro-img.webp")});
				}

				:global(.no-webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/cosmetic-dentistry-page/cosmetic-dentistry-intro-img.jpg")});
				}

				.treatment-img-div {
					width: 100%;
					height: 75vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 42% bottom 100%;
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
					background-image: url(${require("../../public/treatments/cosmetic-dentistry-page/hollywood-smile-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/cosmetic-dentistry-page/hollywood-smile-img.jpg")});
				}

				.treatment-paragraph-img-3 {
					max-height: 750px;
					height: 30vmax;
					background-position: left 10% bottom 80%;
				}

				:global(.webp) .treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/cosmetic-dentistry-page/gummy-smile-correction-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/cosmetic-dentistry-page/gummy-smile-correction-img.jpg")});
				}

				.treatment-paragraph-img-4 {
					background-position: center;
					background-size: contain;
					height: 14vmax;
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
					align-items: flex-start;
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
