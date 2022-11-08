const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

/**
    const data = {
        to: "arestovich@gmail.com",
        subject: "When will it end?",
        html: "<p><strong>Through</strong>2-3 weeks</p>",
    };
*/

const sendEmail = async (data) => {
  const mail = { ...data, from: "dsurdiy@ukr.net" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;
