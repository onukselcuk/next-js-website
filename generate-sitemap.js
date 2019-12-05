const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://www.istanbulsmilecenter.co",
	pagesDirectory: __dirname + "\\pages",
	targetDirectory: __dirname + "\\.next\\static",
	nextConfigPath: __dirname + "\\next.config.js",
	ignoredExtensions: [ "png", "jpg" ]
});
