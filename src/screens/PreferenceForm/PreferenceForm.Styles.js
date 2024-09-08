import {StyleSheet} from 'react-native';

const button = {
  height: 45,
  width: 150,
  borderRadius: 10,
  marginTop: 12,
  alignItems: 'center',
  justifyContent: 'center',
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#171A1E',
      flex: 1,
    },
    header: {
      color: '#FFFFFF',
      fontSize: 15,
    },
    button1: {
      ...button,
      backgroundColor: '#00BFA5',
    },
    button2: {
      ...button,
      backgroundColor: '#353B43',
      marginLeft: 36,
    },
    images: {
      marginTop: 200,
    },
    options: {
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'row',
      alignSelf: 'center',
      top: 200,
    },
  });

export default getStyles;
