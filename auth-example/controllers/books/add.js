const { Book } = require("../../models/book");

const add = async (req, res) => {
  console.log(req.user);
  const result = await Book.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
