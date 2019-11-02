require("dotenv").config();
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const moment = require("moment");
require("moment/locale/tr");
moment.locale("tr");
const mailer = require("./src/mailer");
const mailerToUs = require("./src/mailerToUs");

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
	server.use(bodyParser.json());

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

	server.get("/signed-url-put-object", async (req, res) => {
		AWS.config.update({
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
			region: "eu-west-2",
			signatureVersion: "v4"
		});

		const filename = req.headers.filename;
		const filetype = req.headers.filetype;
		const name = req.headers.name;
		const dateStringFull = `${moment().format("l")}-${moment().format("LT").replace(":", ".")}`;
		const dateStringShort = `${moment().format("l")}`;

		const params = {
			Bucket: `isc-aws-bucket/isc-public-uploads/${name}-${dateStringShort}`,
			Key: `${name}-${dateStringFull}-${filename}`,
			Expires: 10 * 60,
			ContentType: filetype
		};
		const options = {
			signatureVersion: "v4",
			region: "eu-west-2",
			endpoint: new AWS.Endpoint("isc-aws-bucket.s3-accelerate.amazonaws.com"),
			useAccelerateEndpoint: true
		};
		const client = new AWS.S3(options);
		const signedURL = await new Promise((resolve, reject) => {
			client.getSignedUrl("putObject", params, (err, data) => {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});

		return res.json({ signedURL, dateStringFull, dateStringShort });
	});

	server.post("/post-form", async (req, res) => {
		const { name, email } = req.body;

		await mailer(name, email);

		await mailerToUs(req.body);

		res.status(200).send({ message: "success" });
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.PORT || 3000, (err) => {
		if (err) throw err;
		console.log("Now serving on localhost:3000");
	});
});
