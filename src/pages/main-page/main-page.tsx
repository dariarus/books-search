import {FunctionComponent} from 'react';

import mainPageStyles from './main-page.module.css';

import {BookCard} from '../../components/book-card/book-card';
import {Button} from '../../components/button/button';

import mockBookCover from '../../images/header-background.jpg';

export const MainPage: FunctionComponent = () => {
  return (
    <>
      <h2 className={mainPageStyles['books__text']}>Total results: 0000</h2>
      <ul className={mainPageStyles['books__list']}>
        <BookCard title="My Title My Title My Title My Title My Title" imageUrl={mockBookCover} category="My category"
                  authors={
                    ["Super Author"].map(author => <p
                      className={mainPageStyles['books__list-item-text']}>{author}</p>)}/>
        <BookCard title="My Title My Title My Title My Title My Title" imageUrl={mockBookCover} category="My category"
                  authors={
                    ["Super Author"].map(author => <p
                      className={mainPageStyles['books__list-item-text']}>{author}</p>)}/>
        <BookCard title="My Title My Title My Title My Title My Title" imageUrl={mockBookCover} category="My category"
                  authors={
                    ["Super Author"].map(author => <p
                      className={mainPageStyles['books__list-item-text']}>{author}</p>)}/>
        <BookCard title="My Title My Title My Title My Title My Title" imageUrl={mockBookCover} category="My category"
                  authors={
                    ["Super Author, Super Author, Super Author, Super Author"].map(author => <p
                      className={mainPageStyles['books__list-item-text']}>{author}</p>)}/>
        <BookCard title="My Title My Title My Title My Title My Title" imageUrl={mockBookCover} category="My category"
                  authors={
                    ["Super Author, Super Author, Super Author, Super Author"].map(author => <p
                      className={mainPageStyles['books__list-item-text']}>{author}</p>)}/>
      </ul>
      <Button isDisabled={false} name="Show more" onClick={() => console.log('hi')}/>
    </>
  )
}