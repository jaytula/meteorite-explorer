import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { setErrorMessage, clearErrorMessage } from "../actionCreators";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

function NotificationBar({
  errorMessage,
  classes,
  dispatchSetErrorMessage,
  dispatchClearErrorMessage,
}) {
  const handleClick = () => {
    dispatchSetErrorMessage("Testing");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatchClearErrorMessage();
  };

  return (
    <div>
      {false && <Button onClick={handleClick}>Open simple snackbar</Button>}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={!!errorMessage}
        autoHideDuration={3000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">{errorMessage}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}

const mapStateToProps = ({ app }) => ({
  errorMessage: app.errorMessage,
});

const mapDispatchToProps = {
  dispatchSetErrorMessage: setErrorMessage,
  dispatchClearErrorMessage: clearErrorMessage,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(NotificationBar));
