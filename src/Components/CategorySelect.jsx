import React, { Component } from "react";

export default class CategorySelect extends Component {
  constructor(props) {
    super(props);
  }

  handleGetCategorySubmit = (event) => {
    event.preventDefault();
    let idcategory = document.getElementById("categories");
    let cat = idcategory.value;
    this.props.onSearch(cat);
    console.log(cat);
  };

  render() {
    return (
      // <div className="bg-dark">
      <select
        id="categories"
        className="form-select selectFilter"
        aria-label="Default select example"
        onChange={this.handleGetCategorySubmit}
      >
        <option> Categories </option>
        <option value="general"> General </option>
        <option value="entertaiment"> Entertaiment </option>
        <option value="business">Business</option>
        <option value="sport">Sport</option>
        <option value="health">Health</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
      </select>
      // </div>
    );
  }
}
