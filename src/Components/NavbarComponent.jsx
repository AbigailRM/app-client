import React, { Component } from "react";
import DropdownCountry from "./DropdownCountry";
import Select from "react-select";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleGetCategorySubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(event.target.elements["category"].value);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <a class="navbar-brand" href="#">NEWS APP</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              {/* <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" aria-current="page" href="#">
                  All Categories
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" href="#">
                  General
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" href="#">
                  Entertaiment
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" href="#">
                  Business
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" href="#">
                  Health
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" href="#">
                  Science
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" href="#">
                  Sport
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" href="#">
                  Technology
                </a>
              </li> */}
              <Select
                option={categories}
                placeholder="Select an option..."
                onChange={this.setCategory}
                name="category"
              ></Select>
              <div style={{ height: "10px" }}></div>

              <li className="nav-item dropdown" style={{ width: "150px" }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Country
                </a>
                <DropdownCountry />
              </li>
              {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
