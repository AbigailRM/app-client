import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function APIContainer(props) {
  const [pageNumber, setPageNumber] = useState(0);

  const articlePerPage = 20;
  const pagesVisited = pageNumber * articlePerPage;

  const pageCount = Math.ceil(props.articles.length / articlePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="mt-3">
      {props.loading ? (
        <div className="loading">
          <img src="/Comp-2.gif" />
        </div>
      ) : null}

      <div>
        <ReactPaginate
          color="primary"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previusBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
        {/* <br></br> */}
      </div>

      <div className="row">
        {props.articles
          .slice(pagesVisited, pagesVisited + articlePerPage)
          .map((article) => {
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
                        <p className="card-subtitle author ">
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
                      More Details...
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
