import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import _get from 'lodash/get';

import getStyles from './Form.Styles';

const Form = ({navigation, route}) => {
  const styles = getStyles();
  const [vehicleFormValues, setVehicleFormValues] = useState({
    make: [],
    year: null,
    model: [],
    priceRangeLower: null,
    priceRangeHigher: null,
    type: null,
  });

  const customerAnswer = _get(route, 'params.customerAnswer', false);

  const handleValueUpdate = (path, value) => {
    const shouldBeArray = path === 'make' || path === 'model';
    setVehicleFormValues(prevValues => ({
      ...prevValues,
      [path]: shouldBeArray ? [value] : value,
    }));
  };

  const onValueUpdate = (path, value) => {
    handleValueUpdate(path, value);
  };

  const onPress = () => {
    navigation.pop();
    navigation.navigate('Vehicle Screen', {
      vehicleFormValues,
    });
  };

  const renderYear = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Year of Manufacture</Text>
      <TextInput
        onChangeText={val => onValueUpdate('year', val)}
        value={vehicleFormValues?.year}
        placeholder="Enter Year"
        style={styles.input}
        keyboardType="number-pad"
      />
    </View>
  );

  const renderMake = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Company </Text>
      <TextInput
        onChangeText={val => onValueUpdate('make', val)}
        value={vehicleFormValues?.make}
        placeholder="Enter Make"
        style={styles.input}
      />
    </View>
  );

  const renderModel = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Model </Text>
      <TextInput
        onChangeText={val => onValueUpdate('model', val)}
        value={vehicleFormValues?.model}
        placeholder="Enter Model"
        style={styles.input}
      />
    </View>
  );

  const renderType = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Type </Text>
      <TextInput
        onChangeText={val => onValueUpdate('type', val)}
        value={vehicleFormValues?.type}
        placeholder="Enter Type"
        style={styles.input}
      />
    </View>
  );

  const renderMinPrice = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Min Price </Text>
      <TextInput
        onChangeText={val => onValueUpdate('priceRangeLower', val)}
        value={vehicleFormValues?.priceRangeLower}
        placeholder="Enter Lower Price Range"
        style={styles.input}
        keyboardType="number-pad"
      />
    </View>
  );

  const renderMaxPrice = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Max Price </Text>
      <TextInput
        onChangeText={val => onValueUpdate('priceRangeHigher', val)}
        value={vehicleFormValues?.priceRangeHigher}
        placeholder="Enter Highest Price Range"
        style={styles.input}
        keyboardType="number-pad"
      />
    </View>
  );

  const renderIsCustomerSure = () => (
    <>
      {renderMake()}
      {renderModel()}
      {renderYear()}
    </>
  );

  const renderIsCustomerUnsure = () => (
    <>
      {renderType()}
      {renderMinPrice()}
      {renderMaxPrice()}
      {renderMake()}
    </>
  );

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="never"
      scrollEnabled={false}>
      <View style={styles.formContainer}>
        {customerAnswer ? renderIsCustomerSure() : renderIsCustomerUnsure()}

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Button title="Submit" onPress={onPress} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Form;
