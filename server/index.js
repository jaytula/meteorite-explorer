require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { PORT, SOCRATA_APP_TOKEN } = process.env;

const DATA_ENDPOINT = "https://data.nasa.gov/resource/gh4g-9sfh.json";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/meteorites-api", cors(), async (req, res) => {
  try {
    const response = await axios.get(DATA_ENDPOINT, {
      headers: {
        // authorization: `Basic ${APIKEY_ID}`,
        "X-App-Token": SOCRATA_APP_TOKEN,
      },
      params: req.query,
    });
    const { status, statusText, data } = response;
    if (status !== 200) throw new Error(statusText);

    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
