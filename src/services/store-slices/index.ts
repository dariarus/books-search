import {combineReducers} from '@reduxjs/toolkit';
import {booksListSlice} from './books-list';

export const rootReducer = combineReducers({
    booksListState: booksListSlice.reducer,
  }
)