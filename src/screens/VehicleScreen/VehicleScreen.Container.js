import React from 'react';
import {VehicleProvider} from './Context/VehicleContext/VehicleProvider';
import VehicleScreen from './VehicleScreen';

const VehicleScreenContainer = ({route, navigation}) => {
  return (
    <VehicleProvider>
      <VehicleScreen route={route} navigation={navigation} />
    </VehicleProvider>
  );
};

export default VehicleScreenContainer;
