import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesMain from "../images/services-main.png";
import HR from "../images/HR-photo.png";

function Services() {
  return (
    <div className="services-env">
      <Navbar />
      <div id="services" className="service-main-container">
        <section className="w-100">
          <div className="row">
            <img src={ServicesMain} className="service-main-img" alt="service-main"></img>
            <br />
            <h2 className="top-left">Services</h2>
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <div className="col">
                    <img src={HR} alt="HumanResources"></img>
                  </div>
                </div>
                <div className="row margin justify-content-center">
                  <h1>Human Resource Management</h1>
                  <p>Here is the description!</p>
                </div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
