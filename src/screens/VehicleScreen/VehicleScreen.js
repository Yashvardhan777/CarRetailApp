import React from 'react';
import {View} from 'react-native';

import _get from 'lodash/get';

import VehicleList from './Components/VehicleList';
import VehicleSearch from './Components/VehicleSearch';
import getStyles from './VehicleScreen.Styles';

const VehicleScreen = ({route, navigation}) => {
  const styles = getStyles();

  const payload = _get(route, 'params.vehicleFormValues', {});

  return (
    <View style={styles.container}>
      <VehicleSearch />
      <VehicleList navigation={navigation} payload={payload} />
    </View>
  );
};

export default VehicleScreen;
