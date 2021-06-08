import React, { Component } from "react";

import axios from "axios";

        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-3 ">
                <div className="card mb-2">
                  <img
                    src={article.urlToImage ?? "/SecImage.jpg"}
                    className="card-img-top"
                    alt="Nothing to Show."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted d-flex">
                      Author: {article.author}
                    </h6>
                    <p className="card-text">
                      {article.description}
                      <br />
                      <br />
                      {Date(article.publishedAt)}
                    </p>
                    <a
                      href={article.url}
                    // target="_blank"
                    className="btn btn-outline-primary"
                  >
                    Show Entire Article
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
}
