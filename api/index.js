const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const router = express.Router();
const uriDb = process.env.DB_HOST;

router.get("/tasks", async (req, res, next) => {
  const client = await new MongoClient(uriDb, {
    useUnifiedTopology: true,
  }).connect();

  try {
    const results = await client.db().collection("todos").find().toArray();

    res.json({
      status: "success",
      code: 200,
      data: {
        tasks: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  } finally {
    await client.close();
  }
});

module.exports = router;