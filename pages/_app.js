import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import Layout from "../components/Layout";
import Callback from "../components/Callback";
import { DefaultSeo } from "next-seo";

class MyApp extends App {
	constructor (props) {
		super(props);
		this.state = {
			open: false
		};
		this.handleCallbackOpen = this.handleCallbackOpen.bind(this);
		this.handleCallbackClose = this.handleCallbackClose.bind(this);
	}

	handleCallbackOpen () {
		this.setState({ open: true });
	}

	handleCallbackClose () {
		this.setState({ open: false });
	}

	componentDidMount () {
		//Remove the server-side injected CSS
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	// Only uncomment this method if you have blocking data requirements for
	// every single page in your application. This disables the ability to
	// perform automatic static optimization, causing every page in your app to
	// be server-side rendered.
	//
	// static async getInitialProps(appContext) {
	//   // calls page's `getInitialProps` and fills `appProps.pageProps`
	//   const appProps = await App.getInitialProps(appContext);
	//
	//   return { ...appProps }
	// }

	// const [ open, setOpen ] = React.useState(false);

	// const handleClickOpen = () => {
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	render () {
		const { Component, pageProps } = this.props;
		return (
			<React.Fragment>
				<DefaultSeo
					openGraph={{
						type: "website",
						locale: "en_USA",
						url: "https://www.istanbulsmilecenter.co/",
						site_name: "Istanbul Smile Center Dental Clinic"
					}}
				/>
				<ThemeProvider theme={theme}>
					<Component
						{...pageProps}
						openCallback={this.state.open}
						handleCallbackOpen={this.handleCallbackOpen}
						handleCallbackClose={this.handleCallbackClose}
					/>
					<Callback
						openCallback={this.state.open}
						handleCallbackOpen={this.handleCallbackOpen}
						handleCallbackClose={this.handleCallbackClose}
					/>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default MyApp;
