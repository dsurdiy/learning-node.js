const express = require("express");
const app = express();

const { router } = require("./booksRouter");

app.use("/api", router);
