const BASE_URL = process.env.BASE_URL;
const fetch = require("node-fetch");

module.exports = {
  grabData
};

async function grabData(req, res) {
  const url = `${BASE_URL}search?part=snippet&q=${req.body.query}&key=${process.env.YOUTUBE_API_KEY}`;
  return res.json(await fetch(url).then(res => res.json()));
}
