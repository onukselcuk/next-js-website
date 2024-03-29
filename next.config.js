const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
// const withImages = require("next-images");
const withFonts = require("next-fonts");
const optimizedImages = require("next-optimized-images");
// const dev = true;
const nextEnv = require("next-env");
require("dotenv").config();
const dev = process.env.NEXT_STATIC_PRODUCTION !== "production";

const withNextEnv = nextEnv();

module.exports = withPlugins(
	[
		withNextEnv,
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
