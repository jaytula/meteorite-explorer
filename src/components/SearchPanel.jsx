import React, { useState } from "react";
import { connect } from "react-redux";
import SearchResults from "./SearchResults";

import { setSearchResults } from "../actionCreators";

function SearchPanel({ dispatchSetSearchResults }) {
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    dispatchSetSearchResults(text);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Search</button>
        <SearchResults />
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  dispatchSetSearchResults: setSearchResults,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchPanel);
