import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Resources
import '../../scss/partial/content.scss';

//Components
import { Home } from '../layouts/home.js';
import My404 from '../layouts/my404';

export class App extends Component {
	render() {
		return (
			<main>
				<Switch>
		          <Route path='/' exact component={Home} />
					<Route path='/c/:adjective' component={Home} />
					<Route component={My404} />
				</Switch>
			</main>
		);
	}
}
