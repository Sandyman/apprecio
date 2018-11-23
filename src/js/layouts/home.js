/* eslint-disable react/jsx-filename-extension,react/prop-types */
import React, { Component, Fragment } from 'react';
import Typed from 'typed.js';
import _ from 'underscore';

// Resources
import { RefreshCcw } from 'react-feather';
import Adjectives from '../data/adjectives';

import About from './about';
import Logo from './logo';
import Share from './share';

const firstUpperCase = s => (s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase());

export class Home extends Component {
  static matchUrl(pathname) {
    // Matches, for instance, /c/creative
    const re = /^\/c\/([a-z-]+)$/i;
    const m = pathname.match(re);

    // For now, we only accept words we know to prevent misuse
    if (!!m && _.contains(Adjectives, firstUpperCase(m[1]))) {
      return m[1];
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.newWord = this.newWord.bind(this);
    this.setTypedWord = this.setTypedWord.bind(this);

    this.state = {
      word: '',
    };
  }

  componentDidMount() {
    const { pathname } = this.props.history.location;
    if (pathname === '/') {
      this.props.history.push(`/c/${Home.getRandomAdjective()}`);
    } else {
      const m = Home.matchUrl(pathname);
      if (!m) {
        this.props.history.push('/404');
      } else {
        this.setTypedWord(50, 80, m);
      }
    }
  }

  componentWillReceiveProps() {
    const m = Home.matchUrl(this.props.history.location.pathname);
    if (m) {
      this.setTypedWord(50, 80, m);
    }
  }

  static getRandomAdjective() {
    const sumWords = Adjectives.length;
    const index = Math.floor(Math.random() * Math.floor(sumWords));
    return Adjectives[index].toLowerCase();
  }

  setTypedWord(typeSpeed, backSpeed, word) {
    if (word === this.state.word) return;

    this.setState({ word });
    const options = {
      strings: [word.toLowerCase()],
      typeSpeed,
      backSpeed,
      fadeOut: true,
      showCursor: false,
      // loop: true
    };
    this.typed = new Typed(this.el, options);
  }

  newWord() {
    const word = Home.getRandomAdjective();
    this.props.history.push(`/c/${word}`);
  }

  render() {
    return (
      <Fragment>
        <Logo />
        <Share word={this.state.word} pathname={this.props.history.location.pathname} />
        <h1>I think you are <strong><span ref={(el) => { this.el = el; }} /></strong>,
          <br />
          and I appreciate that in you.
          <button className="refresh" onClick={() => this.newWord()}>{<RefreshCcw />}</button>
        </h1>
        <About />
      </Fragment>
    );
  }
}
