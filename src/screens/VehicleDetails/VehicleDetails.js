import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';

import _get from 'lodash/get';
import _debounce from 'lodash/debounce';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons';

import IMAGE_360 from './Image360';
import getStyles from './VehicleDetails.Styles';
import {fetchAllDealerships} from './VehicleDetails.helpers';
import {FlatList} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');

const VehicleDetails = ({route}) => {
  const [zipCode, setZipCode] = useState('');
  const [dealerShips, setDealerships] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const vehicle = _get(route, 'params.vehicle', {});

  const styles = getStyles();

  const {description} = vehicle;

  const renderVehicle360View = () => (
    <View style={styles.imageContainer}>
      <Image360Viewer srcset={IMAGE_360} width={width} height={height / 3} />
    </View>
  );

  const renderImpressions = () => (
    <View style={styles.impressionsText}>
      <Text style={styles.impressions}>1000 People viewed this car</Text>
      <FontAwesomeIcon
        icon={faArrowUpRightDots}
        color="#FFF"
        style={styles.icon}
      />
    </View>
  );

  const renderDescription = () =>
    description && <Text style={styles.descriptionText}>{description}</Text>;

  const handleSearch = _debounce(async value => {
    const response = await fetchAllDealerships(value);

    setDealerships(response);
  }, 500);

  const handleZipCodeChange = value => {
    setZipCode(value);
    handleSearch(value);
  };

  const renderZipcodeInput = () => (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        Enter Your ZipCode to check availability:
      </Text>
      <TextInput
        onChangeText={handleZipCodeChange}
        value={zipCode}
        placeholder="Enter ZipCode"
        style={styles.input}
      />
    </View>
  );

  const renderPopUp = () => (
    <View>
      <Modal isVisible={showModal} style={{borderRadius: 10}}>
        <View style={{backgroundColor: 'black', height: 150, padding: 24}}>
          <Text style={{color: 'white', height: 50}}>
            Hi, We have informed the dealership, they will contact you shortly
          </Text>
          <View
            style={{
              height: 45,
              width: 150,
              borderRadius: 10,
              marginTop: 12,
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#00BFA5',
            }}>
            <Button
              onPress={() => setShowModal(false)}
              title="Ok"
              color="white"
            />
          </View>
        </View>
      </Modal>
    </View>
  );

  const renderItem = ({item}) => {
    console.log({item});

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 100,
          borderColor: '#353B43',
          borderWidth: 1,
          backgroundColor: '#282D34',
          borderRadius: 10,
          padding: 12,
          marginBottom: 8,
          width: width - 24,
          alignSelf: 'center',
        }}
        onPress={() => setShowModal(true)}>
        <Text style={{color: '#FFF'}}>{`Name:  ${item?.name}`}</Text>
        <Text style={{color: '#FFF'}}>{`Address: ${item?.address}`}</Text>
        <Text style={{color: '#FFF'}}>{`ZipCode:  ${item?.zipCode}`}</Text>
      </TouchableOpacity>
    );
  };

  const renderDealerships = () => (
    <FlatList data={dealerShips} renderItem={renderItem} style={{flex: 1}} />
  );

  console.log({dealerShips});

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      scrollEnabled
      keyboardShouldPersistTaps="never">
      <View style={styles.topContainer}>
        {renderVehicle360View()}
        {renderImpressions()}
      </View>
      {renderPopUp()}
      <View style={styles.description}>{renderDescription()}</View>
      {renderZipcodeInput()}
      {renderDealerships()}
    </KeyboardAwareScrollView>
  );
};

export default VehicleDetails;
