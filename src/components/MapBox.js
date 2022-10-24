// import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import Map, { Marker } from "react-map-gl";
import {IoIosPin} from "react-icons/io";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import LoadingWave from "./LoadingWave";
import { colors } from "../styles";

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
          initialViewState={{
            latitude,
            longitude,
            zoom: zoom || 15,
          }}
          style={{ width: "100%", height: "47.5rem", borderRadius: "1rem" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker longitude={longitude} latitude={latitude} anchor="bottom">
            <IoIosPin size="2rem" color={`${colors.primary[400]}`}/>
          </Marker>
        </Map>
      )}
    </>
  );
}
