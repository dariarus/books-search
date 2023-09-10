import {combineReducers} from '@reduxjs/toolkit';

import {booksListSlice} from './books-list';
import {paginationSlice} from './pagination';
import {searchValueSlice} from './search-value';
import {searchParametersSlice} from './search-parameters';
import {bookDataSlice} from './book-data';

export const rootReducer = combineReducers({
    booksListState: booksListSlice.reducer,
    paginationState: paginationSlice.reducer,
    searchValueState: searchValueSlice.reducer,
    searchParametersState: searchParametersSlice.reducer,
    bookDataState: bookDataSlice.reducer,
  }
)