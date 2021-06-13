import APIContainer from "./Components/APIContainer";
import "./AppCSS.css";
import axios from "axios";
import SearchNews from "./Components/SearchNews";
import React, { Component } from "react";
import NavbarComponent from "./Components/NavbarComponent";

export default class App extends Component {
  state = {
    loading: true,
    articles: [],
    message: "",
  };

  componentDidMount() {
    this.handleSearch(null, null, null);
  }

  handleNewsFilterSearch = (value) => {
    this.handleSearch(value, null, null);
  };

  handleCategory = (value) => {
    this.handleSearch(null, value, null);
  };

  handleCountry = (value) => {
    this.handleSearch(null, value, null);
  };

  handleSearch = (value, valueCat, valueCount) => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100";

    if (value != null && valueCat == null && valueCount == null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&q=" +
        value;
    }
    if (value == null && valueCat != null && valueCount == null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&category=" +
        valueCat;
    }
    if (value == null && valueCat == null && valueCount != null) {
      url =
        "https://newsapi.org/v2/top-headlines?apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&country=" +
        valueCount;
    }

    axios
      .get(url)
      .then((res) => {
        this.setState({
          articles: res.data.articles,
          category: res.data.category,
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          articles: [],
          message: err.response.data.message,
        });
      });
  };

  render() {
    return (
      <div className="App container">
        <header className="d-flex">
          <div className="flex-grow-1">
            <div className="flex-grow-1">
              <h1 id="headingAPP"> NEWS APP </h1>
            </div>
          </div>

          <div>
            <SearchNews onSearch={this.handleNewsFilterSearch} />
          </div>
        </header>
        <div>
          <NavbarComponent onSearch={this.handleCategory} />
        </div>
        <div className="container" id="containerNews">
          <APIContainer
            articles={this.state.articles}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
