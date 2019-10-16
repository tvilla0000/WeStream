import React, { Component } from "react";
import Video from "../components/MainComponents/Video";
class VideoView extends Component {
  state = {};
  render() {
    return (
      <div>
        <Video videos={this.props.videos} />
      </div>
    );
  }
}

export default VideoView;
