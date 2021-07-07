import React, { Component } from 'react';
import logo from '../src/logo.png';
import{
    Link
 } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (

      
      <header>
          <div className="container">
          <div className="row">
          <div className="logo">
              <img src={logo} />
          </div>
          <div className="col-9 navi align-self-center"> 
        <ul> 
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about_us">About Us</Link> </li>
            <li><Link to="/product">Product</Link> </li>
            <li><Link to="/contact_us">Contact Us</Link> </li>
        </ul>
        </div>
        </div>
        </div>
        </header>
      
    );
  }
}