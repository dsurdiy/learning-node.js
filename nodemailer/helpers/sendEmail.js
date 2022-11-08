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

/** 
const data = {
  to: "arestovich@gmail.com",
  from: "dsurdiy@meta.ua",
  subject: "When will it end?",
  html: "<p><strong>Through</strong>2-3 weeks</p>",
}; 
*/

const sendMail = async (data) => {
  const mail = { ...data, from: "dsurdiy@meta.ua" };
  await transport.sendMail(mail);

  return true;
};

module.exports = sendMail;
