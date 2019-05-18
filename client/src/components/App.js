import React from "react";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import SearchPanel from "./SearchPanel";
import SearchResults from "./SearchResults";

import store from "../store";

const styles = theme => ({
  root: {
    height: "100vh",
    background: "#d2dce5",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  tableHeader: {
    display: "none",
    width: "100%",
    fontWeight: "bold",
    fontSize: "1.08rem",
    padding: "8px 0px",
    background: "#feefc3",
    "& > div": {
      padding: "4px",
    },
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "2fr repeat(8, 1fr)",
    },
    borderBottom: "1px solid gray",
  },
  app: {
    width: "100%",
    maxWidth: "1180px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edf0f5",
    "& > header": {
      "& > h1": {
        margin: 0,
        padding: "8px",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#29487d",
      color: "white",
    },
  },
  medium: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "inherit",
    },
  },
});

function App({ classes }) {
  return (
    <Provider store={store}>
      <div className={classes.root}>
        <div className={classes.app}>
          <header>
            <h1>Meteorite Explorer</h1>
            <SearchPanel />
          </header>
          <div className={classes.tableHeader}>
            <div>Name</div>
            <div>Id</div>
            <div className={classes.medium}>Name Type</div>
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
