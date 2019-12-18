// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import "core-js-pure/stable";
import "regenerator-runtime/runtime";
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
					<link rel="icon" sizes="192x192" href={require("../public/favicon/apple-touch-icon.png")} />
					<link rel="apple-touch-icon" href={require("../public/favicon/apple-touch-icon.png")} />
					<link rel="icon" sizes="32x32" type="image/png" href={require("../public/favicon/favicon.png")} />
					{/* Google Tag Manager */}
					{process.env.NEXT_STATIC_PRODUCTION === "production" && (
						<script src="/scripts/googleTagManager.js" />
					)}
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
						key="viewport"
					/>
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					{/* <link rel="preconnect" href="https://embed.tawk.to" crossOrigin="true" /> */}
					<link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="true" />

					<link
						href="https://fonts.googleapis.com/css?family=Laila:500,700|Nunito:400,700&display=swap"
						rel="stylesheet"
					/>
					{/* Hotjar Tracking Code for www.istanbulsmilecenter.co */}
					{process.env.NEXT_STATIC_PRODUCTION === "production" && <script src="/scripts/hotjar.js" />}
				</Head>
				<body>
					{/* Google Tag Manager (noscript) */}
					{process.env.NEXT_STATIC_PRODUCTION === "production" && (
						<noscript>
							<iframe
								src="https://www.googletagmanager.com/ns.html?id=GTM-PNM2D2F"
								height="0"
								width="0"
								style={{ display: "none", visibility: "hidden" }}
							/>
						</noscript>
					)}
					<Main />
					{/* Modernizr Webp Detection Script */}
					<script src="/scripts/modernizr-custom.js" />
					<NextScript />
					{/* Tawk Live Script Script */}
					{process.env.NEXT_STATIC_PRODUCTION === "production" && <script src="/scripts/tawkScript.js" />}
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
