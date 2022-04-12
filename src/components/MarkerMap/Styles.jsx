import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  grayMarker: {
    backgroundColor: "#4A4B4D",
    padding: 15,
    borderRadius: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  arrow: {
    height: 10,
    marginTop: -5,
    width: 10,
    backgroundColor: "#4A4B4D",
    transform: [{ rotate: "45deg" }],
  },
  box: {
    alignItems: "center",
  },
});
