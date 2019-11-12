import atakoyTowers from "../public/atakoy-towers/atakoy-towers-horizontal.jpg";
import atakoyTowersEntrance from "../public/atakoy-towers/atakoy-towers-entrance.jpg";
import sTheme from "../src/styledTheme";
import Form from "../components/Form";

const Contact = () => {
	return (
		<React.Fragment>
			<section className="atakoy-towers-img-section">
				<img className="atakoy-towers-img" src={atakoyTowers} alt="" />
			</section>
			<section className="contact-us-section-section">
				<section className="contact-us-section">
					<div className="contact-us-left-div">
						<img className="atakoy-towers-entrance-img" src={atakoyTowersEntrance} alt="" />
					</div>
					<div className="contact-us-right-div">
						<h1 className="contact-us-main-header">Contact Us</h1>
						<h2 className="contact-us-clinic-name">Istanbul Smile Center Dental Clinic</h2>
						<h4 className="contact-us-location-paragraph">
							Our clinic is located in prestigious, luxurious and spacious Ataköy Towers in Istanbul
							Ataköy district.
						</h4>
						<p className="contact-us-response-time-paragraph">
							We have the shortest response time among all dental clinics. Day or night, you can contact
							us through many channels, live chat, WhatsApp, form or email, whenever you need us we are
							here.
						</p>
						<h3 className="contact-us-small-header">Our Address</h3>
						<p>
							Ataköy 7-8-9-10. Kısım Mah. Çobançeşme E-5 Yanyol Cad. Ataköy Towers B Blok No:20 Kat:1
							Daire:24, 34212 Bakırköy/Istanbul/Turkey
						</p>
						<h3 className="contact-us-small-header">International Patients Department</h3>
						<p>Chat With Us</p>
						<p>
							WhatsApp:&nbsp;
							<a
								target="_blank"
								href="https://wa.me/905309492470?text=Hi+Istanbul+Smile+Center.+I+have+a+question."
								className="contact-us-link"
							>
								+90 530 949 24 70
							</a>
						</p>
						<p>
							<a className="contact-us-link" href="#form">
								Send Us A Form
							</a>
						</p>
						<p>Email: contact@istanbulsmilecenter.com</p>
					</div>
				</section>
			</section>
			<section className="google-map-section">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.544768220102!2d28.832006015661566!3d40.991448128408756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3147e2cba65%3A0xb6eaeab3d94bfd80!2sIstanbul%20Smile%20Center%20Dental%20Clinic!5e0!3m2!1sen!2str!4v1573457209825!5m2!1sen!2str"
					width="100%"
					height="350"
					frameborder="0"
					style={{ border: 0 }}
					allowfullscreen
				/>
			</section>
			<section id="form" className="our-prices-section form-section">
				<div className="our-prices-header">
					<h2 className="our-prices-header-text">Send Us A Form</h2>
					<p className="our-prices-header-paragraph-text">
						Contacting us through live chat or WhatsApp is always the fastest way, but you may prefer
						sending us a good old form. Tell us your dental needs, and don't forget to attach at least the
						pictures of your teeth to the form.
					</p>
				</div>
				<div className="form-wrapper">
					<Form />
				</div>
			</section>

			<style jsx>{`
				.atakoy-towers-img-section {
				}
				.atakoy-towers-entrance-img {
					width: 100%;
					border-radius: 20px;
				}
				.atakoy-towers-img {
					width: 100%;
				}

				.contact-us-section-section {
					width: 100%;
					background-color: ${sTheme.palette.secondary.main};
					padding: 8rem 0;
					margin-top: -1rem;
				}
				.contact-us-section {
					display: flex;
					margin: 0 auto;
					width: 80%;
					justify-content: center;
				}
				.contact-us-left-div {
					width: 50%;
					margin-right: 1rem;
				}
				.contact-us-right-div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 50%;
					padding: 0 2rem;
					color: ;
				}
				.contact-us-right-div p {
					font-size: 1.8rem;
				}
				.contact-us-main-header {
					font-size: 4rem;
					color: ${sTheme.palette.third.dark};
					font-family: ${sTheme.typography.serif};
				}
				.contact-us-clinic-name {
					font-size: 2.5rem;
					color: ${sTheme.palette.primary.main};
				}
				.contact-us-location-paragraph {
					font-size: 2rem;
					font-weight: normal;
					margin-bottom: 1rem;
				}
				.contact-us-small-header {
					color: ${sTheme.palette.primary.main};
					margin-top: .5rem;
				}
				.contact-us-link {
					color: inherit;
				}
				.our-prices-section {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					margin-top: -5px;
					padding: 2rem 0;
					background-color: ${sTheme.palette.secondary.main};
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
					color: ${sTheme.palette.third.dark};
					font-size: 3.5rem;
				}
				.our-prices-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}
			`}</style>
		</React.Fragment>
	);
};

export default Contact;
