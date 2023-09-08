import {ChangeEvent, FormEvent, FunctionComponent, useCallback, useState} from 'react';

import formStyles from './search-form.module.css';
import {Button} from '../button/button';
import {getBooksListByTitle} from '../../services/actions/books';
import {useAppDispatch} from '../../services/types/hooks';
import {booksListActions} from '../../services/store-slices/books-list';

export const SearchForm: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useAppDispatch();

  return (
    <form className={`${formStyles.form} ${formStyles['form_search']}`}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(getBooksListByTitle(searchValue));
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
               }}
        />
      </label>
      <Button isDisabled={searchValue === ''} name="Search" onClick={() => console.log('hi')}/>
    </form>
  )
}