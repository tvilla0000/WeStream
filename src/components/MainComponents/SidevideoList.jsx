import React, { Component } from "react";
import { Link } from "react-router-dom";

class SidevideoList extends Component {
  render() {
    return (
      <div className="sidevideos">
        {this.props.videos.items ? (
          this.props.videos.items.map((video, idx) => {
            return (
              <div key={idx}>
                <Link to={`/videos/${video.id.videoId}`}>
                  <div className="sidevideo" key={idx}>
                    <div>
                      <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.description}
                      ></img>
                    </div>
                    <div className="details">
                      <div className="video-title">{video.snippet.title}</div>
                      <div className="channel-name">
                        {video.snippet.channelTitle}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="side-no-videos">
            <h1>No Results</h1>
          </div>
        )}
      </div>
    );
  }
}

export default SidevideoList;
