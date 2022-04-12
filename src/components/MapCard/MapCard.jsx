import { Text, View, ImageBackground } from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./Styles";

const MapCard = (props) => {
  const { title, images, location, rating, priceFrom } = props;

  return (
    <View style={styles.searchBox}>
      <ImageBackground source={{ uri: images[0]?.url }} style={styles.image}>
        <View style={styles.imageWrapper}>
          <Text style={styles.rating}>{rating} </Text>
          <AntDesign name="star" size={24} color="#B16421" />
        </View>
      </ImageBackground>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.locationWrapper}>
          <EvilIcons name="location" size={30} color="#B16421" />
          <Text style={styles.location}>{location}</Text>
        </View>

        <View style={styles.line} />
        <Text style={styles.price}>
          From <Text style={styles.priceHighlighted}>{priceFrom}</Text>
        </Text>
      </View>
    </View>
  );
};

export default MapCard;
