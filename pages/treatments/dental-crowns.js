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
	faCrown
} from "@fortawesome/free-solid-svg-icons";
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
				title="Dental Crowns in Istanbul, Turkey - Dental Cost Calculator | Istanbul Smile Center"
				description="Calculate your dental crown cost with our dental cost calculator. We provide high quality and affordable dental crown treatments. Learn more about porcelain, zirconium, and e-max crowns."
				openGraph={{
					url: "https://www.istanbulsmilecenter.co/dental-crowns",
					title: "Dental Crowns in Istanbul, Turkey - Dental Cost Calculator | Istanbul Smile Center",
					description:
						"Calculate your dental crown cost with our dental cost calculator. We provide high quality and affordable dental crown treatments. Learn more about porcelain, zirconium, and e-max crowns."
				}}
			/>
			<section className="treatment-img-section">
				<div className="treatment-img-div" />
			</section>
			<section className="treatment-section">
				<div className="treatment-header">
					<h1 className="treatment-header-text">Dental Crowns</h1>
				</div>
				<section className="treatment-paragraph-section">
					<DentalImplantsInIstanbul treatmentName="Dental Crowns" />
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
								Dental Crowns?
							</h2>
							<p className="treatment-paragraph">
								A crown is a cover that put over a tooth. The crown looks like a natural tooth. It can
								make your smile perfect. There are mainly three types of crowns. These are Porcelain
								Crowns, E-Max Crowns and Zirconium Crowns.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Who Needs
								Dental Crowns?
							</h2>
							<p className="treatment-paragraph">
								If you have a large cavity that is not suitable for filling or you had a root canal
								treatment with amalgam filler or you want to make your smile perfect by covering a
								discolored or badly shaped tooth, you may need dental crown treatment. Of course if you
								had implants placed in your mouth, crowns are also placed on top of those implants.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Porcelain
								Crowns
							</h2>
							<p className="treatment-paragraph">
								Porcelain crowns are metal-supported. This makes the crown stronger than regular
								porcelain. These are also extremely durable and generally used for rear teeth to handle
								chewing pressure. However, porcelain crowns have low light transmittance and that is why
								we do not recommend for front teeth. Porcelains used in the past years for classical
								dental restorations may present some disadvantages in terms of durability. Zirconium and
								E-max crowns designed to avoid these disadvantages have reached the desired resistance
								level. These crowns are not only durable but also provide an ideal permeability.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> Zirconium
								Crowns
							</h2>
							<p className="treatment-paragraph">
								Zirconium crowns are made from zirconium dioxide, a white powdered metal oxide combined
								with ceramic. They are incredibly strong and perfect for not to crack. After deciding on
								dental treatment, the process begins with modeling and screening. The measurements are
								generated using digital methods. 3D digital scans produce the appropriate measurements
								in a short time. Following the measurement, design and model formation are performed.
								This stage, using a system called CAD CAM, involves the construction of blocks. After
								construction, the color selection is made.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> E-Max Crowns
							</h2>
							<p className="treatment-paragraph">
								E-Max crowns are made from lithium disilicate ceramic. E-max crowns have incredible
								translucency and look like natural teeth. E-Max crowns are constructed using CAD/CAM
								system same as zirconium crowns. However, zirconium crowns are slightly more durable
								than E-Max crowns.
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
					<div className="treatment-general-text-div treatment-general-text-div-single">
						<h2 className="treatment-paragraph-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faStarOfLife} /> What Are The
							Differences Between Zirconium and Porcelain Crowns?
						</h2>
						<p className="treatment-paragraph">
							Porcelain crowns show a very thin and fragile structure. Metal bridges are also used to
							prevent this fragility. Materials such as platinum or palladium will be preferred for
							support. Porcelain teeth have become durable with developing methods but still produce a
							short-term solution. Porcelain crowns are not preferred in long-term treatments.
						</p>
						<p className="treatment-paragraph">
							Zirconium crown is a semi-metal and therefore it combines durability and sensitivity. The
							permeability of zirconium is better than porcelain, so, the natural color of the tooth is
							more easily captured. Zirconium crown also offers a longer life span compared to the
							porcelain crown.
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
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faCalendarCheck} /> Dental Crown
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
								your teeth physically and take measurements of your teeth for the crowns to be designed
								with Computer Aided Design (CAD/CAM) software. Later the measurements are sent to the
								lab for crowns to be designed. Then your your teeth are prepared for crowns. Our doctor
								will reshape the teeth that the crowns will be placed. Later, you will be taken back to
								your hotel.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHeartFull} /> 3) Trials
								Visit
							</h2>
							<p className="treatment-paragraph">
								After the crowns are designed and made, you will visit our clinic. In this visit, our
								doctor will place the crowns on your teeth temporarily so that our doctor can see if
								they fit. Also in trials, you get the opportunity to see how the crowns look and feel.
								During trials you can discuss the shape and color of the crowns to match them with your
								other teeth for a natural look and smile. After the trials visit the lab will make the
								last adjustments to the crowns.
							</p>
						</div>
						<div className="treatment-general-text-side-div">
							<h2 className="treatment-paragraph-header">
								<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faCrown} /> 4) Coronation :)
							</h2>
							<p className="treatment-paragraph">
								On this last visit, your crowns will be placed on your teeth permanently. We suggest
								staying in Turkey for a day or two more, if you have time, so that you can try your
								crowns and can come back to our clinic for a final check.
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
					background-image: url(${require("../../public/treatments/dental-crowns-page/dental-crowns-intro-img.webp")});
				}

				:global(.no-webp) .treatment-img-div {
					background-image: url(${require("../../public/treatments/dental-crowns-page/dental-crowns-intro-img.jpg")});
				}

				.treatment-img-div {
					width: 100%;
					height: 80vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 37% bottom 68%;
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
					background-image: url(${require("../../public/treatments/dental-crowns-page/dental-crown-img.webp")});
				}

				:global(.no-webp) .treatment-paragraph-img-3 {
					background-image: url(${require("../../public/treatments/dental-crowns-page/dental-crown-img.jpg")});
				}

				.treatment-paragraph-img-3 {
					max-height: 750px;
					height: 35vmax;
					background-position: left 60% bottom 80%;
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
				}

				@media (max-width: ${sizes.sizes.sm}) {
					.treatment-img-div {
						height: 30vh;
					}
					.treatment-general-text-div {
						padding: 2.5rem;
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
