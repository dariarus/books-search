import React, {FunctionComponent, useEffect} from 'react';
import {useMatch} from 'react-router-dom';
import parse from 'html-react-parser';

import bookPageStyles from './book-page.module.css';

import mockBookCover from '../../images/blank-book-cover.png';

import {getBookData} from '../../services/actions/books';
import {useAppDispatch, useSelector} from '../../services/types/hooks';
import {Preloader} from "../../components/preloader/preloader";


export const BookPage: FunctionComponent = () => {
  const bookDataState = useSelector(state => state.bookDataState);

  const dispatch = useAppDispatch();

  /* currentRouteData.params.id содержит id книги, на странице которой находимся. По нему получаем данные с сервера */
  const currentRouteData = useMatch({path: '/book/:id', end: true});


  useEffect(() => {
    if (currentRouteData) {
      dispatch(getBookData((currentRouteData.params.id) as string));
    }
  }, [])

  return (
    <>
      {
        bookDataState.isLoading
          ? <Preloader/>
          : <section className={bookPageStyles.book}>
            <img src={
              bookDataState.bookData?.imageLinks?.large
                ? bookDataState.bookData.imageLinks.large
                : mockBookCover
            } alt="Book cover" className={bookPageStyles['book__image']}/>
            <div className={bookPageStyles['book__text-wrap']}>
              <h1 className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_heading']}`}>
                {
                  bookDataState.bookData.title ? bookDataState.bookData.title : ''
                }
              </h1>
              <p className={bookPageStyles['book__text']}><span
                className={
                  `${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']} ${bookPageStyles['book__text_italic-span']}`
                }>Authors:</span>
                {
                  bookDataState.bookData.authors ? bookDataState.bookData.authors.map((author, index) => {
                    return <span key={index}
                                 className={
                                   `${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']} ${bookPageStyles['book__text_comma-span']}`
                                 }>
              {author}
            </span>
                  }) : ''
                }
              </p>
              <p className={`${bookPageStyles['book__text']}`}><span
                className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']} ${bookPageStyles['book__text_italic-span']}`}>
          Categories:</span>
                {
                  bookDataState.bookData.categories ? bookDataState.bookData.categories.map((category, index) => {
                    return <span key={index}
                                 className={`${bookPageStyles.text} ${bookPageStyles['book__text_paragraph']} ${bookPageStyles['book__text_slash-span']}`}>
                      {category}
                  </span>
                  }) : ''
                }
              </p>
              <p className={`${bookPageStyles['book__text']} ${bookPageStyles['book__text_paragraph']}`}>
                {
                  parse(bookDataState.bookData.description ? bookDataState.bookData.description : '')
                }
              </p>
            </div>
          </section>
      }
    </>
  )
}