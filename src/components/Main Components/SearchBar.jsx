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
    e.preventDefault();
    this.props.handleFormSubmit(this.state.term);
    console.log(this.state.term);
  }

  render() {
    console.log(this.props.handleFormSubmit);
    return (
      <div className="Search">
        <form className="ui-form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              onChange={this.handleChange}
              name="video-search"
              type="text"
              value={this.state.term}
            ></input>
            <button onClick={this.handleSubmit}>Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
