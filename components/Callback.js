import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CallbackForm from "./CallbackForm";
import { makeStyles } from "@material-ui/core/styles";
import sizes from "../src/sizes";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
	dialogBox: {
		width: "100%",
		"& .MuiDialog-paperWidthSm": {
			margin: "1rem",
			width: "70%",
			borderRadius: "20px",
			[sizes.down("mdsm")]: {
				width: "80%"
			},
			[sizes.down("sm")]: {
				width: "90%"
			},
			[sizes.down("xs")]: {
				width: "100%"
			}
		}
	},
	dialogTitle: {
		backgroundColor: theme.palette.secondary.main,
		textAlign: "center",
		paddingBottom: 0,
		width: "100%",
		position: "relative",
		"& h2": {
			fontFamily: theme.typography.serif,
			fontSize: "2.8rem",
			color: theme.palette.primary.main,
			fontWeight: "bold",
			[sizes.down("xs")]: {
				fontSize: "2rem"
			}
		}
	},
	dialogContent: {
		backgroundColor: theme.palette.secondary.main,
		padding: 0,
		width: "100%"
	},
	dialogActions: {
		backgroundColor: theme.palette.secondary.main
	},
	closeIconButton: {
		position: "absolute",
		right: "3%",
		top: "3%"
	}
}));

export default function FormDialog ({ openCallback, handleCallbackOpen, handleCallbackClose }) {
	const classes = useStyles();
	return (
		<div>
			{/* <Button variant="outlined" color="primary" onClick={handleCallbackOpen}>
				Open form dialog
			</Button> */}
			<Dialog
				className={classes.dialogBox}
				open={openCallback}
				onClose={handleCallbackClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle className={classes.dialogTitle} id="form-dialog-title">
					Get A Call From Us
					<IconButton
						className={classes.closeIconButton}
						onClick={handleCallbackClose}
						edge="start"
						color="primary"
						aria-label="menu"
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent className={classes.dialogContent}>
					{/* <DialogContentText>
						To subscribe to this website, please enter your email address here. We will send updates
						occasionally.
					</DialogContentText>
					<TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth /> */}
					<CallbackForm handleCallbackClose={handleCallbackClose} />
				</DialogContent>
			</Dialog>
		</div>
	);
}
