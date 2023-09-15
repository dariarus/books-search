import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ISearchDataSliceState} from '../types/store-slices';
import {ISearchDataActions} from '../types/actions';

const initialSearchDataState = (): ISearchDataSliceState => {
  return {
    searchValue: '',
    categoryValue: '',
    sortValue: 'relevance',
    isSearching: false
  }
}

export const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: initialSearchDataState(),
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchValue: action.payload
      }
    },
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
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isSearching: action.payload
      }
    },
    resetSearchParameters: (state) => {
      return {
        ...state,
        categoryValue: '',
        sortValue: 'relevance'
      }
    },
    clearSearchDataState: (state) => {
      return initialSearchDataState();
    }
  }
})

export default searchDataSlice.reducer

const {
  setSearchValue,
  setCategoryValue,
  setSortValue,
  setIsSearching,
  resetSearchParameters,
  clearSearchDataState
} = searchDataSlice.actions

export const searchDataActions: ISearchDataActions = {
  setSearchValue: setSearchValue,
  setCategoryValue: setCategoryValue,
  setSortValue: setSortValue,
  setIsSearching: setIsSearching,
  resetSearchParameters: resetSearchParameters,
  clearSearchDataState: clearSearchDataState,
}