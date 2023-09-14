import {ChangeEvent, FunctionComponent, useCallback} from 'react';

import headerStyles from './header.module.css';

import {SearchForm} from '../search-form/search-form';
import {DropList} from '../drop-list/drop-list';

import {useAppDispatch, useSelector} from '../../services/types/hooks';

import {searchDataActions} from '../../services/store-slices/search-data';
import {getBooksListBySearchParameters} from '../../services/actions/books';

import {categoryDropListOptions, sortDropListOptions} from '../../utils/constants';

export const Header: FunctionComponent = () => {
  const searchDataState = useSelector(state => state.searchDataState);

  const dispatch = useAppDispatch();

  const handleSetCategory = (value: string) => {
    dispatch(searchDataActions.setCategoryValue(value));
  }

  const handleSetCategoryValue = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    handleSetCategory(e.target.value);
    dispatch(getBooksListBySearchParameters(searchDataState.searchValue, e.target.value, searchDataState.sortValue));
  }

  const handleSetSort = (value: string) => {
    dispatch(searchDataActions.setSortValue(value));
  }

  const handleSetSortValue = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    handleSetSort(e.target.value);
    dispatch(getBooksListBySearchParameters(searchDataState.searchValue, searchDataState.categoryValue, e.target.value));
  }



  const handleSearchParameters = useCallback(() => {
    dispatch(searchDataActions.resetSearchParameters())
  }, [])





  return (
    <header className={headerStyles.header}>
      <div className={headerStyles['background-overlay']}>
        <div className={headerStyles['header__search-options-wrap']}>
          <SearchForm onSubmit={handleSearchParameters}/>
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