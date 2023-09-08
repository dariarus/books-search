import appStyles from './app.module.css';

import {SearchForm} from '../search-form/search-form';
import {DropList} from '../drop-list/drop-list';
import {MainPage} from '../../pages/main-page/main-page';
import {BookPage} from '../../pages/book-page/book-page';

import {categoryDropListOptions, sortDropListOptions} from '../../utils/constants';
import {ChangeEvent, SelectHTMLAttributes, useCallback, useState} from 'react';
import {useAppDispatch, useSelector} from '../../services/types/hooks';
import {searchValueActions} from '../../services/store-slices/search-value';
import {searchParametersActions, searchParametersSlice} from '../../services/store-slices/search-parameters';
import {getBooksByCategory} from '../../services/actions/books';

function App() {
  const searchValueState = useSelector(state => state.searchValueState);
  const [categoryValue, setCategoryValue] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSetCategory = useCallback((value: string) => {
    dispatch(searchParametersActions.setCategoryValue(value));
  }, [dispatch])

  const handleSetCategoryValue = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    // setCategoryValue(e.target.value);
    handleSetCategory(e.target.value);
    dispatch(getBooksByCategory(searchValueState.searchValue, e.target.value));
  }

  const handleSetSort = useCallback((value: string) => {
    dispatch(searchParametersActions.setSortValue(value));
  }, [dispatch])

  const handleSetSortValue = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSortValue(e.target.value);
    handleSetSort(e.target.value)
  }

  return (
    <main className={appStyles.content}>
      <header className={appStyles.header}>
        <SearchForm/>
        <div className={appStyles['header__drop-lists-wrap']}>
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
      </header>
      <section className={appStyles.section}>
        <MainPage/>
        {/*<BookPage/>*/}
      </section>
    </main>
  );
}

export default App;
