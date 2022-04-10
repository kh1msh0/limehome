import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  tabWrapper: {
      flexDirection: 'row',
      justifyContent:'space-around',
      paddingVertical: 15,
      backgroundColor:'#4C6547',
      borderRadius:14,
      borderColor:'#4C6547',
  },
  tabIconContainer: {
      alignItems:'center',
      justifyContent:'flex-end',
     // padding: 5,
      borderRadius: 5,
      width: 60,
      height: 50
  },
  labelStyle: {
      color:'#FFFFFF',
      marginTop: 5
  },
  focusedBox: {
      backgroundColor:'#5A7052',
      alignItems:'center',
      justifyContent:'flex-end',
     // padding: 5,
      borderRadius: 5,
      width: 60,
      height: 50
  }
});