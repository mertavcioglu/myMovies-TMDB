import React, { useState } from "react";

function SearchBar(props) {
  //const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="form-outline" style={{ margin: "0.5rem 0rem" }}>
      <input
        onChange={props.SearchMovieProp}
        //value={searchQuery}
        type="search"
        id="form1"
        className="form-control"
        placeholder="Search a movie..."
        aria-label="Search"
      />
    </div>
  );
}

export default SearchBar;
