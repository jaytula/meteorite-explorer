import React, { useState } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import { setSearchResults } from "../actionCreators";

const styles = {
  root: {
    "& > h1": {
      padding: "8px",
    },
    "& > input": { flex: 1, padding: "16px 8px" },
    display: "flex",
    flex: 1,
    padding: "8px",
  },
};

function SearchPanel({ term, dispatchSetSearchResults, classes }) {
  const [text, setText] = useState(term);

  function onSubmit(e) {
    e.preventDefault();
    dispatchSetSearchResults(text);
  }

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <input
        type="text"
        spellCheck={false}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
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
)(withStyles(styles)(SearchPanel));
