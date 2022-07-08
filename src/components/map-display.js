import React from 'react'
import MapContent from './map';

function MapDisplay(props) {

  const geojson = {
    type: "FeatureCollection",
    features: props.concerns.map(con => {
      return {
        type: "Feature",
        properties: {
          message: "fafafa",
          type: con.type,
          iconSize: [30, 45],
        },
        geometry: {
          type: "Point",
          coordinates: [con.lng, con.lat],
        },
        onClick: () => {
         alert("clicked");
        },
      };
    }),
    
  };

  return <MapContent geojson={geojson} isClickable={true} />;
}

export default MapDisplay