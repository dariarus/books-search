import {createSlice} from '@reduxjs/toolkit';

import {IPaginationSliceState} from '../types/store-slices';
import {numberItemsToShow} from '../../utils/constants';
import {IPaginationActions} from '../types/actions';

const initialPaginationState = (): IPaginationSliceState => {
  return {
    paginationStartIndex: 0,
  }
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialPaginationState(),
  reducers: {
    updatePaginationStartIndex: (state) => {
      let copiedPaginationStartIndex = state.paginationStartIndex;
      copiedPaginationStartIndex = copiedPaginationStartIndex + numberItemsToShow;

      return {
        ...state,
        paginationStartIndex: copiedPaginationStartIndex
      }
    },
    resetPaginationStartIndex: (state) => {
      return initialPaginationState();
    }
  }
})

export default paginationSlice.reducer

const {
  updatePaginationStartIndex,
  resetPaginationStartIndex,
} = paginationSlice.actions

export const paginationActions: IPaginationActions = {
  updatePaginationStartIndex: updatePaginationStartIndex,
  resetPaginationStartIndex: resetPaginationStartIndex,
}