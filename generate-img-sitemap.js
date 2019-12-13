const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://www.istanbulsmilecenter.co",
	pagesDirectory: __dirname + "/public",
	targetDirectory: __dirname + "/",
	nextConfigPath: __dirname + "/next.config.js"
});
