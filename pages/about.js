import sTheme from "../src/styledTheme";
import sizes from "../src/sizes";
import Form from "../components/Form";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";

const About = (props) => {
	const { open, handleCallbackClose, handleCallbackOpen } = props;
	return (
		<Layout openCallback={open} handleCallbackOpen={handleCallbackOpen} handleCallbackClose={handleCallbackClose}>
			<NextSeo
				title="Our Modern Clinic - Top Quality Doctors and Staff | Istanbul Smile Center"
				description="Learn more about our modern clinic, awesome and experienced doctors and staff."
				openGraph={{
					url: "https://www.istanbulsmilecenter.co/about",
					title: "Our Modern Clinic - Top Quality Doctors and Staff | Istanbul Smile Center",
					description: "Learn more about our modern clinic, awesome and experienced doctors and staff."
				}}
			/>
			<section className="about-us-whole-section">
				<section className="clinic-entrance-img-section">
					<div className="clinic-entrance-img-div" />
				</section>
				<section className="about-us-section">
					<div className="about-us-header">
						<h1 className="about-us-header-text">Our Team</h1>
						<p className="about-us-header-paragraph-text">
							We are very proud of our experienced team. Our always smiling doctors and staff are at your
							service in Istanbul Smile Center. You can also enjoy our modern and comfortable clinic
							during your visit. We are very excited to see you join our Happy Family along with thousands
							of people!
						</p>
					</div>
					<div className="clinic-image-wrapper">
						<picture className="clinic-image-wrapper">
							<source
								srcSet={require("../public/about-page/about-us-everyone-img.webp")}
								type="image/webp"
							/>
							<source
								srcSet={require("../public/about-page/about-us-everyone-img.jpg")}
								type="image/jpeg"
							/>
							<img
								className="clinic-image"
								src={require("../public/about-page/about-us-everyone-img.jpg")}
								alt="Patient Image 3"
							/>
						</picture>
					</div>
				</section>
				<section className="your-privileges-section">
					<section className="your-privileges-header-section">
						<div className="your-privileges-header-wrapper">
							<h2 className="your-privileges-header-text">Our Doctors</h2>
							{/* <p className="your-privileges-header-paragraph-text">
								At Istanbul Smile Center, we offer unique and free services to our international
								patients to make their dental treatments super easy and enjoying as no other clinic can.
							</p> */}
						</div>
					</section>
					<section id="dr-yasin-akgul" className="privilege-section">
						<div className="privilege-image-div privilege-image-1" />
						<div className="privilege-explanation-div">
							<div className="privilege-name-wrapper">
								<h2 className="privilege-name-header">Asst. Prof. Dr. Yasin Erdem Akgül</h2>
								<p className="privilege-text-paragraph">
									Assistant Professor Doctor Yasin Erdem Akgül graduated from{" "}
									<b>Istanbul University Dental School</b> which is the <b>best dental school</b> in
									Turkey. Later, he completed his doctorate in orthodontics and continued his academic
									studies. He focused on expedited orthodontic treatments on his thesis work. He made
									presentations in countless <b>international congresses</b>. He continues his
									research in orthodontics for national and international journals. He is a member of
									both Turkish and <b>European Orthodontic Society</b>. He is an
									<b> Invisalign Silver Provider. </b> He has more than <b>14 years of experience</b>{" "}
									in dental treatments.
								</p>
							</div>
						</div>
					</section>
					<section id="dr-sevil-akgul" className="privilege-section">
						<div className="privilege-explanation-div privilege-explanation-div-reverse">
							<div className="privilege-name-wrapper privilege-name-wrapper-reverse">
								<h2 className="privilege-name-header">Spec. Dr. Sevil Borbay Akgül</h2>
								<p className="privilege-text-paragraph">
									Specialist Doctor Sevil Borbay Akgül graduated from the <b>best dental school</b> of
									Turkey, <b>Istanbul University Dental School</b>. Later, she completed her doctorate
									and specialist dentist training in pedodontics. <b>Her doctorate thesis</b> on
									in-vitro evaluation of influence on antibacterial and physical properties of
									cetrimide and silver nanoparticles incorporation in glass ionomer cement{" "}
									<b>attracted a lot of attention from international community.</b> During her
									doctorate, she participated in clinical researches on tooth traumas and PRP root
									cell treatment in root canal treatments(regenerative endodontics and
									revascularization treatment). She went to many national and international congresses
									and symposiums and made presentations. She has more than{" "}
									<b>14 years of experience</b> in dental treatments.
								</p>
							</div>
						</div>
						<div className="privilege-image-div privilege-image-2" />
					</section>
					<section id="dr-yavuz-eker" className="privilege-section">
						<div className="privilege-image-div privilege-image-3" />
						<div className="privilege-explanation-div">
							<div className="privilege-name-wrapper">
								<h2 className="privilege-name-header">Dr. Yavuz Eker</h2>
								<p className="privilege-text-paragraph">
									Doctor Yavuz Eker graduated from Crimea State University Dental School. He completed
									his internship in Ukraine. <b>As dentistry is his family profession,</b> he also
									excelled in dentistry following in the steps of his family. He focused his work on{" "}
									<b>
										Aesthetic Dentistry, Dental Implants and Smile Aesthetics and got more than 30
										certificates on Smile Aesthetics.
									</b>{" "}
									He has more than <b>13 years of experience</b> in dental treatments.
								</p>
							</div>
						</div>
					</section>

					<section className="our-prices-section">
						<div className="our-prices-header">
							<h2 className="your-privileges-header-text">Get A Free Quote</h2>
							<p className="your-privileges-header-paragraph-text">
								Contacting us through live chat or WhatsApp is always the fastest way, but you may
								prefer sending us a good old form. Tell us your dental needs, and don't forget to attach
								at least the pictures of your teeth to the form. If you have an X-Ray or CT Scan, it's
								even better and crucial for most patients; this will help our doctors to make the right
								dental plan for you. It will also help us in giving you a more accurate quote for your
								treatment. Go ahead and fill out the form! Let's make your smile perfect!
							</p>
						</div>
						<div className="form-wrapper">
							<Form />
						</div>
					</section>
				</section>
				<style jsx>{`
					.about-us-whole-section {
						width: 100%;
					}
					.clinic-entrance-img-section {
						width: 100%;
					}
					:global(.webp) .clinic-entrance-img-div {
						background-image: url(${require("../public/about-page/isc-entrance-img.webp")});
					}

					:global(.no-webp) .clinic-entrance-img-div {
						background-image: url(${require("../public/about-page/isc-entrance-img.jpg")});
					}
					.clinic-entrance-img-div {
						width: 100%;
						height: 55vh;
						background-repeat: no-repeat;
						background-size: cover;
						background-position: left 49% bottom 60%;
						clip-path: ellipse(100% 100% at 50% 0%);
					}

					@media (max-width: ${sizes.sizes.mdsm}) {
						.clinic-entrance-img-section {
							background-color: ${sTheme.palette.secondary.main};
						}
					}
					.about-us-section {
						width: 95%;
						margin: 4rem auto 0 auto;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.clinic-image-wrapper {
						width: 65%;
					}
					.clinic-image {
						width: 100%;
						border-radius: 30px;
					}
					.about-us-header {
						width: 35%;
						padding: 3rem;
						text-align: center;
					}
					.about-us-header-text {
						font-family: ${sTheme.typography.serif};
						color: ${sTheme.palette.primary.main};
						font-size: 4rem;
					}
					.about-us-header-paragraph-text {
						color: ${sTheme.palette.secondary.dark};
						font-size: 2rem;
					}
					.your-privileges-section {
						margin-top: 3rem;
					}

					@media (max-width: ${sizes.sizes.mdsm}) {
						.your-privileges-section {
							background-color: ${sTheme.palette.secondary.main};
						}
					}

					.your-privileges-header-section {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						padding: 1rem 0 1rem 0;
					}
					.your-privileges-header-wrapper {
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						width: 100%;
						text-align: center;
					}
					.your-privileges-header-text {
						font-family: ${sTheme.typography.serif};
						color: ${sTheme.palette.primary.main};
						font-size: 4rem;
					}

					@media (max-width: ${sizes.sizes.lg}) {
						.about-us-header-text {
							font-size: 3.5rem;
						}
						.about-us-header-paragraph-text {
							font-size: 1.8rem;
						}
						.your-privileges-header-text {
							font-size: 3.5rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.about-us-header-text {
							font-size: 3.2rem;
						}
						.about-us-header-paragraph-text {
							font-size: 1.6rem;
						}
						.your-privileges-header-text {
							font-size: 3rem;
						}
					}

					@media (max-width: ${sizes.sizes.xs}) {
						.about-us-header {
							padding: 2rem;
						}
					}
					.your-privileges-header-paragraph-text {
						color: ${sTheme.palette.secondary.dark};
						font-size: 2rem;
						width: 50%;
					}

					@media (max-width: ${sizes.sizes.xl}) {
						.your-privileges-header-paragraph-text {
							width: 60%;
						}
					}

					@media (max-width: ${sizes.sizes.lg}) {
						.your-privileges-header-paragraph-text {
							width: 70%;
							font-size: 1.8rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.your-privileges-header-paragraph-text {
							width: 80%;
							font-size: 1.6rem;
						}
					}
					.privilege-section {
						display: flex;
						justify-content: center;
						margin: 0 auto;
						margin-top: 1rem;
						width: 80%;
					}

					.privilege-image-div {
						display: flex;
						align-items: center;
						width: 35%;
						height: 600px;
						flex-shrink: 0;
						background-size: cover;
						background-repeat: no-repeat;
						background-position: left 50% bottom 100%;
						border-radius: 200px;
						z-index: 10;
					}

					:global(.webp) .privilege-image-1 {
						background-image: url(${require("../public/about-page/dr-yasin-akgul.webp")});
					}
					:global(.no-webp) .privilege-image-1 {
						background-image: url(${require("../public/about-page/dr-yasin-akgul.jpg")});
					}

					:global(.webp) .privilege-image-2 {
						background-image: url(${require("../public/about-page/dr-sevil-akgul.webp")});
					}
					:global(.no-webp) .privilege-image-2 {
						background-image: url(${require("../public/about-page/dr-sevil-akgul.jpg")});
					}

					:global(.webp) .privilege-image-3 {
						background-image: url(${require("../public/about-page/dr-yavuz-eker.webp")});
					}
					:global(.no-webp) .privilege-image-3 {
						background-image: url(${require("../public/about-page/dr-yavuz-eker.jpg")});
					}

					.privilege-explanation-div {
						display: flex;
						align-items: center;
						width: 60%;
						margin-left: -7px;
					}
					.privilege-explanation-div-reverse {
						margin-left: 0;
						margin-right: -7px;
					}
					.privilege-name-wrapper {
						background-color: ${sTheme.palette.secondary.main};
						border-radius: 20px;
						margin: 3rem 0;
						padding: 5rem;
						border-left: none;
					}

					.privilege-name-wrapper-reverse {
						padding-left: 5rem;
					}
					.privilege-name-header {
						font-family: ${sTheme.typography.serif};
						color: ${sTheme.palette.primary.main};
						font-size: 3.5rem;
						margin-top: .5rem;
					}
					.privilege-text-paragraph {
						width: 95%;
						color: ${sTheme.palette.secondary.dark};
						font-size: 1.7rem;
						line-height: 1.6;
					}

					@media (max-width: ${sizes.sizes.lg}) {
						.privilege-section {
							width: 90%;
						}
						.privilege-name-header {
							font-size: 3rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.about-us-section {
							width: 100%;
						}
						.privilege-section {
							width: 100%;
						}
						.privilege-name-header {
							font-size: 2.5rem;
						}
						.privilege-text-paragraph {
							font-size: 1.5rem;
						}
					}

					@media (max-width: ${sizes.sizes.mdsm}) {
						.about-us-whole-section {
							background-color: ${sTheme.palette.secondary.main};
						}
						.about-us-section {
							flex-direction: column;
							margin-top: .5rem;
							background-color: ${sTheme.palette.secondary.main};
						}
						.clinic-image-wrapper {
							width: 100%;
						}
						.clinic-image {
							border-radius: 0;
						}

						.about-us-header {
							width: 100%;
						}
						.your-privileges-header-section {
							background-color: ${sTheme.palette.secondary.main};
						}
						.privilege-section {
							flex-direction: column;
							align-items: center;
						}
						.privilege-image-div {
							width: 50%;
							height: 400px;
							margin-top: -10px;
							background-size: cover;
							border-radius: 0;
						}

						.privilege-image-div:nth-of-type(even) {
							order: -1;
						}
						.privilege-name-wrapper {
							border-radius: 0;
							border: none;
							margin: 0;
							text-align: center;
							padding: 3rem;
						}
						.privilege-explanation-div {
							margin-left: 0;
							width: 90%;
						}

						.privilege-explanation-div-reverse {
							margin-right: 0;
						}
					}

					@media (max-width: ${sizes.sizes.sm}) {
						.privilege-image-div {
							width: 60%;
						}
					}

					@media (max-width: ${sizes.sizes.xs}) {
						.privilege-explanation-div {
							width: 95%;
						}
					}

					@media (max-width: ${sizes.sizes.xxs}) {
						.privilege-image-div {
							width: 70%;
						}
					}

					@media (max-width: ${sizes.sizes.xxxs}) {
						.privilege-image-div {
							width: 90%;
						}
					}

					.our-prices-section {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
						margin-top: -5px;
						padding: 4rem 0 0 0;
					}
					.our-prices-header {
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						width: 100%;
						text-align: center;
					}
					.form-wrapper {
						width: 100%;
					}
				`}</style>
			</section>
		</Layout>
	);
};

export default About;
