import {combineReducers} from '@reduxjs/toolkit';

import {booksListSlice} from './books-list';
import {paginationSlice} from './pagination';
import {searchDataSlice} from './search-data';
import {bookDataSlice} from './book-data';

export const rootReducer = combineReducers({
    booksListState: booksListSlice.reducer,
    paginationState: paginationSlice.reducer,
    searchDataState: searchDataSlice.reducer,
    bookDataState: bookDataSlice.reducer,
  }
)