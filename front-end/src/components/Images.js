import React from 'react';
import { testDb } from '../utilities/api';

export default () => {
  testDb();
  return (
    <div className='images-container' >
      Hey
    </div>
  )
}
