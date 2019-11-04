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

const mailer = (name, email) => {
	function firstLetterUp (string) {
		if (string.split(" ").length > 1) {
			let nameArray = string.toLowerCase().split(" ");
			for (let i = 0; i < nameArray.length; i++) {
				nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
			}
			return nameArray.join(" ");
		} else {
			return string.charAt(0).toUpperCase() + string.split(1);
		}
	}

	const contextObject = {
		patientName: firstLetterUp(name)
	};

	nodemailerMailgun.sendMail(
		{
			from: "patientform-no-reply@istanbulsmilecenter.com",
			to: email,
			subject: `Hey ${contextObject.patientName}, Thank You`,
			"h:Reply-To": "contact@istanbulsmilecenter.com",
			template: {
				name: "mailToPatient.ejs",
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

module.exports = mailer;
