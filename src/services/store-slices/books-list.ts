import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IBooksListSliceState} from '../types/store-slices';
import {TBooksListData, TErrorState} from '../types/response-data';
import {IBooksListActions} from '../types/actions';

export const booksListSlice = createSlice({
  name: 'booksList',
  initialState: {
    isLoading: false,
    hasError: false,
    error: {},
    totalResults: 0,
    booksList: []
  } as IBooksListSliceState,
  reducers: {
    getFirstBooksListSuccess: (state, action: PayloadAction<{
      totalItems: number,
      items: Array<{ volumeInfo: TBooksListData }>
    }>) => {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        totalResults: action.payload.totalItems,
        booksList: action.payload.items
      }
    },
    updateBooksList: (state, action: PayloadAction<{
      items: Array<{ volumeInfo: TBooksListData }>
    }>) => {
      return {
        ...state,
        booksList: [...state.booksList, ...action.payload.items] // объединение имеющихся данных и новых
      }
    },
    getBooksList: (state) => {
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    },
    getBooksListFailed: (state, action: PayloadAction<TErrorState>) => {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload
      }
    }
  }
})

export default booksListSlice.reducer

const {
  getFirstBooksListSuccess,
  updateBooksList,
  getBooksList,
  getBooksListFailed
} = booksListSlice.actions

export const booksListActions: IBooksListActions = {
  getFirstBooksListSuccess: getFirstBooksListSuccess,
  updateBooksList: updateBooksList,
  getBooksList: getBooksList,
  getBooksListFailed: getBooksListFailed
}