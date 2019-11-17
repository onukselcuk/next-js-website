import Link from "next/link";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import sTheme from "../src/styledTheme";
import PriceTable from "../components/PriceTable";
import CostCalculator from "../components/CostCalculator";
import { useState } from "react";
import Form from "../components/Form";
import sizes from "../src/sizes";

const useStyles = makeStyles((theme) => ({
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

const Prices = () => {
	const classes = useStyles();
	const language = "en";
	const [ currentCurrency, setCurrentCurrency ] = useState("euro");
	const [ currentSign, setCurrentSign ] = useState("€");
	const handleCurrencyChange = (e) => {
		setCurrentCurrency(e.currentTarget.name);
		setCurrentSign(e.currentTarget.dataset.sign);
	};
	return (
		<div className="root">
			<Head>
				<title key="title">
					Prices & Cost Calculator - Transparent Pricing | Istanbul Smile Center | Let's Make Your Smile
					Perfect
				</title>
			</Head>
			<section className="our-prices-section">
				<div className="calculator-img-div" />
				<div className="our-prices-header">
					<h2 className="our-prices-header-text">Our Prices</h2>
					<p className="our-prices-header-paragraph-text">
						At Istanbul Smile Center, we offer the most competitive prices in Turkey to our patients while
						providing the highest quality of service and dental materials. We have a transparent pricing
						policy. We don't hide our prices. No surprises! No hidden costs!
					</p>
				</div>
				<div className="our-prices-wrapper">
					<PriceTable
						currentCurrency={currentCurrency}
						setCurrentCurrency={setCurrentCurrency}
						currentSign={currentSign}
						setCurrentSign={setCurrentSign}
						handleCurrencyChange={handleCurrencyChange}
						language={language}
					/>
				</div>

				<div className="dental-treatments-buttons-div">
					<Button
						variant="contained"
						color="primary"
						className={clsx(classes.regularButton, classes.pricesButton)}
					>
						Chat&nbsp;Now
					</Button>
				</div>
			</section>
			<section className="our-prices-section cost-calculator-section">
				<div className="our-prices-header">
					<h2 className="our-prices-header-text">Cost Calculator</h2>
					<p className="our-prices-header-paragraph-text">
						We even provide you a cost calculator to calculate the dental cost by yourself for your
						convenience. If you got your teeth checked up by a doctor and know your exact treatment needs or
						you need an estimated cost, feel free to use our calculator.
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
					>
						Chat&nbsp;Now
					</Button>
				</div>
			</section>
			<section className="our-prices-section form-section">
				<div className="our-prices-header">
					<h2 className="our-prices-header-text">Get A Free Quote</h2>
					<p className="our-prices-header-paragraph-text">
						Contacting us through live chat or WhatsApp is always the fastest way, but you may prefer
						sending us a good old form. Tell us your dental needs, and don't forget to attach at least the
						pictures of your teeth to the form. If you have an X-Ray or CT Scan, it's even better and
						crucial for most patients; this will help our doctors to make the right dental plan for you. It
						will also help us in giving you a more accurate quote for your treatment. Go ahead and fill out
						the form! Let's make your smile perfect!
					</p>
				</div>
				<div className="form-wrapper">
					<Form />
				</div>
			</section>

			<style jsx>{`
				.root {
					min-height: calc(100vh - 400px);
				}
				.our-prices-section {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					margin-top: -5px;
					padding-bottom: 4rem;
				}

				.calculator-img-div {
					background-image: url("/stock-photo-calculator-near-model-tooth-over-white-desk-against-gray-wall-1516326851.jpg");
					height: 500px;
					width: 100%;
					background-repeat: no-repeat;
					background-size: contain;
					background-position: center;
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

				.our-prices-link {
					color: ${sTheme.palette.primary.main};
					text-decoration: none;
					font-size: 1.7rem;
					transition: all 200ms ease-in-out;
				}
				.our-prices-link:hover {
					text-decoration: underline;
				}

				.dental-treatments-buttons-div {
					display: flex;
					justify-content: flex-start;
					width: 78%;
					align-items: baseline;
					margin: 0 auto;
					margin-top: 4rem;
				}

				.our-prices-wrapper {
					width: 100%;
				}

				.cost-calculator-section {
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

				.form-wrapper {
					width: 97%;
				}
			`}</style>
		</div>
	);
};

export default Prices;
