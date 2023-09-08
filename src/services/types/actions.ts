import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {TBooksListData, TErrorState} from './response-data';

export interface IBooksListActions {
  getBooksListSuccess: ActionCreatorWithPayload<{ totalItems: number, items: ReadonlyArray<{volumeInfo: TBooksListData}> }>,
  getBooksList: ActionCreatorWithoutPayload<string>,
  getBooksListFailed: ActionCreatorWithPayload<TErrorState>
}

type TBooksListActions = IBooksListActions;

export type TApplicationActions =
  TBooksListActions