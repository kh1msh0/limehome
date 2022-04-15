import { Text, View, Modal } from "react-native";
import React from "react";

import { ImageSlider, Tags } from "components";

import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./Styles";
import PriceButton from "../PriceButton/PriceButton";

const HotelModal = (props) => {
  const { visible, item, setVisible } = props;

  return (
    <Modal visible={visible}>
      <View style={styles.modal}>
        <View>
        <ImageSlider images={item?.images} onPress={() => setVisible(false)} />

        <View style={styles.viewBox}>
          <Text style={styles.title}>{item?.name}</Text>

          <View style={styles.ratingBox}>
            <Text style={styles.title}>4.5</Text>
            <AntDesign name="star" size={24} color="#B16421" />
          </View>
        </View>

        <View style={styles.locationBox}>
          <EvilIcons name="location" size={25} color="#B16421" />
          <Text style={styles.location}>{item?.location?.addressLine1}</Text>
        </View>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <View style={styles.line} />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={[styles.title, { marginVertical: 10 }]}>
            Room Types available in this location
          </Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Tags />
            <Tags />
            <Tags />
          </View>
        </View>
        </View>
        <PriceButton price={"15€"} />
      </View>
    </Modal>
  );
};

export default HotelModal;
