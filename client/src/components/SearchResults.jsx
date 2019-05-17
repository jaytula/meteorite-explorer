import React from "react";
import { connect } from "react-redux";
import Meteorite from "./Meteorite";

function SearchResults({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map(meteor => (
          <Meteorite key={meteor.id} data={meteor} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ search }) => ({
  results: search.results,
});

export default connect(mapStateToProps)(SearchResults);
