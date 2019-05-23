import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Meteorite from "./Meteorite";

import { setSearchResults } from '../actionCreators';

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%",
  },
  results: {
    overflowY: "scroll",
    width: "100%",
    height: "100%",
  },
  noResults: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  tableHeader: {
    display: "none",
    width: "100%",
    fontWeight: "bold",
    fontSize: "1.08rem",
    padding: "8px 0px",
    background: "#feefc3",
    "& > div": {
      padding: "8px",
    },
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "2fr repeat(8, 1fr)",
    },
    borderBottom: "1px solid gray",
  },
  resultsInfo: {
    textAlign: "center",
    color: "white",
    padding: "4px",
    background: "#29487d",
  },
});



function SearchResults({ results, classes, term, end, dispatchSetSearchResults, count}) {
  function handleScroll(el) {
    const position = el.target.offsetHeight + el.target.scrollTop;
    const bottom = position >= el.target.scrollHeight;
  
    if (bottom && !end) {
      console.log("Reached bottom");
      dispatchSetSearchResults(term, results.length)
    }
  }

  return (
    <>
      <div>
        {!results.length ? null : (
          <div className={classes.resultsInfo}>
            Showing {results.length} of {count} results.
          </div>
        )}
        <div className={classes.tableHeader}>
          <div>Name</div>
          <div>Id</div>
          <div title="Name Type">Type</div>
          <div>Rec Class</div>
          <div>Mass</div>
          <div>Fall</div>
          <div>Year</div>
          <div>Lat</div>
          <div>Long</div>
        </div>
      </div>
      <div className={classes.results} onScroll={handleScroll}>
        {results.map(meteor => (
          <Meteorite key={meteor.id} data={meteor} />
        ))}
        {!results.length ? (
          <div className={classes.noResults}>
            <div>No results</div>
          </div>
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = ({ search }) => ({
  results: search.results,
  term: search.term,
  end: search.end,
  count: search.count,
});

const mapDispatchToProps = {
  dispatchSetSearchResults: setSearchResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SearchResults));
