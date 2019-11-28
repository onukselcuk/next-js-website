import { useRouter } from "next/router";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneField from "./PhoneField";
import clsx from "clsx";
import { DropzoneArea } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { parsePhoneNumberFromString as parseMin } from "libphonenumber-js";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import ReCAPTCHA from "react-google-recaptcha";
import CircleLoader from "react-spinners/CircleLoader";
import ErrorSnackBar from "./ErrorSnackBar";
import sizes from "../src/sizes";
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
		backgroundColor: theme.palette.secondary.alternative2,
		borderRadius: "20px",
		position: "relative",
		overflow: "hidden",
		[sizes.down("lg")]: {
			width: "80%"
		},
		[sizes.down("lg")]: {
			width: "85%"
		},
		[sizes.down("md")]: {
			width: "90%"
		},
		[sizes.down("mdsm")]: {
			width: "95%",
			padding: "10px 10px"
		},
		[sizes.down("xs")]: {
			width: "97%"
		}
	},
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		flexGrow: 1,
		minWidth: "200px"
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
		minWidth: "200px",
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
		minHeight: "76px",
		width: "45%",
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
		"@media (max-width:86.25em)": {
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
		position: "relative",
		zIndex: 100,
		marginRight: ".5rem",
		marginLeft: "auto",
		padding: "10px 30px",
		alignSelf: "center",
		width: "18%",
		minWidth: "14rem",
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
			"&::before": {
				opacity: 1
			},
			color: theme.palette.secondary.main
		},
		[sizes.down("mdsm")]: {
			fontSize: "1.3rem"
		},
		[sizes.down("xxs")]: {
			marginLeft: ".5rem",
			marginTop: "1rem"
		}
	},
	captchaWrapper: {
		position: "relative",
		margin: ".5rem .8rem .5rem .8rem",
		alignSelf: "center",
		[sizes.down("xxxs")]: {
			transform: "scale(0.8)",
			transformOrigin: "left",
			marginTop: "-.6rem"
		}
	},
	formSpinnerWrapper: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: theme.palette.secondary.main,
		top: 0,
		left: 0,
		zIndex: 30,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center"
	},
	spinnerBoxHeader: {
		fontFamily: theme.typography.serif,
		color: theme.palette.third.dark,
		fontSize: "5rem",
		marginTop: "1rem"
	},
	thankYouText: {
		color: theme.palette.primary.main,
		fontSize: "4rem"
	}
}));

const override = `
	display: block;
	margin: 0 auto;
`;

const Form = () => {
	const classes = useStyles();
	const router = useRouter();

	const [ formData, setFormData ] = useState({
		title: "Select Your Title",
		name: "",
		email: "",
		treatmentChoice: "Select A Treatment You Are Looking For",
		ageGroup: "Select Your Age Group",
		message: ""
	});

	const handleValidation = (e) => {
		setErrors({
			...errors,
			[e.target.name]: !labelRefs[e.target.name].current.control.validity.valid
		});
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (e.target.name === "name" || e.target.name === "email" || e.target.name === "message") {
			handleValidation(e);
		}
	};

	const [ phoneData, setPhoneData ] = useState({
		number: "",
		name: "",
		dialCode: "",
		countryCode: ""
	});

	const handleOnChange = (value, countryData) => {
		setPhoneData({
			...countryData,
			number: value
		});
		if (parseMin(value) !== undefined) {
			handlePhoneValidation(value);
		}
	};

	const handlePhoneValidation = (value) => {
		setErrors({
			...errors,
			phone: !parseMin(value).isValid()
		});
	};

	const [ errors, setErrors ] = useState({
		name: false,
		email: false,
		phone: false,
		message: false
	});

	const [ files, setFiles ] = useState([]);

	const handleFileChange = (files) => {
		setFiles(files);
	};

	const checkValidity = () => {
		const validity = Object.keys(errors).every((cur) => errors[cur] === false);
		const emptiness = Object.keys(formData).every((cur) => formData[cur] !== "");
		const isNumberFilled = phoneData.number !== "";
		const isCaptchaFilled = captchaState !== "";
		if (validity && emptiness && isNumberFilled && isCaptchaFilled) {
			return true;
		} else {
			let phoneValidError = true;
			if (parseMin(phoneData.number) !== undefined) {
				phoneValidError = !parseMin(phoneData.number).isValid();
			}

			setErrors({
				name: !labelRefs.name.current.control.validity.valid,
				email: !labelRefs.email.current.control.validity.valid,
				message: !labelRefs.message.current.control.validity.valid,
				phone: phoneValidError
			});
			return false;
		}
	};

	const recaptchaRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (checkValidity()) {
			setSpinnerWrapperState(true);
			setLoading(true);
			setPerfectSmileState(true);
			let imageLinks = [];
			if (files.length > 0) {
				async function asyncForEach (array, callback) {
					for (let index = 0; index < array.length; index++) {
						await callback(array[index], index, array);
					}
				}
				await asyncForEach(files, async (cur, index) => {
					const name = `${formData.name.replace(/ /g, "-")}`;
					const filename = `${cur.name.replace(/ /g, "-")}`;
					const filetype = `${cur.type}`;

					const fileDetails = {
						filename,
						filetype,
						name,
						captchaState
					};
					const signedURLRequest = await axios.post("/signed-url-put-object", fileDetails);
					const { signedURL, dateStringFull, dateStringShort } = signedURLRequest.data;
					const uploadResponse = await axios.put(signedURL, cur, {
						headers: {
							"Content-Type": `${cur.type}`
						}
					});
					const imageLink = `https://isc-aws-bucket.s3.eu-west-2.amazonaws.com/isc-public-uploads/${encodeURI(
						name
					)}-${dateStringShort}/${encodeURI(name)}-${dateStringFull}-${encodeURI(filename)}`;
					imageLinks.push(imageLink);
				});
			}
			const data = {
				...formData,
				country: { ...phoneData },
				imageLinks,
				captchaState
			};
			const response = await axios.post("/post-form", data, {
				headers: {
					"Content-Type": "application/json"
				}
			});

			if (response.data.success) {
				setLoading(false);
				setPerfectSmileState(false);
				setGetReadyState(true);
				router.replace({
					pathname: "/thank-you",
					query: { type: "form" }
				});
			} else if (!response.data.success) {
				setSpinnerWrapperState(false);
				setLoading(false);
				setPerfectSmileState(false);
				setGetReadyState(false);
				recaptchaRef.current.reset();
				setErrorMessageState(true);
			}
		}
	};

	const [ labelWidth, setLabelWidth ] = useState({
		email: 0,
		name: 0,
		message: 0
	});

	let labelRefs = {
		email: useRef(null),
		name: useRef(null),
		message: useRef(null)
	};

	useEffect(() => {
		setLabelWidth({
			email: labelRefs.email.current.offsetWidth,
			name: labelRefs.name.current.offsetWidth,
			message: labelRefs.message.current.offsetWidth
		});
	}, []);

	const [ captchaState, setCaptchaState ] = useState("");

	const handleCaptchaChange = async (response) => {
		setCaptchaState(response);
	};

	const [ spinnerWrapperState, setSpinnerWrapperState ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const [ perfectSmileState, setPerfectSmileState ] = useState(false);
	const [ getReadyState, setGetReadyState ] = useState(false);
	const [ errorMessageState, setErrorMessageState ] = useState(false);

	const handleClick = () => {
		setErrorMessageState(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setErrorMessageState(false);
	};

	return (
		<div>
			<Paper className={classes.root}>
				<form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="on">
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
						<FormControl
							className={clsx(classes.textField, classes.nameField)}
							variant="outlined"
							margin="normal"
							error={errors.name}
						>
							<InputLabel ref={labelRefs.name} htmlFor="outlined-name-input">
								Name*
							</InputLabel>
							<OutlinedInput
								id="outlined-name-input"
								value={formData.name}
								onChange={handleChange}
								name="name"
								labelWidth={labelWidth.name}
								autoComplete="current-name"
								aria-describedby="name-error-text"
								required
							/>
							{errors.name && <FormHelperText id="name-error-text">Name is required</FormHelperText>}
						</FormControl>
						<FormControl
							className={clsx(classes.textField, classes.emailField)}
							variant="outlined"
							margin="normal"
							error={errors.email}
						>
							<InputLabel ref={labelRefs.email} htmlFor="outlined-email-input">
								E-mail Address*
							</InputLabel>
							<OutlinedInput
								id="outlined-email-input"
								value={formData.email}
								onChange={handleChange}
								name="email"
								labelWidth={labelWidth.email}
								type="email"
								autoComplete="current-email"
								required
							/>
							{errors.email && (
								<FormHelperText id="name-error-text">Valid email address is required</FormHelperText>
							)}
						</FormControl>
						<div className={classes.phoneInputWrapper}>
							<PhoneField onChange={handleOnChange} value={phoneData.number} error={errors.phone} />
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
						<FormControl
							className={clsx(classes.textField, classes.messageField)}
							variant="outlined"
							margin="normal"
							error={errors.message}
						>
							<InputLabel ref={labelRefs.message} htmlFor="outlined-multiline-static">
								Your Message*
							</InputLabel>
							<OutlinedInput
								id="outlined-multiline-static"
								value={formData.message}
								onChange={handleChange}
								name="message"
								labelWidth={labelWidth.message}
								autoComplete="current-message"
								multiline
								rows="8"
								required
							/>
							{errors.message && (
								<FormHelperText id="name-error-text">Your Message is required</FormHelperText>
							)}
						</FormControl>
						<DropzoneArea
							onChange={handleFileChange}
							filesLimit={8}
							acceptedFiles={[ "image/*", "video/*" ]}
							maxFileSize={10000000}
							dropzoneClass={classes.dropZoneContainer}
							dropzoneParagraphClass={classes.dropZoneParagraph}
							dropzoneText="Drag and Drop Teeth Pictures, X-Ray or CT Scan Images Here or Click to Select Files"
						/>

						<div className={classes.captchaWrapper}>
							<ReCAPTCHA
								sitekey="6LcM0sAUAAAAAIR7gDii3dPPDk1l-JU6JKrWcW1X"
								onChange={handleCaptchaChange}
								badge="inline"
								ref={recaptchaRef}
							/>
						</div>

						<Button variant="contained" color="primary" className={classes.regularButton} type="submit">
							Submit&nbsp;Now
						</Button>
					</div>
				</form>

				{spinnerWrapperState && (
					<div className={classes.formSpinnerWrapper}>
						{loading && (
							<div className="sweet-loading">
								<CircleLoader
									css={override}
									sizeUnit={"px"}
									size={150}
									color={"#E94D65"}
									loading={loading}
								/>
							</div>
						)}
						{perfectSmileState && <h2 className={classes.spinnerBoxHeader}>Perfect Smile Loading ...</h2>}
						{getReadyState && (
							<h2 className={clsx(classes.spinnerBoxHeader, classes.thankYouText)}>
								Thank You For Sending Us A Form. Now Get Ready For Receiving Your Perfect Smile Plan
								From Us.
							</h2>
						)}
					</div>
				)}
			</Paper>
			<ErrorSnackBar
				errorMessageState={errorMessageState}
				setErrorMessageState={setErrorMessageState}
				handleClick={handleClick}
				handleClose={handleClose}
			/>
		</div>
	);
};

export default Form;
