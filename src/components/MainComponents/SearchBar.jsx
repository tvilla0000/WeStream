import React, { Component } from "react";
import MaterialIcon from "material-icons-react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  render() {
    return (
      <div className="Search">
        <form
          onSubmit={e => this.props.handleSearch(e, this.state.term)}
          className="ui-form"
        >
          <div id="container">
            <div className="field">
              <input
                onChange={this.handleChange}
                type="text"
                value={this.state.term}
                id="searchbar"
                placeholder="Search..."
              ></input>
              <button id="submit">
                <MaterialIcon icon="search" id="search-icon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
