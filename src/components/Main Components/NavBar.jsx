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

  hnadleSubmit = e => "hello";

  render() {
    console.log(this.props.handleFormSubmit);

    let nav = this.props.user ? (
      <div className="nav">
        <SearchBar handleFormSubmit={this.props.handleFormSubmit} />
        <Link to="" className="NavBar-link" onClick={this.handleLogout}>
          LOG OUT
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className="NavBar-welcome">Welcome, {this.props.user.name}</span>
      </div>
    ) : (
      <div className="nav">
        <SearchBar handleFormSubmit={this.props.handleFormSubmit} />
        <Link to="/login" className="NavBar-link">
          LOG IN
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className="NavBar-link">
          SIGN UP
        </Link>
      </div>
    );
    return <div className="NavBar">{nav}</div>;
  }
}

export default NavBar;
