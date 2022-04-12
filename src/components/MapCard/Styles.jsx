import {StyleSheet, Dimensions, Platform} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 20, 
      flexDirection:"row",
      backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
      bottom: 5,
    },
  });