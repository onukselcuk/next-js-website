import Layout from "../components/Layout";

const Prices = () => (
	<div>
		<p>Hi from prices page</p>
	</div>
);

Prices.getInitialProps = async () => {
	const title =
		"Prices & Cost Calculator - Transparent Pricing | Istanbul Smile Center | Let's Make Your Smile Perfect";
	return { title };
};

export default Prices;
