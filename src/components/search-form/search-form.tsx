import {ChangeEvent, FormEvent, FunctionComponent, useCallback, useState} from 'react';

import formStyles from './search-form.module.css';

export const SearchForm: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
      <form className={`${formStyles.form} ${formStyles['form_search']}`}>
        <label htmlFor="search" className={formStyles['input__label']}>Поиск книг
          <input type="text"
                 id="search"
                 name="search"
                 placeholder="Введите название книги"
                 value={searchValue}
                 className={formStyles.input}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   setSearchValue(e.target.value);
                 }}
          />
        </label>
        <button type="submit"
                disabled={searchValue === ''}
                className={`${formStyles.button}`}
          // onClick={props.onClick}
        >
          Искать
        </button>
      </form>
  )
}