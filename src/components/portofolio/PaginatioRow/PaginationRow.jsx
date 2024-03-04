import React from "react";
import { useTranslation } from "react-i18next";

const PaginationRow = ({ totalPages, currentPage, onPageChange }) => {
  const { t } = useTranslation();

  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <nav className="working-pagination">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && "disabled"}`}>
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &laquo; {t("previous")}
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
            {t("next")} &raquo;
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationRow;
