const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const mail = {
  to: "arestovich@gmail.com",
  from: "dsurdiy@ukr.net",
  subject: "When will it end?",
  html: "<p><strong>Through</strong>2-3 weeks</p>",
};

sgMail
  .send(mail)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error));
