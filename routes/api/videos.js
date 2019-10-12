const express = require("express");
const videoCtrl = require("../../controllers/videos");
const router = express.Router();

router.post("/", videoCtrl.grabData);

module.exports = router;
