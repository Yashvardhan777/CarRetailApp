import React from 'react';
import {Button, View, LogBox, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import getStyles from './PreferenceForm.Styles';

const DATA = [
  require('./assets/image1.jpg'),
  require('./assets/image2.jpg'),
  require('./assets/image3.jpg'),
  require('./assets/image4.jpg'),
  require('./assets/image5.jpg'),
];

const PreferenceForm = ({navigation}) => {
  const styles = getStyles();
  const onPress = customerAnswer => {
    navigation.navigate('Vehicle Details Form', {customerAnswer});
  };

  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <SliderBox
        images={DATA}
        autoplay
        circleLoop
        autoplayInterval={5000}
        ImageComponentStyle={styles.images}
      />
      <View style={styles.options}>
        <TouchableOpacity style={styles.button1} onPress={() => onPress(true)}>
          <Button title="Yes" onPress={() => onPress(true)} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => onPress(false)}>
          <Button title="No" onPress={() => onPress(false)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferenceForm;
