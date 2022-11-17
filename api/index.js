const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const router = express.Router();
const uriDb = process.env.DB_HOST;

module.exports = router;
