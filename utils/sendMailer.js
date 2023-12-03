/** @format */

const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;
const sentFrom = '';

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMailer = async confirmEmail => {
	const email = { ...confirmEmail, from: sentFrom };
	await sgMail.send(email);
};

module.exports = sendMailer;
