import React from "react";
import App from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import Callback from "../components/Callback";
import { DefaultSeo } from "next-seo";
import "react-multi-carousel/lib/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { StateProvider } from "../components/StateProvider";

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

	render () {
		const { Component, pageProps, reqCountryCode } = this.props;
		return (
			<React.Fragment>
				<DefaultSeo
					openGraph={{
						type: "website",
						locale: "en_US",
						site_name: "Istanbul Smile Center Dental Clinic",
						images: [
							{
								url: require("../public/favicon/open-graph-photo.jpg"),
								width: 1200,
								height: 668,
								alt: "Clinic Entrance Photo"
							}
						]
					}}
					twitter={{
						cardType: "summary_large_image"
					}}
				/>
				<ThemeProvider theme={theme}>
					<StateProvider reqCountryCode={reqCountryCode}>
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
					</StateProvider>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);

	let reqCountryCode = "";

	if (appContext.ctx.req) {
		if (appContext.ctx.req.header("cf-ipcountry")) {
			reqCountryCode = appContext.ctx.req.header("cf-ipcountry");
			if (reqCountryCode === "XX" || reqCountryCode === "T1") {
				reqCountryCode = "";
			}
		}
	}
	return { ...appProps, reqCountryCode };
};

export default MyApp;
