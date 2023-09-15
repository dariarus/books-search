import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IBookDataSliceState} from '../types/store-slices';
import {TBookData, TErrorState} from '../types/response-data';
import {IBookDataActions} from '../types/actions';

export const bookDataSlice = createSlice({
  name: 'bookData',
  initialState: {
    isLoading: false,
    hasError: false,
    error: {},
    bookData: {}
  } as IBookDataSliceState,
  reducers: {
    getBookDataSuccess: (state, action: PayloadAction<TBookData>) => {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        bookData: action.payload
      }
    },
    getBookData: (state) => {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    },
    getBookDataFailed: (state, action: PayloadAction<TErrorState>) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      }
    }
  }
})

export default bookDataSlice.reducer

const {
  getBookDataSuccess,
  getBookData,
  getBookDataFailed
} = bookDataSlice.actions

export const bookDataActions: IBookDataActions = {
  getBookDataSuccess: getBookDataSuccess,
  getBookData: getBookData,
  getBookDataFailed: getBookDataFailed
}