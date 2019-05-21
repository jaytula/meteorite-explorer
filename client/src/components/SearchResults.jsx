import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Meteorite from "./Meteorite";

const styles = {
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
};

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
