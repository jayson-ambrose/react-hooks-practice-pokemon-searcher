import React from "react";

function Search({handleChange, searchVal}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchVal} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
