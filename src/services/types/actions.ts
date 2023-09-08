import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {TBooksListData, TErrorState} from './response-data';

export interface IBooksListActions {
  getFirstBooksListSuccess: ActionCreatorWithPayload<{ totalItems: number, items: Array<{ volumeInfo: TBooksListData }> }>,
  updateBooksList: ActionCreatorWithPayload<{ items: Array<{ volumeInfo: TBooksListData }> }>,
  getBooksList: ActionCreatorWithoutPayload<string>,
  getBooksListFailed: ActionCreatorWithPayload<TErrorState>
}

export interface IPaginationActions {
  updatePaginationStartIndex: ActionCreatorWithoutPayload<string>,
  resetPaginationStartIndex: ActionCreatorWithoutPayload<string>,
}

export interface ISearchValueActions {
  setSearchValue: ActionCreatorWithPayload<string>,
  clearSearchValueState: ActionCreatorWithoutPayload<string>,
}

export interface ISearchParametersActions {
  setCategoryValue: ActionCreatorWithPayload<string>,
  setSortValue: ActionCreatorWithPayload<string>,
  clearSearchParametersState: ActionCreatorWithoutPayload<string>,
}

type TBooksListActions = IBooksListActions;
type TPaginationActions = IPaginationActions;
type TSearchValueActions = ISearchValueActions;

export type TApplicationActions =
  TBooksListActions
  | TPaginationActions
  | TSearchValueActions