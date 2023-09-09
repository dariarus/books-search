import {ISearchParametersSliceState} from '../types/store-slices';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISearchParametersActions, ISearchValueActions} from '../types/actions';

const initialSearchParametersState = (): ISearchParametersSliceState => {
  return {
    categoryValue: '',
    sortValue: 'relevance'
  }
}

export const searchParametersSlice = createSlice({
  name: 'searchParameters',
  initialState: initialSearchParametersState(),
  reducers: {
    setCategoryValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        categoryValue: action.payload
      }
    },
    setSortValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sortValue: action.payload
      }
    },
    clearSearchParametersState: (state) => {
      return initialSearchParametersState();
    }
  }
})

export default searchParametersSlice.reducer

const {
  setCategoryValue,
  setSortValue,
  clearSearchParametersState
} = searchParametersSlice.actions

export const searchParametersActions: ISearchParametersActions = {
  setCategoryValue: setCategoryValue,
  setSortValue: setSortValue,
  clearSearchParametersState: clearSearchParametersState,
}