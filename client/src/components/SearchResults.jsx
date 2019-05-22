import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Meteorite from "./Meteorite";

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

function handleScroll(el) {
  const position = el.target.offsetHeight + el.target.scrollTop;
  const bottom = position >= el.target.scrollHeight;

  if (bottom) {
    console.log("Reached bottom");
  }
}

function SearchResults({ results, classes }) {
  return (
    <div className={classes.root}>
      <div>
        {!results.length ? null : (
          <div className={classes.resultsInfo}>
            Showing {results.length} results.
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
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  results: search.results,
});

export default connect(mapStateToProps)(withStyles(styles)(SearchResults));
