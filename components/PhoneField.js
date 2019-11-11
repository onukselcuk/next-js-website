import "react-phone-input-mui/dist/style.css";
import ReactPhoneInput from "react-phone-input-mui";
import { TextField, withStyles } from "@material-ui/core";

const styles = (theme) => ({
	field: {
		margin: "10px 0"
	},
	countryList: {
		...theme.typography.body1
	}
});

function PhoneField (props) {
	const { value, defaultCountry, onChange, classes, error } = props;

	return (
		<React.Fragment>
			<ReactPhoneInput
				value={value}
				defaultCountry={defaultCountry || "gb"}
				onChange={onChange}
				inputClass={classes.field}
				dropdownClass={classes.countryList}
				preferredCountries={[ "us", "de", "gb", "fr", "es", "it", "ch", "nl", "be", "au" ]}
				component={TextField}
				inputExtraProps={{
					margin: "normal",
					autoComplete: "phone",
					name: "custom-username",
					variant: "outlined",
					label: "Phone Number",
					required: true,
					error: error,
					helperText: `${error ? "Valid phone number is required" : ""}`
				}}
				enableSearchField={true}
				disableSearchIcon={true}
				disableAreaCodes={true}
			/>
			<style jsx global>{`
				.react-tel-input input[type=text],
				.react-tel-input input[type=tel] {
					padding-left: 45px;
				}
				.react-tel-input .selected-flag {
					padding-left: 10px;
					transition: all 300ms ease-in-out;
					height: 56px;
					top: 10px;
				}

				.react-tel-input .selected-flag:hover {
					background-color: rgba(0, 0, 0, .1);
				}
				.react-tel-input {
					margin-left: 7px;
				}

				.react-tel-input .selected-flag .flag {
					margin-top: -5px;
				}

				.react-tel-input .country-list {
					margin: 0;
				}
			`}</style>
		</React.Fragment>
	);
}

export default withStyles(styles)(PhoneField);
