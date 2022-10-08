const express = require("express");

const app = express(); // app - веб-сервер

app.get("/", (req, res) => {
  res.send("<h2>Main page</h2>");
});

app.get("/contacts", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send("<h2>Contacts page</h2>");
});

app.listen(3000, () => console.log("Server success running"));
