import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Main Components/NavBar";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";
import userService from "./utils/userService";
import youtube from "./APIs/youtube";

class App extends Component {
  state = {
    user: userService.getUser(),
    videos: [],
    selVideo: null
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleSubmit = async searchBarTerm => {
    const response = await youtube.get("/search", {
      params: {
        q: searchBarTerm
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  handleSelVideo = video => {
    this.setState({ selVideo: video });
  };

  render() {
    return (
      <div>
        <NavBar user={this.state.user} handleFormSubmit={this.handleSubmit} />
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
      </div>
    );
  }
}

export default App;
