import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function LoadingSpinner({ isLoading, classes }) {
  return isLoading ? (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  ) : null;
}

const mapStateToProps = ({ app }) => ({
  isLoading: app.isLoading,
});
export default connect(mapStateToProps)(withStyles(styles)(LoadingSpinner));
