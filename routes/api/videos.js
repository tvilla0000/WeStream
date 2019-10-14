const express = require("express");
const videoCtrl = require("../../controllers/videos");
const router = express.Router();

router.get("/", videoCtrl.getVideos);
router.post("/video", videoCtrl.getSingleVideo);
router.post("/search", videoCtrl.searchVideos);

module.exports = router;
