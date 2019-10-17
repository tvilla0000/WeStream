import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${this.props.match.params.videoId}`}
          controls={true}
          width={1000}
          height={550}
        />
      </div>
    );
  }
}

export default Video;
