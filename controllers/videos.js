const YOUTUBE_URL = process.env.YOUTUBE_URL;
const key = process.env.YOUTUBE_API_KEY;
const fetch = require("node-fetch");

module.exports = {
  searchVideos,
  getSingleVideo,
  getVideos
};

// This Should Pull one Video in JSON Format from Youtube API!!
async function searchVideos(req, res) {
  const url = `${YOUTUBE_URL}search?part=snippet&q=${req.body.query}&key=${key}`;
  return res.json(await fetch(url).then(res => res.json()));
}

async function getVideos(req, res) {
  let videos = await Video.find({});
  const mapVids = videos.map(video =>
    fetch(
      `${YOUTUBE_URL}videos?part=snippet&id=${video.videoId}&key=${key}`
    ).then(res => res.json())
  );
  const vidList = await Promise.all(mapVids);
  res.json(vidList);
}

async function getSingleVideo(req, res) {
  const url = `${YOUTUBE_URL}videos?part=snippet&id=${req.body.videoId}&key=${key}`;
  return res.json(await fetch(url).then(res => res.json));
}
