require("dotenv").config();
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const multer = require("multer");

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/uploaded-images/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	}
});

// async function main () {
// 	const client = new JWT(keys.client_email, null, keys.private_key, [
// 		"https://www.googleapis.com/auth/business.manage"
// 	]);
// 	const url = `https://mybusiness.googleapis.com/v4/accounts/110663858472950433758/locations`;
// 	const res = await client.request({ url });
// 	console.log(res.data);
// }

// main().catch(console.error);

// generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = [ "https://www.googleapis.com/auth/business.manage" ];

// const url = oauth2Client.generateAuthUrl({
// 	// 'online' (default) or 'offline' (gets refresh_token)
// 	access_type: "offline",

// 	// If you only need one scope you can pass it as a string
// 	scope: scopes
// });

// oauth2Client.on("tokens", (tokens) => {
// 	if (tokens.refresh_token) {
// 		// store the refresh_token in my database!
// 		console.log(tokens.refresh_token);
// 		refreshToken = tokens.refresh_token;
// 	}
// 	console.log(tokens.access_token);
// });

app.prepare().then(() => {
	const server = express();
	server.use(express.static("public"));
	server.use(bodyParser.urlencoded({ extended: false }));
	const upload = multer({ storage: storage });

	// server.get("/", (req, res) => {
	// 	res.redirect("/en");
	// });

	// server.get("/", (req, res) => {
	// 	app.render(req, res, "/en");
	// });

	server.get("/get-reviews", (req, res) => {
		async function main () {
			const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

			oauth2Client.setCredentials({
				code: process.env.AUTHORIZATION_CODE,
				refresh_token: process.env.REFRESH_TOKEN
			});
			const url = `https://mybusiness.googleapis.com/v4/accounts/110663858472950433758/locations/6251002188613810282/reviews?pageSize=12`;

			const response = await oauth2Client.request({ url });

			res.send(response.data);
		}

		main().catch(console.error);
	});

	server.post("/post-form", upload.array("file"), (req, res) => {
		//console.log(req.body);
		res.send(req.body);
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.PORT || 3000, (err) => {
		if (err) throw err;
		console.log("Now serving on localhost:3000");
	});
});
