import APIContainer from "./Components/APIContainer";
import "./AppCSS.css";
import axios from "axios";
import SearchNews from "./Components/SearchNews";
import React, { Component } from "react";
import CountrySelect from "./Components/CountrySelect";
import CategorySelect from "./Components/CategorySelect";

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
    this.handleSearch(null, null, value);
  };

  handleSearch = (value, valueCat, valueCount) => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa260732d3494e1a88889c6ac1936146&pageSize=100";

    if (value != null && valueCat == null && valueCount != null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa260732d3494e1a88889c6ac1936146&pageSize=100&q=" +
        value +
        "&country=" +
        valueCount;
    }
    if (value != null && valueCat == null && valueCount != null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa260732d3494e1a88889c6ac1936146&pageSize=100&q=" +
        value +
        "&country=" +
        valueCount;
    }
    if (value == null && valueCat != null && valueCount == null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa260732d3494e1a88889c6ac1936146&pageSize=100&category=" +
        valueCat;
    }
    if (value == null && valueCat == null && valueCount != null) {
      url =
        "https://newsapi.org/v2/top-headlines?apiKey=aa260732d3494e1a88889c6ac1936146&pageSize=100&country=" +
        valueCount;
    }
    if (value != null && valueCat == null && valueCount == null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=aa260732d3494e1a88889c6ac1936146&pageSize=100&q=" +
        value;
    }
    console.log(url);
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
              <h1 className="headingAPP"> NEWS APP </h1>
            </div>
          </div>

          <div>
            <SearchNews onSearch={this.handleNewsFilterSearch} />
            <br />
            <CountrySelect onSearch={this.handleCountry} />
          </div>
        </header>
        <div>
          <CategorySelect onSearch={this.handleCategory} />
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
