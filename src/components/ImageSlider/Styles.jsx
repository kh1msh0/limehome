import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.8;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
    // alignItems: "center",
    justifyContent: "space-between",
  },
  bubbleWrapper: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  closeWrapper: {
    backgroundColor: "#F7F1E9",
    borderRadius: 5,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 30,
    marginLeft: 20
  },
});
