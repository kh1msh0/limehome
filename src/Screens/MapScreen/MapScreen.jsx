import { View } from "react-native";
import MapView from "react-native-maps";
import React, { useEffect, useState } from "react";

import { MapCard, Marker, HotelModal } from "components";
import { COORDINATES } from "utiles/defaultCoordinates";
import { getProperties } from "data/Api.jsx";

import { styles } from "./Styles.jsx";

const MapScreen = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //getData on First mount
  useEffect(() => {
    getProperties(setData);
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={COORDINATES}>
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
          onPress={() => setModalVisible(!modalVisible)}
        />
      )}
      <HotelModal visible={modalVisible} item={selected} setVisible={setModalVisible}/>
    </View>
  );
};

export default MapScreen;
