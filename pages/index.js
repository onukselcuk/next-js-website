import Layout from "../components/Layout";
import heroImage from "../public/hero-image-adjusted.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SvgIcon from "@material-ui/core/SvgIcon";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		"& > svg": {
			height: "100px"
		}
	},
	button: {
		margin: theme.spacing(0),
		backgroundColor: "#f9f9f6",
		padding: "20px 120px",
		marginTop: "30px",
		borderRadius: "35px",
		fontFamily: "Source Sans Pro, sans-serif",
		fontSize: "2rem",
		letterSpacing: "1px",
		color: "#004C97",
		"&:hover": {
			color: "#f9f9f6",
			backgroundColor: "#004C97"
		}
	},
	card: {
		maxWidth: 300,
		margin: "1rem 1rem"
	},
	cardActionArea: {
		"&:hover": {
			backgroundColor: "#EDFCFF"
		},
		textAlign: "center"
	},
	media: {
		height: 100
	},
	cardTitle: {
		textAlign: "center",
		color: "#004C97",
		fontFamily: "Sorts Mill Goudy, serif"
	},
	cardText: {
		textAlign: "center",
		fontFamily: "Source Sans Pro, sans-serif",
		color: "#6c675c"
	},
	svgIcon: {
		width: "100px",
		height: "100px"
	}
}));

const Index = (props) => {
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
			<div className="our-services">
				<div className="our-services-header">
					<h2 className="our-services-header-text">Our Services</h2>
					<p className="our-services-header-paragraph-text">
						At Istanbul Smile Center, we offer unique services to our international patients to make their
						dental treatments super easy and enjoyable like no other clinic can offer.
						{/* We not only offer the highest quality services, but also
						make sure you enjoy your time in Turkey. */}
					</p>
				</div>
				<div className="our-services-wrapper">
					<Card className={classes.card}>
						<CardActionArea className={classes.cardActionArea}>
							{/* <CardMedia className={classes.media} image={chatIconUrl} title="24/7 Live Chat" /> */}
							<SvgIcon className={classes.svgIcon} viewBox="0 0 84.8 84.8">
								<svg x="0px" y="0px" viewBox="0 0 84.8 82.2">
									<g>
										<path
											fill="#FDFDFD"
											d="M84.8,42.4c0,13.3-0.1,26.5,0.1,39.8c0,2.1-0.5,2.6-2.6,2.6c-26.5-0.1-53.1-0.1-79.6,0
		c-2.1,0-2.6-0.5-2.6-2.6C0.1,55.7,0.1,29.1,0,2.6C0,0.5,0.5,0,2.6,0c26.5,0.1,53.1,0.1,79.6,0c2.1,0,2.6,0.5,2.6,2.6
		C84.7,15.9,84.8,29.1,84.8,42.4z"
										/>
										<path
											fill="#FDFDFD"
											d="M8.5,80.1c8,0.3,14.3-1.3,19.3-6.1c2.5-2.4,4.7-2.6,7.9-2.2c14.7,1.6,28.2-1.5,39-12.2
		c11.1-11,11.3-26.5,0.7-38C59.1,3.7,25.3,3.8,8.9,21.6C-1.5,33-1.6,48.3,9.4,59.1c3.9,3.8,4.1,7.4,3.4,12
		C12.3,74.1,10.9,76.7,8.5,80.1z"
										/>
										<path
											fill="#393B43"
											d="M8.5,80.1c2.4-3.4,3.8-6,4.2-9c0.7-4.5,0.5-8.2-3.4-12C-1.6,48.3-1.5,33,8.9,21.6
		c16.3-17.8,50.1-17.8,66.5,0c10.6,11.5,10.4,27-0.7,38c-10.8,10.7-24.3,13.9-39,12.2c-3.2-0.4-5.4-0.2-7.9,2.2
		C22.8,78.8,16.5,80.4,8.5,80.1z"
										/>
										<path
											fill="#393B43"
											d="M13.3,77.8c5.5-0.6,10.2-2,13.4-5.8c2.6-3,5.2-3,8.7-2.5c13.6,1.8,26.2-1,36.6-10.4
		C83.9,48.6,84,32.8,72.8,21.8C57.2,6.5,27,6.6,11.5,22C0.8,32.6,0.3,47.6,11.2,57.8c4.1,3.9,4.5,7.7,3.9,12.3
		C14.8,72.6,14,74.9,13.3,77.8z"
										/>
										<path
											fill="#EDFCFF"
											d="M13.3,77.8c0.7-2.9,1.4-5.3,1.7-7.7c0.6-4.6,0.2-8.5-3.9-12.3C0.3,47.6,0.8,32.6,11.5,22
		C27,6.6,57.2,6.5,72.8,21.8c11.2,11,11.1,26.8-0.7,37.4c-10.4,9.4-23,12.2-36.6,10.4c-3.5-0.5-6.1-0.5-8.7,2.5
		C23.5,75.8,18.8,77.3,13.3,77.8z"
										/>
										<path
											fill="#F9F8EA"
											d="M14.9,43.4c0,0.2,0,0.4,0,0.5c18.2,0,36.4,0,54.6,0c0-0.2,0-0.4,0-0.5C51.3,43.4,33.1,43.4,14.9,43.4z"
										/>
										<path
											fill="#F9F8EA"
											d="M35.9,35.4c0,0.2,0,0.4,0,0.5c11.2,0,22.4,0,33.6,0c0-0.2,0-0.4,0-0.5C58.3,35.4,47.1,35.4,35.9,35.4z"
										/>
										<path
											fill="#F9F8EA"
											d="M44.5,28.1c0-0.2,0-0.4,0-0.5c-7.9,0-15.7,0-23.6,0c0,0.2,0,0.4,0,0.5C28.8,28.1,36.7,28.1,44.5,28.1z"
										/>
										<path
											fill="#F9F8EA"
											d="M20.9,51.4c0,0.2,0,0.4,0,0.5c6.5,0,13.1,0,19.6,0c0-0.2,0-0.4,0-0.5C34,51.4,27.5,51.4,20.9,51.4z"
										/>
										<path
											fill="#F9F8EA"
											d="M14.9,35.4c0,0.2,0.1,0.3,0.1,0.5c5.2,0,10.4,0,15.5,0c0-0.2,0-0.3,0-0.5C25.3,35.4,20.1,35.4,14.9,35.4z"
										/>
										<path
											fill="#F9F8EA"
											d="M60.6,52c-0.1-0.2-0.1-0.3-0.2-0.5c-4.8,0-9.6,0-14.5,0c0,0.2,0,0.3,0,0.5C50.8,52,55.7,52,60.6,52z"
										/>
										<path
											fill="#393B43"
											d="M14.9,43.4c18.2,0,36.4,0,54.6,0c0,0.2,0,0.4,0,0.5c-18.2,0-36.4,0-54.6,0C14.9,43.7,14.9,43.6,14.9,43.4z"
										/>
										<path
											fill="#393B43"
											d="M35.9,35.4c11.2,0,22.4,0,33.6,0c0,0.2,0,0.4,0,0.5c-11.2,0-22.4,0-33.6,0C35.9,35.7,35.9,35.6,35.9,35.4z"
										/>
										<path
											fill="#393B43"
											d="M44.5,28.1c-7.9,0-15.7,0-23.6,0c0-0.2,0-0.4,0-0.5c7.9,0,15.7,0,23.6,0C44.5,27.7,44.5,27.9,44.5,28.1z"
										/>
										<path
											fill="#393B43"
											d="M20.9,51.4c6.5,0,13.1,0,19.6,0c0,0.2,0,0.4,0,0.5c-6.5,0-13.1,0-19.6,0C20.9,51.7,20.9,51.5,20.9,51.4z"
										/>
										<path
											fill="#393B43"
											d="M14.9,35.4c5.2,0,10.4,0,15.6,0c0,0.2,0,0.3,0,0.5c-5.2,0-10.4,0-15.5,0C15,35.7,14.9,35.6,14.9,35.4z"
										/>
										<path
											fill="#393B43"
											d="M60.6,52c-4.9,0-9.7,0-14.6,0c0-0.2,0-0.3,0-0.5c4.8,0,9.6,0,14.5,0C60.5,51.7,60.5,51.9,60.6,52z"
										/>
									</g>
								</svg>
							</SvgIcon>
							<CardContent>
								<Typography className={classes.cardTitle} gutterBottom variant="h5" component="h2">
									24/7 Live Chat
								</Typography>
								<Typography
									className={classes.cardText}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									No need to spend your time filling in lengthy forms or writing emails to ask a
									question. Whenever you need us, we are always here to give you the answers you need
									instantly.
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="/static/images/cards/contemplative-reptile.jpg"
								title="Contemplative Reptile"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									Lizard
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species,
									ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
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
					color: #004c97;
					font-weight: normal;
					font-size: 7rem;
				}
				.our-services {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					margin: 2rem 0;
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
					font-family: 'Sorts Mill Goudy', serif;
					color: #004c97;
					font-size: 4rem;
				}
				.our-services-header-paragraph-text {
					color: #6c675c;
					font-size: 2rem;
					width: 50%;
				}
				.our-services-wrapper {
					display: flex;
				}
				 {
					/* .st0,
				.st1,
				.st2,
				.st3 {
					fill: blue;
				} */
				}
			`}</style>
		</Layout>
	);
};

export default Index;
