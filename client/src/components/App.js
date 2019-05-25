import React from "react";
import { Provider } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
  tip: {
    padding: '4px',
    textAlign: 'center',
    '& > a:visited, & > a:link': {
      color: 'white',
    }
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
      <Router>
        <Route path="/">
          <div className={classes.root}>
            <div className={classes.app}>
              <header>
                <h1>Meteorite Explorer</h1>
                <div className={classes.tip}>
                  <b>Tip:</b> search using <a href="https://dev.socrata.com/docs/queries/where.html">SoQL</a> by prefixing with a colon. For names starting with Z, :starts_with(name, 'Z')</div>
                <SearchPanel />
              </header>
              <LoadingSpinner />
              <SearchResults />
            </div>
            <NotificationBar />
          </div>
        </Route>
      </Router>
    </Provider>
  );
}

export default withStyles(styles)(App);
