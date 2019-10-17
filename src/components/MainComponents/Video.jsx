import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${this.props.match.params.videoId}`}
        />
      </div>
    );
  }
}

export default Video;
