import { GET_TEST_DATA } from '../types';

const INITIAL_STATE = {
  testData: [],
}

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_TEST_DATA:
      return {...state, testData: action.payload}
    default:
      return state;
  }
}
