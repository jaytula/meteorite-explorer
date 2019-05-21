import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MapDialog from "./MapDialog";

const commonStyles = {
  "&:hover": {
    outline: "1px solid #aaa",
  },
  display: "none",
  cursor: "pointer",
};

const styles = theme => ({
  mediumUp: {
    ...commonStyles,

    [theme.breakpoints.up("md")]: {
      display: "grid",
      padding: "4px 0px",
      "& > div": {
        padding: "4px 8px",
      },
      borderBottom: "1px solid #dddddd",

      gridTemplateColumns: "2fr repeat(8, 1fr)",
    },
  },
  belowMedium: {
    ...commonStyles,
    [theme.breakpoints.between("xs", "sm")]: {
      display: "inherit",
      borderBottom: "1px solid #dddddd",
      padding: "8px",
      "& > header": {
        fontWeight: "bold",
        display: "flex",
        padding: "8px 4px",
        fontSize: "1.25rem",
        justifyContent: "space-between",
      },
      "& > div": {
        display: "flex",
        padding: "4px",
        justifyContent: "space-between",
      },
    },
  },
});

function Meteorite({ data, classes }) {
  const [open, setOpen] = useState(false);
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
    <>
      <div className={classes.mediumUp} onClick={() => setOpen(true)}>
        <div>
          <b>{name}</b>
        </div>
        <div>{id}</div>
        <div className={classes.medium}>{nametype}</div>
        <div>{recclass}</div>
        <div>{Math.round(mass) || "N/A"}</div>
        <div>{fall}</div>
        <div>{new Date(year).getFullYear() || "N/A"}</div>
        <div>{reclat}</div>
        <div>{reclong}</div>
      </div>
      <MapDialog data={data} open={open} setOpen={setOpen} />
      <div className={classes.belowMedium} onClick={() => setOpen(true)}>
        <header>
          <div>
            {name} ({new Date(year).getFullYear() || "Unknown Year"})
          </div>
          <div>{id}</div>
        </header>
        <div>
          <div>Name Type</div>
          <div>{nametype}</div>
        </div>
        <div>
          <div>Rec Class</div>
          <div>{recclass}</div>
        </div>
        <div>
          <div>Mass (g)</div>
          <div>{Math.round(mass) || "N/A"}</div>
        </div>
        <div>
          <div>Fall</div>
          <div>{fall}</div>
        </div>
        <div>
          <div>Lat, Long</div>
          <div>
            {reclat}, {reclong}
          </div>
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Meteorite);
