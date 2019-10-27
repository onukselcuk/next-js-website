import { withStyles, makeStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
import CurrencySelectorButtonGroup from "./CurrencySelectorButtonGroup";

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
	currencySelectorButtonsWrapper: {
		display: "flex",
		justifyContent: "center",
		margin: "5rem 0 2rem 0"
	}
}));

export default function CustomizedTables ({
	currentCurrency,
	setCurrentCurrency,
	currentSign,
	setCurrentSign,
	handleCurrencyChange,
	language
}) {
	const classes = useStyles();

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
				<CurrencySelectorButtonGroup
					currentCurrency={currentCurrency}
					handleCurrencyChange={handleCurrencyChange}
					isInsideCalculator={false}
				/>
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
