import React, { Component } from 'react';
import footerlogo from '../src/footer-logo.png';
import{
    Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Link,
 } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return ( 
   


<footer>
  <div className="container">
<div className="row">
  <div className="col-md-3">
  <img src={footerlogo}/>
  </div>
    <div className="col-md-3">
    <h4>Find A Stockist</h4>
  
      <p>
        In most countries and states, <br/>
        Natural New Zealand Sleep Products are on display. please <br/>
        To find a showroom near you, <br/>
       <span>contact us.</span>
      </p>
  </div>
    <div className="col-md-3 footer-Contact">
   <h4> Contact Us</h4> 
   <p><i className="fa fa-phone " ></i>
    <a href="tel: +64 9 439 2243"> +64 9 439 2243</a>
   </p>
   <p><i className="fa fa-envelope"></i>
    <a href="mail: info@sleepsystems.co.nz">info@sleepsystems.co.nz</a>
   </p>
   <p><i className="fa fa-map-marker" aria-hidden="true">
    </i>
    <a href="#">  Freyberg Road, Ruawai, Northland, New Zealand</a>
  </p>
  </div>
    <div className="col-md-3">
    <h4>Follow Us</h4>
    <div className="footer-main-icon">
<div className="footer-main-in">
  <a href="#">
<i className="fa fa-facebook" aria-hidden="true">
    </i>
    </a>
    </div>
    <div className="footer-main-in">
      <a href="#">
<i className="fa fa-instagram" aria-hidden="true"></i>
</a>

  
    </div>
    </div>
  </div>

</div>    
  </div>

<section  className="wow slideInLeft copyright">
    <div className="container">
<div className="row">
  <div className="col-md-6">
<p> Copyright 2021. Woola 100% Pure. All Rights Reserved.</p>

  </div>
   <div className="col-md-6 text-right">
  <p>Terms  Conditions <span> </span>| <span> </span>Privacy Policy
  </p>
</div>
</div></div>
</section>

</footer>


    );
  }
}