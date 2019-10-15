import React, { Component } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";

class VideoList extends Component {
  render() {
    return (
      <div>
        {this.props.videos.items ? (
          this.props.videos.items.map((video, idx) => {
            return (
              <Link to={`videos/${video.id.videoId}`}>
                <div key={idx}>
                  <img src={video.snippet.thumbnails.default.url}></img>
                </div>
              </Link>
            );
          })
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default VideoList;
