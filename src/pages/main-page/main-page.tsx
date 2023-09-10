import {FunctionComponent} from 'react';

import mainPageStyles from './main-page.module.css';

import {BookCard} from '../../components/book-card/book-card';
import {Button} from '../../components/button/button';

import {useAppDispatch, useSelector} from '../../services/types/hooks';
import {getBookData, getMoreBooks} from '../../services/actions/books';

export const MainPage: FunctionComponent = () => {
  const booksListState = useSelector(state => state.booksListState);
  const searchValueState = useSelector(state => state.searchValueState);
  const searchParametersState = useSelector(state => state.searchParametersState);
  const paginationStartIndex = useSelector(state => state.paginationState);

  const dispatch = useAppDispatch();

  return (
    <section className={mainPageStyles.books}>
      <h2 className={mainPageStyles['books__text']}>Total: {booksListState.totalResults} book(s)</h2>
      <ul className={mainPageStyles['books__list']}>
        {
          booksListState.booksList.map((book, index) => {
            return (<BookCard key={index}
                              id={book.id}
                              title={book.volumeInfo.title ? book.volumeInfo.title : ''}
                              imageUrl={book.volumeInfo.imageLinks?.thumbnail
                                ? book.volumeInfo.imageLinks.thumbnail
                                : undefined}
                              category={book.volumeInfo.categories ?
                                book.volumeInfo.categories[0]
                                : ''}
                              authors={book.volumeInfo.authors
                                ? book.volumeInfo.authors.map((author, index) => (<li
                                  key={index}
                                  className={mainPageStyles['books__list-item-text']}>{author}
                                </li>))
                                : ''}
                              onClick={() => getBookData(book.id)}
            />)
          })
        }
      </ul>
      {
        booksListState.booksList && booksListState.totalResults > 30 &&
        <Button name="Show more" onClick={() => {
          dispatch(getMoreBooks(
            searchValueState.searchValue,
            searchParametersState.categoryValue,
            searchParametersState.sortValue,
            paginationStartIndex.paginationStartIndex
          ))
        }}/>
      }
    </section>
  )
}