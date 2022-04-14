import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  box: {
    width: 10,
    height: 10,
    backgroundColor: "#F7F1E9",
    borderRadius: 100,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  activeDot: {
    backgroundColor: '#4A4B4D',
    height: 7,
    width: 7,
    borderRadius: 100,
  },
});
