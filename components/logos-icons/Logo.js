import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
	svgLogo: {
		position: "relative",
		fill: theme.palette.secondary.main,
		height: "100px",
		width: "130px",
		position: "relative",
		"& .st0, & .st1, & .st2": {
			transition: "fill 400ms ease-in-out"
		},
		"& .st0, & .st4": {
			fill: theme.palette.third.dark
		}

		// "&:hover": {
		// 	cursor: "pointer",
		// 	"& .st0 ": {
		// 		fill: theme.palette.original.main
		// 	},
		// 	"& .st1": {
		// 		fill: theme.palette.original.secondary
		// 	},
		// 	"& .st2": {
		// 		fill: theme.palette.original.third
		// 	}
		// }
	},
	svgLogoAnchor: {
		position: "relative"
		// "&::before": {
		// 	position: "absolute",
		// 	content: "close-quote",
		// 	width: 0,
		// 	height: 0,
		// 	borderRadius: "50%",
		// 	top: "-450%",
		// 	left: "-27%",
		// 	width: "140%",
		// 	height: "600%",
		// 	opacity: 0,
		// 	backgroundColor: theme.palette.third.main,
		// 	transition: "all 400ms ease-in-out"
		// },
		// "&:hover::before": {
		// 	opacity: 1
		// }
	}
}));

const Logo = () => {
	const classes = useStyles();
	return (
		<Link href="/">
			<a className={classes.svgLogoAnchor}>
				<SvgIcon className={classes.svgLogo} viewBox="0 0 668 425">
					<svg className="svgLogoWrapper" x="0px" y="0px" viewBox="0 0 668 425">
						<path
							className="st2"
							d="M338.4,315.3h10.3l-0.3,32.1H361v9.7h-11.3v46.3c0,2.5,0.8,4.1,2.5,5c0.9,0.5,2.5,0.7,4.6,0.7c0.6,0,1.2,0,1.9,0
	c0.7,0,1.4-0.1,2.3-0.2v9.5c-1.4,0.4-2.8,0.7-4.3,0.9c-1.5,0.2-3.1,0.3-4.8,0.3c-5.6,0-9.3-1.4-11.3-4.3c-2-2.9-3-6.6-3-11.1v-47
	H328v-9.7h10.4L338.4,315.3z"
						/>
						<path
							className="st0"
							d="M23.2,265.8c2.5,12.1,7.1,20.7,13.7,25.7c6.6,5,16.1,7.5,28.4,7.5c6,0,11.1-0.7,15.5-2.2
	c4.3-1.4,7.9-3.4,10.7-5.8c2.8-2.4,4.9-5.2,6.4-8.3c1.4-3.1,2.2-6.3,2.2-9.8c0-6.9-2.2-12-6.7-15.4c-4.4-3.3-10-6-16.7-7.9
	c-6.7-1.9-14-3.5-21.7-4.9c-7.8-1.4-15-3.4-21.7-6.1c-6.7-2.7-12.3-6.6-16.7-11.7c-4.4-5.1-6.7-12.2-6.7-21.5
	c0-11.8,4.3-21.4,12.9-28.9c8.6-7.5,20.8-11.3,36.5-11.3c15.2,0,27.6,3.4,37.1,10.2c9.5,6.8,15.3,18.2,17.3,34.1H97.1
	c-1.5-10.9-5.6-18.5-12.4-23c-6.8-4.4-15.4-6.7-25.7-6.7c-10.3,0-18.2,2.2-23.6,6.7c-5.4,4.4-8.2,10.3-8.2,17.5
	c0,6.3,2.2,11.2,6.7,14.5c4.4,3.4,10,6.1,16.7,8.2c6.7,2.1,13.9,3.9,21.7,5.6c7.8,1.6,15,3.9,21.7,6.9c6.7,3,12.3,7,16.7,12.1
	c4.4,5.1,6.7,12.1,6.7,21.2c0,6.7-1.5,12.6-4.3,17.8c-2.9,5.2-6.9,9.5-12,12.9c-5.1,3.4-11.1,6-18.1,7.7c-7,1.7-14.6,2.6-23,2.6
	c-8.3,0-15.7-1.2-22.1-3.7c-6.4-2.4-11.9-5.8-16.4-10.2c-4.5-4.3-8.1-9.4-10.6-15.2c-2.5-5.8-4-12-4.3-18.7H23.2z"
						/>
						<path
							className="st0"
							d="M142,309.9h-16.3V169.1H142v21.2h0.5c4.2-8.2,10.1-14.4,17.9-18.6c7.8-4.3,16.3-6.4,25.5-6.4
	c6.5,0,12,0.7,16.6,2.2c4.5,1.5,8.4,3.4,11.5,5.8c3.2,2.4,5.8,5.3,7.9,8.6c2.1,3.3,3.8,6.8,5.3,10.6c4.7-9.2,11-16.1,18.9-20.5
	c7.9-4.4,16.9-6.7,27-6.7c9.6,0,17.3,1.6,23,4.8c5.7,3.2,10.1,7.3,13.2,12.5c3.1,5.2,5.1,11.1,6.1,17.8c1,6.7,1.5,13.6,1.5,20.7
	v88.9h-16.3v-97.3c0-10.1-2.1-18.1-6.4-23.9c-4.3-5.8-12.2-8.7-23.8-8.7c-6,0-11.7,1.3-17.3,3.9c-5.5,2.6-10.4,6.7-14.5,12.1
	c-1.8,2.4-3.3,5.1-4.5,8.3c-1.2,3.2-2.1,6.5-2.9,9.9c-0.7,3.4-1.2,6.9-1.5,10.3c-0.3,3.4-0.4,6.6-0.4,9.5v75.8h-16.3v-97.3
	c0-10.1-2.1-18.1-6.4-23.9c-4.3-5.8-12.2-8.7-23.8-8.7c-6,0-11.7,1.3-17.3,3.9c-5.5,2.6-10.4,6.7-14.5,12.1
	c-1.8,2.4-3.3,5.1-4.5,8.3c-1.2,3.2-2.1,6.5-2.9,9.9c-0.7,3.4-1.2,6.9-1.5,10.3c-0.3,3.4-0.4,6.6-0.4,9.5V309.9z"
						/>
						<path className="st0" d="M334.3,309.9v-155h17.5v155H334.3z" />
						<path className="st0" d="M373.5,309.9V114.2h16.3v195.6H373.5z" />
						<path
							className="st0"
							d="M401.7,240.2c0-10.3,1.5-23.3,4.5-32.3c3-9.1,7.2-17,12.8-23.8c5.5-6.8,12.3-12.1,20.2-16
	c8-3.9,17-5.8,27.2-5.8c19.4,0,34.6,6.7,45.7,20c11,13.3,16.5,32.7,16.3,58H419H401.7z M510.9,226.6c0-6.9-1-13.4-2.9-19.4
	c-1.9-6.1-4.7-11.3-8.4-15.8c-3.7-4.4-8.4-8-14-10.6c-5.6-2.6-12-3.9-19.3-3.9c-7.2,0-13.6,1.4-19.2,4.1
	c-5.5,2.7-10.2,6.3-14.1,10.9c-3.9,4.5-7,9.8-9.4,15.8c-2.4,6-2.9,16.4-2.5,19.1L510.9,226.6z"
						/>
						<path className="st2" d="M6.6,63.7h9.8v19.9H6.6V63.7z M6.6,87h9.8v57.3H6.6V87z" />
						<path
							className="st2"
							d="M32.9,126.2c0.3,3.2,1.1,5.7,2.5,7.4c2.5,3.1,6.8,4.7,13,4.7c3.7,0,6.9-0.8,9.7-2.3c2.8-1.6,4.2-4,4.2-7.2
	c0-2.5-1.1-4.4-3.3-5.6c-1.4-0.8-4.2-1.7-8.4-2.7l-7.8-1.9c-5-1.2-8.7-2.6-11-4.1c-4.2-2.6-6.3-6.2-6.3-10.9c0-5.4,2-9.9,6-13.2
	c4-3.4,9.3-5.1,16-5.1c8.8,0,15.1,2.5,19,7.6c2.4,3.2,3.6,6.7,3.5,10.4h-9.1c-0.2-2.2-1-4.2-2.4-5.9c-2.3-2.5-6.2-3.8-11.8-3.8
	c-3.7,0-6.6,0.7-8.5,2.1C36,97,35,98.9,35,101.1c0,2.5,1.3,4.5,3.8,6c1.5,0.9,3.6,1.7,6.5,2.4l6.5,1.6c7.1,1.7,11.8,3.3,14.2,4.9
	c3.8,2.5,5.6,6.4,5.6,11.7c0,5.1-2,9.6-5.9,13.3c-3.9,3.7-9.9,5.6-18,5.6c-8.7,0-14.8-1.9-18.4-5.8c-3.6-3.9-5.5-8.7-5.8-14.4H32.9z
	"
						/>
						<path
							className="st2"
							d="M80.2,70.6H90v16.1h9.2v7.9H90v37.6c0,2,0.7,3.4,2,4c0.8,0.4,2,0.6,3.8,0.6c0.5,0,1,0,1.5,0c0.5,0,1.2-0.1,1.9-0.2v7.7
	c-1.1,0.3-2.3,0.6-3.5,0.7c-1.2,0.1-2.5,0.2-3.9,0.2c-4.5,0-7.6-1.2-9.2-3.5c-1.6-2.3-2.4-5.3-2.4-9V94.6h-7.8v-7.9h7.8V70.6z"
						/>
						<path
							className="st2"
							d="M135.7,109.4c2.2-0.3,3.7-1.2,4.5-2.8c0.4-0.9,0.6-2.1,0.6-3.7c0-3.3-1.2-5.7-3.5-7.2c-2.3-1.5-5.7-2.2-10.1-2.2
	c-5,0-8.6,1.4-10.7,4.1c-1.2,1.5-1.9,3.8-2.3,6.8h-9c0.2-7.1,2.5-12.1,6.9-14.9c4.4-2.8,9.6-4.2,15.4-4.2c6.8,0,12.3,1.3,16.5,3.9
	c4.2,2.6,6.3,6.6,6.3,12v33.2c0,1,0.2,1.8,0.6,2.4c0.4,0.6,1.3,0.9,2.6,0.9c0.4,0,0.9,0,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2v7.2
	c-1.5,0.4-2.7,0.7-3.4,0.8c-0.8,0.1-1.9,0.2-3.2,0.2c-3.3,0-5.8-1.2-7.3-3.5c-0.8-1.3-1.3-3-1.7-5.3c-2,2.6-4.8,4.8-8.5,6.7
	c-3.7,1.9-7.8,2.8-12.2,2.8c-5.3,0-9.7-1.6-13.1-4.9c-3.4-3.2-5.1-7.3-5.1-12.2c0-5.3,1.7-9.5,5-12.4c3.3-2.9,7.7-4.7,13.1-5.4
	L135.7,109.4z M115.3,135.6c2,1.6,4.5,2.4,7.3,2.4c3.4,0,6.7-0.8,9.9-2.4c5.4-2.6,8.1-6.9,8.1-12.8V115c-1.2,0.8-2.7,1.4-4.6,1.9
	c-1.9,0.5-3.7,0.9-5.5,1.1l-5.8,0.8c-3.5,0.5-6.1,1.2-7.9,2.2c-3,1.7-4.5,4.4-4.5,8C112.3,131.8,113.3,134,115.3,135.6z"
						/>
						<path
							className="st2"
							d="M162.1,86.7h9.2v8.2c2.7-3.4,5.6-5.8,8.7-7.3c3-1.5,6.4-2.2,10.2-2.2c8.2,0,13.7,2.8,16.6,8.5c1.6,3.1,2.4,7.6,2.4,13.4
	l0,37.2l-9.9,0l0-36.5c0-3.5-0.5-6.3-1.6-8.5c-1.7-3.6-4.8-5.4-9.4-5.4c-2.3,0-4.2,0.2-5.6,0.7c-2.7,0.8-5,2.4-7,4.7
	c-1.6,1.9-2.7,3.9-3.1,5.9c-0.5,2-0.7,4.9-0.7,8.7v30.2h-9.7V86.7z"
						/>
						<path
							className="st2"
							d="M218.6,65h9.4v28.7c2.1-2.8,4.7-4.9,7.6-6.3c3-1.5,6.2-2.2,9.6-2.2c7.2,0,13,2.5,17.5,7.4c4.5,4.9,6.7,12.2,6.7,21.8
	c0,9.1-2.2,16.7-6.6,22.7c-4.4,6-10.6,9-18.4,9c-4.4,0-8.1-1.1-11.1-3.2c-1.8-1.3-3.7-3.3-5.8-6v7.4h-8.9V65z M255.6,131.3
	c2.6-4.2,3.9-9.6,3.9-16.5c0-6.1-1.3-11.1-3.9-15.1c-2.6-4-6.4-6-11.5-6c-4.4,0-8.3,1.6-11.6,4.9c-3.3,3.3-5,8.6-5,16.1
	c0,5.4,0.7,9.8,2,13.2c2.6,6.3,7.3,9.5,14.3,9.5C249.1,137.6,253,135.5,255.6,131.3z"
						/>
						<path
							className="st2"
							d="M286.4,86.7v38.2c0,2.9,0.5,5.3,1.4,7.2c1.7,3.4,4.8,5.2,9.4,5.2c6.6,0,11-3,13.4-9c1.3-3.2,1.9-7.7,1.9-13.3V86.7h9.7v57.6
	H313l0.1-8.5c-1.2,2.2-2.8,4-4.6,5.5c-3.6,3-8,4.5-13.2,4.5c-8.1,0-13.5-2.7-16.5-8.2c-1.6-2.9-2.4-6.9-2.4-11.8V86.7H286.4z"
						/>
						<path className="st1" d="M333.8,4.4h18v146.6h-18V4.4z" />
						<path
							className="st2"
							d="M175.8,351.1c5,3.9,8,10.6,9.1,20.1h-11.6c-0.7-4.4-2.3-8-4.8-10.9c-2.5-2.9-6.6-4.3-12.1-4.3c-7.6,0-13,3.7-16.3,11.1
	c-2.1,4.8-3.2,10.8-3.2,17.8c0,7.1,1.5,13.1,4.5,17.9c3,4.9,7.7,7.3,14.2,7.3c4.9,0,8.9-1.5,11.8-4.5c2.9-3,4.9-7.1,6-12.4h11.6
	c-1.3,9.4-4.6,16.3-9.9,20.7c-5.3,4.4-12.1,6.5-20.4,6.5c-9.3,0-16.7-3.4-22.2-10.2c-5.5-6.8-8.3-15.3-8.3-25.4
	c0-12.5,3-22.2,9.1-29.1c6.1-6.9,13.8-10.4,23.1-10.4C164.3,345.3,170.8,347.2,175.8,351.1z"
						/>
						<path
							className="st2"
							d="M236.4,349.3c4.7,2.4,8.3,5.4,10.7,9.2c2.4,3.6,4,7.8,4.7,12.5c0.7,3.3,1.1,8.5,1.1,15.6h-51.7c0.2,7.2,1.9,13,5.1,17.4
	c3.2,4.4,8,6.5,14.7,6.5c6.2,0,11.1-2.1,14.8-6.2c2.1-2.4,3.5-5.2,4.4-8.3H252c-0.3,2.6-1.3,5.5-3.1,8.7c-1.7,3.2-3.7,5.8-5.8,7.9
	c-3.6,3.5-8.1,5.9-13.4,7.2c-2.9,0.7-6.1,1.1-9.7,1.1c-8.8,0-16.2-3.2-22.3-9.6c-6.1-6.4-9.2-15.4-9.2-27c0-11.4,3.1-20.7,9.2-27.8
	c6.1-7.1,14.2-10.7,24.1-10.7C226.9,345.7,231.7,346.9,236.4,349.3z M240.7,377.2c-0.5-5.2-1.6-9.3-3.4-12.4
	c-3.2-5.7-8.7-8.6-16.2-8.6c-5.4,0-10,2-13.7,5.9c-3.7,4-5.6,9-5.9,15.1H240.7z"
						/>
						<path
							className="st2"
							d="M263.9,347.3h11.3v10.1c3.4-4.2,6.9-7.1,10.7-9c3.8-1.8,7.9-2.7,12.5-2.7c10.1,0,16.9,3.5,20.4,10.5
	c1.9,3.8,2.9,9.3,2.9,16.5v45.6h-12.1v-44.8c0-4.3-0.6-7.8-1.9-10.5c-2.1-4.4-6-6.6-11.5-6.6c-2.8,0-5.1,0.3-7,0.9
	c-3.3,1-6.1,2.9-8.6,5.8c-2,2.3-3.3,4.8-3.9,7.3c-0.6,2.5-0.9,6.1-0.9,10.7v37.2h-11.9V347.3z"
						/>
						<path
							className="st2"
							d="M412.6,349.3c4.7,2.4,8.3,5.4,10.7,9.2c2.4,3.6,4,7.8,4.7,12.5c0.7,3.3,1.1,8.5,1.1,15.6h-51.7c0.2,7.2,1.9,13,5.1,17.4
	c3.2,4.4,8,6.5,14.7,6.5c6.2,0,11.1-2.1,14.8-6.2c2.1-2.4,3.5-5.2,4.4-8.3h11.7c-0.3,2.6-1.3,5.5-3.1,8.7c-1.7,3.2-3.7,5.8-5.8,7.9
	c-3.6,3.5-8.1,5.9-13.4,7.2c-2.9,0.7-6.1,1.1-9.7,1.1c-8.8,0-16.2-3.2-22.3-9.6c-6.1-6.4-9.2-15.4-9.2-27c0-11.4,3.1-20.7,9.2-27.8
	c6.1-7.1,14.2-10.7,24.1-10.7C403,345.7,407.9,346.9,412.6,349.3z M416.8,377.2c-0.5-5.2-1.6-9.3-3.4-12.4
	c-3.2-5.7-8.7-8.6-16.2-8.6c-5.4,0-10,2-13.7,5.9c-3.7,4-5.6,9-5.9,15.1H416.8z"
						/>
						<path
							className="st2"
							d="M440.4,347.3h11.3v12.3c0.9-2.4,3.2-5.3,6.8-8.7c3.6-3.4,7.8-5.1,12.5-5.1c0.2,0,0.6,0,1.1,0.1c0.5,0,1.4,0.1,2.7,0.3v12.6
	c-0.7-0.1-1.4-0.2-2-0.3c-0.6,0-1.2-0.1-2-0.1c-6,0-10.6,1.9-13.9,5.8c-3.2,3.9-4.8,8.3-4.8,13.4v40.8h-11.9V347.3z"
						/>
						<g>
							<path
								className="st1 st4"
								d="M529.2,337.8c-54,0-103.4-31.8-125.8-81.1c-2-4.4-0.1-9.6,4.4-11.7c4.4-2,9.6,0,11.7,4.4
		c19.6,43,62.6,70.8,109.8,70.8c47.1,0,90.2-27.8,109.7-70.8c2-4.4,7.3-6.4,11.7-4.4c4.4,2,6.4,7.2,4.4,11.7
		C632.6,306,583.2,337.8,529.2,337.8z"
							/>
						</g>
						<path
							className="st0"
							d="M665,232.6c0,5.2-4.2,9.4-9.4,9.4c-5.2,0-9.4-4.2-9.4-9.4c0-5.2,4.2-9.4,9.4-9.4
	C660.8,223.2,665,227.4,665,232.6z"
						/>
					</svg>
				</SvgIcon>
			</a>
		</Link>
	);
};

export default Logo;
