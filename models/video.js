const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  userId: String,
  videoId: String,
  watchLater: false
});

module.exports = mongoose.model("Video", videoSchema);
