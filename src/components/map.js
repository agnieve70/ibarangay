import React, { useEffect, useRef, useState } from "react";

import { mapbox_key } from "../constants/mapbox-key";
import mapboxgl from "!mapbox-gl"; /* eslint import/no-webpack-loader-syntax: off */

mapboxgl.accessToken = mapbox_key;

function populateMarkers(map, geojson ,isClickable) {
  for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement("div");
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = "marker";

    el.style.backgroundImage = `url(/${marker.properties.type}.png)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = "100%";

    if (marker.onClick && isClickable) {
      el.addEventListener("click", marker.onClick);
    }

    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map.current);
  }
}

function MapContent(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { geojson, isClickable } = props;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [125.353126, 6.747468],
      zoom: 14,
    });

    if(geojson){
      populateMarkers(map, geojson, isClickable);
    }

  }, []);

  return (
    <div className="container-fluid">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MapContent;
