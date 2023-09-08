import {TBooksListData, TErrorState} from './response-data';

export interface IBooksListSliceState {
  isLoading: boolean,
  hasError: boolean,
  error: TErrorState,
  totalResults: number,
  booksList: ReadonlyArray<{volumeInfo: TBooksListData}>
}