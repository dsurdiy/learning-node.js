const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, // 25, 465, 2525
  secure: true,
  auth: {
    user: "dsurdiy@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const mail = {
  to: "arestovich@gmail.com",
  from: "dsurdiy@meta.ua",
  subject: "When will it end?",
  html: "<p><strong>Through</strong>2-3 weeks</p>",
};

transport
  .sendMail(mail)
  .then(() => console.log("Send email success"))
  .catch((error) => console.log(error.message));
