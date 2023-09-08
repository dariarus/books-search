import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TErrorState} from '../types/response-data';
import {ISearchValueActions} from '../types/actions';
import {ISearchValue} from '../types/store-slices';

const initialSearchValueState = (): ISearchValue => {
  return {
    searchValue: '',
  }
}

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState: initialSearchValueState(),
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchValue: action.payload
      }
    },
    clearSearchValueState: (state) => {
      return initialSearchValueState();
    }
  }
})

export default searchValueSlice.reducer

const {
  setSearchValue,
  clearSearchValueState
} = searchValueSlice.actions

export const searchValueActions: ISearchValueActions = {
  setSearchValue: setSearchValue,
  clearSearchValueState: clearSearchValueState,
}