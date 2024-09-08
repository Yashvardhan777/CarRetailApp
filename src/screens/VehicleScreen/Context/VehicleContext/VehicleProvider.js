import React, {useState} from 'react';
import axios from 'axios';
import _debounce from 'lodash/debounce';
import _get from 'lodash/get';

import {VehicleContext} from './VehicleContext';

export const VehicleProvider = ({children}) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllVehicleData = async payload => {
    try {
      setLoading(true);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://e4f1-49-249-54-254.ngrok-free.app/vehicle/search/v2',
        headers: {
          'ngrok-skip-browser-warning': '69420',
        },
        data: payload,
      };

      const response = await axios(config);

      const data = _get(response, 'data', []);

      setVehicles(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const searchVehicle = async searchText => {
    const searchUrl =
      'https://2d56-49-249-54-254.ngrok-free.app/vehicle/search';

    const searchConfig = {
      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
      params: {
        key: searchText,
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(searchUrl, searchConfig);
      const data = _get(response, 'data', []);

      setVehicles(data);
    } catch (e) {
      console.log({e});
    } finally {
      setLoading(false);
    }
  };

  const handeleSearchVehicle = _debounce(searchText => {
    searchVehicle(searchText);
  }, 500);

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        loading,
        handeleSearchVehicle,
        fetchAllVehicleData,
      }}>
      {children}
    </VehicleContext.Provider>
  );
};
