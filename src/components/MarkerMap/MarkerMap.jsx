import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

import { styles } from "./Styles";

const MarkerMap = (props) => {
  const { location, onPress, selected, latitude, longitude } = props;

  const coordinate = { latitude: latitude, longitude: longitude };
  return (
    <Marker
      coordinate={coordinate}
      pinColor={"purple"} // any color
      title={"title"}
      description={"description"}
      style={styles.box}
    >
      <View style={styles.grayMarker}>
        <Text style={styles.text}>10€</Text>
      </View>
      <View style={styles.arrow}/>
    </Marker>
  );
};

export default MarkerMap;
