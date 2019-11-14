import sTheme from "../../src/styledTheme";
import treatmentsTexts from "../../src/treatments-texts/treatmentsTexts";

const determinePage = (slug) => {
	let jsSlug = "";
	switch (slug) {
		case "dental-implants":
			jsSlug = "dentalImplants";
			break;
		case "dental-veneers":
			jsSlug = "dentalVeneers";
			break;
		case "dental-crowns":
			jsSlug = "dentalCrowns";
			break;
		case "pediatric-dentistry":
			jsSlug = "pediatricDentistry";
			break;
		case "hollywood-smile":
			jsSlug = "hollywoodSmile";
			break;
		case "teeth-whitening":
			jsSlug = "teethWhitening";
			break;
		case "dental-prosthesis":
			jsSlug = "dentalProsthesis";
			break;
		case "dental-bridge":
			jsSlug = "dentalBridge";
			break;
		case "inlay-onlay-dental-restorations":
			jsSlug = "inlayOnlay";
			break;
		case "root-canal-treatment":
			jsSlug = "rootCanal";
			break;
		case "gummy-smile-correction":
			jsSlug = "gummySmile";
			break;
		case "composite-fillings":
			jsSlug = "compositeFillings";
			break;
		default:
			console.log("default");
	}
	return jsSlug;
};

const treatmentTemplate = (props) => {
	const pageName = determinePage(props.pid);
	console.log(pageName);
	const data = treatmentsTexts[pageName];

	return (
		<React.Fragment>
			<section className="treatment-section">
				<div className="treatment-header">
					<h2 className="treatment-header-text">{data.treatmentHeaderText}</h2>
				</div>
				<div className="dental-implants-intro-div">
					<div className="dental-implants-left-div">
						<img className="atakoy-towers-entrance-img" src="/atakoy-towers-image.jpg" alt="" />
					</div>
					<div className="dental-implants-right-div">
						<h4 className="dental-implants-paragraph">{data.introParagraph}</h4>
					</div>
				</div>
				<div className="dental-implants-general-text-div">
					<h4 className="dental-implants-paragraph">{data.continuationParagraph}</h4>
					{data.furtherParagraphs.map((cur) => {
						return (
							<React.Fragment>
								<h2 className="dental-implants-paragraph-header">{cur.header}</h2>
								<h4 className="dental-implants-paragraph">{cur.text}</h4>
							</React.Fragment>
						);
					})}
				</div>
			</section>
			<style jsx>{`
				.treatment-section {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					padding: 2rem 1rem;
				}
				.treatment-header {
					display: flex;
					justify-content: center;
					flex-direction: column;
					align-items: center;
					width: 100%;
					text-align: center;
				}
				.treatment-header-text {
					font-family: ${sTheme.typography.serif};
					color: ${sTheme.palette.primary.main};
					font-size: 4rem;
				}
				.dental-implants-intro-div {
					width: 65%;
					display: flex;
				}
				.dental-implants-left-div {
					width: 50%;
					margin-right: 1rem;
				}
				.atakoy-towers-entrance-img {
					width: 100%;
					border-radius: 20px;
				}
				.dental-implants-right-div {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 50%;
					padding: 0 2rem;
				}
				.dental-implants-paragraph-header {
					font-size: 2.5rem;
					color: ${sTheme.palette.primary.main};
					font-family: ${sTheme.typography.serif};
				}
				.dental-implants-paragraph {
					font-size: 2rem;
					font-weight: normal;
					margin-bottom: 1rem;
				}
				.dental-implants-general-text-div {
					width: 65%;
				}
			`}</style>
		</React.Fragment>
	);
};

treatmentTemplate.getInitialProps = async ({ query }) => {
	const { pid } = query;

	return { pid };
};

export default treatmentTemplate;
