import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  root: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
    width: "100%",
  },
};

function LoadingSpinner({ isLoading, classes }) {
  return isLoading ? (
    <div className={classes.root}>
      <CircularProgress className={classes.root} />
    </div>
  ) : null;
}

const mapStateToProps = ({ app }) => ({
  isLoading: app.isLoading,
});
export default connect(mapStateToProps)(withStyles(styles)(LoadingSpinner));
