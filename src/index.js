import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './main';

//Resources
import './scss/global.scss';

ReactDOM.render(
  <BrowserRouter>
	  <Main />
  </BrowserRouter>,
	document.getElementById('root')
);
