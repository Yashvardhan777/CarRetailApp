import axios from 'axios';
import _get from 'lodash/get';
export const fetchAllDealerships = async pincode => {
  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://e4f1-49-249-54-254.ngrok-free.app/dealer-info/nearest-dealer',
      headers: {
        'ngrok-skip-browser-warning': '69420',
      },
      params: {
        pincode: pincode,
      },
    };

    const response = await axios(config);

    const data = _get(response, 'data', []);

    return data;
  } catch (e) {
    console.log(e);
  } finally {
  }
};
