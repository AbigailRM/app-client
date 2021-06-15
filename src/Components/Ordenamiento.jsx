import React, { Component } from "react";

export default class Ordenamiento extends Component {
  constructor(props) {
    super(props);
  }

  handleGetSort = (event) => {
    event.preventDefault();
    let idsort = document.getElementById("sortBy");
    let pro = idsort.value;
    this.props.onSearch(pro);
  };

  render() {
    return (
      //   <div>
      <select
        id="sortBy"
        className="form-select "
        aria-label="Default select example"
        onChange={this.handleGetSort}
      >
        <option> Sort By </option>
        <option value="relevancy"> Relevancy </option>
        <option value="popularity"> Popularity </option>
        <option value="publishedAt">Published At</option>
      </select>
      //   </div>
    );
  }
}
