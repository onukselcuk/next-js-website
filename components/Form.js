import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneField from "./PhoneField";

const titles = [
	{
		value: "Mr.",
		label: "Mr."
	},
	{
		value: "Mrs.",
		label: "Mrs."
	},
	{
		value: "Ms.",
		label: "Ms."
	}
];

const useStyles = makeStyles((theme) => ({
	root: {
		width: "1000px",
		padding: "20px 20px"
	},
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	menu: {
		width: 200
	},
	phoneInputWrapper: {
		width: "300px"
	}
}));

const Form = () => {
	const classes = useStyles();
	const [ title, setTitle ] = useState("Mr.");

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const [ phoneData, setPhoneData ] = useState({
		number: "",
		name: "",
		dialCode: "",
		countryCode: ""
	});

	function handleOnChange (value, countryData) {
		setPhoneData({
			number: value,
			...countryData
		});
	}

	return (
		<div>
			<Paper className={classes.root}>
				<form className={classes.container} noValidate autoComplete="off">
					<div>
						<TextField
							id="outlined-select-title"
							select
							label="Title"
							className={classes.textField}
							value={title}
							onChange={handleChange}
							SelectProps={{
								MenuProps: {
									className: classes.menu
								}
							}}
							margin="normal"
							variant="outlined"
						>
							{titles.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							id="outlined-name-input"
							label="Name"
							className={classes.textField}
							type="text"
							autoComplete="current-name"
							margin="normal"
							variant="outlined"
							required
						/>
						<TextField
							id="outlined-email-input"
							label="E-mail Address"
							className={classes.textField}
							type="email"
							autoComplete="current-email"
							margin="normal"
							variant="outlined"
							required
						/>
						<div className={classes.phoneInputWrapper}>
							<PhoneField onChange={handleOnChange} value={phoneData.number} />
						</div>
					</div>
				</form>
			</Paper>
		</div>
	);
};

export default Form;
