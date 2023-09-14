import {ChangeEvent, FormEvent, FunctionComponent, useCallback, useState} from 'react';
import {useMatch, useNavigate} from "react-router-dom";

import formStyles from './search-form.module.css';

import {Button} from '../button/button';
import {getBooksListBySearchParameters} from '../../services/actions/books';
import {useAppDispatch, useSelector} from '../../services/types/hooks';

import {searchDataActions} from "../../services/store-slices/search-data";

export const SearchForm: FunctionComponent<{onSubmit: ()=>void}> = (props: any) => {
  const searchDataState = useSelector(state => state.searchDataState);
  const [searchValue, setSearchValue] = useState<string>(searchDataState.searchValue);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const returnToMainPage = useCallback(() => {
      navigate("/", {replace: true});
    },
    [navigate]
  );

  const currentRouteData = useMatch({path: '/', end: true});
  /* хук useMatch возвращает данные вида:
  {
    params: {}, - отсюда можно достать id
    pathname: "/",
    pathnameBase: "/",
    pattern: {path: '/', caseSensitive: false, end: true}
  } */


  return (
    <form className={`${formStyles.form} ${formStyles['form_search']}`}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            // Перед новым поиском вернуть польз-ля со страницы книги на главную:
            if (currentRouteData?.pathname !== '/') {
              returnToMainPage();
            }
            // При новом поиске сбрасываем параметры категорий и сортировки:
            // handleSearchParameters();
            props.onSubmit()
          }}>
      <label htmlFor="search" className={formStyles['input__label']}>Search for your book
        {/*<p>“There is more treasure in books than in all the pirate's loot on Treasure Island.” ― Walt Disney</p>*/
        }
        <input type="text"
               id="search"
               name="search"
               placeholder="Enter the book title"
               value={searchValue}
               className={formStyles.input}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                 setSearchValue(e.target.value);
                 dispatch(searchDataActions.setSearchValue(e.target.value));
               }}
        />
      </label>
      <Button isDisabled={searchValue === '' || searchDataState.isSearching} name="Search" onClick={()=>{
        dispatch(searchDataActions.setCategoryValue(''))

        console.log(searchDataState.categoryValue)
      }}/>
    </form>
  )
}