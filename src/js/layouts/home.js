import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom';
import Typed from 'typed.js';

//Resources
import {Info, Twitter, Globe, X} from 'react-feather';
import Adjectives from '../data/adjectives.js';

class Meta extends Component {
	render() {
		let name = 'Compliment Generator';
		let description = "Can't think of something nice to say? We can come up with it for you";
		let image = '';
		let url = '';
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
	generateNum() {
		let sumWords = Adjectives.length;
		let word = Math.floor(Math.random() * Math.floor(sumWords));
		let adjective = Adjectives[word];

		return (adjective);
	}

	componentDidMount() {
		let words = this.generateNum();

		const options = {
			strings: [words],
			typeSpeed: 50,
			backspeed: 80,
			fadeOut: true,
			showCursor: false,
			// loop: true
		};

		this.typed = new Typed(this.el, options);			
	};

	newWord(adjective) {
		let words = adjective;

		const options = {
			strings: [words],
			typeSpeed: 80,
			backspeed: 80,
			fadeOut: true,
			showCursor: false,
			// loop: true
		};

		this.typed = new Typed(this.el, options);
	}

	render() {
		return (
			<Fragment>
				<h1>I think you're <span ref={(el) => {this.el = el;}} id="adjective"></span></h1>
				<button onClick={() => this.newWord(this.generateNum())}>Not quite right? Try a different word!</button>
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
			<h2>About this project</h2>
			<p>This seems pretty cool, and we can put text here about stuff</p>
			<p>This is based off the list of words at <a href="http://ideonomy.mit.edu/essays/traits.html" target="_blank" rel="nofollow">http://ideonomy.mit.edu/essays/traits</a> but a couple of the words might need removing.</p>
			<h2>About Sander</h2>
			<p>Sander lives in Perth and loves swing dancing and software development</p>
			<p>
				<a href="https://twitter.com/ahuijsen" target="_blank" rel="nofollow">
					<Twitter />
				</a>
				<a href="http://sanderhuijsen.com/" target="_blank" rel="nofollow">
					<Globe />
				</a>
			</p>
			<h2>About Amy</h2>
			<p>Amy is a freelance front end developer, starting her own business and working as an Evangalist for YOW! Conference.</p>
			<p>She enjoys spending her time in the community, speaking at events and blogs in her spare time (about tech, the web and life).</p>
			<p>
				<a href="https://twitter.com/Amys_Kapers" target="_blank" rel="nofollow">
					<Twitter />
				</a>
				<a href="https://amygoestoperth.com.au/" target="_blank" rel="nofollow">
					<Globe />
				</a>
			</p>
		</div>
	</div>
);