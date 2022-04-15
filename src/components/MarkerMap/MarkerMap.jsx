import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

import { styles } from "./Styles";

const MarkerMap = (props) => {
  const { onPress, selected, latitude, longitude, item } = props;

  const coordinate = { latitude, longitude };
  return (
    <Marker coordinate={coordinate} style={styles.box}>
      <TouchableOpacity
        style={selected ? styles.selected : styles.grayMarker}
        activeOpacity={0.7}
        onPress={() => onPress(item)}
      >
        <Text style={styles.text}>15€</Text>
      </TouchableOpacity>
      <View style={selected ? styles.arrowSelected : styles.arrow} />
    </Marker>
  );
};

export default MarkerMap;
