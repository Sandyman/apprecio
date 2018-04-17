import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

//Resources
import '../../scss/partial/content.scss';
import favicons from '../../img/favicons/*';

//Components
import { Home } from '../layouts/home.js';

class Meta extends Component {
	render() {
		return (
			<Helmet>
				<link rel="shortcut icon" href={favicons['favicon.png']} />
				<link rel="icon" type="image/png" sizes="16x16" href={favicons['favicon-16.png']} />
				<link rel="icon" type="image/png" sizes="32x32" href={favicons['favicon-32.png']} />
				<link rel="icon" type="image/png" sizes="96x96" href={favicons['favicon-96.png']} />

				<link rel="apple-touch-icon" href={favicons['favicon-180.png']} />
				<meta name="theme-color" content="#1C75BC" />
				<link rel="icon" sizes="192x192" href={favicons['favicon-192.png']} />
			</Helmet>
		);
	}
}

export class App extends Component {
	render() {
		return (
			<Home />
		);
	}
}
