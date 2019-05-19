import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import BasicMap from "./BasicMap";

const styles = {
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  dialog: {},
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function MapDialog({ data, classes, open, setOpen }) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { id, name } = data;

  return (
    <div>
      {false && (
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open full-screen dialog
        </Button>
      )}
      <Dialog
        className={classes.dialog}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {id} {name}
            </Typography>
          </Toolbar>
        </AppBar>
        <BasicMap />
      </Dialog>
    </div>
  );
}

MapDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapDialog);
