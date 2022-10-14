const books = require("../../models/books");

const { RequestError } = require("../../helpers");

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await books.removeById(id);
    if (!result) {
      throw RequestError(404, "Not found");
    }

    res.json({ message: "Delete success" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
