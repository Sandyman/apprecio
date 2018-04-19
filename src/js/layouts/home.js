import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Typed from 'typed.js';
import _ from 'underscore';

//Resources
import { RefreshCcw } from 'react-feather';
import Adjectives from '../data/adjectives.js';

import About from './about';
import Logo from './logo';
import Share from './share';

class Meta extends Component {
	render() {
		let name = 'Apprecio';
		let description = 'When you need some inspiration to find the right words.';
		let image = '';
		let url = 'https://www.apprecio.life';
		return (
			<Helmet>
				<title>{name}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={url} />

				{/* Facebook */}
				<meta property="og:url" content={url} />
				<meta property="og:title" content={name} />
				<meta property="og:image" content={image} />
				<meta property="og:description" content={description} />

				{/* Twitter */}
				<meta name="twitter:url" content={url} />
				<meta name="twitter:title" content={name} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />
			</Helmet>
		);
	}
}

const firstUpperCase = s => (s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase());

export class Home extends Component {
	constructor(props) {
		super(props);

		this.newWord = this.newWord.bind(this);
		this.setTypedWord = this.setTypedWord.bind(this);

    this.state = {
      word: ''
    };
  }

  componentDidMount() {
    console.log(this.props);
    const m = Home.matchUrl(this.props.history.location.pathname);
    if (!m) {
      this.props.history.push(`/c/${Home.getRandomAdjective()}`);
    } else {
      this.setTypedWord(50, 80, m);
    }
  };

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

  static matchUrl(pathname) {
		// Matches, for instance, /c/creative
    const re = /^\/c\/([a-z-]+)$/i;
    let m = pathname.match(re);

    // For now, we only accept words we know to prevent misuse
    if (!!m && _.contains(Adjectives, firstUpperCase(m[1]))) {
      return m[1];
    }
    return null;
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
				{/*<Logo />*/}
        <Share word={this.state.word} pathname={this.props.history.location.pathname} />
        <h1>I think you are <span ref={(el) => {this.el = el;}} id="adjective" />
          <button className="refresh" onClick={() => this.newWord()}>{<RefreshCcw />}</button>
				</h1>
				<About />
			</Fragment>
		);
	}
}
