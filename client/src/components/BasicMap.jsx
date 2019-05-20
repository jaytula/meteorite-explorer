import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";

const wrapperStyles = {
  display: "flex",
  height: "100%",
  width: "100%",
  margin: "0 auto",
};

function BasicMap({ data }) {
  const { reclat, reclong } = data;
  return (
    <div style={wrapperStyles}>
      <ComposableMap
        projectionConfig={{
          scale: 205,
          rotation: [-11, 0, 0],
        }}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies geography="/static/world-50m.json">
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#ECEFF1",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#607D8B",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
                  ),
              )
            }
          </Geographies>
          <Markers>
            <Marker
              marker={{ coordinates: [reclong, reclat] }}
              style={{
                default: { fill: "#FF5722" },
                hover: { fill: "#FFFFFF" },
                pressed: { fill: "#FF5722" },
              }}
            >
              <circle
                cx={0}
                cy={0}
                r={5}
                style={{
                  stroke: "#FF5722",
                  strokeWidth: 3,
                  opacity: 0.9,
                }}
              />
            </Marker>
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default BasicMap;
