import sTheme from "../../src/styledTheme";
import { NextSeo } from "next-seo";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../src/sizes";
import {
	faStarOfLife,
	faTooth,
	faCalendarCheck,
	faCalendarAlt,
	faHeartbeat,
	faHeart as faHeartFull
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
		fontWeight: "bold",
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
				title="Dental Implants in Istanbul, Turkey - Dental Cost Calculator | Istanbul Smile Center"
				description="Calculate your dental implant cost with our dental cost calculator. We provide high quality and affordable dental implant treatments. Learn more about our easy dental implant treatment process."
				openGraph={{
					url: "https://www.istanbulsmilecenter.co/dental-implants",
					title: "Dental Implants in Istanbul, Turkey - Dental Cost Calculator | Istanbul Smile Center",
					description:
						"Calculate your dental implant cost with our dental cost calculator. We provide high quality and affordable dental implant treatments. Learn more about our easy dental implant treatment process."
				}}
			/>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Dental Implants</h1>
				</div>
				<section className="treatment-paragraph-section">
					<DentalImplantsInIstanbul treatmentName="Dental Implants" />
				</section>
				<section className="treatment-paragraph-section">
					<WhyChooseIsc treatmentName="implant" />
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
								Dental Implants?
							</h2>
							<p className="treatment-paragraph">
								The implant can be referred to as the screw-like structure made of titanium. Usually,
								the missing teeth are filled with implants. The treatment begins with engraving of the
								jawbone in the area of the tooth. This is done in a very simple way. A suitable implant
								is selected according to the size of the location and placed in this area. There is
								nothing to be afraid of the placement process. Unless there are extreme conditions, the
								screws will be placed in the jawbone within 10 minutes. Following implant placement and
								healing period, the upper part is mounted with porcelain, E-max, or zirconium crowns.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Who Is
								Suitable For Implant Treatment?
							</h2>
							<p className="treatment-paragraph">
								The main reason for implant treatment is missing teeth. Bone tissue and structure should
								be suitable for the treatment. If there is a weakness in the bone structure, bone
								grafting is added to the area, and the structure is strengthened. This is very common.
								In addition, implantation may be inconvenient if there are diseases or conditions such
								as heart disease, diabetes, pregnancy, breastfeeding, hemophilia problems. Patients who
								have health issues should consult their doctors before implant treatment. The patient is
								expected to be able to tend to implant area after the procedure. Apart from these
								exceptions, there is no circumstance to prevent dental implant treatment.
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
					<div className="treatment-general-text-div">
						<h2 className="treatment-paragraph-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} /> Implant Brands We Use
						</h2>
						<p className="treatment-paragraph">
							Implants should be very durable, comfortable, and aesthetic since they will be used for a
							lifetime. In Istanbul Smile Center, our dentists use the best implant brands that are well
							known and have worldwide use. Our implant brands are{" "}
							<b> Straumann (Made in Switzerland ) </b> and <b> Hiossen (Made in the USA)</b>.
						</p>
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
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faCalendarCheck} /> Dental
							Implant Treatment Process
						</h2>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faCalendarAlt} /> 1)
								Scheduling
							</h2>
							<p className="treatment-paragraph">
								You can contact us through many channels, the fastest way is{" "}
								<b> Live Chat and WhatsApp</b>, you can also send us a form or an email. Sending an
								X-Ray image is crucial in pinpointing your treatment plan and cost. You can also request
								a video call with a doctor. After the treatment plan is determined, our international
								patients' department will be in contact with you to find the perfect date for your
								treatment. There is no waiting period, we will schedule your appointment to the exact
								date you request or maybe the next day but not further. We value our patient's time.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeartbeat} /> 2) Treatment
							</h2>
							<p className="treatment-paragraph">
								On the day of your appointment with our clinic, you will be picked up by one of our
								international patient coordinators right from your hotel. At the clinic, you will be
								greeted by our doctors, and your treatment will start. Our doctor will initially examine
								your teeth physically and take an X-Ray image. For implant patients, our doctors usually
								request an MRI Image to be taken for perfect accuracy in implant locations. After the
								tests, the diameter and length of the implant are selected, local anesthesia will be
								applied, and the implant area will be prepared with dental burr. This process is not
								painful and takes only 5-10 minutes per implant. Later, the implants will be placed, and
								the upper sides of your gum will be stitched. After your treatment, you will be taken
								back to your hotel.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeart} /> 3) Initial
								Healing
							</h2>
							<p className="treatment-paragraph">
								After the implants are placed, an average period of waiting is about at least 4 or 5
								days. After this period, stitches are removed. You can either stay here in Turkey and
								come back to our clinic for stitch removal, or you can go back home and get the stitches
								removed by a local dentist. But we usually suggest our patients to stay here and come
								back to the clinic for a final check and stitch removal before you leave.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeartFull} /> 4) Complete
								Recovery
							</h2>
							<p className="treatment-paragraph">
								Depending on your bone structure, age, and number of implants, you need to wait for 2 to
								6 months to achieve complete recovery. This is crucial for the success of the treatment.
								If there are specific conditions, this period may be reduced or increased. This period
								must pass for the implant to bond with the bone to complete the healing process. After
								recovery, you will need to come to our clinic for a second visit. In that visit, the
								crowns are placed on the implants as the last stage of your treatment.
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
					background-image: url(${require("../../public/treatments/dental-implants-page/dental-implant-intro-background-img.webp")});
				}

				:global(.no-webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/dental-implants-page/dental-implant-intro-background-img.jpg")});
				}

				.treatment-img-div {
					width: 100%;
					height: 66vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 37% bottom 80%;
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
					background-image: url(${require("../../public/treatments/dental-implants-page/dental-implant-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/dental-implants-page/dental-implant-img.jpg")});
				}

				.treatment-paragraph-img-3 {
					max-height: 750px;
					height: 50vmax;
					background-position: left 70% bottom 80%;
				}

				:global(.webp) .treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/dental-implants-page/implant-brands-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/dental-implants-page/implant-brands-img.jpg")});
				}

				.treatment-paragraph-img-4 {
					height: 300px;
					background-position: left 50% bottom 80%;
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
					.treatment-img-div {
						height: 60vh;
					}

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
					.treatment-img-div {
						height: 40vh;
					}
					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 100%;
					}
					.treatment-paragraph-img-1 {
						height: 250px;
					}
					.treatment-paragraph-img-4 {
						height: 250px;
					}
				}

				@media (max-width: ${sizes.sizes.sm}) {
					.treatment-img-div {
						height: 30vh;
					}
					.treatment-general-text-div {
						padding: 2.5rem;
					}
					.treatment-paragraph-img-4 {
						height: 200px;
					}
				}

				@media (max-width: ${sizes.sizes.xs}) {
					.treatment-img-div {
						height: 25vh;
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
					.treatment-paragraph-img-4 {
						height: 175px;
					}
				}

				@media (max-width: ${sizes.sizes.xxs}) {
					.treatment-general-text-div {
						padding: 2rem;
					}
					.treatment-paragraph-img-4 {
						height: 100px;
					}
				}
			`}</style>
		</Layout>
	);
};

export default treatmentTemplate;
