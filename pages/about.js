import sTheme from "../src/styledTheme";

const About = () => {
	return (
		<React.Fragment>
			<section className="about-us-section">
				<div className="clinic-image-wrapper">
					<img className="clinic-image" src="/clinic-image.jpg" alt="" />
				</div>
				<div className="our-prices-header">
					<h2 className="our-prices-header-text">About Us</h2>
					<p className="our-prices-header-paragraph-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus ipsa ea ratione aperiam
						voluptates fuga explicabo perferendis, voluptatum beatae recusandae vero voluptate molestias,
						vitae natus nisi aliquid ad officiis.Eos, ad? Distinctio voluptas doloribus atque incidunt
						laborum saepe aliquam officiis eius nulla deserunt quasi molestias voluptatibus, eum natus,
						beatae aliquid harum quo fuga enim. Aliquid libero optio aspernatur voluptate.
					</p>
				</div>
			</section>
			<style jsx>{`
				.about-us-section {
					width: 80%;
					margin: 3rem auto;
					display: flex;
					justify-content: center;
				}
				.our-prices-header {
					width: 45%;
					padding: 3rem;
				}
				.our-prices-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 3.5rem;
				}
				.our-prices-header-paragraph-text {
					color: ${sTheme.palette.secondary.dark};
					font-size: 2rem;
					width: 80%;
				}

				.clinic-image-wrapper {
					width: 55%;
				}
				.clinic-image {
					width: 100%;
					border-radius: 30px;
				}
			`}</style>
		</React.Fragment>
	);
};

export default About;
