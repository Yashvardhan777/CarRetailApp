import {StyleSheet} from 'react-native';

const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#171A1E',
      flex: 1,
    },
    btnContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      top: 400,
      height: 45,
      width: 150,
      backgroundColor: '#00BFA5',
      borderRadius: 10,
    },
  });

export default getStyles;
