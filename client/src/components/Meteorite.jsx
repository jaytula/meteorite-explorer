import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "2fr repeat(8, 1fr)",
    padding: "4px 0px",
    "& > div": {
      padding: "4px",
    },
  },
};
function Meteorite({ data, classes }) {
  const {
    name,
    id,
    nametype,
    recclass,
    mass,
    fall,
    year,
    reclat,
    reclong,
  } = data;
  return (
    <div className={classes.root}>
      <div>{name}</div> <div>{id}</div>
      <div>{nametype}</div>
      <div>{recclass}</div>
      <div>{Math.round(mass) || "N/A"}</div>
      <div>{fall}</div>
      <div>{new Date(year).getFullYear() || "N/A"}</div>
      <div>{reclat}</div>
      <div>{reclong}</div>
    </div>
  );
}

export default withStyles(styles)(Meteorite);
