import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState < string > "";

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
        className="form-inline"
        style={{ flexDirection: "row" }}
        onSubmit={handleFormSubmit}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
