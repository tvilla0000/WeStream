import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=`} width="100%" />
      </div>
    );
  }
}

export default Video;
