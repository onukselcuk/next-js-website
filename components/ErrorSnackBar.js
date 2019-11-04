import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";

const variantIcon = {
	error: ErrorIcon
};

const useStyles1 = makeStyles((theme) => ({
	error: {
		backgroundColor: theme.palette.error.dark
	},
	icon: {
		fontSize: 30
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1)
	},
	message: {
		display: "flex",
		alignItems: "center",
		fontSize: "1.8rem"
	}
}));

function MySnackbarContentWrapper (props) {
	const classes = useStyles1();
	const { className, message, onClose, variant, ...other } = props;
	const Icon = variantIcon[variant];

	return (
		<SnackbarContent
			className={clsx(classes[variant], className)}
			aria-describedby="client-snackbar"
			message={
				<span id="client-snackbar" className={classes.message}>
					<Icon className={clsx(classes.icon, classes.iconVariant)} />
					{message}
				</span>
			}
			action={[
				<IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
					<CloseIcon className={classes.icon} />
				</IconButton>
			]}
			{...other}
		/>
	);
}

MySnackbarContentWrapper.propTypes = {
	className: PropTypes.string,
	message: PropTypes.string,
	onClose: PropTypes.func,
	variant: PropTypes.oneOf([ "error", "info", "success", "warning" ]).isRequired
};

const useStyles2 = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	}
}));

export default function CustomizedSnackbars ({ errorMessageState, setErrorMessageState, handleClick, handleClose }) {
	const classes = useStyles2();

	return (
		<div>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center"
				}}
				open={errorMessageState}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<MySnackbarContentWrapper
					onClose={handleClose}
					variant="error"
					message="Sorry, something went wrong. Try sending the form again please!"
				/>
			</Snackbar>
		</div>
	);
}
