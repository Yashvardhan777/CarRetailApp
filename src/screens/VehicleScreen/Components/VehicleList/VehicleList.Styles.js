import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('screen');

const getStyles = () =>
  StyleSheet.create({
    indicator: {
      flexGrow: 1,
      height: height - 275,
      justifyContent: 'center',
    },
    listContainer: {
      marginBottom: 150,
    },
  });

export default getStyles;
