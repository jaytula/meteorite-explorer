import React from "react";
import SearchResults from "./SearchResults";

function SearchPanel() {
  return (
    <div>
      <input type="text" />
      <button type="submit">Search</button>
      <SearchResults />
    </div>
  );
}

export default SearchPanel;
