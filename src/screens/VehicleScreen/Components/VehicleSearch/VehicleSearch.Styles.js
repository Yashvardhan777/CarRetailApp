import {StyleSheet} from 'react-native';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
      marginHorizontal: 4,
      paddingHorizontal: 24,
      backgroundColor: '#282D34',
      borderRadius: 25,
    },
    textInput: {
      color: '#FFF',
    },
  });
