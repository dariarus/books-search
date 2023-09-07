import {FunctionComponent} from 'react';

import bookPageStyles from './book-page.module.css';

import mockBookCover from '../../images/header-background.jpg';

export const BookPage: FunctionComponent = () => {
  return (
    <div className={bookPageStyles.book}>
      <img src={mockBookCover} alt="Book cover" className={bookPageStyles['book__image']}/>
      <div className={bookPageStyles['book__text-wrap']}>
        <h1 className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_heading']}`}>Book title</h1>
        <p className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']}`}>Super Author, Super
          Author</p>
        <p className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']}`}>Categories:{
          ["Medical", "Computers", "Poetry"].map(category =>
            <span
              className={`${bookPageStyles.text} ${bookPageStyles['book__text_paragraph']} ${bookPageStyles['book__text_span']}`}>
            {category}
          </span>)
        }</p>
        <p className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']}`}>Description
          description description
          description description description description description description
          description description description description description description description description description
          description description description </p>
      </div>
    </div>
  )
}