import sTheme from "../src/styledTheme";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../src/sizes";
import { faGlobe, faComments, faFileSignature, faAt, faHome, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/Layout";
import clsx from "clsx";

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
	},
	fontAwesomeIconHome: {
		marginRight: ".5rem",
		width: "25px !important",
		height: "25px"
	}
}));

const thankYou = (props) => {
	const classes = useStyles();
	const handleChat = () => {
		if (typeof Tawk_API !== "undefined") {
			Tawk_API.maximize();
		}
	};

	const { open, handleCallbackClose, handleCallbackOpen } = props;

	const router = useRouter();
	const { query } = router;

	return (
		<Layout openCallback={open} handleCallbackOpen={handleCallbackOpen} handleCallbackClose={handleCallbackClose}>
			<NextSeo title="Thank You | Istanbul Smile Center | Let's Make Your Smile Perfect" />
			<section className="atakoy-towers-img-section">
				<div className="atakoy-towers-img-div" />
			</section>
			<section className="contact-us-section-section">
				<div className="our-services-header">
					<h1 className="our-services-header-text">Thank You</h1>

					{query.type === "form" ? (
						<p className="our-services-header-paragraph-text">
							Thank you for sending us a form. Now you can relax. Our doctors will examine your request
							and get back to you as soon as possible. We have the shortest response time among all dental
							clinics. Day or night, you can contact us through many channels, live chat, WhatsApp, form
							or email, whenever you need us we are here. In case you need to reach us faster,
							international patients department contact info is below.
						</p>
					) : (
						<p className="our-services-header-paragraph-text">
							Thank you for sending us a callback request. Now you can relax. We will call you as soon as
							possible. We have the shortest response time among all dental clinics. Day or night, you can
							contact us through many channels, live chat, WhatsApp, form or email, whenever you need us
							we are here. In case you need to reach us faster, international patients department contact
							info is below.
						</p>
					)}

					<p className="paragraph home-link">
						<FontAwesomeIcon
							className={clsx(classes.fontAwesomeIconSmall, classes.fontAwesomeIconHome)}
							icon={faHome}
						/>{" "}
						<Link href="/">
							<a className="contact-link home-page-link">Go to Home Page</a>
						</Link>
					</p>
				</div>
				<section className="contact-us-section">
					<div className="contact-us-right-div">
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
								href="https://wa.me/905510413230?text=Hi%20Istanbul%20Smile%20Center"
								className="contact-link"
							>
								WhatsApp: +90 551 041 32 30
							</a>
						</p>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faPhoneAlt} />{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="tel:+905309492470"
								className="contact-link"
							>
								International: +90 530 949 24 70
							</a>
						</p>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faPhoneAlt} />{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="tel:+442081238053"
								className="contact-link"
							>
								UK: +44 2081 238053
							</a>
						</p>
						<p className="paragraph">
							<FontAwesomeIcon className={classes.fontAwesomeIconSmall} icon={faPhoneAlt} />{" "}
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="tel:+18312048370"
								className="contact-link"
							>
								USA: +1 831 204 83 70
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

			<style jsx>{`
				.atakoy-towers-img-section {
					width: 100%;
				}

				:global(.webp) .atakoy-towers-img-div {
					background-image: url(${require("../public/thank-you-page/thank-you-intro-img.webp")});
				}

				:global(.no-webp) .atakoy-towers-img-div {
					background-image: url(${require("../public/thank-you-page/thank-you-intro-img.jpg")});
				}

				.atakoy-towers-img-div {
					width: 100%;
					height: 35vmax;
					background-repeat: no-repeat;
					background-size: cover;
					background-position: left 21% bottom 60%;
					clip-path: ellipse(100% 100% at 50% 0%);
				}

				.contact-us-section-section {
					width: 100%;
					padding: 2rem 0;
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
					font-size: 5rem;
				}
				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-header-text {
						font-size: 4.5rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-services-header-text {
						font-size: 4rem;
					}
				}

				.our-services-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2.3rem;
					width: 50%;
					margin-bottom: 1.5rem;
				}

				@media (max-width: ${sizes.sizes.xl}) {
					.our-services-header-paragraph-text {
						width: 60%;
					}
				}

				@media (max-width: ${sizes.sizes.lg}) {
					.our-services-header-paragraph-text {
						width: 70%;
						font-size: 2rem;
					}
				}

				@media (max-width: ${sizes.sizes.md}) {
					.our-services-header-paragraph-text {
						width: 80%;
						font-size: 1.8rem;
					}
				}

				.contact-us-section {
					display: flex;
					margin: 0 auto;
					width: 80%;
					justify-content: center;
					padding-top: 2rem;
					padding-bottom: 1.5rem;
				}

				.contact-us-right-div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 55%;
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

				.paragraph {
					font-size: 2rem;
					color: ${sTheme.palette.primary.main};
					margin-top: 1rem;
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

					.contact-us-right-div {
						width: 100%;
						align-items: center;
						text-align: center;
						border: none;
						border-radius: 0;
					}
				}

				.home-page-link {
					font-size: 2.5rem;
				}

				@media (max-width: ${sizes.sizes.md}) {
					.home-page-link {
						font-size: 2rem;
					}
				}
			`}</style>
		</Layout>
	);
};

export default thankYou;
