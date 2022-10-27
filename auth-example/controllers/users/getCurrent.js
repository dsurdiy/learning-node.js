const { User } = require("../../models/user");

const getCurrent = async (req, res) => {
  console.log(req.user);
};

module.exports = getCurrent;
