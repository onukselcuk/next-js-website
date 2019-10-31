import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneField from "./PhoneField";
import clsx from "clsx";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import axios from "axios";

const treatments = [
	{
		value: "Select A Treatment You Are Looking For",
		label: "Select A Treatment You Are Looking For"
	},

	{
		value: "Dental Implants",
		label: "Dental Implants"
	},
	{
		value: "Dental Crowns",
		label: "Dental Crowns"
	},
	{
		value: "Dental Veneers",
		label: "Dental Veneers"
	},

	{
		value: "Dentures",
		label: "Dentures"
	},
	{
		value: "Orthodontics/Invisalign",
		label: "Orthodontics/Invisalign"
	},
	{
		value: "Pediatric Dentistry",
		label: "Pediatric Dentistry"
	},
	{
		value: "Other",
		label: "Other"
	}
];
const ages = [
	{
		value: "Select Your Age Group",
		label: "Select Your Age Group"
	},
	{
		value: "under 21",
		label: "under 21"
	},
	{
		value: "21-30",
		label: "21-30"
	},
	{
		value: "31-40",
		label: "31-40"
	},
	{
		value: "41-50",
		label: "41-50"
	},
	{
		value: "51-60",
		label: "51-60"
	},
	{
		value: "61-70",
		label: "61-70"
	},
	{
		value: "over 70",
		label: "over 70"
	}
];
const titles = [
	{
		value: "Select Your Title",
		label: "Select Your Title"
	},
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
		width: "70%",
		padding: "20px 20px",
		margin: "2rem auto",
		border: `1px solid ${theme.palette.primary.main}`,
		borderRadius: "20px"
	},
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		flexGrow: 1,
		minWidth: "300px"
	},
	menu: {
		width: 200
	},
	titleField: {
		width: "20%"
	},
	nameField: {
		width: "30%"
	},
	emailField: {
		width: "35%"
	},
	phoneInputWrapper: {
		width: "30%",
		minWidth: "300px",
		display: "inline-block",
		position: "relative",
		top: "6px",
		marginRight: "8px",
		flexGrow: 1
	},
	treatmentField: {
		width: "30%"
	},
	ageField: {
		width: "20%"
	},
	messageField: {
		width: "99%"
	},
	formInnerContainer: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%"
	},
	dropZoneContainer: {
		minHeight: "50px",
		width: "75%",
		margin: "1rem .8rem",
		padding: ".5rem",
		"& div[class^='DropzoneArea-dropzoneTextStyle']": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		borderTopColor: "rgba(0, 0, 0, 0.23)",
		borderTopStyle: "dashed",
		borderTopWidth: "2px",
		borderRightColor: "rgba(0, 0, 0, 0.23)",
		borderRightStyle: "dashed",
		borderRightWidth: "2px",
		borderBottomColor: "rgba(0, 0, 0, 0.23)",
		borderBottomStyle: "dashed",
		borderBottomWidth: "2px",
		borderLeftColor: "rgba(0, 0, 0, 0.23)",
		borderLeftStyle: "dashed",
		borderLeftWidth: "2px",
		borderImageSource: "initial",
		borderImageSlice: "initial",
		borderImageWidth: "initial",
		borderImageOutset: "initial",
		borderImageRepeat: "initial",
		transition: "all 300ms ease-in-out",
		"&:hover, &:active": {
			borderTopColor: theme.palette.primary.main,
			borderRightColor: theme.palette.primary.main,
			borderBottomColor: theme.palette.primary.main,
			borderLeftColor: theme.palette.primary.main,
			"& svg": {
				fill: theme.palette.primary.main
			},
			"& p": {
				color: "rgba(0, 0, 0, 0.87)"
			}
		},
		"& svg[class^='MuiSvgIcon-root DropzoneArea-uploadIconSize']": {
			fill: "rgba(0, 0, 0, 0.23)",
			marginRight: "1rem",
			transition: "fill 300ms ease-in-out,transform 200ms ease-in-out",
			"&:hover": {
				transform: "translateY(-2px)"
			}
		},
		"& button[class^='MuiButtonBase-root MuiFab-root PreviewList-removeBtn']": {
			top: "50%",
			right: "25%",
			transform: "translate(-50%,-50%)"
		},
		"& div[class^='MuiGrid-root MuiGrid-container MuiGrid-spacing']": {
			width: "100%",
			marginRight: "auto",
			marginLeft: "auto",
			marginBottom: "0",
			marginTop: ".3rem",
			justifyContent: "center",
			"& .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4": {
				padding: "5px",
				minWidth: "300px"
			}
		},
		"@media (max-width:56.25em)": {
			width: "100%"
		}
	},
	dropZoneParagraph: {
		fontSize: "1.6rem",
		marginRight: "2rem",
		color: "rgba(0, 0, 0, 0.4)",
		transition: "all 300ms ease-in-out"
	},
	regularButton: {
		borderRadius: "20px",
		fontSize: "1.5rem",
		backgroundColor: theme.palette.third.dark,
		letterSpacing: "1px",
		padding: "10px 25px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.secondary.main
		}
	},
	pricesButton: {
		marginRight: ".5rem",
		marginLeft: "auto",
		padding: "1rem 6rem",
		alignSelf: "center",
		width: "20%",
		"@media (max-width:56.25em)": {
			marginLeft: ".5rem",
			marginTop: "1rem"
		}
		// position: "relative",
		// left: "50%",
	}
}));

const Form = () => {
	const classes = useStyles();

	const [ formData, setFormData ] = useState({
		title: "Select Your Title",
		name: "",
		email: "",
		treatmentChoice: "Select A Treatment You Are Looking For",
		ageGroup: "Select Your Age Group",
		message: ""
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const [ phoneData, setPhoneData ] = useState({
		number: "",
		name: "",
		dialCode: "",
		countryCode: ""
	});

	const handleOnChange = (value, countryData) => {
		setPhoneData({
			number: value,
			...countryData
		});
	};

	const [ files, setFiles ] = useState([]);

	const handleFileChange = (files) => {
		console.log(files);
		setFiles(files);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		async function submitData () {
			const receivedData = {
				patientTitle: formData.title,
				patientName: formData.name,
				patientEmail: formData.email,
				patientTreatmentChoice: formData.treatmentChoice,
				patientAgeGroup: formData.ageGroup,
				patientMessage: formData.message,
				phoneNumber: phoneData.number,
				countryName: phoneData.name,
				dialCode: phoneData.dialCode,
				countryCode: phoneData.countryCode
			};

			let data = new FormData();

			data.append("patientTitle", formData.title);
			data.append("patientName", formData.name);
			data.append("patientEmail", formData.email);
			data.append("patientTreatmentChoice", formData.treatmentChoice);
			data.append("patientAgeGroup", formData.ageGroup);
			data.append("patientMessage", receivedData.patientMessage);
			data.append("phoneNumber", receivedData.number);
			data.append("countryName", receivedData.countryName);
			data.append("dialCode", receivedData.dialCode);
			data.append("countryCode", receivedData.countryCode);

			files.forEach((cur) => {
				data.append("file", cur);
			});

			//data.append("file", files[0]);

			const response = await axios.post("http://localhost:3000/post-form", data);

			console.log(response);
		}
		submitData();
	};

	return (
		<div>
			<Paper className={classes.root}>
				<form onSubmit={handleSubmit} className={classes.container} noValidate>
					<div className={classes.formInnerContainer}>
						<TextField
							id="outlined-select-title"
							select
							label="Title"
							className={clsx(classes.textField, classes.titleField)}
							value={formData.title}
							onChange={handleChange}
							SelectProps={{
								MenuProps: {
									className: classes.menu
								}
							}}
							margin="normal"
							variant="outlined"
							name="title"
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
							className={clsx(classes.textField, classes.nameField)}
							type="text"
							name="name"
							value={formData.name}
							autoComplete="current-name"
							margin="normal"
							variant="outlined"
							required
							onChange={handleChange}
						/>
						<TextField
							id="outlined-email-input"
							label="E-mail Address"
							className={clsx(classes.textField, classes.emailField)}
							type="email"
							autoComplete="current-email"
							margin="normal"
							variant="outlined"
							value={formData.email}
							onChange={handleChange}
							required
							name="email"
						/>
						<div className={classes.phoneInputWrapper}>
							<PhoneField onChange={handleOnChange} value={phoneData.number} />
						</div>
						<TextField
							id="outlined-select-treatments"
							select
							label="Treatment"
							className={clsx(classes.textField, classes.treatmentField)}
							value={formData.treatmentChoice}
							onChange={handleChange}
							SelectProps={{
								MenuProps: {
									className: classes.menu
								}
							}}
							margin="normal"
							variant="outlined"
							name="treatmentChoice"
						>
							{treatments.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							id="outlined-select-treatments"
							select
							label="Age"
							className={clsx(classes.textField, classes.ageField)}
							value={formData.ageGroup}
							name="ageGroup"
							onChange={handleChange}
							SelectProps={{
								MenuProps: {
									className: classes.menu
								}
							}}
							margin="normal"
							variant="outlined"
						>
							{ages.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<TextField
							id="outlined-multiline-static"
							label="Your Message"
							multiline
							rows="8"
							className={clsx(classes.textField, classes.messageField)}
							margin="normal"
							variant="outlined"
							required
							name="message"
							value={formData.message}
							onChange={handleChange}
						/>
						<DropzoneArea
							onChange={handleFileChange}
							filesLimit={8}
							acceptedFiles={[ "image/*", "video/*" ]}
							maxFileSize={10000000}
							dropzoneClass={classes.dropZoneContainer}
							dropzoneParagraphClass={classes.dropZoneParagraph}
							dropzoneText="Drag and Drop Teeth Pictures, X-Ray or CT Scan Images Here or Click to Select Files"
						/>
						<Button
							variant="contained"
							color="primary"
							className={clsx(classes.regularButton, classes.pricesButton)}
							type="submit"
						>
							Submit&nbsp;Now
						</Button>
					</div>
				</form>
			</Paper>
		</div>
	);
};

export default Form;
