import {FunctionComponent, ReactNode} from 'react';

import dropListStyles from './drop-list.module.css';
import {TDropList} from '../../services/types/props';

export const DropList: FunctionComponent<TDropList> = (props) => {
  return (
    <div>
      <label htmlFor={props.id} className={dropListStyles.label}>{props.label}</label>
      <select id={props.id} className={dropListStyles.select} onChange={props.onChange}>
        {props.children}
      </select>
    </div>
  )
}