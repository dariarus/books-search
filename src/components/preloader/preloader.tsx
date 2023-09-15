import React, {FunctionComponent} from 'react';
import ReactDOM from "react-dom";

import preloaderStyles from './preloader.module.css';

export const Preloader: FunctionComponent = () => {
  const preloaderRoot = document.getElementById('preloaderRoot');

  if (preloaderRoot !== null) {
    return ReactDOM.createPortal(
      (
        <>
          <div className={preloaderStyles.overlay}>
          </div>
          <h2 className={preloaderStyles.text}>Loading...</h2>
        </>
      ), preloaderRoot
    )
  } else return null
}