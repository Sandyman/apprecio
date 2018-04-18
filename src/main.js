import React, { Component, Fragment } from "react";

import { App } from './js/partial/app.js';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div id="main" className="content main">
          <App />
        </div>
      </Fragment>
    );
  }
}

export default Main;
