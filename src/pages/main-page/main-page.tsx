import {FunctionComponent} from 'react';

import mainPageStyles from './main-page.module.css';

import {BookCard} from '../../components/book-card/book-card';
import {Button} from '../../components/button/button';

import mockBookCover from '../../images/header-background.jpg';
import {useSelector} from '../../services/types/hooks';

export const MainPage: FunctionComponent = () => {
  const booksListState = useSelector(state => state.booksListState)
  console.log(booksListState)

  return (
    <>
      <h2 className={mainPageStyles['books__text']}>Total results: {booksListState.totalResults}</h2>
      <ul className={mainPageStyles['books__list']}>
        {
          booksListState.booksList.map((book, index) => {
            console.log(book)
           return (<BookCard key={index}
                              title={book.volumeInfo.title}
                              imageUrl={book.volumeInfo.imageLinks.thumbnail}
                              category={book.volumeInfo.categories[0]}
                              authors={book.volumeInfo.authors.map((author, index) => (<li
                                key={index}
                                className={mainPageStyles['books__list-item-text']}>{author}
                              </li>))}
            />)})
        }
      </ul>
      <Button isDisabled={false} name="Show more" onClick={() => console.log('hi')}/>
    </>
  )
}