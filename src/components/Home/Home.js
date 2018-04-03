import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="box">

        <Link to='/classlist/MATH1010'><button className='btn'>Blacksmithing 1010</button></Link>
        <Link to='/classlist/ENG2010'><button className='btn'>Politicking 2010</button></Link>
        <Link to='/classlist/BIO2020'><button className='btn'>Hold Lore 2020</button></Link>
      </div>
    );
  }
}
