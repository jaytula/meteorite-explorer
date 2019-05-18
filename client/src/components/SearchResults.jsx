import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Meteorite from "./Meteorite";

const styles = {
  root: {
    overflowY: "scroll",
    width: "100%",
  },
};
/*

*/
function SearchResults({ results, classes }) {
  return (
    <div className={classes.root}>
      {results.map(meteor => (
        <Meteorite key={meteor.id} data={meteor} />
      ))}
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  results: search.results,
});

export default connect(mapStateToProps)(withStyles(styles)(SearchResults));
