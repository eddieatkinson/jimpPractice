import { GET_TEST_DATA } from '../types';
import axios from 'axios';

export default async () => {
  const url = `${window.apiHost}/test`;
  const axiosPromise = await axios.get(url)
    .catch((error)=> {
      alert(error);
    });
  return {
    type: GET_TEST_DATA,
    payload: axiosPromise.data,
  }
}
