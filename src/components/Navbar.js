import React, { Component } from "react";
import DClogo from "../images/DC.svg";
import linkedIcon from "../images/linked-icon.svg";
import faceIcon from "../images/facebook-icon.svg";
import instaIcon from "../images/insta-icon.svg";
import Header from "../components/Header";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div
          className='row justify-content-end m-0'
          style={{ height: "50px", backgroundColor: "#0E3757" }}>
          <div className='social-icon d-flex align-items-center'>
            <img src={linkedIcon} width='30' height='30' alt='twitter' />
            <img src={faceIcon} width='30' height='30' alt='facebook' />
            <img src={instaIcon} width='30' height='30' alt='instagram' />
          </div>
        </div>
        <nav className='row navbar navbar-expand-lg navbar-light justify-content-between m-0 mb-3'
        style={{backgroundColor: "#f1f1f1" }}>
          <div className='col-3'>
            <a className='navbar-brand' href='/'>
              <img
                src={DClogo}
                alt=''
                width='320'
                height='120'
                class='d-inline-block align-text-top'
              />
            </a>
          </div>
          <div className='col-6'>
            <div className='row justify-content-end'>
              <ul className='navbar-nav ml-auto pr-5'>
                <li className='nav-item'>
                  <a className='nav-item nav-link' href='/about'>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className='nav-item nav-link alignt-right'
                    href='/services'>
                    Services
                  </a>
                </li>
                <li>
                  <a className='nav-item nav-link' href='/clients'>
                    Clients
                  </a>
                </li>
                <li>
                  <a className='nav-item nav-link' href='/contact'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
