import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import React, { useEffect, useState } from "react";

import { MapCard, Marker } from "components";

import { styles } from "./Styles.jsx";
import { getProperties } from "data/Api.jsx";

import { CORDINATES } from "utiles/defaultCordinates";

const MapScreen = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);

  //getData on First mount
  useEffect(() => {
    getProperties(setData);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={CORDINATES}>
        {data?.map((item) => (
          <Marker
            longitude={item?.location?.lng}
            latitude={item?.location?.lat}
            onPress={setSelected} //setsSelected an item which will be pressed
            item={item}
            selected={selected?.id === item?.id} //check which item is pressed
            key={item?.id}
          />
        ))}
      </MapView>
      {selected && (
        <MapCard
          title={selected?.name}
          images={selected?.images}
          priceFrom={"55€/Night"}
          location={selected?.location?.addressLine1}
          rating={"4.5"}
        />
      )}
    </View>
  );
};

export default MapScreen;
