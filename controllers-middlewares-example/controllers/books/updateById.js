const books = require("../../models/books");

const { RequestError } = require("../../helpers");

const { addSchema } = require("../../schemas/books");

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }

    const { id } = req.params;
    const result = await books.updateById(id, req.body);
    if (!result) {
      throw RequestError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
