import axios from 'axios';
import { GET_IMAGES_DATA } from '../types';

export default async () => {
  const url = `${window.apiHost}/images`;
  const axiosPromise = await axios.get(url)
    .catch((error) => {
      alert(error);
    });
  return {
    type: GET_IMAGES_DATA,
    payload: axiosPromise.data,
  };
};
