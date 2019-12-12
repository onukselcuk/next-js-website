const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://www.istanbulsmilecenter.co",
	ignoredPaths: [ "pid" ],
	pagesDirectory: __dirname + "/pages",
	targetDirectory: __dirname + "/.next/static",
	nextConfigPath: __dirname + "/sitemap.config.js",
	ignoredExtensions: [ "png", "jpg" ]
});
