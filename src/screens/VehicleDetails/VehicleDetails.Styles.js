import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

const getStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#171A1E',
      flex: 1,
    },
    topContainer: {
      alignSelf: 'center',
      borderBottomColor: '#FFF',
      borderBottomWidth: 1,
      paddingBottom: 8,
      width,
    },
    imageContainer: {
      width: width - 12,
    },
    impressions: {
      color: '#FFF',
      fontSize: 20,
      paddingVertical: 4,
    },
    impressionsText: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#FFF',
      borderRadius: 8,
      marginTop: 8,
      width: width - 24,
      alignSelf: 'center',
    },
    icon: {
      marginLeft: 8,
    },
    description: {
      borderBottomColor: '#FFF',
      borderBottomWidth: 1,
    },
    descriptionText: {
      color: '#FFF',
      width: width - 16,
      alignSelf: 'center',
      fontSize: 15,
      marginVertical: 16,
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
      width: width - 16,
      alignSelf: 'center',
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
  });

export default getStyles;
