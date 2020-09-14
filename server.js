const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

app.get("/post", (req, res) => {
  const data = {
    title: "hello world",
    content: "its me, lorem ipsum sit amet dolor",
  };
  res.json(data);
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
