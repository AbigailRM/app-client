import React, { Component } from "react";
// import DropdownCountry from "./DropdownCountry";
// import Select from "react-select";

export default class NavbarComponent extends Component {
  // handleGetCategorySubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onSearch(event.target.elements["category"].value);
  // };

  handleUrlCategory = () => {
    let urlCategory =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100";
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                <a
                  className="nav-link active"
                  href={this.handleUrlCategory + "&category=general"}
                  name="category"
                  type="submit"
                >
                  General
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" name="category" type="submit">
                  Entertaiment
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a
                  className="nav-link active"
                  href={this.handleUrlCategory + "&category=business"}
                  name="category"
                  type="submit"
                >
                  Business
                </a>
              </li>

              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" name="category" type="submit">
                  Health
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" name="category" type="submit">
                  Science
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link" name="category" type="submit">
                  Sport
                </a>
              </li>
              <li className="nav-item" style={{ width: "150px" }}>
                <a className="nav-link active" name="category" type="submit">
                  Technology
                </a>
              </li>
              {/* <Select
                option={categories}
                placeholder="Select an option..."
                onChange={this.setCategory}
                name="category"
              ></Select>
              <div style={{ height: "10px" }}></div> */}

              <li className="nav-item dropdown" style={{ width: "150px" }}>
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                </a> */}
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Country</option>
                  <option value="ar">Argentina</option>
                  <option value="at">Austria</option>
                  <option value="au">Australia</option>
                  <option value="be">Belgium</option>
                  <option value="br">Brazil</option>
                  <option value="bg">Bulgaria</option>
                  <option value="ca">Canada</option>
                  <option value="cn">China</option>
                  <option value="co">Colombia</option>
                  <option value="cu">Cuba</option>
                  <option value="cz">Czech Republic</option>
                  <option value="eg">Egypt</option>
                  <option value="fr">France</option>
                  <option value="de">Germany</option>
                  <option value="gr">Greece</option>
                  <option value="hk">Hong Kong</option>
                  <option value="hu">Hungary</option>
                  <option value="in">India</option>
                  <option value="id">Indonesia</option>
                  <option value="ie">Ireland</option>
                  <option value="il">Israel</option>
                  <option value="it">Italy</option>
                  <option value="jp">Japan</option>
                  <option value="lv">Latvia</option>
                  <option value="lt">Lithuania</option>
                  <option value="my">Malaysia</option>
                  <option value="mx">Mexico</option>
                  <option value="ma">Morocco</option>
                  <option value="nl">Netherlands</option>
                  <option value="nz">New Zealand</option>
                  <option value="ng">Nigeria</option>
                  <option value="no">Norway</option>
                  <option value="ph">Philippines</option>
                  <option value="pl">Poland</option>
                  <option value="pt">Portugal</option>
                  <option value="ro">Romania</option>
                  <option value="ru">Russian Federation</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="rs">Serbia</option>
                  <option value="sg">Singapore</option>
                  <option value="sk">Slovakia</option>
                  <option value="si">Slovenia</option>
                  <option value="za">South Africa</option>
                  <option value="kr">Korea</option>
                  <option value="se">Sweden</option>
                  <option value="ch">Switzerland</option>
                  <option value="tw">Taiwan</option>
                  <option value="th">Thailand</option>
                  <option value="tr">Turkey</option>
                  <option value="ua">Ukraine</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="gb">
                    United Kingdom of Great Britain and Northern Ireland
                  </option>
                  <option value="us">United States of America</option>
                  <option value="ve">Venezuela</option>
                </select>
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
