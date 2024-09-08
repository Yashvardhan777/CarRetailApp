import React, {useContext, useState} from 'react';

import {View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {getStyles} from './VehicleSearch.Styles';
import {VehicleContext} from '../../Context/VehicleContext';

const VehicleSearch = () => {
  const [searchText, setSearchText] = useState('');
  const styles = getStyles();

  const {handeleSearchVehicle} = useContext(VehicleContext);

  const handleSearchTextChange = value => {
    setSearchText(value);
    handeleSearchVehicle(value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Vehicle"
        placeholderTextColor="#FFF"
        value={searchText}
        style={styles.textInput}
        onChangeText={handleSearchTextChange}
      />
      <FontAwesomeIcon icon={faSearch} color="#FFF" />
    </View>
  );
};

export default VehicleSearch;
