const books = require("../../models/books");

const { RequestError } = require("../../helpers");

const { addSchema } = require("../../schemas/books");

const add = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }

    const result = await books.add(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
