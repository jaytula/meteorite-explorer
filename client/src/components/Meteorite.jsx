import React from "react";

const RowHeader = (
  <div>
    <li>Name</li>
    <li>Id</li>
    <li>Name Type</li>
    <li>Rec Class</li>
    <li>Mass</li>
    <li>Fall</li>
    <li>Year</li>
    <li>Lat</li>
    <li>Long</li>
  </div>
);

function Meteorite({ data }) {
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
    <div>
      <li>{name}</li> <li>{id}</li>
      <li>{nametype}</li>
      <li>{recclass}</li>
      <li>{mass}</li>
      <li>{fall}</li>
      <li>{year}</li>
      <li>{reclat}</li>
      <li>{reclong}</li>
    </div>
  );
}

export default Meteorite;
