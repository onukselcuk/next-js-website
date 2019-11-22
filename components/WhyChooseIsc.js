import sTheme from "../src/styledTheme";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../src/sizes";
import { faThumbsUp, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Button from "@material-ui/core/Button";

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

const WhyChooseIsc = ({ treatmentName }) => {
	const classes = useStyles();
	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};
	return (
		<React.Fragment>
			<div className="treatment-paragraph-img-div-div ">
				<div className="treatment-paragraph-img-div treatment-paragraph-img-2" />
			</div>
			<div className="treatment-general-text-div">
				<h2 className="treatment-paragraph-header">
					<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faThumbsUp} /> Why Choose Istanbul Smile
					Center?
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
						Only Top Quality{" "}
						{treatmentName === "implant" ? (
							"and FDA Approved Implants with Worldwide Use"
						) : (
							"Dental Materials"
						)}
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
					We do not accept groups of patients and treat them in batches. Because we believe it lowers the
					quality of the treatment and the comfort of the patient. We do not see the number of patients and
					their treatments as a numbers game. <b>
						{" "}
						We do not compromise quality for the sake of quantity.{" "}
					</b>{" "}
					You will feel yourself unique in Istanbul Smile Center. Because you are special to us as every other
					patient, we have.
				</p>
				<p className="treatment-paragraph">
					You might have heard some disappointment stories from your friends about other clinics.
					Unfortunately, there are some unethical practices in a lot of clinics that causes these
					disappointments. One of them is employing young doctors with low wages and putting them to 16-18
					hours of work in a day to make more money. We do not do that.{" "}
					<b>
						{" "}
						In Istanbul Smile Center, our doctors are top quality and experienced specialists in their
						fields.{" "}
					</b>
				</p>
				<p className="treatment-paragraph">
					Another problem in many other clinics you might have heard is deceiving patients in quoting the
					treatment. They send a low quote to the patient to draw him/her to the clinic, and suddenly they
					come up with different treatment plan and raise the cost of the treatment when you arrive to the
					clinic. We never ever do that.{" "}
					<b>
						{" "}
						Before you come to Turkey, our international patients department and doctors will make every
						effort to pinpoint your treatment cost. So, no disappointments, no surprises in our clinic!{" "}
					</b>
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

			<style jsx>{`
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
					background-image: url(${require("../public/about-page/isc-entrance-img.jpg")});
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
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 80%;
					}

					.treatment-paragraph-header {
						font-size: 2.5rem;
					}
					.treatment-paragraph {
						font-size: 1.8rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.treatment-paragraph-img-div-div,
					.treatment-general-text-div {
						width: 90%;
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
				}

				@media (max-width: ${sizes.sizes.sm}) {
					.treatment-general-text-div {
						padding: 2.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.xs}) {
					.treatment-general-text-div {
						text-align: center;
					}
				}

				@media (max-width: ${sizes.sizes.xxs}) {
					.treatment-general-text-div {
						padding: 2rem;
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
			`}</style>
		</React.Fragment>
	);
};

export default WhyChooseIsc;
