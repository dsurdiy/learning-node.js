const books = require("../../models/books");

const getAll = async (req, res, next) => {
  try {
    const result = await books.getAll();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
