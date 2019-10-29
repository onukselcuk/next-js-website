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
	const { value, defaultCountry, onChange, classes } = props;

	return (
		<React.Fragment>
			<ReactPhoneInput
				value={value}
				defaultCountry={defaultCountry || "gb"}
				onChange={onChange}
				inputClass={classes.field}
				dropdownClass={classes.countryList}
				component={TextField}
				inputExtraProps={{
					margin: "normal",
					autoComplete: "phone",
					name: "custom-username",
					variant: "outlined",
					label: "Phone Number",
					required: true
				}}
				enableSearchField={true}
			/>
			<style jsx global>{`
				.react-tel-input input[type=text],
				.react-tel-input input[type=tel] {
					padding-left: 45px;
				}
				.react-tel-input .selected-flag {
					padding-left: 10px;
				}
				.react-tel-input {
					margin-left: 8px;
				}
			`}</style>
		</React.Fragment>
	);
}

export default withStyles(styles)(PhoneField);
