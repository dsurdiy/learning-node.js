const express = require("express");

const books = [];

const app = express();

app.set("json spaces", 8);

app.get("/books", (req, res) => {
  const databaseResponse = null;
  //   res.json(databaseResponse);
  //   res.send(databaseResponse);
  //   res.send(books);
  res.json(books);
});

app.listen(3000);
