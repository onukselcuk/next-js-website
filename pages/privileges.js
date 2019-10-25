import Layout from "../components/Layout";

const Privileges = () => {
	return <p>Privileges Page</p>;
};

Privileges.getInitialProps = async () => {
	const title = "Patient Privileges & Itinerary | Istanbul Smile Center | Let's Make Your Smile Perfect";
	return { title };
};

export default Privileges;
