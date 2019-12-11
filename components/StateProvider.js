import { createContext, useState } from "react";
import { getAllInfoByISO } from "iso-country-currency";

export const StateContext = createContext();

export const StateProvider = (props) => {
	const { reqCountryCode } = props;
	const [ countryCode, setCountryCode ] = useState("");
	let reqCurrency;
	let reqCurrencySign;
	if (reqCountryCode !== "") {
		setCountryCode(reqCountryCode.toLowerCase());
		const countryCurrencyAbbr = getAllInfoByISO(reqCountryCode).currency.toUpperCase();
		if (countryCurrencyAbbr === "EUR") {
			reqCurrency = "euro";
			reqCurrencySign = "€";
		} else if (countryCurrencyAbbr === "USD") {
			reqCurrency = "dollar";
			reqCurrencySign = "$";
		} else if (countryCurrencyAbbr === "GBP") {
			reqCurrency = "pound";
			reqCurrencySign = "£";
		} else {
			reqCurrency = "euro";
			reqCurrencySign = "€";
		}
	}

	const [ currentCurrency, setCurrentCurrency ] = useState(reqCurrency || "euro");
	const [ currentSign, setCurrentSign ] = useState(reqCurrencySign || "€");
	const handleCurrencyChange = (e) => {
		setCurrentCurrency(e.currentTarget.name);
		setCurrentSign(e.currentTarget.dataset.sign);
	};

	return (
		<StateContext.Provider
			value={{
				currentCurrency,
				setCurrentCurrency,
				currentSign,
				setCurrentSign,
				handleCurrencyChange,
				countryCode
			}}
		>
			{props.children}
		</StateContext.Provider>
	);
};
