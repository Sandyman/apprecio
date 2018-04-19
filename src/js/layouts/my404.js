import React, { Component, Fragment } from 'react';

class My404 extends Component {
  componentDidMount() {
    console.log('My404');
  }

  render() {
    return (
      <Fragment>
        <div>
          <h2>Oops! Something went wrong...</h2>
          <img src={require('../../img/mary.jpg')} alt="Not found" />
        </div>
        <div>
          <h2>I still think you are <strong>supercalifragilisticexpialidocious</strong>!</h2>
        </div>
        <div>
          <br/>
          <a href="/" >&lt;&lt; Home</a>
        </div>
      </Fragment>
    )
  }
}

export default My404;
