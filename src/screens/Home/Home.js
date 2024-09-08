import React from 'react';
import {View, Button, TouchableOpacity} from 'react-native';

import getStyles from './Home.Styles';

const Home = ({navigation}) => {
  const styles = getStyles();
  const onPress = () => {
    navigation.navigate('Vehicle Preference Form');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
        <Button title="Let's Go >" onPress={onPress} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
