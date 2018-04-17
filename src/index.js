import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//Import components
import { App } from './js/partial/app.js';

//Resources
import './scss/global.scss';

class Main extends React.Component {
	render() {
		return (
			<Fragment>
				<div id="main" className="content main">{<App />}</div>
			</Fragment>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
