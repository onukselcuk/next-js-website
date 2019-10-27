import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	buttonGroup: {},
	currencyButton: {
		padding: "1rem 12rem",
		fontSize: "1.7rem",
		transition: "all 200ms ease-in-out",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
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
		<div>
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
						`${isInsideCalculator ? classes.calculatorButton : null}`
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
						`${isInsideCalculator ? classes.calculatorButton : null}`
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
						`${isInsideCalculator ? classes.calculatorButton : null}`
					)}
				>
					GBP
				</Button>
			</ButtonGroup>
		</div>
	);
};
