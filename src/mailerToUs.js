const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const ejs = require("ejs");

const auth = {
	auth: {
		api_key: process.env.MAILGUN_API_KEY,
		domain: "istanbulsmilecenter.com"
	},
	host: "api.eu.mailgun.net"
};

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const mailerToUs = (contextObject) => {
	function firstLetterUp (string) {
		if (string.split(" ").length > 1) {
			let nameArray = string.toLowerCase().split(" ");
			for (let i = 0; i < nameArray.length; i++) {
				nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
			}
			return nameArray.join(" ");
		} else {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}

	contextObject.name = firstLetterUp(contextObject.name);
	contextObject.country.phoneJoin = contextObject.country.number.replace("+", "");
	contextObject.country.phoneJoin = contextObject.country.phoneJoin.replace(/ /g, "");

	nodemailerMailgun.sendMail(
		{
			from: "patientform-no-reply@istanbulsmilecenter.com",
			to: "isc.koordinasyon@gmail.com",
			bcc: "contact@istanbulsmilecenter.com",
			subject: `${contextObject.name} ISC Form Submission`,
			"h:Reply-To": contextObject.email,
			template: {
				name: "mailtous.ejs",
				engine: "ejs",
				context: contextObject
			}
		},
		(err, info) => {
			if (err) {
				console.log(`Error:${err}`);
			} else {
				console.log(`Response: ${info}`);
			}
		}
	);
};

module.exports = mailerToUs;
