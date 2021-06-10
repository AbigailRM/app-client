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
    this.handleSearch(null);
  }

  handleNewsFilterSearch = (value) => {
    this.handleSearch(value);
  };

  handleSearch = (value) => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100";

    if (value != null) {
      url =
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27dc1ba606de45d09d6977c9149eac27&pageSize=100&q=" +
        value;
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
          <NavbarComponent />
        </div>
        <div className="container" id="containerNews">
          <APIContainer
            articles={currentArticle}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}
