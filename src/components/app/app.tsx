import {Routes, Route} from 'react-router-dom';

import appStyles from './app.module.css';

import {MainPage} from '../../pages/main-page/main-page';
import {BookPage} from '../../pages/book-page/book-page';
import {Header} from '../header/header';

function App() {
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
