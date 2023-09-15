import {configureStore} from '@reduxjs/toolkit';

import {rootReducer as reducer} from './store-slices';

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})