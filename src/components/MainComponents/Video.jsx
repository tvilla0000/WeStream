import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div className="ReactPlayer">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${this.props.match.params.videoId}`}
          controls={true}
          width={900}
          height={550}
          className="reactplayer"
        />
      </div>
    );
  }
}

export default Video;
