import APIContainer from "./Components/APIContainer";
import "./AppCSS.css";
import axios from "axios";
import SearchNews from "./Components/SearchNews";
import React, { Component } from "react";
import CountrySelect from "./Components/CountrySelect";
import CategorySelect from "./Components/CategorySelect";
import Ordenamiento from "./Components/Ordenamiento";

export default class App extends Component {
  state = {
    loading: true,
    articles: [],
    message: "",
  };

  componentDidMount() {
    this.handleSearch(null, null, null, null);
  }

  handleNewsFilterSearch = (value) => {
    this.handleSearch(value, null, null, null);
  };

  handleCategory = (value) => {
    this.handleSearch(null, value, null, null);
  };

  handleCountry = (value) => {
    this.handleSearch(null, null, value, null);
  };

  handleSortBy = (value) => {
    this.handleSearch(null, null, null, value);
  };

  handleSearch = (value, valueCat, valueCount, valuesort) => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100";

    if (
      value != null &&
      valueCat == null &&
      valueCount == null &&
      valuesort == null
    ) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&q=" +
        value;
    }
    if (
      value == null &&
      valueCat != null &&
      valueCount == null &&
      valuesort == null
    ) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&category=" +
        valueCat;
    }
    if (
      value == null &&
      valueCat == null &&
      valueCount != null &&
      valuesort == null
    ) {
      url =
        "https://newsapi.org/v2/top-headlines?apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&country=" +
        valueCount;
    }
    if (
      value == null &&
      valueCat == null &&
      valueCount == null &&
      valuesort != null
    ) {
      url =
        "https://newsapi.org/v2/everything?q=news&apiKey=27dc1ba606de45d09d6977c9149eac27&sortBy=" +
        valuesort;
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
              <h1 className="headingAPP"> NEWS APP </h1>
            </div>
          </div>
          <div>
            <SearchNews onSearch={this.handleNewsFilterSearch} />
            <br />
            <CountrySelect onSearch={this.handleCountry} />
          </div>
        </header>

        <div className="d-flex catSelector">
          <div className="flex-grow-1">
            <CategorySelect onSearch={this.handleCategory} />
          </div>
          <div>
            <Ordenamiento onSearch={this.handleSortBy} />
          </div>
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
