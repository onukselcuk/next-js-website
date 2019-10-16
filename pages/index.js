import Layout from "../components/Layout";
import heroImage from "../public/hero-image-adjusted.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(0),
		backgroundColor: "#f9f9f6",
		padding: "20px 120px",
		marginTop: "30px",
		borderRadius: "35px",
		fontFamily: "Source Sans Pro, sans-serif",
		fontSize: "2rem",
		letterSpacing: "1px",
		color: "#0178d1",
		"&:hover": {
			color: "#f9f9f6",
			backgroundColor: "#0178d1"
		}
	}
}));

const Index = () => {
	const classes = useStyles();
	return (
		<Layout>
			<div className="hero-image-div">
				<img className="hero-image" src={heroImage} alt="" />
				<div className="hero-image-perfect-wrapper">
					<h1 className="hero-image-perfect">
						Let's make your <br /> smile perfect
					</h1>
					<Button variant="contained" color="primary" className={classes.button}>
						Chat with us
					</Button>
				</div>
			</div>
			<div className="who-we-are-section-wrapper">
				<section className="who-we-are-section">
					<h2 className="section-title">Lorem ipsum dolor sit amet consectetur</h2>
					<p className="section-paragraph">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil rem consectetur numquam
						tenetur quasi beatae, ipsa expedita assumenda incidunt! Rem corporis vero voluptatibus aliquid
						voluptates dicta eaque accusamus illo!
					</p>
				</section>
				<section className="who-we-are-section">
					<h2 className="section-title">Lorem ipsum dolor sit amet consectetur</h2>
					<p className="section-paragraph">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil rem consectetur numquam
						tenetur quasi beatae, ipsa expedita assumenda incidunt! Rem corporis vero voluptatibus aliquid
						voluptates dicta eaque accusamus illo!
					</p>
				</section>
				<section className="who-we-are-section">
					<h2 className="section-title">Lorem ipsum dolor sit amet consectetur</h2>
					<p className="section-paragraph">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil rem consectetur numquam
						tenetur quasi beatae, ipsa expedita assumenda incidunt! Rem corporis vero voluptatibus aliquid
						voluptates dicta eaque accusamus illo!
					</p>
				</section>
				<section className="who-we-are-section">
					<h2 className="section-title">Lorem ipsum dolor sit amet consectetur</h2>
					<p className="section-paragraph">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil rem consectetur numquam
						tenetur quasi beatae, ipsa expedita assumenda incidunt! Rem corporis vero voluptatibus aliquid
						voluptates dicta eaque accusamus illo!
					</p>
				</section>
			</div>

			<style jsx>{`
				.hero-image-div {
					width: 100%;
					height: 100%;
					position: relative;
				}
				.hero-image {
					width: 100%;
				}
				.hero-image-perfect-wrapper {
					position: absolute;
					left: 10%;
					top: 18%;
				}
				.hero-image-perfect {
					font-family: 'Sorts Mill Goudy', serif;
					color: #0178d1;
					font-weight: normal;
					font-size: 7rem;
				}

				.who-we-are-section-wrapper {
					width: 90%;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-around;
				}

				.who-we-are-section {
					min-width: 40rem;
					width: 30%;
					margin: 2rem;
				}

				.section-title {
					font-family: 'Sorts Mill Goudy', serif;
					font-size: 3rem;
					color: #0178d1;
				}

				.section-paragraph {
					color: #6c675c;
				}
			`}</style>
		</Layout>
	);
};

export default Index;
