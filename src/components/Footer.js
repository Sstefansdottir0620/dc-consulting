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
              <div className='col-10 py-5'>
                <a className='navbar-brand' href='/'>
                  <img
                    src={DClogoWhite}
                    alt=''
                    width='150'
                    class='d-inline-block'
                  />
                </a>
              </div>
              <div className="col-2 py-5">
                <p className="text-right m-0">Your trust in us, will be your success.</p>
              </div>
            </div>
            <div className='row justify-content-center'>
              <div id='copyright'>
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
