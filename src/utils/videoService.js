import tokenService from "./tokenService";

async function searchYoutube(query) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + tokenService.getToken()
    },
    body: JSON.stringify({ query: query })
  };
  return await fetch(`/api/videos/search`, options).then(res => res.json());
}

async function getVideo(videoId) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + tokenService.getToken()
    },
    body: JSON.stringify({ videoId: videoId })
  };
  return await fetch(`/api/videos/video`, options).then(res => res.json());
}

async function getVidList() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + tokenService.getToken()
    }
  };
  return fetch(`/api/videos/`, options).then(res => res.json());
}

export default {
  searchYoutube,
  getVideo,
  getVidlist
};
