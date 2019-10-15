// module.exports = {
// 	webpack (config) {
// 		config.module.rules.push({
// 			test: /\.svg$/,
// 			use: [ "@svgr/webpack", "url-loader" ]
// 		});

// 		return config;
// 	}
// };

// In next.config.js

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS();
