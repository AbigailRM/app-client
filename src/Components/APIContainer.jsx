import React from "react";

export default function APIContainer(props) {
  // handleFormatPDate = (dateValue) => {
  //   let srcDate = new Date(dateValue);
  //   let yearDate = yearDate(srcDate);
  //   let monthDate = monthDate(srcDate);
  //   let dayDate = dayDate(srcDate);

  //   let publishedAt;
  // };

  return (
    <div className="mt-3">
      {props.loading ? (
        <div className="loading">
          <img src="/Comp-2.gif" />
        </div>
      ) : null}

      <div className="row">
        {props.articles.map((article) => {
          return (
            <div className="col-md-3 ">
              <div className="card mt-3">
                <img
                  src={article.urlToImage ?? "./SecImage.jpg"}
                  className="card-img-top"
                  alt="Nothing to Show."
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>

                  <p className="card-text">
                    {article.description}
                    <div>
                      <h5 id="publishedAt">
                        <br />
                        Published At: {Date(article.publishedAt)}
                      </h5>
                      <p className="card-subtitle author">
                        Author: {article.author ?? "Unknown"}
                      </p>
                    </div>
                  </p>
                </div>

                <div className="card-footer">
                  <a
                    href={article.url}
                    target="blank"
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
