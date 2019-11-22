import sTheme from "../src/styledTheme";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../src/sizes";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
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

const HowAreWeAffordable = () => {
	const classes = useStyles();
	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};
	return (
		<React.Fragment>
			<div className="treatment-paragraph-img-div-div">
				<div className="treatment-paragraph-img-div treatment-paragraph-img-5" />
			</div>
			<div className="treatment-general-text-div">
				<h2 className="treatment-paragraph-header">
					<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faHandHoldingUsd} /> How Are Our Prices
					Much More Affordable Than Your Local Dentist?
				</h2>
				<p className="treatment-paragraph">
					You might be asking yourself how come our prices are this much affordable. You might also be
					wondering about the quality of the treatment. Let us assure you that we use the highest quality
					dental materials, same or better than your local dentist. In addition, every country has different
					living costs as you might have known. <b> So, in Turkey, living cost is so low. </b>
					As a result, the salaries of the doctors, any costs of the clinic (rents and utilities) and tax
					rates are lower too. This situation becomes our patients' advantage and we can provide top quality
					treatment at affordable prices.
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
					border-top-left-radius: 20px;
					border-top-right-radius: 20px;
					background-repeat: no-repeat;
					background-size: cover;

					background-color: ${sTheme.palette.secondary.main};
					background-image: url(${require("../public/treatments/dental-implants-page/affordable-prices-img-220231984.jpg")});
					height: 40vmax;
					max-height: 600px;
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
					.treatment-paragraph-img-4 {
						height: 175px;
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

export default HowAreWeAffordable;
