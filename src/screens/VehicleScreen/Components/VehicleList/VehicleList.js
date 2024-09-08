/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import {VehicleContext} from '../../Context/VehicleContext';
import VehicleCard from './Components/VehicleCard';
import getStyles from './VehicleList.Styles';

const VehicleList = ({navigation, payload}) => {
  const styles = getStyles();
  const {vehicles, loading, fetchAllVehicleData} = useContext(VehicleContext);

  useEffect(() => {
    fetchAllVehicleData(payload);
  }, [payload]);

  const renderItem = ({item}) => (
    <VehicleCard vehicle={item} navigation={navigation} />
  );

  const renderEmptyChat = () =>
    loading && (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={vehicles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={renderEmptyChat()}
      />
    </View>
  );
};

export default VehicleList;
