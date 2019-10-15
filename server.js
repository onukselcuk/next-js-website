const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// server.get("/", (req, res) => {
	// 	res.redirect("/en");
	// });

	// server.get("/", (req, res) => {
	// 	app.render(req, res, "/en");
	// });

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log("Now serving on localhost:3000");
	});
});
