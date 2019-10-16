// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import theme from "../src/theme";

class MyDocument extends Document {
	// static async getInitialProps (ctx) {
	// 	const initialProps = await Document.getInitialProps(ctx);
	// 	return { ...initialProps };
	// }

	render () {
		return (
			<html lang="en">
				<Head>
					{/* <link rel="apple-touch-icon" sizes="57x57" href="../public/favicons/apple-icon-57x57.png"/>
					<link rel="apple-touch-icon" sizes="60x60" href="../public/favicons/apple-icon-60x60.png"/>
					<link rel="apple-touch-icon" sizes="72x72" href="../public/favicons/apple-icon-72x72.png"/>
					<link rel="apple-touch-icon" sizes="76x76" href="../public/favicons/apple-icon-76x76.png"/>
					<link rel="apple-touch-icon" sizes="114x114" href="../public/favicons/apple-icon-114x114.png"/>
					<link rel="apple-touch-icon" sizes="120x120" href="../public/favicons/apple-icon-120x120.png"/>
					<link rel="apple-touch-icon" sizes="144x144" href="../public/favicons/apple-icon-144x144.png"/>
					<link rel="apple-touch-icon" sizes="152x152" href="../public/favicons/apple-icon-152x152.png"/>
					<link rel="apple-touch-icon" sizes="180x180" href="../public/favicons/apple-icon-180x180.png"/>
					<link rel="icon" type="image/png" sizes="192x192"  href="../public/favicons/android-icon-192x192.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="../public/favicons/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="96x96" href="../public/favicons/favicon-96x96.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="../public/favicons/favicon-16x16.png"/>
					<link rel="manifest" href="../public/favicons/manifest.json">
					<meta name="msapplication-TileColor" content="#ffffff">
					<meta name="msapplication-TileImage" content="../public/favicons/ms-icon-144x144.png"/>
					<meta name="theme-color" content="#ffffff"/>
					<meta charSet="utf-8" /> */}
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
						key="viewport"
					/>
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link
						href="https://fonts.googleapis.com/css?family=Sorts+Mill+Goudy|Source+Sans+Pro:400,600&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="/public/favicon/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	//Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		//Styles fragment is rendered after the app and page rendering finish.
		styles: [
			<React.Fragment key="styles">
				{initialProps.styles}
				{sheets.getStyleElement()}
			</React.Fragment>
		]
	};
};

export default MyDocument;
