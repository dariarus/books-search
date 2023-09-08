import {TBooksListData, TErrorState} from './response-data';
import exp from 'constants';

export interface IBooksListSliceState {
  isLoading: boolean,
  hasError: boolean,
  error: TErrorState,
  totalResults: number,
  booksList: Array<{volumeInfo: TBooksListData}>
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