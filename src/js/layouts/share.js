import React, { Component, Fragment } from "react";
import urlencode from "urlencode";

import { Twitter, X, Share2 } from 'react-feather';

class Share extends Component {
  static shareLinks(word, pathname) {
    const url = `https://www.apprecio.life${pathname}`;
    const name = document.getElementById('name').value;
    if (name.length > 0) {
      const baseUrl = 'https://twitter.com/messages/compose?text=';
      const text = `Hi ${name}, I just wanted to let you know that I think you are ${word}. (${url})`;
      const articleLink = `${baseUrl}${urlencode(text)}`;
      if (articleLink) {
        window.open(articleLink, '_blank');
      }
    }
  };

  render() {
    return (
      <Fragment>
        <div className="share icons">
          <a href="#share"><Share2 /></a>
        </div>
        <div id="share" className="share-modal">
          <a href="#" className="close"><X /></a>
          <div className="body">Let someone know that you think they are <strong>{this.props.word}</strong>.&nbsp;
            <span className="edit">(You can edit your message before sending.)</span>
          </div>

          <input id="name" type="text" placeholder="What is their name?" />
          <button type="button" onClick={() => Share.shareLinks(this.props.word, this.props.pathname)}>
            <span className="twitter"><Twitter /></span>
            Send them some love
          </button>
        </div>
      </Fragment>
    );
  };
}

export default Share;
