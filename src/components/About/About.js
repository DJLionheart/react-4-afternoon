import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import History from '../../components/History/History';
import Contact from '../../components/Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link className='subnav_links' to='/about'><h3>About</h3></Link>
        <Link className='subnav_links' to='/about/history'><h3>History</h3></Link>
        <Link className='subnav_links' to='/about/contact'><h3>Contact</h3></Link>
        </div>
        
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={ History }/>
            <Route path='/about/contact' component={ Contact }/>
            <Route exact path='/about' render={ () => (
              <div>
                <h1 className='title'>About Whiterun University</h1>
                <p>
                This beautiful educational institution, located in the heart of Whiterun Hold, and nestled in a cozy plain to the Northwest of High Hrothgar has produced some of the finest blacksmiths, politicians, and scholars the world has ever seen! Enroll today! (*Note - neither airfaire nor passage via ship will be provided for by the University of Whiterun. Prospective students should undergo a rigorous process of introspection and soul-searching to determine if they are capable of traveling ALL the way to Skyrim...)
                </p>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}