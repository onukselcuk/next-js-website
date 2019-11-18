import sTheme from "../src/styledTheme";
import sizes from "../src/sizes";
import Form from "../components/Form";

const About = () => {
	return (
		<React.Fragment>
			<section className="about-us-whole-section">
				<section className="clinic-entrance-img-section">
					<div className="clinic-entrance-img-div" />
				</section>
				<section className="about-us-section">
					<div className="about-us-header">
						<h1 className="about-us-header-text">About Us</h1>
						<p className="about-us-header-paragraph-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus ipsa ea ratione
							aperiam voluptates fuga explicabo perferendis, voluptatum beatae recusandae vero voluptate
							molestias, vitae natus nisi aliquid ad officiis.Eos, ad? Distinctio voluptas doloribus atque
							incidunt laborum saepe aliquam officiis eius nulla deserunt quasi molestias voluptatibus,
							eum natus, beatae aliquid harum quo fuga enim. Aliquid libero optio aspernatur voluptate.
						</p>
					</div>
					<div className="clinic-image-wrapper">
						<img className="clinic-image" src="/clinic-image.jpg" alt="" />
					</div>
				</section>
				<section id="dr-yasin-akgul" className="your-privileges-section">
					<section className="your-privileges-header-section">
						<div className="your-privileges-header-wrapper">
							<h2 className="your-privileges-header-text">Our Doctors</h2>
							<p className="your-privileges-header-paragraph-text">
								At Istanbul Smile Center, we offer unique and free services to our international
								patients to make their dental treatments super easy and enjoying as no other clinic can.
							</p>
						</div>
					</section>
					<section className="privilege-section">
						<div className="privilege-image-div privilege-image-1" />
						<div className="privilege-explanation-div">
							<div className="privilege-name-wrapper">
								<h2 className="privilege-name-header">Spec. Dr. Yasin Erdem Akgül</h2>
								<p className="privilege-text-paragraph">
									The fastest way of contacting us is through Live Chat or WhatsApp. You may prefer
									sending us a form or even just an e-mail. When you contact us, you can ask us
									anything and tell us your dental needs. You can send your teeth pictures and/or
									X-Ray images through all channels, including live chat. Please keep in mind,
									providing us as much information as possible, and an X-Ray image will help us in
									giving you an exact quote and a treatment plan. You can also request a video call
									consultation.
								</p>
							</div>
						</div>
					</section>
					<section id="dr-sevil-akgul" className="privilege-section">
						<div className="privilege-explanation-div privilege-explanation-div-reverse">
							<div className="privilege-name-wrapper privilege-name-wrapper-reverse">
								<h2 className="privilege-name-header">Spec. Dr. Sevil Borbay Akgül</h2>
								<p className="privilege-text-paragraph">
									If you have requested a video call consultation, we will schedule a call as soon as
									possible (usually the same day), and one of our doctors is going to call you. You
									can show your teeth to your doctor, explain more about your dental needs, and make a
									treatment plan with your doctor right then and there. After that call or your
									contact (if you didn't request a video call), we will send you a detailed treatment
									plan and a quote.
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
									Scheduling an appointment for your treatment in Istanbul Smile Center is so easy.
									Our international patients' department will be in contact with you to find the
									perfect date for you. There is no waiting period, we will schedule your appointment
									to the exact date you request or maybe the next day but not further. We value our
									patient's time.
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
					.clinic-entrance-img-div {
						background-image: url("/about-page/isc-entrance-img.jpg");
						width: 100%;
						height: 55vh;
						background-repeat: no-repeat;
						background-size: cover;
						background-position: left 45% bottom 60%;
						clip-path: ellipse(100% 100% at 50% 0%);
					}

					@media (max-width: ${sizes.sizes.mdsm}) {
						.clinic-entrance-img-section {
							background-color: ${sTheme.palette.secondary.main};
						}
					}
					.about-us-section {
						width: 80%;
						margin: 6rem auto 0 auto;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.clinic-image-wrapper {
						width: 55%;
					}
					.clinic-image {
						width: 100%;
						border-radius: 30px;
					}
					.about-us-header {
						width: 45%;
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
						margin-bottom: 2rem;
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
						.your-privileges-header-text {
							font-size: 3.5rem;
						}
					}

					@media (max-width: ${sizes.sizes.md}) {
						.your-privileges-header-text {
							font-size: 3rem;
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
						background-position: center;
						border-radius: 200px;
						z-index: 10;
					}

					.privilege-image-1 {
						background-image: url("/shutterstock_1498270505.jpg");
					}

					.privilege-image-2 {
						background-image: url("/stock-photo-beautiful-family-of-mother-and-daughter-together-at-home-smiling-confident-showing-and-pointing-1254258604.jpg");
					}

					.privilege-image-3 {
						background-image: url("/privileges-page/schedule-an-appointment-img.jpg");
					}

					.privilege-explanation-div {
						display: flex;
						align-items: center;
						width: 60%;
						margin-left: -100px;
					}
					.privilege-explanation-div-reverse {
						margin-left: 0;
						margin-right: -100px;
					}
					.privilege-name-wrapper {
						background-color: ${sTheme.palette.secondary.main};
						border: 1px solid ${sTheme.palette.primary.main};
						border-radius: 20px;
						margin: 3rem 0;
						padding: 5rem;
						padding-left: 15rem;
					}

					.privilege-name-wrapper-reverse {
						padding-left: 5rem;
						padding-right: 15rem;
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
						}

						.privilege-explanation-div-reverse {
							margin-right: 0;
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
		</React.Fragment>
	);
};

export default About;
