import {FunctionComponent, ReactNode} from 'react';

import dropListStyles from './drop-list.module.css';
import {TDropList} from '../../services/types/props';

export const DropList: FunctionComponent<TDropList> = (props) => {
  return (
    <div>
    <label htmlFor="select" className={dropListStyles.label}>{props.label}</label>
      <select id="select" className={dropListStyles.select}>
        {props.children}
      </select>
    </div>
  )
}