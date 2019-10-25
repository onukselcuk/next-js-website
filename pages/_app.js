import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import Layout from "../components/Layout";

class MyApp extends App {
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
		const { Component, pageProps } = this.props;
		return (
			<React.Fragment>
				<Head>
					<title key="title">{pageProps.title}</title>
				</Head>
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</React.Fragment>
		);
	}
}

export default MyApp;
