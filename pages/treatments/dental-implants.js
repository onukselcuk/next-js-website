import sTheme from "../../src/styledTheme";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../../src/sizes";
import {
	faStarOfLife,
	faLocationArrow,
	faThumbsUp,
	faTooth,
	faCalendarCheck,
	faHandHoldingUsd,
	faCalendarAlt,
	faHeartbeat,
	faHeart as faHeartFull,
	faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CostCalculator from "../../components/CostCalculator";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import clsx from "clsx";
import Form from "../../components/Form";

const useStyles = makeStyles((theme) => ({
	fontAwesomeIcon: {
		fontSize: "3rem",
		marginRight: ".5rem",
		color: theme.palette.third.dark
	},
	fontAwesomeIconCheck: {
		fontSize: "2.5rem",
		position: "relative",
		top: "3px",
		marginRight: "1rem"
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
					Dental Implants in Istanbul, Turkey | Istanbul Smile Center | Let's Make Your Smile Perfect
				</title>
			</Head>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Dental Implants</h1>
				</div>
				<section className="treatment-paragraph-section">
					<div className="treatment-paragraph-img-div-div">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-1" />
					</div>
					<div className="treatment-general-text-div">
						<h2 className="treatment-paragraph-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faLocationArrow} /> Dental
							Implants in Istanbul, Turkey
						</h2>
						<p className="treatment-paragraph">
							No need to pour tons of money for your dental treatment in your local dentist.{" "}
							<b>
								Istanbul is the perfect place to get high quality and affordable dental treatment.
							</b>{" "}
							Turkish doctors are known for their successes throughout the world. Medical school is the
							toughest school to complete in Turkey. Besides, who doesn't want to turn their dental
							treatment into a holiday in a beautiful and historical place like Istanbul?{" "}
							<b>
								{" "}
								Enjoy historical sites, Bosphorus, multicultural society of Istanbul, and our delicious
								Turkish food during your stay here.
							</b>
						</p>
					</div>
				</section>
				<section className="treatment-paragraph-section">
					<div className="treatment-paragraph-img-div-div ">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-2" />
					</div>
					<div className="treatment-general-text-div">
						<h2 className="treatment-paragraph-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faThumbsUp} /> Why Choose
							Istanbul Smile Center?
						</h2>
						<div className="guarantees-div">
							<p className="treatment-paragraph">In Istanbul Smile Center, we guarantee;</p>

							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Experienced and Top Quality Doctors
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Only Top Quality and FDA Approved Implants with Worldwide Use
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Transparent Pricing & Pinpoint Accuracy Quote
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Affordable and The Most Competitive Prices
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Free Airport-Hotel and Hotel-Clinic VIP Transfers
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Hotel Discounts
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Multilingual Assistance
							</p>
							<p className="treatment-paragraph">
								<FontAwesomeIcon
									className={clsx(classes.fontAwesomeIcon, classes.fontAwesomeIconCheck)}
									icon={faCheckCircle}
								/>
								Travel Tours Discounts
							</p>
						</div>
						<p className="treatment-paragraph">
							<b>
								{" "}
								Our clinic is an exclusive and one of the rare clinics that treat and tend the patients
								individually.
							</b>{" "}
							We do not accept groups of patients and treat them in batches. Because we believe it lowers
							the quality of the treatment and the comfort of the patient. We do not see the number of
							patients and their treatments as a numbers game.{" "}
							<b> We do not compromise quality for the sake of quantity. </b> You will feel yourself
							unique in Istanbul Smile Center. Because you are special to us as every other patient, we
							have.
						</p>
						<p className="treatment-paragraph">
							You might have heard some disappointment stories from your friends about other clinics.
							Unfortunately, there are some unethical practices in a lot of clinics that causes these
							disappointments. One of them is employing young doctors with low wages and putting them to
							16-18 hours of work in a day to make more money. We do not do that.{" "}
							<b>
								{" "}
								In Istanbul Smile Center, our doctors are top quality and experienced specialists in
								their fields.{" "}
							</b>
						</p>
						<p className="treatment-paragraph">
							Another problem in many other clinics you might have heard is deceiving patients in quoting
							the treatment. They send a low quote to the patient to draw him/her to the clinic, and
							suddenly they come up with different treatment plan and raise the cost of the treatment when
							you arrive to the clinic. We never ever do that.{" "}
							<b>
								{" "}
								Before you come to Turkey, our international patients department and doctors will make
								every effort to pinpoint your treatment cost. So, no disappointments, no surprises in
								our clinic!{" "}
							</b>
						</p>
					</div>
				</section>
				<section className="our-prices-section cost-calculator-section">
					<div className="our-prices-header">
						<h2 className="our-prices-header-text">Cost Calculator</h2>
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
								be suitable for the treatment. If there is a weakness in the bone structure, the bone
								grafting is added to the area, and the structure is strengthened. This is very common.
								In addition, implantation may be inconvenient if there are diseases or conditions such
								as heart disease, diabetes, pregnancy, breastfeeding, hemophilia problems. Patients who
								have health issues should consult their doctors before implant treatment. The patient is
								expected to be able to tend to implant area after the procedure. Apart from these
								exceptions, there is no circumstance to prevent dental implant treatment.
							</p>
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
					</div>
				</section>
				<section className="treatment-paragraph-section">
					<div className="treatment-paragraph-img-div-div">
						<div className="treatment-paragraph-img-div treatment-paragraph-img-5" />
					</div>
					<div className="treatment-general-text-div">
						<h2 className="treatment-paragraph-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHandHoldingUsd} /> How Are Our
							Prices Much More Affordable Than Your Local Dentist?
						</h2>
						<p className="treatment-paragraph">
							You might be asking yourself how come our prices are this much affordable. You might also be
							wondering about the quality of the treatment. Let us assure you that we use the highest
							quality dental materials, same or better than your local dentist. In addition, every country
							has different living costs as you might have known.{" "}
							<b> So, in Turkey, living cost is so low. </b>
							As a result, the salaries of the doctors, any costs of the clinic (rents and utilities) and
							tax rates are lower too. This situation becomes our patients' advantage and we can provide
							top quality treatment at affordable prices.
						</p>
					</div>
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

				.treatment-img-div {
					background-image: url(${require("../../public/treatments/dental-implants-page/dental-implant-intro-background-img.jpg")});
					width: 100%;
					height: 66vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 21% bottom 80%;
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
					background-image: url(${require("../../public/treatments/dental-implants-page/istanbul-bosphorous-img.jpg")});
					height: 300px;
					border-top-left-radius: 20px;
					border-top-right-radius: 20px;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 50% bottom 80%;
				}

				.treatment-paragraph-img-2 {
					background-image: url(${require("../../public/about-page/isc-entrance-img.jpg")});
				}

				.treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/dental-implants-page/dental-implant-img.jpg")});
					height: 600px;
				}

				.treatment-paragraph-img-4 {
					background-image: url(${require("../../public/treatments/dental-implants-page/implant-brands-img.jpg")});
					height: 300px;
				}

				.treatment-paragraph-img-5 {
					background-image: url(${require("../../public/treatments/dental-implants-page/affordable-prices-img-220231984.jpg")});
					height: 500px;
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

				@media (max-width: ${sizes.sizes.lg}) {
					.our-prices-header-text {
						font-size: 3.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-prices-header-text {
						font-size: 3rem;
					}
				}
				.our-prices-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.our-prices-header-paragraph-text {
						width: 60%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.our-prices-header-paragraph-text {
						width: 70%;
						font-size: 1.8rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-prices-header-paragraph-text {
						width: 80%;
						font-size: 1.6rem;
					}
				}

				.cost-calculator-section {
					margin-top: 2rem;
				}

				.cost-calculator-wrapper {
					width: 70%;
				}

				.dental-treatments-buttons-div {
					display: flex;
					justify-content: flex-start;
					width: 78%;
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
			`}</style>
		</React.Fragment>
	);
};

export default treatmentTemplate;
