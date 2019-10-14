import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_KEY;

export default axios.create({
  baseURL: process.env.YOUTUBE_URL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  }
});
