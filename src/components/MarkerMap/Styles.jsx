import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  grayMarker: {
    backgroundColor: "#4A4B4D",
    padding: 12,
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
  selected: {
    backgroundColor: "#B16421",
    padding: 12,
    borderRadius: 10,
  },
  arrowSelected: {
    height: 10,
    marginTop: -5,
    width: 10,
    backgroundColor: "#B16421",
    transform: [{ rotate: "45deg" }],
  },
});
