import React from "react";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import SearchPanel from "./SearchPanel";
import SearchResults from "./SearchResults";
import LoadingSpinner from "./LoadingSpinner";
import NotificationBar from "./NotificationBar";

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

  app: {
    width: "100%",
    maxWidth: "1180px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#edf0f5",
    "& > header": {
      "& > h1": {
        textAlign: "center",
        margin: 0,
        padding: "8px",
      },
      background: "#29487d",
      color: "white",
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
          <LoadingSpinner />
          <SearchResults />
        </div>
        <NotificationBar />
      </div>
    </Provider>
  );
}

export default withStyles(styles)(App);
