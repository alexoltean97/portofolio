import React from "react";

const PaginationRow = ({totalPages, currentPage, onPageChange}) => {

    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    
  return (
    <nav className="working-pagination">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &laquo; Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            className={`page-item ${currentPage === page && "active"}`}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationRow;
