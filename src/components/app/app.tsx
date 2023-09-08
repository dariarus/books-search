import appStyles from './app.module.css';

import {SearchForm} from '../search-form/search-form';
import {DropList} from '../drop-list/drop-list';
import {MainPage} from '../../pages/main-page/main-page';

import {categoryDropListOptions, sortDropListOptions} from '../../utils/constants';
import {BookPage} from '../../pages/book-page/book-page';

function App() {
  return (
    <main className={appStyles.content}>
      <header className={appStyles.header}>
        <SearchForm/>
        <div className={appStyles['header__drop-lists-wrap']}>
          <DropList label="Category:">
            {
              categoryDropListOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.value}</option>
              ))
            }
          </DropList>
          <DropList label="Sort by:">
            {
              sortDropListOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.value}</option>
              ))
            }
          </DropList>
        </div>
      </header>
      <section className={appStyles.section}>
        <MainPage/>
        {/*<BookPage/>*/}
      </section>
    </main>
  );
}

export default App;
