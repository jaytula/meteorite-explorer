import React from "react";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import SearchPanel from "./SearchPanel";
import SearchResults from "./SearchResults";

import store from "../store";

const styles = {
  root: {
    height: "100vh",
    background: "#d2dce5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  tableHeader: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "2fr repeat(8, 1fr)",
    fontWeight: "bold",
    fontSize: "1.08rem",
    padding: "8px 0px",
    background: "orange",
    "& > div": {
      padding: "4px",
    },
  },
  app: {
    width: "100%",
    maxWidth: "1180px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
};
function App({ classes }) {
  return (
    <Provider store={store}>
      <div className={classes.root}>
        <div className={classes.app}>
          <h1>Meteorite Explorer</h1>
          <SearchPanel />
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
          <SearchResults />
        </div>
      </div>
    </Provider>
  );
}

export default withStyles(styles)(App);
