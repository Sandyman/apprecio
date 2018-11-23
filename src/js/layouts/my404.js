/* eslint-disable global-require,react/jsx-filename-extension */
import React, { Component, Fragment } from 'react';

import Logo from './logo';

class My404 extends Component {
  componentDidMount() {
    console.log('My404');
  }

  render() {
    return (
      <Fragment>
        <Logo />
        <div className="oops">
          <h2>Oops! Something went wrong...</h2>
          <img src={require('../../img/mary.jpg')} alt="Not found" />
        </div>
        <div>
          <h2>
            I still think you are <strong>supercalifragilisticexpialidocious</strong>, though!
          </h2>
        </div>
      </Fragment>
    );
  }
}

export default My404;
