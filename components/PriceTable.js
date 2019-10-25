import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
	dentalImplantObj,
	dentalImplantArr,
	dentalVeneerCrownObj,
	dentalVeneerCrownArr,
	denturesInvisalignObj,
	denturesInvisalignArr,
	otherProceduresObj,
	otherProceduresArr,
	pedodonticsObj,
	pedodonticsArr
} from "../src/priceList";
import clsx from "clsx";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		fontSize: "1.8rem",
		fontFamily: theme.typography.sansSerif
	},
	body: {
		fontFamily: theme.typography.sansSerif,
		fontSize: "1.7rem"
	}
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.third.main
		}
	}
}))(TableRow);

// function createData (name, calories, fat, carbs, protein) {
// 	return { name, calories, fat, carbs, protein };
// }

// const rows = [
// 	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
// 	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
// 	createData("Eclair", 262, 16.0, 24, 6.0),
// 	createData("Cupcake", 305, 3.7, 67, 4.3),
// 	createData("Gingerbread", 356, 16.0, 49, 3.9)
// ];

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto",
		marginRight: "1rem"
	},
	table: {
		minWidth: "300px"
	},
	currencySelectorButtonsWrapper: {
		display: "flex",
		justifyContent: "center",
		margin: "5rem 0 2rem 0"
	},
	priceTableWrapper: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap"
	},
	freeServicesPaper: {
		width: "600px",
		margin: "2rem auto"
	},
	implantsPaper: {
		width: "560px"
	},
	veneersPaper: {
		width: "500px"
	},
	pediatricPaper: {
		width: "500px"
	},
	otherProceduresPaper: {
		width: "350px"
	},
	currencyChangerButtonGroup: {},
	currencyButton: {
		padding: "1rem 12rem",
		fontSize: "1.7rem",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "white"
		}
	},
	activeButton: {
		borderColor: theme.palette.third.dark,
		backgroundColor: theme.palette.third.dark,
		color: "white"
	}
}));

export default function CustomizedTables () {
	const classes = useStyles();
	const language = "en";
	const [ currentCurrency, setCurrentCurrency ] = useState("euro");
	const [ currentSign, setCurrentSign ] = useState("€");
	const handleCurrencyChange = (e) => {
		setCurrentCurrency(e.currentTarget.name);
		setCurrentSign(e.currentTarget.dataset.sign);
	};

	return (
		<React.Fragment>
			<Paper className={clsx(classes.root, classes.freeServicesPaper)}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Free Services For Our International Patients</StyledTableCell>
							<StyledTableCell align="center">Price</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<StyledTableRow key="Dental Consultation and Check Up">
							<StyledTableCell component="th" scope="row">
								Dental Consultation and Check Up
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
						<StyledTableRow key="Panoramic X-Ray (2D Scan)">
							<StyledTableCell component="th" scope="row">
								Panoramic X-Ray (2D Scan)
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
						<StyledTableRow key="Volumetric Tomography (3D Scan)">
							<StyledTableCell component="th" scope="row">
								Volumetric Tomography (3D Scan)
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
						<StyledTableRow key="Airport-Hotel Transfers">
							<StyledTableCell component="th" scope="row">
								Airport-Hotel Transfers
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
						<StyledTableRow key="Hotel-Clinic Transfers">
							<StyledTableCell component="th" scope="row">
								Hotel-Clinic Transfers
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
						<StyledTableRow key="Hotel Booking Assistance">
							<StyledTableCell component="th" scope="row">
								Hotel Booking Assistance
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
						<StyledTableRow key="Multilingual Assistance">
							<StyledTableCell component="th" scope="row">
								Multilingual Assistance
							</StyledTableCell>
							<StyledTableCell align="center">FREE</StyledTableCell>
						</StyledTableRow>
					</TableBody>
				</Table>
			</Paper>
			<div className={classes.currencySelectorButtonsWrapper}>
				<Grid item xs={12} md={6}>
					<ButtonGroup
						className={classes.currencyChangerButtonGroup}
						fullWidth
						aria-label="full width outlined button group"
						color="primary"
					>
						<Button
							variant={currentCurrency == "euro" ? "contained" : "outlined"}
							name="euro"
							data-sign="€"
							onClick={handleCurrencyChange}
							className={clsx(
								classes.currencyButton,
								`${currentCurrency == "euro" ? classes.activeButton : null}`
							)}
						>
							EUR
						</Button>
						<Button
							variant={currentCurrency == "dollar" ? "contained" : "outlined"}
							name="dollar"
							data-sign="$"
							onClick={handleCurrencyChange}
							className={clsx(
								classes.currencyButton,
								`${currentCurrency == "dollar" ? classes.activeButton : null}`
							)}
						>
							USD
						</Button>
						<Button
							variant={currentCurrency == "pound" ? "contained" : "outlined"}
							name="pound"
							data-sign="£"
							onClick={handleCurrencyChange}
							className={clsx(
								classes.currencyButton,
								`${currentCurrency == "pound" ? classes.activeButton : null}`
							)}
						>
							GBP
						</Button>
					</ButtonGroup>
				</Grid>
			</div>
			<div className={classes.priceTableWrapper}>
				<div>
					<Paper className={clsx(classes.root, classes.implantsPaper)}>
						<Table className={classes.table} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>Dental Implants</StyledTableCell>
									<StyledTableCell align="center">Price</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{dentalImplantArr.map((treatment) => (
									<StyledTableRow key={treatment.name[language]}>
										<StyledTableCell component="th" scope="row">
											{treatment.name[language]}
										</StyledTableCell>
										<StyledTableCell align="center">
											{currentCurrency === "euro" ? (
												`${treatment[currentCurrency]} ${currentSign}`
											) : (
												`${currentSign}${treatment[currentCurrency]}`
											)}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
							<TableHead>
								<TableRow>
									<StyledTableCell>Dentures & Invisalign</StyledTableCell>
									<StyledTableCell align="center">Price</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{denturesInvisalignArr.map((treatment) => (
									<StyledTableRow key={treatment.name[language]}>
										<StyledTableCell component="th" scope="row">
											{treatment.name[language]}
										</StyledTableCell>
										<StyledTableCell align="center">
											{currentCurrency === "euro" ? (
												`${treatment[currentCurrency]} ${currentSign}`
											) : (
												`${currentSign}${treatment[currentCurrency]}`
											)}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</div>
				<div>
					<Paper className={clsx(classes.root, classes.veneersPaper)}>
						<Table className={classes.table} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>Dental Veneers & Crowns</StyledTableCell>
									<StyledTableCell align="center">Price</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{dentalVeneerCrownArr.map((treatment) => (
									<StyledTableRow key={treatment.name[language]}>
										<StyledTableCell component="th" scope="row">
											{treatment.name[language]}
										</StyledTableCell>
										<StyledTableCell align="center">
											{currentCurrency === "euro" ? (
												`${treatment[currentCurrency]} ${currentSign}`
											) : (
												`${currentSign}${treatment[currentCurrency]}`
											)}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
							<TableHead>
								<TableRow>
									<StyledTableCell>Pediatric Dentistry</StyledTableCell>
									<StyledTableCell align="center">Price</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{pedodonticsArr.map((treatment) => (
									<StyledTableRow key={treatment.name[language]}>
										<StyledTableCell component="th" scope="row">
											{treatment.name[language]}
										</StyledTableCell>
										<StyledTableCell align="center">
											{currentCurrency === "euro" ? (
												`${treatment[currentCurrency]} ${currentSign}`
											) : (
												`${currentSign}${treatment[currentCurrency]}`
											)}
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</Paper>
				</div>
				<Paper className={clsx(classes.root, classes.otherProceduresPaper)}>
					<Table className={classes.table} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>Other Procedures</StyledTableCell>
								<StyledTableCell align="center">Price</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{otherProceduresArr.map((treatment) => (
								<StyledTableRow key={treatment.name[language]}>
									<StyledTableCell component="th" scope="row">
										{treatment.name[language]}
									</StyledTableCell>
									<StyledTableCell align="center">
										{currentCurrency === "euro" ? (
											`${treatment[currentCurrency]} ${currentSign}`
										) : (
											`${currentSign}${treatment[currentCurrency]}`
										)}
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			</div>
		</React.Fragment>
	);
}
