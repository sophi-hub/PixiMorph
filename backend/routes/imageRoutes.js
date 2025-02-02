const express = require("express");
const { reportImage } = require("../controllers/imageController");
const router = express.Router();

router.post("/report", reportImage);

module.exports = router;
