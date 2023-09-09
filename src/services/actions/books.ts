import {AppDispatch, AppThunk} from '../types';
import {TBooksListData} from '../types/response-data';

import {googleApiKey, googleBooksApiUrl, numberItemsToShow} from '../../utils/constants';

import {getResponseData} from './json-verification';

import {booksListActions} from '../store-slices/books-list';
import {paginationActions} from '../store-slices/pagination';

export const getBooksListBySearchParameters = (value: string, category: string, sortBy: string): AppThunk => {
  return function (dispatch: AppDispatch) {

    dispatch(booksListActions.getBooksList());

    return fetch(`${googleBooksApiUrl}?q=${value}${category !== ''
      ? '+subject:' + category
      : ''}&orderBy=${sortBy}&maxResults=${numberItemsToShow}&key=${googleApiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => getResponseData<{ totalItems: number, items: Array<{ volumeInfo: TBooksListData }> }>(res))
      .then((res) => {
        dispatch(booksListActions.getFirstBooksListSuccess({totalItems: res.totalItems, items: res.items}));
        dispatch(paginationActions.resetPaginationStartIndex());
      })
      .then((res) => {
        dispatch(paginationActions.updatePaginationStartIndex());
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(booksListActions.getBooksListFailed({message: err.message}));
      })
  }
}

export const getMoreBooks = (value: string, category: string, sortBy: string, paginationStartIndex: number): AppThunk => {
  return function (dispatch: AppDispatch) {

    dispatch(booksListActions.getBooksList());

    return fetch(
      `${googleBooksApiUrl}?q=${value}${category !== ''
        ? '+subject:' + category
        : ''}&orderBy=${sortBy}&startIndex=${paginationStartIndex}&maxResults=${numberItemsToShow}&key=${googleApiKey}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => getResponseData<{ items: Array<{ volumeInfo: TBooksListData }> }>(res))
      .then((res) => {
        dispatch(booksListActions.updateBooksList({items: res.items}))
      })
      .then((res) => {
        dispatch(paginationActions.updatePaginationStartIndex());
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(booksListActions.getBooksListFailed({message: err.message}));
      })
  }
}