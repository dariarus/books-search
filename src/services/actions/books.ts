import {AppDispatch, AppThunk} from '../types';
import {googleApiKey, googleBooksApiUrl} from '../../utils/constants';
import {booksListActions} from '../store-slices/books-list';
import {getResponseData} from './json-verification';
import {TBooksListData} from '../types/response-data';

export const getBooksListByTitle = (value: string): AppThunk => {
  return function (dispatch: AppDispatch) {

    dispatch(booksListActions.getBooksList());

    return fetch (`${googleBooksApiUrl}?q=${value}&key=${googleApiKey}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => getResponseData<{totalItems: number, items: ReadonlyArray<{volumeInfo: TBooksListData}>}>(res))
      .then((res) => {
        dispatch(booksListActions.getBooksListSuccess({totalItems: res.totalItems, items: res.items}))
      })
      .catch((err) =>  {
        console.log(err.message);
        dispatch(booksListActions.getBooksListFailed({message: err.message}));
      })
  }
}