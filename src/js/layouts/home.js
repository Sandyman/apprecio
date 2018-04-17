import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Typed from 'typed.js';

//Resources
import { Layout, Info, Twitter, Globe, RefreshCcw, X } from 'react-feather';
import Adjectives from '../data/adjectives.js';

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

export class Home extends Component {
	constructor() {
		super();

		this.state = {
			adjective: '',
		};

		this.getRandomAdjective = this.getRandomAdjective.bind(this);
		this.newWord = this.newWord.bind(this);
		this.setTypedWord = this.setTypedWord.bind(this);
	}

	getRandomAdjective() {
		const sumWords = Adjectives.length;
		const index = Math.floor(Math.random() * Math.floor(sumWords));
		const adjective = Adjectives[index].toLowerCase();
		this.setState({
			adjective,
		});
		return adjective;
	}

	setTypedWord(typeSpeed, backSpeed) {
    const options = {
      strings: [this.getRandomAdjective()],
      typeSpeed,
      backSpeed,
      fadeOut: true,
      showCursor: false,
      // loop: true
    };

    this.typed = new Typed(this.el, options);
  }

	componentDidMount() {
		this.setTypedWord(50, 80);
	};

	newWord() {
		this.setTypedWord(80, 80);
	}

	render() {
		return (
			<Fragment>
        <h1>I think you are <span ref={(el) => {this.el = el;}} id="adjective" />
					&nbsp;&nbsp;
          <button className="refresh" onClick={() => this.newWord()}>{<RefreshCcw />}</button>
				</h1>
				<About />
			</Fragment>
		);
	}
}

const About = () => (
	<div className="about">
		<a href="#about" title="Link to display the information page">
			<Info />
		</a>
		<div id="about">
			<a href="#" className="close"><X /></a>
			<h3>About Apprecio</h3>
			<p>
				Appreciating someone is an act of kindness. We appreciate others for their positive personal traits, and we should
				all do more of it. But sometimes, it's hard to find the right word. Apprecio aims to help you with that. A source
				of inspiration to consult when you're looking for that one word with which you can best appreciate your friend,
				partner, parent, or colleague.
				<br/><br/>
				Every time you load the site, you will be shown a new positive trait, something that you may appreciate in
				your friend. Not the word you're looking for? Simply click the refresh icon, and you will be presented with
				a new word.
				<br/><br/>
				Be inspired. Share your appreciation. Make the world a slightly better place.
			</p>
			<h3>About Sander</h3>
			<p>
				Apprecio is a project developed by Sander Huijsen. Sander is Time to Think Facilitator (in practicum) who lives
				in Perth, Australia. In his work, he noticed that our everyday vocabulary seems to be biased toward the negative.
				Apprecio is his attempt to change that.
			</p>
			<h3>Contact Sander</h3>
			<p>
				<span id="icon"><Twitter /></span>
				&nbsp;&nbsp;
				<a href="https://twitter.com/ahuijsen" target="_blank" rel="nofollow">@ahuijsen</a>
			</p>
			<p>
				<span id="icon"><Globe /></span>
				&nbsp;&nbsp;
				<a href="https://sanderhuijsen.com/" target="_blank" rel="nofollow">sanderhuijsen.com</a>
			</p>
			<p>&nbsp;</p>
			<h3>Design</h3>
			<p id="design">
				<span id="icon"><Layout /></span>
				&nbsp;&nbsp;
				Web design by <a href="https://amygoestoperth.com.au" target="_blank" rel="nofollow">Amy Kapernick</a>.
			</p>
		</div>
	</div>
);
