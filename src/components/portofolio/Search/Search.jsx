import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Search = ({ onSearch }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = () => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = () => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="search">
      <form
        className="form-inline d-flex"
        style={{ flexDirection: "row" }}
        onSubmit={handleFormSubmit}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder={t("inputSearch")}
          aria-label="Search"
          style={{ width: "25%" }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 shadow-effect"
          style={{ width: "10%" }}
          type="submit"
        >
          {t("inputSearch")}
        </button>
      </form>
    </div>
  );
};

export default Search;
