const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Asnwer");
const commentRouter = require("./Comments");
const personalRouter = require("./Personal")

const collegeRouter = require("./collages");

router.get("/", (req, res) => {
  res.send("Welcome To CareerGuide API");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use("/comment", commentRouter);
router.use("/getcolleges", collegeRouter);
router.use("/resume", personalRouter);


module.exports = router;
