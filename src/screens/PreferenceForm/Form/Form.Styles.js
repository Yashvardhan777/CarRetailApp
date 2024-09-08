import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const getStyles = () =>
  StyleSheet.create({
    header: {
      fontSize: 20,
    },
    container: {
      backgroundColor: '#171A1E',
    },
    formContainer: {
      width: width - 16,
      alignSelf: 'center',
    },
    label: {
      marginBottom: 4,
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 15,
    },
    inputContainer: {
      flexDirection: 'column',
      marginVertical: 12,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      fontSize: 16,
      backgroundColor: '#fff',
      alignSelf: 'center',
    },
    button: {
      width: '100%',
      height: 50,
      borderRadius: 8,
      paddingHorizontal: 10,
      fontSize: 16,
      backgroundColor: '#00BFA5',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default getStyles;
