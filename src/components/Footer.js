import React, { Component } from "react";
// import copyright from "../images/copyright.png";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer
          className='container-fluid d-flex bd-highlight justify-content-center'
          style={{ height: "200px", background:"#f1f1f1"}}>
          {/* <div className='social-icon d-flex align-items-center'>
          <img src={twitterIcon} width='20' height='20' alt='twitter' />
          <img src={faceIcon} width='20' height='25' alt='facebook' />
          <img src={instaIcon} width='20' height='20' alt='instagram' />
        </div> */}
          <div id='copyright'>
            copyright
            <font>&copy;</font>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
