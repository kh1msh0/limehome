import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React, { useEffect, useState } from "react";

import { MapCard, Marker } from "components";

import { styles } from "./Styles.jsx";
import { getProperties } from "data/Api.jsx";

import { CORDINATES } from "utiles/defaultCordinates";

const MapScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProperties(setData);
  }, []);

  console.log(CORDINATES);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={CORDINATES}>
        <Marker
          longitude={data?.location?.lng}
          latitude={data?.location?.lat}
        />
      </MapView>
      <MapCard title={"asd"} />
      {/* <View style={styles.searchBox}><Text>asd</Text></View> */}
    </View>
  );
};

export default MapScreen;
