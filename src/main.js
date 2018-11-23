/* eslint-disable react/jsx-filename-extension */
import React, {Fragment} from 'react';

import { App } from './js/partial/app';

function Main() {
  return (
    <Fragment>
      <div id="main" className="content main">
        <App />
      </div>
    </Fragment>
  );
}

export default Main;
