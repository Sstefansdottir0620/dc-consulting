import React, { Component } from "react";
import HeaderImage from "../images/city-scape02.svg";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className='mt-5 d-flex justify-content-center'>
          <img width='100%' alt='city' src={HeaderImage} />
        </header>
      </div>
    );
  }
}

export default Header;
