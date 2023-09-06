import appStyles from './app.module.css';

import {SearchForm} from '../search-form/search-form';
import {DropList} from '../drop-list/drop-list';
import {categoryDropListOptions, sortDropListOptions} from '../../utils/constants';

function App() {
  return (
    <div className={appStyles.content}>
      <section className={`${appStyles.section} ${appStyles['section__search-area']}`}>
        <SearchForm/>
        <div className={appStyles['drop-list']}>
          <DropList label="Категории:">
            {
              categoryDropListOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.meaning}</option>
              ))
            }
          </DropList>
          <DropList label="Сортировка:">
            {
              sortDropListOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.meaning}</option>
              ))
            }
          </DropList>
        </div>
      </section>
    </div>
  );
}

export default App;
