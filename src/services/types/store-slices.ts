import {TBooksListData, TErrorState} from './response-data';
import {paginationInitialStartIndex} from '../../utils/constants';

export interface IBooksListSliceState {
  isLoading: boolean,
  hasError: boolean,
  error: TErrorState,
  totalResults: number,
  booksList: Array<{volumeInfo: TBooksListData}>
}

export interface IPagination {
  paginationStartIndex: number,
}

export interface ISearchValue {
  searchValue: string,
}