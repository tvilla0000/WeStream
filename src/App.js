import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/MainComponents/NavBar";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";
import userService from "./utils/userService";
import VideoList from "./components/MainComponents/VideoList";
import videoService from "./utils/videoService";
import VideoView from "./Pages/VideoView";
import Video from "./components/MainComponents/Video";

class App extends Component {
  state = {
    user: userService.getUser(),
    videos: [],
    term: "",
    selectedVidId: ""
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleSearch = async (e, query) => {
    e.preventDefault();
    let search = await videoService.searchYoutube(query);
    this.setState({
      videos: search
    });
  };

  handleVideoId = async videoId => {
    this.setState({
      selectedVidId: videoId
    });
    videoId = await videoService.getVideo(videoId).then(res => res.json());
    console.log(videoId);
  };

  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          term={this.state.term}
        />
        {/* <Video videos={this.handleVideoId} /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <VideoList
                videos={this.state.videos}
                handleVideoId={this.handleVideoId}
              />
            )}
          />

          <Route
            path={`/videos/${this.state.videosId}`}
            render={() => <VideoView videos={this.props.videos} />}
          />

          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage history={history} signUp={this.handleSignupOrLogin} />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route exact path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
