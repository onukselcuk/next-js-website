require("dotenv").config();
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//const { google } = require("googleapis");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");
const moment = require("moment");
require("moment/locale/tr");
moment.locale("tr");
const mailer = require("./src/mailer");
const mailerToUs = require("./src/mailerToUs");
const axios = require("axios");
const compression = require("compression");
const callbackMailer = require("./src/callbackMailer");

app.prepare().then(() => {
	const server = express();
	server.use(express.static("public"));
	server.use(bodyParser.urlencoded({ extended: false }));
	server.use(bodyParser.json());
	if (dev === false) {
		server.use(compression());
	}

	// server.get("/", (req, res) => {
	// 	res.redirect("/en");
	// });

	// server.get("/", (req, res) => {
	// 	app.render(req, res, "/en");
	// });

	// server.get("/get-reviews", (req, res) => {
	// 	async function main () {
	// 		const oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

	// 		oauth2Client.setCredentials({
	// 			code: process.env.AUTHORIZATION_CODE,
	// 			refresh_token: process.env.REFRESH_TOKEN
	// 		});
	// 		// const url = `https://mybusiness.googleapis.com/v4/accounts/110663858472950433758/locations/6251002188613810282/reviews?pageSize=12`;
	// 		const url = `https://mybusiness.googleapis.com/v4/accounts/110663858472950433758/locations/6251002188613810282/reviews`;

	// 		const response = await oauth2Client.request({ url });

	// 		res.send(response.data);
	// 	}

	// 	main().catch(console.error);
	// });

	//* set Cache-Control Headers for static files only if they are under static folder

	if (process.env.NODE_ENV === "production") {
		server.get(/^\/_next\/static\/(images|fonts)\//, (_, res, nextHandler) => {
			res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
			nextHandler();
		});
	}

	server.post("/signed-url-put-object", async (req, res) => {
		if (
			(req.body.captchaState === undefined || req.body.captchaState === "" || req.body.captchaState === null) &&
			req.body.captchaState.length < 20
		) {
			return res.send({ success: false });
		} else {
			AWS.config.update({
				accessKeyId: process.env.AWS_ACCESS_KEY_ID,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
				region: "eu-west-2",
				signatureVersion: "v4"
			});

			const filename = req.body.filename;
			const filetype = req.body.filetype;
			const name = req.body.name;
			const dateStringFull = `${moment().format("l")}-${moment().format("LT").replace(":", ".")}`;
			const dateStringShort = `${moment().format("l")}`;

			const params = {
				Bucket: `isc-aws-bucket/isc-public-uploads/${name}-${dateStringShort}`,
				Key: `${name}-${dateStringFull}-${filename}`,
				Expires: 5 * 60,
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

			return res.send({ signedURL, dateStringFull, dateStringShort });
		}
	});

	server.post("/post-callback-request", async (req, res) => {
		if (req.body.captchaState === undefined || req.body.captchaState === "" || req.body.captchaState === null) {
			return res.send({ success: false });
		} else {
			const recaptchaResponse = req.body.captchaState;
			const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env
				.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}&remoteip=${req.connection.remoteAddress}`;

			const response = await axios.post(url);
			if (response.data.success) {
				await callbackMailer(req.body);

				res.send({ success: true });
			} else {
				return res.send({ success: false });
			}
		}
	});

	server.post("/post-form", async (req, res) => {
		if (req.body.captchaState === undefined || req.body.captchaState === "" || req.body.captchaState === null) {
			return res.send({ success: false });
		} else {
			const recaptchaResponse = req.body.captchaState;
			const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env
				.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}&remoteip=${req.connection.remoteAddress}`;

			const response = await axios.post(url);
			if (response.data.success) {
				const { name, email } = req.body;

				await mailer(name, email);

				await mailerToUs(req.body);

				res.send({ success: true });
			} else {
				return res.send({ success: false });
			}
		}
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(process.env.PORT || 3000, (err) => {
		if (err) throw err;
		console.log("Now serving on localhost:3000");
	});
});
