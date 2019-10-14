import React from "react";

const Video = ({ video, handleSelVideo }) => {
  console.log({ video });
  return (
    <div onClick={() => handleSelVideo(video)} className="">
      <img
        className=""
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="">{video.snippet.title}</div>
    </div>
  );
};

export default Video;
