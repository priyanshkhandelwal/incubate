const express = require("express");
const router = express.Router();
const ctrlData = require("../controllers/data.controller");

router.get("/list", ctrlData.getlist)


module.exports = router