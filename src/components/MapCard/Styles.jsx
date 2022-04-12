import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#F7F1E9",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    bottom: 5,
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#4A4B4D",
  },
  contentWrapper: {
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
  },
  locationWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  location: {
    fontSize: 16,
    color: "#4A4B4D",
    fontWeight: "300",
  },
  line: {
    backgroundColor: "#4A4B4D",
    height: 1,
    marginRight: 10,
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: "#4A4B4D",
    fontWeight: "300",
  },
  priceHighlighted: {
    fontSize: 16,
    color: "#B16421",
    fontWeight: "500",
  },
  imageWrapper: {
    backgroundColor: "#F7F1E9",
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    padding: 3,
    borderRadius: 5,
    margin: 10
  },
  rating: {
    fontSize: 15,
    color: "#4A4B4D",
    fontWeight: "400",
  }
});
