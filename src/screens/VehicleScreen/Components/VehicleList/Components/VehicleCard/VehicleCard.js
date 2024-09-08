import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';

import {getStyles} from './VehicleCard.Styles';

const VehicleCard = ({vehicle, navigation}) => {
  const styles = getStyles();
  const {year, make, model, images, price, type, description} = vehicle;

  const onPress = () => {
    navigation.navigate('Vehicle Details', {vehicle});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cardContainer}>
        <Image
          source={{uri: images[0], width: 125, height: 125}}
          style={styles.image}
        />
        <View style={styles.cardDetails}>
          <Text
            style={[
              styles.title,
              styles.textColor,
            ]}>{`${year} ${make} ${model}`}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.description, styles.textColor]}>
            {`Price: $ ${price}`}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.description, styles.textColor]}>
            Type: {type}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.description, styles.textColor]}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleCard;
