import React, { Component } from "react";
import DClogoWhite from "../images/DC logo - Web-White.svg";
// import copyright from "../images/copyright.png";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className='container-fluid bd-highlight' style={{ height: "200px", background:"#666"}}>
          <div className='mx-5 px-5'>
            <div className='row'>
              <div className='col-7 py-5'>
                <a className='navbar-brand' href='/'>
                  <img
                    src={DClogoWhite}
                    alt=''
                    width='170'
                    class='d-inline-block'
                  />
                </a>
              </div>
              <div className="col-5 py-5">
                <div className='row'>
                <p className="text-right copyright m-0">Every city has a story. Let DCMC help you write it.</p></div>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='copyright'>
                © 2022 DC Municipal Consulting
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
