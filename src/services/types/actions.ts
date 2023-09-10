import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {TBookData, TBooksListData, TErrorState} from './response-data';

export interface IBooksListActions {
  getFirstBooksListSuccess: ActionCreatorWithPayload<{ totalItems: number, items: Array<{ id: string, volumeInfo: TBooksListData }> }>,
  updateBooksList: ActionCreatorWithPayload<{ items: Array<{ id: string, volumeInfo: TBooksListData }> }>,
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

export interface IBookDataActions {
  getBookDataSuccess: ActionCreatorWithPayload<TBookData>,
  getBookData: ActionCreatorWithoutPayload<string>,
  getBookDataFailed: ActionCreatorWithPayload<TErrorState>
}

type TBooksListActions = IBooksListActions;
type TPaginationActions = IPaginationActions;
type TSearchValueActions = ISearchValueActions;
type TSearchParametersActions = ISearchParametersActions;
type TBookDataActions = IBookDataActions;

export type TApplicationActions =
  TBooksListActions
  | TPaginationActions
  | TSearchValueActions
  | TSearchParametersActions
  | TBookDataActions