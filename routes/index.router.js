const cool = require('cool-ascii-faces');
const express = require("express");
const router = express.Router();
const ctrlData = require("../controllers/data.controller");

router.get('/cool', (req, res) => res.send(cool()))
router.get("/list", ctrlData.getlist)


module.exports = router