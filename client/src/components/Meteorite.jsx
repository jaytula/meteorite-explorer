import React from "react";
import { withStyles } from "@material-ui/core/styles";

/*
const RowHeader = (

);
*/

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "2fr repeat(8, 1fr)",
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
      <div>{mass}</div>
      <div>{fall}</div>
      <div>{new Date(year).getFullYear() || "N/A"}</div>
      <div>{reclat}</div>
      <div>{reclong}</div>
    </div>
  );
}

export default withStyles(styles)(Meteorite);
