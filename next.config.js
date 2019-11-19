const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
// const withImages = require("next-images");
const withFonts = require("next-fonts");
const optimizedImages = require("next-optimized-images");
const dev = process.env.NODE_ENV !== "production";
//const dev = true;

module.exports = withPlugins(
	[
		[
			optimizedImages,
			{
				imagesPublicPath: dev ? "/_next/static/images/" : "https://dvmbzs0q2ij2d.cloudfront.net",
				optimizeImages: false
			}
		],
		withCSS,
		withFonts
	],
	{ target: "serverless" }
);

// module.exports = withFonts(
// 	withImages({
// 		webpack (config) {
// 			config.module.rules.push({
// 				test: /\.svg$/,
// 				use: [ "@svgr/webpack" ]
// 			});

// 			return config;
// 		}
// 	})
// );

// module.exports = withFonts(
// 	withImages({
// 		webpack (config) {
// 			config.module.rules.push({
// 				test: /\.svg$/,
// 				use: [ "@svgr/webpack" ]
// 			});

// 			return config;
// 		}
// 	})
// );

// module.exports = withCSS(
// 	withImages(
// 		withFonts({
// 			enableSvg: true,
// 			webpack (config, options) {
// 				return config;
// 			}
// 		})
// 	)
// );

// module.exports = withImages(
// 	withFonts({
// 		enableSvg: true,
// 		webpack (config, options) {
// 			return config;
// 		}
// 	})
// );
