import React, { Component } from "react";
import DropdownCountry from "./DropdownCountry";
import Select from "react-select";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleGetCategorySubmit = (event) => {
    event.preventDefault();
    // console.log("se hizo click");
    this.props.onSearch(event.target.elements["catEntert"].value);
  };

  handleGetCountry = (e) => {
    e.preventDefault();
    // this.props.onSearch(e.target.elements["selectC"].value);
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        onClick={this.handleGetCategorySubmit()}
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            NEWS APP
          </a> */}
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
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" name="category" value="general">
                  General
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                {/* <a className="nav-link" name="category">
                  Entertaiment
                </a> */}
                <button
                  type="button"
                  name="catentert"
                  value="entertaiment"
                  className="btn btn-primary d-block"
                >
                  Entertaiment
                </button>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a
                  className="nav-link active"
                  name="category"
                  // onClick={() => {
                  //   this.handleUrlCategory();
                  // }}
                >
                  Business
                </a>
              </li>

              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" name="category">
                  Health
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" name="category">
                  Science
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" name="category">
                  Sport
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" name="category">
                  Technology
                </a>
              </li>

              <li className="nav-item dropdown" style={{ width: "150px" }}>
                <select
                  name="selectC"
                  // defaultValue={countries[0]}
                  className="form-select"
                  aria-label="Default select example"
                  // onChange={this.handleGetCountry}
                  options={<DropdownCountry />}
                ></select>
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
