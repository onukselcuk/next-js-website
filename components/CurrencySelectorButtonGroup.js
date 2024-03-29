import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	buttonGroup: {},
	currencyButton: {
		padding: "1rem 12rem",
		fontSize: "1.7rem",
		position: "relative",
		zIndex: 100,
		fontWeight: "bold",
		"&::before": {
			borderRadius: "inherit",
			content: "close-quote",
			backgroundImage:
				"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 0,
			width: "100%",
			height: "100%",
			zIndex: -100,
			transition: "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
			display: "block"
		},
		"&:hover": {
			// backgroundColor: theme.palette.primary.main,
			"&::before": {
				opacity: 1
			},
			// background:
			// 	"linear-gradient(to right, rgba(26,59,112,1) 0%, rgba(40,85,130,1) 52%, rgba(0,164,189,1) 100%)",
			color: "white"
		}
	},
	activeButton: {
		borderColor: theme.palette.third.dark,
		backgroundColor: theme.palette.third.dark,
		color: "white",
		"&+button": {
			borderLeft: "none"
		}
	},
	calculatorButtonGroup: {
		display: "flex",
		justifyContent: "center"
	},
	calculatorButton: {
		padding: "1rem 2rem",
		margin: "2rem auto",
		flexShrink: 1
	}
}));

export default ({ currentCurrency, handleCurrencyChange, isInsideCalculator }) => {
	const changeCurrency = (e) => {
		handleCurrencyChange(e);
	};

	const classes = useStyles();
	return (
		<ButtonGroup
			className={clsx(classes.buttonGroup, `${isInsideCalculator ? classes.calculatorButtonGroup : null}`)}
			fullWidth
			aria-label="full width outlined button group"
			color="primary"
		>
			<Button
				variant={currentCurrency == "euro" ? "contained" : "outlined"}
				name="euro"
				data-sign="€"
				onClick={changeCurrency}
				className={clsx(
					classes.currencyButton,
					`${currentCurrency == "euro" ? classes.activeButton : null}`,
					classes.calculatorButton
				)}
			>
				EUR
			</Button>
			<Button
				variant={currentCurrency == "dollar" ? "contained" : "outlined"}
				name="dollar"
				data-sign="$"
				onClick={changeCurrency}
				className={clsx(
					classes.currencyButton,
					`${currentCurrency == "dollar" ? classes.activeButton : null}`,
					classes.calculatorButton
				)}
			>
				USD
			</Button>
			<Button
				variant={currentCurrency == "pound" ? "contained" : "outlined"}
				name="pound"
				data-sign="£"
				onClick={changeCurrency}
				className={clsx(
					classes.currencyButton,
					`${currentCurrency == "pound" ? classes.activeButton : null}`,
					classes.calculatorButton
				)}
			>
				GBP
			</Button>
		</ButtonGroup>
	);
};
