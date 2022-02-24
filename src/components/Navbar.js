import React, { Component } from "react";
import DClogo from "../images/DC logo-Web.svg";
import linkedIcon from "../images/linked-icon.svg";
import faceIcon from "../images/facebook-icon.svg";
import instaIcon from "../images/insta-icon.svg";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div
          className='row justify-content-md-end justify-content-center'
          style={{ height: "50px", backgroundColor: "#0E3757" }}>
          <div className='social-icon d-flex align-items-center pr-md-5 pr-0'>
            <img src={linkedIcon} width='30' height='30' alt='twitter' />
            <img src={faceIcon} width='30' height='30' alt='facebook' />
            <img src={instaIcon} width='30' height='30' alt='instagram' />
          </div>
        </div>
        <nav className='row navbar navbar-expand-lg navbar-light justify-content-between m-0 px-0 px-md-4'
        style={{backgroundColor: "#ffffff" }}>
          <div className='col-md-3 text-center text-md-left'>
            <a className='navbar-brand' href='/'>
              <img
                src={DClogo}
                alt=''
                width='200'
                height='100'
                class='d-inline-block align-text-top'
              />
            </a>
          </div>
          <div className='col-md-5'>
            <div className='row justify-content-md-end justify-content-center m-0'>
              <ul className='row navbar-nav flex-row w-100 flex-nowrap p-0'>
                <li className='col nav-item p-0'>
                  <a className='nav-item nav-link' href='/about'>
                    About Us
                  </a>
                </li>
                <li className='col nav-item p-0'>
                  <a
                    className='nav-item nav-link alignt-right'
                    href='/services'>
                    Clients/Services
                  </a>
                </li>
                {/* <li>
                  <a className='nav-item nav-link' href='/clients'>
                    Clients
                  </a>
                </li> */}
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
