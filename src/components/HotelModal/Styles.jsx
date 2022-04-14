import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  title: {
    color: "#4A4B4D",
    fontWeight: "bold",
    fontSize: 19,
  },
  viewBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    marginTop: 20,
  },
  ratingBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#4A4B4D",
    padding: 5,
    borderRadius: 5,
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  location: {
    color: "#4A4B4D",
    fontWeight: "300",
    fontSize: 14,
  },
  description: {
    color: "#4A4B4D",
    fontWeight: "400",
    fontSize: 17,
    marginHorizontal: 10,
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#4A4B4D",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  modal: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#F7F1E9",
  },
});
