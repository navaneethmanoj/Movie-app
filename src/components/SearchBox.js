import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4 d-flex">
      <div className="input-group">
        <input
          type="search"
          className="form-control justify-content-center"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Enter movie name"
        />
      </div>
    </div>
  );
};

export default SearchBox;
