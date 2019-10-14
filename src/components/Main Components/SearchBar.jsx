import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  handleSubmit(e) {
    console.log("hi");
  }

  render() {
    return (
      <div className="Search">
        <form className="ui-form">
          <div id="container">
            <div className="field">
              <input
                onChange={this.handleChange}
                name="video-search"
                type="text"
                value={this.state.term}
                id="searchbar"
                placeholder="Search..."
              ></input>
              <button onSubmit={this.handleSubmit} id="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
