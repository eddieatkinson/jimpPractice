import { GET_TEST_DATA, GET_IMAGES_DATA } from '../types';

const INITIAL_STATE = {
  testData: [],
  images: [],
};

export default (state = INITIAL_STATE, action) => {
  console.log('Hey');
  switch (action.type) {
    case GET_TEST_DATA:
      return { ...state, testData: action.payload };
    case GET_IMAGES_DATA:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};
