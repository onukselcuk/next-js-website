import { useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Collapse from "@material-ui/core/Collapse";
import ActiveLink from "./ActiveLink";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
		color: theme.palette.secondary.main,
		fontSize: "3rem",
		"& svg": {
			fill: theme.palette.secondary.main
		}
	},
	listItemIcon: {
		position: "relative",
		top: "2px",
		minWidth: "48px"
	},
	fontAwesomeIcon: {
		marginLeft: "3px",
		color: theme.palette.secondary.main,
		fontSize: "2rem"
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	activeLink: {
		color: theme.palette.third.dark,
		"& svg": {
			color: theme.palette.third.dark,
			fill: theme.palette.third.dark
		}
	}
}));

export default function NavDrawer ({ state, toggleDrawer }) {
	const classes = useStyles();

	const [ open, setOpen ] = useState(false);

	const handleClick = (e) => {
		e.stopPropagation();
		setOpen(!open);
	};

	const sideList = (side) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				<ListItem>
					<IconButton onClick={toggleDrawer("right", true)} edge="start" color="secondary" aria-label="menu">
						<ChevronRightIcon />
					</IconButton>
				</ListItem>
				<ActiveLink href="/" activeClassName={classes.activeLink}>
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</ActiveLink>
				<ActiveLink activeClassName={classes.activeLink} href="/about">
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary="About Us" />
					</ListItem>
				</ActiveLink>
				<ListItem onClick={handleClick} name="treatment-button" button>
					<ListItemIcon className={classes.listItemIcon}>
						<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
					</ListItemIcon>
					<ListItemText primary="Treatments" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/dental-implants">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Dental Implants" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/dental-crowns">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Dental Crowns" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/dental-veneers">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Dental Veneers" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/cosmetic-dentistry">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Cosmetic Dentistry" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/invisalign">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Invisalign" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/dentures">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Dentures" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/pediatric-dentistry">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Pediatric Dentistry" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/root-canal-treatment">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Root Canal Treatment" />
							</ListItem>
						</ActiveLink>
						<ActiveLink activeClassName={classes.activeLink} href="/treatments/teeth-whitening">
							<ListItem button className={classes.nested}>
								<ListItemIcon className={classes.listItemIcon}>
									<FontAwesomeIcon className={classes.fontAwesomeIcon} icon={faTooth} />
								</ListItemIcon>
								<ListItemText primary="Teeth Whitening" />
							</ListItem>
						</ActiveLink>
					</List>
				</Collapse>
				<ActiveLink activeClassName={classes.activeLink} href="/privileges">
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<ScheduleIcon />
						</ListItemIcon>
						<ListItemText primary="Privileges & Itinerary" />
					</ListItem>
				</ActiveLink>
				<ActiveLink activeClassName={classes.activeLink} href="/prices">
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<LocalOfferIcon />
						</ListItemIcon>
						<ListItemText primary="Prices & Cost Calculator" />
					</ListItem>
				</ActiveLink>
				<ActiveLink activeClassName={classes.activeLink} href="/contact">
					<ListItem button>
						<ListItemIcon className={classes.listItemIcon}>
							<ContactPhoneIcon />
						</ListItemIcon>
						<ListItemText primary="Contact Us" />
					</ListItem>
				</ActiveLink>
			</List>
		</div>
	);

	return (
		<div>
			<Drawer anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
				{sideList("right")}
			</Drawer>
			<style global jsx>{`
				.MuiDrawer-paper.MuiDrawer-paperAnchorRight {
					background-image: linear-gradient(
						to bottom,
						rgba(26, 59, 112, 1) 0%,
						rgba(40, 85, 130, 1) 52%,
						rgba(0, 164, 189, 1) 100%
					);
				}
			`}</style>
		</div>
	);
}
