/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Layout, Info, Twitter, Globe, X } from 'react-feather';

import Logo from './logo';

const About = () => (
  <div className="about icons">
    <a href="#about" title="Link to display the information page">
      <Info />
    </a>
    <div id="about">
      <a href="#" className="close"><X /></a>
      <div className="body">
        <Logo />
        <p>
          Appreciating someone is an act of kindness. We appreciate others for their
          positive personal traits, and we should all do more of it. But sometimes,
          it's hard to find the right word. Apprecio aims to help you with that. A source
          of inspiration to consult when you're looking for that one word with which you
          can best appreciate your friend, partner, parent, or colleague.
          <br /><br />
          Every time you load the site, you will be shown a new positive trait, something
          that you may appreciate in your friend, partner or colleague. Not the word
          you're looking for? Simply click the refresh icon, and you will be presented
          with a new word.
          <br /><br />
          Be inspired. Share your appreciation. Make the world a slightly better place.
        </p>
        <h3>About Apprecio</h3>
        <p>
          Apprecio is a project developed by&nbsp;
          <a href="https://masterthinkers.com.au" target="_blank" rel="noopener noreferrer">
            Master Thinkers Pty Ltd
          </a>,
          which was founded in May 2018 by Sander Huijsen. Sander lives in Perth and is a
          Time to Think Facilitator. In his work and life, he noticed that our everyday
          vocabulary seems to be biased toward the negative. Apprecio is his attempt to
          change that.
        </p>
        <h3>Contact Sander</h3>
        <ul>
          <li>
            <span className="icons"><Twitter /></span>
            <a href="https://twitter.com/ahuijsen" target="_blank" rel="nofollow noopener noreferrer">@ahuijsen</a>
          </li>
          <li>
            <span className="icons"><Globe /></span>
            <a href="https://masterthinkers.com.au" target="_blank" rel="nofollow noopener noreferrer">masterthinkers.com.au</a>
          </li>
        </ul>
        <h3>Design</h3>
        <ul>
          <li>
            <span className="icons"><Layout /></span>
            <small>Web design by <a href="https://amygoestoperth.com.au" target="_blank" rel="nofollow noopener noreferrer">Amy Kapernick</a></small>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
