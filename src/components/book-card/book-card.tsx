import {FunctionComponent} from 'react';

import bookCardStyles from './book-card.module.css';

import {TBookCard} from '../../services/types/props';

export const BookCard: FunctionComponent<TBookCard> = (props) => {
  return (
    <li className={bookCardStyles.book}>
      <img src={props.imageUrl} alt="Image of book cover" className={bookCardStyles['book__image']}/>
      <div className={bookCardStyles['book__text-wrap']}>
        <h3 className={`${bookCardStyles['book__text']} ${bookCardStyles['book__text_heading']}`}>{props.title}</h3>
        <p className={`${bookCardStyles['book__text']} ${bookCardStyles['book__text_paragraph']}`}>{props.category}</p>
        <ul className={bookCardStyles['book__authors-list']}>{props.authors}</ul>
      </div>
    </li>
  )
}