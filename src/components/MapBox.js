// import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import LoadingWave from "./LoadingWave";

export default function MapBox({ coordValues }) {
  const [loading, setLoading] = useState(true);
  const { latitude, longitude, zoom } = coordValues;

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      setLoading(false);
    }
  }, [latitude, longitude]);

  return (
    <>
      {loading ? (
        <LoadingWave />
      ) : (
        <Map
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          // mapboxAccessToken="pk.eyJ1IjoiZGF2aWRtMjQwNSIsImEiOiJjbDh1aXlpeTEwNGR6M3FwazVxMnQ0aWZ6In0.F590aJ4ztzGjREG9ypUnig"
          initialViewState={{
            latitude,
            longitude,
            zoom: zoom || 10,
          }}
          style={{ width: "100%", height: "47.5rem", borderRadius: "1rem" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      )}
    </>
  );
}
