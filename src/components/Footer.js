import React, { Component } from "react";
import DClogoWhite from "../images/DC logo - Web-White.svg";
// import copyright from "../images/copyright.png";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className='container-fluid bd-highlight' style={{background:"#666"}}>
          <div className='mx-1 px-1 mx-md-5 px-md-5'>
            <div className='row'>
              <div className='col-md-7 py-md-5 pt-4 pb-1 text-center text-md-start'>
                <a className='navbar-brand m-0'  href='/'>
                  <img
                    src={DClogoWhite}
                    alt=''
                    width='170'
                    className='d-inline-block'
                  />
                </a>
              </div>
              <div className="col-md-5 py-md-5 pb-3 py-2">
                <p className="text-right copyright m-0">Every city has a story. Let DCMC help you write it.</p>
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
