import { useState, useEffect } from "react";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import clsx from "clsx";
import { dentalImplantObj, dentalVeneerCrownObj, denturesInvisalignObj, otherProceduresObj } from "../src/priceList";
import Button from "@material-ui/core/Button";
import sizes from "../src/sizes";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		display: "flex",
		justifyContent: "space-between",
		[sizes.down("mdsm")]: {
			flexWrap: "wrap",
			justifyContent: "center",
			padding: theme.spacing(2, 0)
		}
	},
	calculatorLeftPart: {
		width: "70%",
		zIndex: "3",
		[sizes.down("mdsm")]: {
			width: "100%"
		}
	},
	expansionPanelSummaryTypography: {
		fontSize: "1.8rem",
		fontFamily: theme.typography.sansSerif
	},
	calculatorRightPart: {
		width: "30%",
		minWidth: "260px",
		[sizes.down("mdsm")]: {
			order: -1,
			width: "100%"
		}
		// position: "relative"
	},
	calculatorResultPaper: {
		position: "sticky",
		borderRadius: "10px",
		top: "5rem",
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		borderLeft: "none",
		marginLeft: "-8px",
		background:
			"linear-gradient(to bottom right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
		[sizes.down("mdsm")]: {
			position: "static",
			borderRadius: "10px",
			borderBottomLeftRadius: 0,
			borderBottomRightRadius: 0,
			marginLeft: 0
		}
	},
	implantNumberSliderWrapper: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		marginTop: "2.8rem",
		[sizes.down("xs")]: {
			flexWrap: "wrap"
		}
	},
	implantNumberSlider: {
		width: "55%",
		minWidth: "270px",
		[sizes.down("xs")]: {
			marginTop: "3rem",
			marginLeft: "1rem",
			width: "90%"
		}
	},
	labelText: {
		width: "35%",
		marginRight: "3rem",
		fontSize: "1.8rem",
		fontFamily: theme.typography.sansSerif,
		minWidth: "175px"
	},
	implantFormWrapper: {
		marginTop: "1.4rem"
	},
	formRadioGroup: {
		marginTop: "1rem",
		"& span": {
			[sizes.down("sm")]: {
				fontSize: "1.6rem !important"
			}
		}
	},
	radioHeaderLabel: {
		fontSize: "1.8rem",
		fontFamily: theme.typography.sansSerif,
		color: theme.palette.primary.main,
		fontWeight: "bold",
		[sizes.down("sm")]: {
			fontSize: "1.6rem"
		}
	},
	implantForm: {
		"& .MuiFormLabel-root": {},
		"& .MuiTypography-body1": {
			fontSize: "1.8rem",
			fontFamily: theme.typography.sansSerif
		}
	},
	radioButton: {
		"& span": {
			color: theme.palette.third.dark
		}
	},
	sinusLiftingFormGroup: {
		marginTop: "1rem"
	},
	sinusLiftingCheckBoxGroup: {
		marginTop: "1rem",
		"& .MuiTypography-body1": {
			fontSize: "1.8rem",
			fontFamily: theme.typography.sansSerif,
			[sizes.down("sm")]: {
				fontSize: "1.6rem !important"
			}
		}
	},
	radioHeaderLabelDouble: {
		marginTop: "2rem",
		marginBottom: "1rem"
	},
	totalCostWrapper: {
		textAlign: "center",
		padding: "4rem 0 3rem 0",
		"& *": {
			fontSize: "5rem",
			// fontWeight: "normal",
			color: theme.palette.secondary.main
		},
		[sizes.down("mdsm")]: {
			padding: "4rem 0"
		}
	},
	totalCostNumber: {},
	totalCostText: {
		fontSize: "3rem"
	},
	discountButtonWrapper: {
		padding: "2rem 0"
	},
	regularButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.third.dark,
		letterSpacing: "1px",
		padding: "10px 25px",
		transition: "all 250ms ease-in-out",
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
			color: theme.palette.primary.main
		},
		[sizes.down("lg")]: {
			fontSize: "1.3rem",
			padding: "5px 5px"
		}
	},
	pricesButton: {
		marginRight: "auto",
		marginLeft: "50%",
		transform: "translateX(-50%)",
		padding: "1rem 6rem"

		// position: "relative",
		// left: "50%",
	}
}));

const ExpansionPanel = withStyles({
	root: {
		// borderTop: `1px solid ${sTheme.palette.secondary.main}`,
		// boxShadow: "none",
		// boxShadow: "3px 5px 5px 2px rgba(0,0,0,.1)",
		overflow: "hidden",

		"&:first-of-type": {
			borderTopRightRadius: "10px",
			borderTopLeftRadius: "10px",
			[sizes.down("mdsm")]: {
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0
			}
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
		"&:not(:last-of-type)": {
			borderBottom: `1px solid ${sTheme.palette.secondary.main}`
		},
		minHeight: 56,
		"&$expanded": {
			minHeight: 56,
			[sizes.down("sm")]: {
				minHeight: 40
			}
		},
		"& svg": {
			fill: `white`
		},
		"& *": {
			[sizes.down("sm")]: {
				fontSize: "1.6rem"
			}
		},
		[sizes.down("sm")]: {
			minHeight: 40
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
		padding: "15px 24px",
		flexDirection: "column",
		"& *": {
			[sizes.down("sm")]: {
				fontSize: "1.6rem"
			}
		}
	}
}))(MuiExpansionPanelDetails);
const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
	root: {
		// color: "#3880ff",
		color: sTheme.palette.third.dark,
		height: 2,
		padding: "15px 0"
	},
	thumb: {
		height: 28,
		width: 28,
		// backgroundColor: "#fff",
		backgroundColor: sTheme.palette.third.dark,
		// border: `1px ${sTheme.palette.third.dark} solid`,
		boxShadow: iOSBoxShadow,
		marginTop: -14,
		marginLeft: -14,
		"&:focus,&:hover,&$active": {
			boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",

			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				boxShadow: iOSBoxShadow
			}
		}
	},
	active: {},
	valueLabel: {
		left: "calc(-50% + 11px)",
		top: -22,
		"& *": {
			background: "transparent",
			color: "#000",
			fontSize: "1.8rem",
			fontFamily: sTheme.typography.sansSerif,
			[sizes.down("sm")]: {
				fontSize: "1.6rem !important"
			}
		}
	},
	track: {
		height: 4
	},
	rail: {
		height: 4,
		opacity: 0.5,
		backgroundColor: "#bfbfbf"
	},
	mark: {
		backgroundColor: "#bfbfbf",
		height: 8,
		width: 1,
		marginTop: -3
	},
	markActive: {
		opacity: 1,
		backgroundColor: "currentColor"
	}
})(Slider);

const GreenCheckbox = withStyles({
	root: {
		color: sTheme.palette.third.dark,
		"&$checked": {
			color: sTheme.palette.third.dark
		}
	},
	checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CustomizedExpansionPanels ({ currentCurrency, handleCurrencyChange, currentSign }) {
	const classes = useStyles();
	const [ isOpen, setIsOpen ] = useState({
		panel1: true,
		panel2: false,
		panel3: false,
		panel4: false,
		panel5: false
	});

	const handleChange = (name) => (e) => {
		setIsOpen((cur) => {
			return {
				...cur,
				[name]: !cur[name]
			};
		});
	};

	const [ sliderState, setSliderState ] = useState({
		numberOfImplants: 0,
		numberOfCrowns: 0,
		numberOfVeneers: 0,
		numberOfPartialDentures: 0,
		numberOfFullDentures: 0,
		numberOfBondingTreatments: 0,
		numberOfDentalFillings: 0,
		numberOfRootCanals: 0
	});

	const handleSliderChange = (name) => (e, newValue) => {
		setSliderState({ ...sliderState, [name]: newValue });
	};

	const [ checkBoxState, setCheckBoxState ] = useState({
		sinusLifting: false,
		onlayInlay: false,
		laserTeethBleaching: false,
		homeTeethWhiteningKit: false,
		professionalDentalCleaning: false,
		gumContouring: false,
		nightGuard: false
	});

	const handleCheckboxChange = (name) => (e) => {
		setCheckBoxState({ ...checkBoxState, [name]: e.currentTarget.checked });
	};

	const [ selectState, setSelectState ] = useState({
		implantBrand: "straumann",
		crownType: "zirconiumCrownWithCad",
		veneerType: "laminateVeneerEmax",
		laserTeethBleaching: "laserBleachingBothJaws"
	});

	const handleSelectChange = (name) => (e) => {
		setSelectState({ ...selectState, [name]: e.target.value });
	};

	const [ totalCostState, setTotalCostState ] = useState(0);

	const calculateTotal = () => {
		let total = 0;
		if (sliderState.numberOfImplants > 0) {
			total += sliderState.numberOfImplants * dentalImplantObj[selectState.implantBrand][currentCurrency];
		}
		if (checkBoxState.sinusLifting) {
			total += dentalImplantObj.sinusLifting[currentCurrency];
		}
		if (sliderState.numberOfCrowns > 0) {
			total += sliderState.numberOfCrowns * dentalVeneerCrownObj[selectState.crownType][currentCurrency];
		}
		if (sliderState.numberOfVeneers > 0) {
			total += sliderState.numberOfVeneers * dentalVeneerCrownObj[selectState.veneerType][currentCurrency];
		}
		if (checkBoxState.onlayInlay) {
			total += dentalVeneerCrownObj.onlayInlay[currentCurrency];
		}
		if (sliderState.numberOfPartialDentures > 0) {
			total += sliderState.numberOfPartialDentures * denturesInvisalignObj.prosthesisSkeleton[currentCurrency];
		}

		if (sliderState.numberOfFullDentures > 0) {
			total += sliderState.numberOfFullDentures * denturesInvisalignObj.prosthesisFull[currentCurrency];
		}

		if (sliderState.numberOfBondingTreatments > 0) {
			total += sliderState.numberOfBondingTreatments * otherProceduresObj.bonding[currentCurrency];
		}

		if (sliderState.numberOfDentalFillings > 0) {
			total += sliderState.numberOfDentalFillings * otherProceduresObj.filling[currentCurrency];
		}

		if (sliderState.numberOfRootCanals > 0) {
			total += sliderState.numberOfRootCanals * otherProceduresObj.rootCanal[currentCurrency];
		}

		if (checkBoxState.laserTeethBleaching) {
			total += otherProceduresObj[selectState.laserTeethBleaching][currentCurrency];
		}

		if (checkBoxState.homeTeethWhiteningKit) {
			total += otherProceduresObj.homeTeethWhiteningKit[currentCurrency];
		}

		if (checkBoxState.professionalDentalCleaning) {
			total += otherProceduresObj.dentalCleaningPro[currentCurrency];
		}

		if (checkBoxState.gumContouring) {
			total += otherProceduresObj.gumContouring[currentCurrency];
		}

		if (checkBoxState.nightGuard) {
			total += otherProceduresObj.nightGuard[currentCurrency];
		}

		setTotalCostState(total);
	};

	useEffect(calculateTotal, [ sliderState, checkBoxState, selectState, currentCurrency ]);

	function numberWithCommas (x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

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
							onClick={handleChange("panel1")}
							aria-controls="panel1d-content"
							id="panel1d-header"
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>
								Dental Implants & Related Procedures
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<FormLabel className={classes.radioHeaderLabel} component="legend">
								How Many Implants Do You Need?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Implants:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={24}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfImplants}
									onChange={handleSliderChange("numberOfImplants")}
								/>
							</div>
							<div className={classes.implantFormWrapper}>
								<FormControl className={classes.implantForm} component="fieldset">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Choose An Implant Brand
									</FormLabel>
									<RadioGroup
										aria-label="position"
										name="position"
										value={selectState.implantBrand}
										onChange={handleSelectChange("implantBrand")}
										column="true"
										className={classes.formRadioGroup}
									>
										<FormControlLabel
											value="straumann"
											control={<Radio className={classes.radioButton} />}
											label="Implant Straumann (Swiss) - abutment included"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="hiossen"
											control={<Radio className={classes.radioButton} />}
											label="Implant Hiossen (U.S. American) - abutment included"
											labelPlacement="end"
										/>
									</RadioGroup>
								</FormControl>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Need Sinus Lifting Treatment
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.sinusLifting}
												onChange={handleCheckboxChange("sinusLifting")}
											/>
										}
										label="Sinus Lifting (bone grafting cost is not included, it can only be determined after teeth X-Ray and/or CT Scan examination)"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel2}>
						<ExpansionPanelSummary
							aria-controls="panel2d-content"
							id="panel2d-header"
							onClick={handleChange("panel2")}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dental Crowns</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<FormLabel className={classes.radioHeaderLabel} component="legend">
								How Many Crowns Do You Need?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Crowns:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={32}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfCrowns}
									onChange={handleSliderChange("numberOfCrowns")}
								/>
							</div>
							<div className={classes.implantFormWrapper}>
								<FormControl className={classes.implantForm} component="fieldset">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Choose A Crown Type
									</FormLabel>
									<RadioGroup
										aria-label="position"
										name="position"
										value={selectState.crownType}
										onChange={handleSelectChange("crownType")}
										column="true"
										className={classes.formRadioGroup}
									>
										<FormControlLabel
											value="zirconiumCrownWithCad"
											control={<Radio className={classes.radioButton} />}
											label="Zirconium Crown with CAD/CAM System"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="fullPorcelainCrown"
											control={<Radio className={classes.radioButton} />}
											label="Full Porcelain Crown with CAD/CAM System"
											labelPlacement="end"
										/>
									</RadioGroup>
								</FormControl>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel3}>
						<ExpansionPanelSummary
							aria-controls="panel3d-content"
							id="panel3d-header"
							onClick={handleChange("panel3")}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dental Veneers</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<FormLabel className={classes.radioHeaderLabel} component="legend">
								How Many Veneers Do You Need?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Veneers:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={32}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfVeneers}
									onChange={handleSliderChange("numberOfVeneers")}
								/>
							</div>
							<div className={classes.implantFormWrapper}>
								<FormControl className={classes.implantForm} component="fieldset">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Choose A Veneer Type
									</FormLabel>
									<RadioGroup
										aria-label="position"
										name="position"
										value={selectState.veneerType}
										onChange={handleSelectChange("veneerType")}
										column="true"
										className={classes.formRadioGroup}
									>
										<FormControlLabel
											value="laminateVeneer"
											control={<Radio className={classes.radioButton} />}
											label="Laminate Veneer"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="laminateVeneerEmax"
											control={<Radio className={classes.radioButton} />}
											label="Laminate Veneer EMAX"
											labelPlacement="end"
										/>
									</RadioGroup>
								</FormControl>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Need Onlay/Inlay Filling
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.onlayInlay}
												onChange={handleCheckboxChange("onlayInlay")}
											/>
										}
										label="Onlay/Inlay Filling with CAD/CAM System"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel4}>
						<ExpansionPanelSummary
							aria-controls="panel4d-content"
							id="panel4d-header"
							onClick={handleChange("panel4")}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>Dentures</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<FormLabel className={classes.radioHeaderLabel} component="legend">
								How Many Partial/Skeleton Dentures/Prostheses <br /> Do You Need (Single or Both Jaws) ?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Dentures:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={2}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfPartialDentures}
									onChange={handleSliderChange("numberOfPartialDentures")}
								/>
							</div>
							<FormLabel
								className={clsx(classes.radioHeaderLabel, classes.radioHeaderLabelDouble)}
								component="legend"
							>
								How Many Full Dentures/Prostheses <br /> Do You Need (Single or Both Jaws) ?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Dentures:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={2}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfFullDentures}
									onChange={handleSliderChange("numberOfFullDentures")}
								/>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel expanded={isOpen.panel5}>
						<ExpansionPanelSummary
							aria-controls="panel5d-content"
							id="panel5d-header"
							onClick={handleChange("panel5")}
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography className={classes.expansionPanelSummaryTypography}>
								Other Procedures
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<FormLabel className={classes.radioHeaderLabel} component="legend">
								For How Many Teeth Do You Need Bonding Treatment?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Teeth:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={8}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfBondingTreatments}
									onChange={handleSliderChange("numberOfBondingTreatments")}
								/>
							</div>
							<FormLabel
								className={clsx(classes.radioHeaderLabel, classes.radioHeaderLabelDouble)}
								component="legend"
							>
								For How Many Teeth Do You Need Dental Filling?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Teeth:</p>
								<IOSSlider
									aria-label="ios slider"
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={8}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfDentalFillings}
									onChange={handleSliderChange("numberOfDentalFillings")}
								/>
							</div>
							<FormLabel
								className={clsx(classes.radioHeaderLabel, classes.radioHeaderLabelDouble)}
								component="legend"
							>
								For How Many Root Canals Do You Need Root Canal Treatment?
							</FormLabel>
							<div className={classes.implantNumberSliderWrapper}>
								<p className={classes.labelText}>Number of Root Canals:</p>
								<IOSSlider
									aria-label="ios slider"
									defaultValue={0}
									marks={true}
									valueLabelDisplay="on"
									step={1}
									min={0}
									max={8}
									className={classes.implantNumberSlider}
									value={sliderState.numberOfRootCanals}
									onChange={handleSliderChange("numberOfRootCanals")}
								/>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Want Laser Teeth Bleaching and Choose Number of Jaws
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.laserTeethBleaching}
												onChange={handleCheckboxChange("laserTeethBleaching")}
											/>
										}
										label="Laser Teeth Bleaching"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
								<FormControl className={classes.implantForm} component="fieldset">
									<RadioGroup
										aria-label="position"
										name="position"
										value={selectState.laserTeethBleaching}
										onChange={handleSelectChange("laserTeethBleaching")}
										column="true"
										className={classes.formRadioGroup}
									>
										<FormControlLabel
											value="laserBleachingPerJaw"
											control={<Radio className={classes.radioButton} />}
											label="Laser Bleaching Single Jaw"
											labelPlacement="end"
										/>
										<FormControlLabel
											value="laserBleachingBothJaws"
											control={<Radio className={classes.radioButton} />}
											label="Laser Bleaching Both Jaws"
											labelPlacement="end"
										/>
									</RadioGroup>
								</FormControl>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Want Home Teeth Whitening Kit
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.homeTeethWhiteningKit}
												onChange={handleCheckboxChange("homeTeethWhiteningKit")}
											/>
										}
										label="Home Teeth Whitening Kit"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Want Professional Dental Cleaning
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.professionalDentalCleaning}
												onChange={handleCheckboxChange("professionalDentalCleaning")}
											/>
										}
										label="Professional Dental Cleaning"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Want Gum Contouring
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.gumContouring}
												onChange={handleCheckboxChange("gumContouring")}
											/>
										}
										label="Gum Contouring"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
							</div>
							<div className={classes.sinusLiftingFormGroup}>
								<FormGroup column="true">
									<FormLabel className={classes.radioHeaderLabel} component="legend">
										Check If You Need A Night Guard
									</FormLabel>
									<FormControlLabel
										control={
											<GreenCheckbox
												checked={checkBoxState.nightGuard}
												onChange={handleCheckboxChange("nightGuard")}
											/>
										}
										label="Night Guard"
										className={classes.sinusLiftingCheckBoxGroup}
									/>
								</FormGroup>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
				<div className={classes.calculatorRightPart}>
					<Paper className={classes.calculatorResultPaper}>
						<div className={classes.totalCostWrapper}>
							<h3 className={classes.totalCostNumber}>
								{currentCurrency !== "euro" ? currentSign : null}
								{numberWithCommas(totalCostState)} {currentCurrency == "euro" ? currentSign : null}
							</h3>
							<h3 className={classes.totalCostText}>Total Cost</h3>
						</div>
						<div className={classes.discountButtonWrapper}>
							<Button
								variant="contained"
								color="primary"
								className={clsx(classes.regularButton, classes.pricesButton)}
							>
								I&nbsp;want&nbsp;discount
							</Button>
						</div>
					</Paper>
				</div>
			</div>
		</div>
	);
}
