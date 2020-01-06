import sTheme from "../src/styledTheme";
import { NextSeo } from "next-seo";
import Form from "../components/Form";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../src/sizes";
import {
	faMapMarkedAlt,
	faGlobe,
	faComments,
	faFileSignature,
	faAt,
	faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
	fontAwesomeIcon: {
		fontSize: "3rem",
		marginRight: ".5rem",
		color: theme.palette.third.dark
	},
	fontAwesomeIconSmall: {
		fontSize: "2rem",
		width: "20px !important",
		height: "20px",
		marginRight: "1.4rem",
		marginLeft: ".5rem",
		margin: "0 auto",
		color: theme.palette.third.dark,
		[sizes.down("mdsm")]: {
			marginRight: ".5rem"
		}
	}
}));

const Contact = (props) => {
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
				title="Contact Us - 7/24 Instant Communication | Istanbul Smile Center"
				description="We have the shortest response time among all dental clinics. Day or night, you can contact us through many channels, live chat, WhatsApp, callback, form or email, whenever you need us we are here."
				openGraph={{
					url: "https://www.istanbulsmilecenter.co/contact",
					title: "Contact Us - 7/24 Instant Communication | Istanbul Smile Center",
					description:
						"We have the shortest response time among all dental clinics. Day or night, you can contact us through many channels, live chat, WhatsApp, callback, form or email, whenever you need us we are here."
				}}
			/>
			<section className="atakoy-towers-img-section">
				<div className="atakoy-towers-img-div" />
			</section>
			<section className="contact-us-section-section">
				<div className="our-services-header">
					<h1 className="our-services-header-text">Contact Us</h1>

					<p className="our-services-header-paragraph-text">
						Our clinic is located in prestigious, luxurious and spacious <b>Ataköy Towers Plaza</b> in
						Istanbul Ataköy district. We have <b>the shortest response time</b> among all dental clinics.
						Day or night, you can contact us through many channels, live chat, WhatsApp, form or email,{" "}
						<b>whenever you need us we are here.</b>
					</p>
				</div>
				<section className="contact-us-section">
					<div className="contact-us-left-div" />
					<div className="contact-us-right-div">
						<h3 className="contact-us-small-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faMapMarkedAlt} /> Our Address
						</h3>
						<p className="contact-us-location-paragraph">
							<a
								className="contact-link contact-link-location"
								target="_blank"
								rel="noopener noreferrer"
								href="https://g.page/istanbulsmilecenter?share"
							>
								Istanbul Smile Center Ağız ve Diş Sağlığı Kliniği<br />Ataköy 7-8-9-10. Kısım Mah.
								Çobançeşme E-5 Yanyol Cad. Ataköy Towers B Blok No:20 Kat:1 Daire:24, 34212
								Bakırköy/Istanbul/Turkey
							</a>
						</p>
						<h3 className="contact-us-small-header">
							<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faGlobe} /> International
							Patients Department
						</h3>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faComments} />{" "}
							<a onClick={handleChat} className="contact-link">
								Chat With Us
							</a>
						</p>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faWhatsapp} />{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://wa.me/905362520072?text=Hi%20Istanbul%20Smile%20Center"
								className="contact-link"
							>
								WhatsApp / International: +90 536 252 00 72
							</a>
						</p>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faPhoneAlt} />{" "}
							<a className="contact-link" onClick={handleCallbackOpen}>
								Request A Callback
							</a>
						</p>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faFileSignature} />{" "}
							<a className="contact-link" href="#form">
								Send Us A Form
							</a>
						</p>

						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faAt} />{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="mailto:contact@istanbulsmilecenter.com"
								className="contact-link"
							>
								Email: contact@istanbulsmilecenter.com
							</a>
						</p>
					</div>
				</section>
			</section>
			<section className="google-map-section">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.544768220102!2d28.832006015661566!3d40.991448128408756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa3147e2cba65%3A0xb6eaeab3d94bfd80!2sIstanbul%20Smile%20Center%20Dental%20Clinic!5e0!3m2!1sen!2str!4v1573457209825!5m2!1sen!2str"
					width="100%"
					height="450"
					frameBorder="0"
					style={{ border: 0 }}
					allowFullScreen
				/>
			</section>
			<section id="form" className="our-services-section form-section">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Send Us A Form</h2>
					<p className="our-services-header-paragraph-text">
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
					width: 100%;
				}

				:global(.webp) .atakoy-towers-img-div {
					background-image: url(${require("../public/contact-page/atakoy-towers-night-img.webp")});
				}

				:global(.no-webp) .atakoy-towers-img-div {
					background-image: url(${require("../public/contact-page/atakoy-towers-night-img.jpg")});
				}

				.atakoy-towers-img-div {
					width: 100%;
					height: 80vh;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 6% bottom 80%;
					clip-path: ellipse(100% 100% at 50% 0%);
				}

				.contact-us-section-section {
					width: 100%;
					padding: 2rem 0 4rem 0;
				}

				.our-services-header {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					width: 100%;
					text-align: center;
				}
				.our-services-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
				}
				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-header-text {
						font-size: 3.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-services-header-text {
						font-size: 3rem;
					}
				}

				.our-services-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 50%;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.our-services-header-paragraph-text {
						width: 60%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-header-paragraph-text {
						width: 70%;
						font-size: 1.8rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-services-header-paragraph-text {
						width: 80%;
						font-size: 1.6rem;
					}
				}

				.contact-us-section {
					display: flex;
					margin: 0 auto;
					width: 80%;
					justify-content: center;
					padding-top: 4rem;
					padding-bottom: 1.5rem;
				}

				:global(.webp) .contact-us-left-div {
					background-image: url(${require("../public/contact-page/atakoy-towers-image.webp")});
				}

				:global(.no-webp) .contact-us-left-div {
					background-image: url(${require("../public/contact-page/atakoy-towers-image.jpg")});
				}

				.contact-us-left-div {
					width: 50%;
					border-radius: 20px;
					background-size: cover;
					background-repeat: no-repeat;
					background-position: center;
				}
				.contact-us-right-div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 50%;
					padding: 2rem;
					background-color: ${sTheme.palette.secondary.main};
					border-radius: 20px;
					border: 1px solid ${sTheme.palette.primary.main};
				}

				.contact-us-small-header {
					color: ${sTheme.palette.primary.main};
					font-family: ${sTheme.typography.serif};
					margin-top: 1rem;
					font-size: 3rem;
				}

				.contact-us-location-paragraph {
					margin-left: 4.8rem;
					max-width: 500px;
				}

				.paragraph {
					font-size: 2rem;
					color: ${sTheme.palette.primary.main};
					margin-top: 1rem;
					font-weight: bold;
				}

				.contact-link {
					text-decoration: none;
					cursor: pointer;
					font-size: 2rem;
					color: ${sTheme.palette.primary.main};
					transition: all 250ms ease-in-out;
				}

				.contact-link:link,
				.contact-link:visited {
					text-decoration: none;
					color: ${sTheme.palette.primary.main};
				}
				.contact-link:hover {
					color: ${sTheme.palette.third.dark};
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.contact-us-section {
						width: 90%;
						font-size: 1.6rem;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.contact-us-section {
						width: 100%;
						font-size: 1.6rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.contact-us-small-header {
						font-size: 2.5rem;
					}
					.paragraph {
						font-size: 1.6rem;
					}
				}

				@media (max-width: ${sizes.sizes.mdsm}) {
					.contact-us-section-section {
						background-color: ${sTheme.palette.secondary.main};
					}
					.atakoy-towers-img-section {
						background-color: ${sTheme.palette.secondary.main};
					}
					.contact-us-section {
						flex-direction: column;
						padding-bottom: .5rem;
					}
					.contact-us-left-div {
						height: 400px;
						width: 100%;
						border-radius: 0;
						background-size: contain;
					}

					.contact-us-right-div {
						width: 100%;
						align-items: center;
						text-align: center;
						border: none;
						border-radius: 0;
					}
					.contact-us-location-paragraph {
						text-align: center;
						margin-left: 0;
					}
					.contact-us-clinic-name {
						text-align: center;
					}
					.form-section {
						background-color: ${sTheme.palette.secondary.main};
						margin-top: -10px;
						padding-top: 2rem;
						padding-bottom: 2rem;
					}
				}
				@media (max-width: ${sizes.sizes.xs}) {
					.contact-us-left-div {
						height: 300px;
					}
				}

				@media (max-width: ${sizes.sizes.xxs}) {
					.contact-us-left-div {
						height: 250px;
					}
				}

				@media (max-width: ${sizes.sizes.xxxs}) {
					.contact-us-left-div {
						height: 200px;
					}
				}
			`}</style>
		</Layout>
	);
};

export default Contact;
