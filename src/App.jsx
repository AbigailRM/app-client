import APIContainer from "./Components/APIContainer";
import "./AppCSS.css";
import axios from "axios";
import SearchNews from "./Components/SearchNews";
import React, { Component } from "react";
import NavbarComponent from "./Components/NavbarComponent";
import Pagination from "./Components/Pagination";

export default class App extends Component {
  state = {
    loading: true,
    articles: [],
    message: "",
    category: "",
    // currentArticle: [],
    // currentPage: null,
    // totalPages: null,
  };

  componentDidMount() {
    this.handleSearch(null);
  }

  handleNewsFilterSearch = (value) => {
    this.handleSearch(value);
  };

  handlesetCategory = (option) => {
    this.setState({
      category: option.value,
    });
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

    setCategoriy = (option) => {
      this.setState({
        category: option.value,
      });
    };
  };

  // onPageChanged = (data) => {
  //   const { articles } = this.state.articles;
  //   const { currentPage, totalPages, pageLimit } = data;
  //   const offset = (currentPage - 1) * pageLimit;
  //   const currentArticle = articles.slice(offset, offset + pageLimit);

  //   this.setState({ currentPage, totalPages });
  // };

  render() {
    // const { articles, currentPage, totalPages } = this.state;
    // const totalArticles = articles.length;

    // if (totalArticles === 0) return null;

    // const headerClass = [
    //   "text-dark py-2 pr-4 m-0",
    //   currentPage ? "border-gray border-right" : "",
    // ]
    //   .join(" ")
    //   .trim();

    return (
      <div className="App container">
        <header className="d-flex">
          <div className="flex-grow-1">
            <div className="flex-grow-1">
              <h1 id="headingAPP"> NEWS APP </h1>
            </div>
          </div>

          {/* <div className="d-flex flex-row align-items-center">
            <h2 className={headerClass}>
              <strong className="text-secondary">{totalArticles}</strong>{" "}
              Articles
            </h2>
            {currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                <span className="font-weight-bold">{totalPages}</span>
              </span>
            )}
          </div> */}

          {/* <div className="d-flex flex-row py-4 align-items-center">
            <Pagination
              totalRecords={totalArticles}
              pageLimit={18}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </div> */}

          <div>
            <SearchNews onSearch={this.handleNewsFilterSearch} />
          </div>
        </header>
        <div>
          <NavbarComponent onSearch={this.handlesetCategory} />
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
