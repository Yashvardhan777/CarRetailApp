import {StyleSheet} from 'react-native';

export const getStyles = () =>
  StyleSheet.create({
    container: {
      height: 150,
      borderColor: '#353B43',
      borderWidth: 1,
      backgroundColor: '#282D34',
      borderRadius: 10,
      marginBottom: 4,
    },
    cardContainer: {
      flexDirection: 'row',
      marginHorizontal: 12,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 12,
    },
    cardDetails: {
      alignSelf: 'flex-start',
      flex: 1,
      marginLeft: 12,
      flexDirection: 'column',
      maxWidth: 500,
    },
    textColor: {
      color: '#FFF',
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 2,
    },
    description: {
      fontSize: 15,
      marginBottom: 2,
    },
    image: {
      borderColor: '#FFF',
      borderWidth: 1,
    },
  });
