const fs = require("fs");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 80;

const db = require("./db");
const { stringify } = require("querystring");
db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));
app.use(express.json());

app.use(cors());

const collages = mongoose.Schema({
  collagename: String,
  rating: String,
  city: String,
  state: String,
  collegetype: String,
  averagefees: String,
});

const eng = mongoose.model("EngCollage", collages);

app.get("/", (req, res) => {
  res.send("Top Collages Data");
});

app.get("/getcollage", (req, res) => {
  eng
    .find(
      { $and: [{ rating: { $gt: 3.0 } }, { rating: { $ne: "" } }] },
      (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(data);
        }
      }
    )
    .limit(20);
});

app.listen(PORT, () => {
  console.log(`API is running on PORT No- ${PORT}`);
});
