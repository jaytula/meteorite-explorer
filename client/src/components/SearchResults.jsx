import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Meteorite from "./Meteorite";

const styles = {
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "2fr repeat(8, 1fr)",
    fontWeight: "bold",
  },
};

function SearchResults({ results, classes }) {
  return (
    <div>
      <h2>Search Results</h2>
      <div>
        <div className={classes.tableHeader}>
          <div>Name</div>
          <div>Id</div>
          <div>Name Type</div>
          <div>Rec Class</div>
          <div>Mass</div>
          <div>Fall</div>
          <div>Year</div>
          <div>Lat</div>
          <div>Long</div>
        </div>
        {results.map(meteor => (
          <Meteorite key={meteor.id} data={meteor} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  results: search.results,
});

export default connect(mapStateToProps)(withStyles(styles)(SearchResults));
