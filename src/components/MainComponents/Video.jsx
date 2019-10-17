import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    console.log(this.props.videos.items);
    return (
      <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=`} />
      </div>
    );
  }
}

export default Video;
