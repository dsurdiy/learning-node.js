const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const payload = {
  id: "6359f89760a778ea63a1c9e9",
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
  const result = jwt.verify(token, SECRET_KEY);
  console.log(result);
  const wrongToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTlmODk3eewhNzc4ZWE2M2ExYzllOSIsImlhdCI6MTY2NjkyNTg3MSwiZXhwIjoxNjY3MDEyMjcxfQ.fvJdddt8TesLkI0-LO2_tWeKmg43tqXsw5nwtCistX4";
  const result2 = jwt.verify(wrongToken, SECRET_KEY);
} catch (error) {
  console.log(error.message);
}
