import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import sTheme from "../src/styledTheme";
import CurrencySelectorButtonGroup from "./CurrencySelectorButtonGroup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		display: "flex",
		justifyContent: "space-between"
	},
	calculatorLeftPart: {
		width: "70%"
	},
	expansionPanelSummaryTypography: {
		fontSize: "1.8rem",
		fontFamily: theme.typography.sansSerif
	},
	calculatorRightPart: {
		width: "30%"
		// position: "relative"
	},
	calculatorResultPaper: {
		position: "sticky",
		top: "5rem",
		border: `1px solid ${theme.palette.primary.main}`,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		borderLeft: "none"
		// backgroundImage: `linear-gradient(180deg,${theme.palette.primary.light} ,${theme.palette.primary.main} 50%)`
		// backgroundImage: `linear-gradient(0deg,${theme.palette.primary.alternative},${theme.palette.primary
		// 	.light} 50%,${theme.palette.secondary.main})`
		// backgroundColor: `${theme.palette.third.main}`
	},
	implantNumberSliderWrapper: {
		display: "flex",
		alignItems: "center",
		marginTop: "3rem"
	},
	implantNumberSlider: {},
	labelText: {
		width: "300px",
		marginRight: "1rem"
	}
}));

const ExpansionPanel = withStyles({
	root: {
		border: `1px solid ${sTheme.palette.secondary.main}`,
		boxShadow: "none",
		overflow: "hidden",

		"&:first-of-type": {
			borderTopRightRadius: "10px",
			borderTopLeftRadius: "10px"
		},
		"&:last-of-type": {
			borderBottomRightRadius: "10px",
			borderBottomLeftRadius: "10px"
		},

		"&:not(:last-child)": {
			borderBottom: 0
		},
		"&:before": {
			display: "none"
		},
		"&$expanded": {
			margin: "auto"
		}
	},
	expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: `${sTheme.palette.primary.main}`,
		// backgroundColor: `${sTheme.palette.third.main}`,
		color: `white`,
		borderBottom: "1px solid rgba(0, 0, 0, .125)",

		marginBottom: -1,
		minHeight: 56,
		"&$expanded": {
			minHeight: 56
		},
		"& svg": {
			fill: `white`
		}
	},
	content: {
		"&$expanded": {
			margin: "12px 0"
		}
	},
	expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiExpansionPanelDetails);

const marks = [
	{
		value: 0,
		label: "0°C"
	},
	{
		value: 20,
		label: "20°C"
	},
	{
		value: 37,
		label: "37°C"
	},
	{
		value: 100,
		label: "100°C"
	}
];

function valuetext (value) {
	return `${value}°C`;
}

function valueLabelFormat (value) {
	return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function CustomizedExpansionPanels ({ currentCurrency, handleCurrencyChange }) {
	const [ isOpen, setIsOpen ] = useState({
		panel1: true,
		panel2: false,
		panel3: false,
		panel4: false,
		panel5: false
	});
	const classes = useStyles();

	const handleChange = (e) => {
		setIsOpen((cur) => {
			return {
				...cur,
				[e.currentTarget.dataset.name]: !cur[e.currentTarget.dataset.name]
			};
		});
	};

	return (
		<div>
			<CurrencySelectorButtonGroup
				currentCurrency={currentCurrency}
				handleCurrencyChange={handleCurrencyChange}
				isInsideCalculator={true}
			/>
			<div className={classes.root}>
				<div className={classes.calculatorLeftPart}>
					<ExpansionPanel expanded={isOpen.panel1}>
						<ExpansionPanelSummary
							onClick={handleChange}
							aria-controls="panel1d-content"
							id="panel1d-header"
							data-name="panel1"
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dental Implants</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Teeth</p>
								<Slider
									defaultValue={80}
									getAriaValueText={valuetext}
									aria-labelledby="discrete-slider-always"
									step={10}
									marks={marks}
									valueLabelDisplay="on"
									className={classes.implantNumberSlider}
								/>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel2}>
						<ExpansionPanelSummary
							aria-controls="panel2d-content"
							id="panel2d-header"
							data-name="panel2"
							onClick={handleChange}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dental Crowns</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel3}>
						<ExpansionPanelSummary
							aria-controls="panel3d-content"
							id="panel3d-header"
							data-name="panel3"
							onClick={handleChange}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dental Veneers</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel4}>
						<ExpansionPanelSummary
							aria-controls="panel4d-content"
							id="panel4d-header"
							data-name="panel4"
							onClick={handleChange}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dentures</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel5}>
						<ExpansionPanelSummary
							aria-controls="panel5d-content"
							id="panel5d-header"
							data-name="panel5"
							onClick={handleChange}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>
								Other Procedures
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
								sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
				<div className={classes.calculatorRightPart}>
					<Paper className={classes.calculatorResultPaper}>
						<Typography variant="h5" component="h3">
							This is a sheet of paper.
						</Typography>
						<Typography component="p">
							Paper can be used to build surface or other elements for your application.
						</Typography>
						<Typography variant="h5" component="h3">
							This is a sheet of paper.
						</Typography>
						<Typography component="p">
							Paper can be used to build surface or other elements for your application.
						</Typography>
						<Typography variant="h5" component="h3">
							This is a sheet of paper.
						</Typography>
						<Typography component="p">
							Paper can be used to build surface or other elements for your application.
						</Typography>
						<Typography variant="h5" component="h3">
							This is a sheet of paper.
						</Typography>
					</Paper>
				</div>
			</div>
		</div>
	);
}
