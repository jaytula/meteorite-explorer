require("dotenv").config();
const express = require("express");
const { PORT } = process.env;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});