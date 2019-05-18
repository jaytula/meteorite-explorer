import React, { useState, useEffect } from "react";
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
    width: "100%",
  },
};

function SearchPanel({
  term,
  dispatchSetSearchResults,
  classes,
  results,
  isLoading,
}) {
  const [text, setText] = useState(term);
  const [fresh, setFresh] = useState(true);

  useEffect(() => {
    const fetchResults = () => {
      if (text === "" && !results.length && fresh) {
        dispatchSetSearchResults(text);
        setFresh(false);
      }
    };
    fetchResults();
  }, [dispatchSetSearchResults, fresh, results.length, text]);
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
        disabled={isLoading}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
}

const mapStateToProps = ({ search, app }) => ({
  term: search.term,
  results: search.results,
  isLoading: app.isLoading,
});

const mapDispatchToProps = {
  dispatchSetSearchResults: setSearchResults,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(SearchPanel));
