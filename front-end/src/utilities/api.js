import axios from 'axios';

export const testDb = async () => {
  const url = `${window.apiHost}/test`;
  const axiosPromise = await axios.get(url)
    .catch((error) => {
      alert(error);
    });
  console.log(axiosPromise.data);
  return axiosPromise.data;
}