import {combineReducers} from '@reduxjs/toolkit';

import {booksListSlice} from './books-list';
import {paginationSlice} from './pagination';
import {searchValueSlice} from './search-value';
import {searchParametersSlice} from './search-parameters';

export const rootReducer = combineReducers({
    booksListState: booksListSlice.reducer,
    paginationState: paginationSlice.reducer,
    searchValueState: searchValueSlice.reducer,
    searchParametersState: searchParametersSlice.reducer,
  }
)