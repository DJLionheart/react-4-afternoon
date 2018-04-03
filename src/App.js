import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Crest from './images/whiterun.png'
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div className='university-name'>Whiterun University
            <img className='crest' src={ Crest } alt="whiterun crest"/>
          </div> 
          <div className='link-wrap'>
            <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/about'>About</Link> 
          </div>
        </nav>

        { routes }
      </div>
    )
  }
}