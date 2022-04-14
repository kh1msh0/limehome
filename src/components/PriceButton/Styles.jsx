import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#C9CBAA",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  from: {
    color: "#4A4B4D",
    fontWeight: "400",
    fontSize: 18,
  },
  price: {
    color: "#B16421",
  },
  btn: {
    backgroundColor: "#4C6447",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  explore: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
});
