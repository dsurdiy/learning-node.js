const books = require("../../models/books");

const { RequestError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.getById(id);

    if (!result) {
      throw RequestError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
