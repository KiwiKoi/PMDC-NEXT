require("dotenv").config();
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Search from "./Search";

const apiKey = "AIzaSyAS2NpVDZWPbvMQ1apzeRAjIk9qnSUIHO8";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 50.62925,
  lng: 3.057256,
};

function MyMap(props) {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Search />
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMap;
