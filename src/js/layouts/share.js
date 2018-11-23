/* eslint-disable no-undef,react/prop-types,react/jsx-filename-extension */
import React, { Component, Fragment } from 'react';
import urlencode from 'urlencode';

import { MessageSquare, Twitter, X, Share2 } from 'react-feather';

const TWURL = 'https://twitter.com';
const HASH_TAG = '#apprecio';

class Share extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasInput: false,
      provider: '',
      submitDisabled: true,
    };

    this.onProviderClick = this.onProviderClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.shareLinks = this.shareLinks.bind(this);
  }

  onInputChange() {
    const name = document.getElementById('name').value;
    this.setState({
      hasInput: name.length > 0,
    });
  }

  onProviderClick() {
    this.setState({
      provider: document.querySelector('input[name="provider"]:checked').value,
      submitDisabled: false,
    });
  }

  shareLinks(word, pathname) {
    const url = `https://www.apprecio.life${pathname}`;
    let name = document.getElementById('name').value;
    if (name.length > 0) {
      const { provider } = this.state;
      let baseUrl;
      let text;
      if (provider === 'dm') {
        baseUrl = `${TWURL}/messages/compose?text=`;
        text = `Hi ${name}, I just wanted to let you know that I think you are ${word}. (${url})`;
      } else {
        if (name[0] !== '@') {
          name = `@${name}`;
        }
        baseUrl = `${TWURL}/home?status=`;
        text = `${name} I just wanted to let you know that I think you are ${word}. (${url}) ${HASH_TAG}`;
      }
      const articleLink = `${baseUrl}${urlencode(text)}`;
      if (articleLink) {
        window.open(articleLink, '_blank');
      }
    }
  }

  render() {
    const { word, pathname } = this.props;
    const { provider, submitDisabled, hasInput } = this.state;
    return (
      <Fragment>
        <div className="share icons">
          <a href="#share"><Share2 /></a>
        </div>
        <div id="share" className="share-modal">
          <a href="#" className="close"><X /></a>
          <div className="icons">
            <label>
              <input type="radio" name="provider" value="tweet" onClick={this.onProviderClick} /><Twitter />
            </label>
            <label>
              <input type="radio" name="provider" value="dm" onClick={this.onProviderClick} /><MessageSquare />
            </label>
          </div>
          <div className="body">Let someone know that you think they are <strong>{this.props.word}</strong>.<br/>
            <span className="edit">(You can edit your message before sending.)</span>
          </div>
          <input id="name" type="text" placeholder="What is their name?" onChange={this.onInputChange} />
          <button type="button" disabled={submitDisabled || !hasInput} onClick={() => this.shareLinks(word, pathname)}>
            <span className="twitter"><Twitter /></span>
            {provider === 'dm'
              ? 'Send Direct Message'
              : provider === 'tweet'
                ? 'Tweet'
                : 'Send them some love'}
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Share;
