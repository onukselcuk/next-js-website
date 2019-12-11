import { useRouter } from "next/router";
import Paper from "@material-ui/core/Paper";
import { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneField from "./PhoneField";
import clsx from "clsx";
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

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		padding: "0 2rem 5rem 2rem",
		margin: "0 auto",
		backgroundColor: theme.palette.secondary.main,
		position: "relative",
		[sizes.down("lg")]: {},
		[sizes.down("lg")]: {},
		[sizes.down("md")]: {},
		[sizes.down("mdsm")]: {
			padding: "10px 10px",
			paddingBottom: "5rem"
		},
		[sizes.down("xs")]: {}
	},
	container: {
		width: "100%"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		flexGrow: 1,
		"& .MuiInputBase-root": {
			backgroundColor: theme.palette.secondary.alternative2
		}
	},

	nameField: {
		width: "96%"
	},
	emailField: {
		width: "96%"
	},
	phoneInputWrapper: {
		width: "99%",
		position: "relative",
		display: "inline-block",
		top: "6px"
	},
	formInnerContainer: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		margin: "0 auto",
		alignItems: "center",
		borderBottom: "none"
	},
	regularButton: {
		borderRadius: "20px",
		fontSize: "1.4rem",
		backgroundColor: theme.palette.third.dark,
		letterSpacing: "1px",
		position: "relative",
		marginLeft: "auto",
		padding: "8px 20px",
		marginTop: "2rem",
		width: "18%",
		minWidth: "14rem",
		zIndex: 1,
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
		margin: ".5rem .8rem 0 0",
		left: "8px",
		[sizes.down("xxxs")]: {
			transform: "scale(0.8)",
			marginTop: "-.6rem",
			transformOrigin: "left"
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
	},
	callbackFormOuterDiv: {
		width: "100%"
	}
}));

const override = `
	display: block;
	margin: 0 auto;
`;

const CallbackForm = ({ handleCallbackClose }) => {
	const classes = useStyles();
	const router = useRouter();

	const [ formData, setFormData ] = useState({
		nameCallback: "",
		emailCallback: ""
	});

	const [ errors, setErrors ] = useState({
		nameCallback: false,
		emailCallback: false,
		phone: false
	});

	const handleValidation = (e) => {
		setErrors({
			...errors,
			[e.target.name]: !labelRefs[e.target.name].current.control.validity.valid
		});
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (e.target.name === "nameCallback" || e.target.name === "emailCallback") {
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
				nameCallback: !labelRefs.nameCallback.current.control.validity.valid,
				emailCallback: !labelRefs.emailCallback.current.control.validity.valid,
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

			const data = {
				name: formData.nameCallback,
				email: formData.emailCallback,
				country: { ...phoneData },
				captchaState
			};
			const response = await axios.post("/post-callback-request", data, {
				headers: {
					"Content-Type": "application/json"
				}
			});

			if (response.data.success) {
				setLoading(false);
				setPerfectSmileState(false);
				setGetReadyState(true);
				handleCallbackClose();
				router.replace({
					pathname: "/thank-you",
					query: { type: "callback" }
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
		emailCallback: 0,
		nameCallback: 0
	});

	let labelRefs = {
		emailCallback: useRef(null),
		nameCallback: useRef(null)
	};

	useEffect(() => {
		setLabelWidth({
			emailCallback: labelRefs.emailCallback.current.offsetWidth,
			nameCallback: labelRefs.nameCallback.current.offsetWidth
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
		<div className={classes.callbackFormOuterDiv}>
			<Paper className={classes.root}>
				<form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="on">
					<div className={classes.formInnerContainer}>
						<FormControl
							className={clsx(classes.textField, classes.nameField)}
							variant="outlined"
							margin="normal"
							error={errors.nameCallback}
						>
							<InputLabel ref={labelRefs.nameCallback} htmlFor="outlined-name-callback-input">
								Name*
							</InputLabel>
							<OutlinedInput
								id="outlined-name-callback-input"
								value={formData.nameCallback}
								onChange={handleChange}
								name="nameCallback"
								labelWidth={labelWidth.nameCallback}
								autoComplete="current-name"
								required
								autoFocus={true}
							/>
							{errors.nameCallback && (
								<FormHelperText id="name-error-text">Name is required</FormHelperText>
							)}
						</FormControl>
						<div className={classes.phoneInputWrapper}>
							<PhoneField onChange={handleOnChange} value={phoneData.number} error={errors.phone} />
						</div>
						<FormControl
							className={clsx(classes.textField, classes.emailField)}
							variant="outlined"
							margin="normal"
							error={errors.emailCallback}
						>
							<InputLabel ref={labelRefs.emailCallback} htmlFor="outlined-email-callback-input">
								E-mail Address*
							</InputLabel>
							<OutlinedInput
								id="outlined-email-callback-input"
								value={formData.emailCallback}
								onChange={handleChange}
								name="emailCallback"
								labelWidth={labelWidth.emailCallback}
								type="email"
								autoComplete="current-email"
								required
							/>
							{errors.emailCallback && (
								<FormHelperText id="name-error-text">Valid email address is required</FormHelperText>
							)}
						</FormControl>

						<div className={classes.captchaWrapper}>
							<ReCAPTCHA
								sitekey="6LcM0sAUAAAAAIR7gDii3dPPDk1l-JU6JKrWcW1X"
								onChange={handleCaptchaChange}
								badge="inline"
								ref={recaptchaRef}
							/>
						</div>

						<Button variant="contained" color="primary" className={classes.regularButton} type="submit">
							Call&nbsp;Me
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
								Thank You For Sending Us A Call Back Request. Now Get Ready For Receiving A Call From Us
								Soon.
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

export default CallbackForm;
