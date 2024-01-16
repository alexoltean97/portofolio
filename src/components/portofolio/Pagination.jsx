import React from "react";
import { useState } from "react";
import "./Pagination.css";

const Pagination = () => {
  const pages = ["1", "2", "3", "4"];
  const [activePage, setActivePage] = useState("1");

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <React.Fragment>
      <h2>Pagination</h2>
      <div className="pagination-grid d-flex flex-row">
        {pages.map((page, index) => (
          <div
            className={`pagination-box ${
              page === activePage ? "active-page" : ""
            }`}
            onClick={() => handlePageClick(page)}
            key={index}
          >
            <span>{page}</span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
