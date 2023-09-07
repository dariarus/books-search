import {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

import {TButton} from '../../services/types/props';

export const Button: FunctionComponent<TButton> = (props) => {
  return (
    <button type="submit"
            disabled={props.isDisabled}
            className={props.name === 'Search'
              ? `${buttonStyles.button} ${buttonStyles['button_search']}`
              : `${buttonStyles.button} ${buttonStyles['button_show-more']}`}
            onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}