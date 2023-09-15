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

export interface ISearchDataActions {
  setSearchValue: ActionCreatorWithPayload<string>,
  setCategoryValue: ActionCreatorWithPayload<string>,
  setSortValue: ActionCreatorWithPayload<string>,
  setIsSearching: ActionCreatorWithPayload<boolean>,
  resetSearchParameters: ActionCreatorWithoutPayload<string>,
  clearSearchDataState: ActionCreatorWithoutPayload<string>
}

export interface IBookDataActions {
  getBookDataSuccess: ActionCreatorWithPayload<TBookData>,
  getBookData: ActionCreatorWithoutPayload<string>,
  getBookDataFailed: ActionCreatorWithPayload<TErrorState>
}

type TBooksListActions = IBooksListActions;
type TPaginationActions = IPaginationActions;
type TSearchDataActions = ISearchDataActions;
type TBookDataActions = IBookDataActions;

export type TApplicationActions =
  TBooksListActions
  | TPaginationActions
  | TSearchDataActions
  | TBookDataActions