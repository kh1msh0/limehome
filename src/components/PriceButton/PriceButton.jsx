import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./Styles";

const PriceButton = (props) => {
  const { price } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.from}>
        From <Text style={styles.price}>{price}/Night</Text>
      </Text>
      <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
        <Text style={styles.explore}>EXPLORE </Text>
        <AntDesign name="arrowright" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default PriceButton;
