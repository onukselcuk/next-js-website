import Link from "next/link";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import sTheme from "../src/styledTheme";
import PriceTable from "../components/PriceTable";

const useStyles = makeStyles((theme) => ({
	regularButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.third.dark,
		fontFamily: theme.typography.sansSerif,
		letterSpacing: "1px",
		padding: "10px 25px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.secondary.main
		}
	},
	pricesButton: {
		marginRight: "auto",
		marginLeft: "50%",
		transform: "translateX(-50%)",
		padding: "1rem 6rem"

		// position: "relative",
		// left: "50%",
	}
}));

const Prices = () => {
	const classes = useStyles();
	return (
		<div className="root">
			<Head>
				<title key="title">
					Prices & Cost Calculator - Transparent Pricing | Istanbul Smile Center | Let's Make Your Smile
					Perfect
				</title>
			</Head>
			<section className="our-prices-section">
				<div className="our-prices-header">
					<h2 className="our-prices-header-text">Our Prices</h2>
					<p className="our-prices-header-paragraph-text">
						At Istanbul Smile Center, we offer the most competitive prices in Turkey to our patients while
						providing the highest quality of service and dental materials. We have a transparent pricing
						policy. We don't hide our prices. No surprises! No hidden costs!
					</p>
				</div>
				<div className="price-table-wrapper">
					<PriceTable />
				</div>

				<div className="dental-treatments-buttons-div">
					<Button
						variant="contained"
						color="primary"
						className={clsx(classes.regularButton, classes.pricesButton)}
					>
						Chat Now
					</Button>
					<Link href="/privileges">
						<a className="our-prices-link">Learn more abut your privileges and itinerary</a>
					</Link>
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
					padding: 4rem 0;
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
			`}</style>
		</div>
	);
};

export default Prices;
