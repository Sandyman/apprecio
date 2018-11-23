/* eslint-disable react/jsx-filename-extension,global-require */
import React from 'react';

const Logo = () => (
  <div className="logo">
    <a href="/"><img src={require('../../img/logo.png')} alt="Logo" /></a>
  </div>
);

export default Logo;
