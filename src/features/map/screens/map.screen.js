import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";

import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <>
      <Search />
      <MapView
        region={{
          latitude: lat,
          longitude: lng,
          //deltas are used to calculate appropriate zoom distance
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
        style={{ height: "100%", width: "100%" }}
      >
        {restaurants.map((restaurant) => {
          return null;
        })}
      </MapView>
    </>
  );
};
