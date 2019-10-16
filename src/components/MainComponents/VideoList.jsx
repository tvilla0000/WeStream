import React, { Component } from "react";
import { Link } from "react-router-dom";

class VideoList extends Component {
  render() {
    return (
      <div className="Videos">
        {this.props.videos.items ? (
          this.props.videos.items.map((video, idx) => {
            return (
              <div>
                <Link to={`videos/${video.id.videoId}`}>
                  <div className="Video" key={idx}>
                    <div>
                      <img src={video.snippet.thumbnails.medium.url}></img>
                    </div>
                    <div className="details">
                      <div className="video-title">{video.snippet.title}</div>
                      <div className="channel-name">
                        {video.snippet.channelTitle}
                      </div>
                      <div className="description">
                        {video.snippet.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="no-videos">
            <h1>No Videos Yet ¯\_(ツ)_/¯...</h1>
          </div>
        )}
      </div>
    );
  }
}

export default VideoList;
