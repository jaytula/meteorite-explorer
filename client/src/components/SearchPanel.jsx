import React, { useState } from "react";
import { connect } from "react-redux";

import { setSearchResults } from "../actionCreators";

function SearchPanel({ term, dispatchSetSearchResults }) {
  const [text, setText] = useState(term);

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
      </form>
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  term: search.term,
});

const mapDispatchToProps = {
  dispatchSetSearchResults: setSearchResults,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPanel);
