import React from "react";
import Video from "./Video";

const VideoList = ({ videos, handleSelVideo }) => {
  const renderedVids = videos.map(video => {
    return (
      <Video
        key={video.id.videoId}
        video={video}
        handleSelVideo={handleSelVideo}
      />
    );
  });

  return <div className="">{renderedVids}</div>;
};

export default VideoList;
