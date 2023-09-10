import {ChangeEvent, FunctionComponent, useCallback} from 'react';

import headerStyles from './header.module.css';

import {SearchForm} from '../search-form/search-form';
import {DropList} from '../drop-list/drop-list';

import {useAppDispatch, useSelector} from '../../services/types/hooks';
import {searchParametersActions} from '../../services/store-slices/search-parameters';
import {getBooksListBySearchParameters} from '../../services/actions/books';

import {categoryDropListOptions, sortDropListOptions} from '../../utils/constants';

export const Header: FunctionComponent = () => {
  const searchValueState = useSelector(state => state.searchValueState);
  const searchParametersState = useSelector(state => state.searchParametersState);

  const dispatch = useAppDispatch();

  const handleSetCategory = useCallback((value: string) => {
    dispatch(searchParametersActions.setCategoryValue(value));
  }, [dispatch])

  const handleSetCategoryValue = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    handleSetCategory(e.target.value);
    dispatch(getBooksListBySearchParameters(searchValueState.searchValue, e.target.value, searchParametersState.sortValue));
  }

  const handleSetSort = useCallback((value: string) => {
    dispatch(searchParametersActions.setSortValue(value));
  }, [dispatch])

  const handleSetSortValue = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    handleSetSort(e.target.value);
    dispatch(getBooksListBySearchParameters(searchValueState.searchValue, searchParametersState.categoryValue, e.target.value));
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles['background-overlay']}>
        <div className={headerStyles['header__search-options-wrap']}>
          <SearchForm/>
          <div className={headerStyles['header__drop-lists-wrap']}>
            <DropList id="category"
                      label="Category:"
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSetCategoryValue(e)}>
              {
                categoryDropListOptions.map((option, index) => (
                  <option key={index} value={option.value === 'all' ? '' : option.value}>{option.value}</option>
                ))
              }
            </DropList>
            <DropList id="sort"
                      label="Sort by:"
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSetSortValue(e)}>
              {
                sortDropListOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.value}</option>
                ))
              }
            </DropList>
          </div>
        </div>
      </div>
    </header>
  )
}