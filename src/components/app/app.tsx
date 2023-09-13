import {Routes, Route} from 'react-router-dom';

import appStyles from './app.module.css';

import {useSelector} from "../../services/types/hooks";

import {MainPage} from '../../pages/main-page/main-page';
import {BookPage} from '../../pages/book-page/book-page';
import {Header} from '../header/header';
import {Preloader} from "../preloader/preloader";

function App() {
  const booksListState = useSelector(state => state.booksListState);
  const bookDataState = useSelector(state => state.bookDataState);

  return (
    <div className={appStyles.content}>
      <Header/>
      <main className={appStyles.main}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/book/:id" element={<BookPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
