import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF2aWRtMjQwNSIsImEiOiJjbDh1aXlpeTEwNGR6M3FwazVxMnQ0aWZ6In0.F590aJ4ztzGjREG9ypUnig";

export default function MapBox({ coordValues }) {
  const { latitude, longitude, zoom } = coordValues;
  return (
    <Map
      initialViewState={{
        latitude: latitude,
        longitude: longitude,
        zoom: zoom || 15,
      }}
      style={{ width: "100%", height: "47.5rem", borderRadius: "1rem" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
