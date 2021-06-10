import React, { Component } from "react";

export default class SearchNews extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(event.target.elements["searchIn"].value);
  };

  render() {
    return (
      <div className="ms-2">
        <form className="d-flex" onSubmit={this.handleSearchSubmit}>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              name="searchIn"
            />
          </div>
          <div className="ms-3">
            <button className="btn btn-primary d-block" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
