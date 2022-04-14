import { View } from "react-native";
import React from "react";

import { styles } from "./Styles";

const PaginationDot = (props) => {
  const { isSelected } = props;
  return (
    <View style={styles.box}>
      <View style={isSelected && styles.activeDot} />
    </View>
  );
};

export default PaginationDot;

