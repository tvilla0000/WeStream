import React, { Component } from "react";
import SidevideoList from "./SidevideoList";
import Video from "./Video";
class VideoView extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <Video {...this.props} />
          <SidevideoList videos={this.props.videos} />
        </div>
      </div>
    );
  }
}

export default VideoView;
