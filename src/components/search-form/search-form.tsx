import {ChangeEvent, FormEvent, FunctionComponent, useCallback, useState} from 'react';

import formStyles from './search-form.module.css';

import {Button} from '../button/button';
import {getBooksByCategory, getBooksList} from '../../services/actions/books';
import {useAppDispatch, useSelector} from '../../services/types/hooks';

import {searchValueActions} from '../../services/store-slices/search-value';

export const SearchForm: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSetSearchValue = useCallback((value: string) => {
    dispatch(searchValueActions.setSearchValue(value));
  }, [dispatch])

  return (
    <form className={`${formStyles.form} ${formStyles['form_search']}`}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(getBooksList(searchValue));
          }}>
      <label htmlFor="search" className={formStyles['input__label']}>Search for your book
        {/*<p>“There is more treasure in books than in all the pirate's loot on Treasure Island.” ― Walt Disney</p>*/}
        <input type="text"
               id="search"
               name="search"
               placeholder="Enter the book title"
               value={searchValue}
               className={formStyles.input}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                 setSearchValue(e.target.value);
                 handleSetSearchValue(e.target.value);
               }}
        />
      </label>
      <Button isDisabled={searchValue === ''} name="Search"/>
    </form>
  )
}