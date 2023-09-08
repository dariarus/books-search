import {AppDispatch, AppThunk} from '../types';
import {TBooksListData} from '../types/response-data';

import {googleApiKey, googleBooksApiUrl, numberItemsToShow} from '../../utils/constants';

import {getResponseData} from './json-verification';

import {booksListActions} from '../store-slices/books-list';
import {paginationActions} from '../store-slices/pagination';

export const getBooksList = (value: string): AppThunk => {
  return function (dispatch: AppDispatch) {

    dispatch(booksListActions.getBooksList());

    return fetch(`${googleBooksApiUrl}?q=${value}&maxResults=${numberItemsToShow}&key=${googleApiKey}`, {
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

export const getMoreBooks = (value: string, paginationStartIndex: number): AppThunk => {
  return function (dispatch: AppDispatch) {

    dispatch(booksListActions.getBooksList());

    return fetch(
      `${googleBooksApiUrl}?q=${value}&startIndex=${paginationStartIndex}&maxResults=${numberItemsToShow}&key=${googleApiKey}`, {
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

export const getBooksByCategory = (value: string, category: string): AppThunk => {
  return function (dispatch: AppDispatch) {

    dispatch(booksListActions.getBooksList());

    return fetch(`${googleBooksApiUrl}?q=${value}+subject:${category}&maxResults=${numberItemsToShow}&key=${googleApiKey}`, {
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