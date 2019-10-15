import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../../utils/userService";
import SearchBar from "./SearchBar";

class NavBar extends Component {
  state = {};

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    let nav = this.props.user ? (
      <div className="nav">
        <div id="brand">
          <img
            src="https://i.imgur.com/Cw3uIAO.png"
            style={{ width: "2vw", height: "3vh" }}
            alt="WeStream Logo"
          />
          <label>WeStream</label>
        </div>
        <SearchBar
          handleSearch={this.props.handleSearch}
          handleChange={this.props.handleChange}
          term={this.props.term}
        />
        <div className="auth">
          <Link to="" className="NavBar-link" onClick={this.handleLogout}>
            LOG OUT
          </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span className="NavBar-welcome">
            Welcome, {this.props.user.name}
          </span>
        </div>
      </div>
    ) : (
      <div className="nav">
        <Link to="/">
          <div id="brand">
            <img
              src="https://i.imgur.com/Cw3uIAO.png"
              style={{ width: "1.5vw", height: "3.5vh" }}
              alt="WeStream Logo"
            />
            <label>WeStream</label>
          </div>
        </Link>
        <SearchBar
          handleSearch={this.props.handleSearch}
          term={this.props.term}
        />
        <div className="auth">
          <Link to="/login" className="NavBar-link">
            LOG IN
          </Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/signup" className="NavBar-link">
            SIGN UP
          </Link>
        </div>
      </div>
    );
    return <div>{nav}</div>;
  }
}

export default NavBar;
