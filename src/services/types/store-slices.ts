import {TBookData, TBooksListData, TErrorState} from './response-data';
import exp from 'constants';

export interface IBooksListSliceState {
  isLoading: boolean,
  hasError: boolean,
  error: TErrorState,
  totalResults: number,
  booksList: Array<{
    id: string,
    volumeInfo: TBooksListData
  }>
}

export interface IPaginationSliceState {
  paginationStartIndex: number,
}

export interface ISearchValueSliceState {
  searchValue: string,
}

export interface ISearchParametersSliceState {
  categoryValue: string,
  sortValue: string
}

export interface IBookDataSliceState {
  isLoading: boolean,
  hasError: boolean,
  error: TErrorState,
  bookData: TBookData
}