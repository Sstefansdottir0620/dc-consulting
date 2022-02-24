import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeMain from "../images/home-main-image.png";
import Abilene from "../images/abilene-logo.png";
import BalchSprings from "../images/balchsprings-logo.png";
import Fate from "../images/fate-logo.png";
import Forny from "../images/forny-logo.png";
import Heath from "../images/heath-logo.png";
import Josephine from "../images/josephine-logo.png";
import LittleElm from "../images/elm-logo.png";
import Melissa from "../images/melissa.png";
import HR from "../images/HR-photo.png";

function Services() {
  return (
    <div className="services-env">
      <Navbar />
      <div id="services" className="service-main-container">
        <section className="w-100">
          <div className="row m-0" id='shadow'>
            <img src={HomeMain} className="home-main-img" alt="service-main"></img>
            <br />
            <h2 className="top-left blue">Clients and Services</h2>
            </div>
            <div className='container justify-content-center' style={{ width: "1000px" }}>
            < section className='row mb-5 mt-5 body-text'>
                <p>
                DC Municipal Consulting (DCMC) was formed in August of 2017 as a women-owned firm specializing in consulting for local governments. DCMC has completed projects focusing on human resource management, executive recruitment, compensation and pay plan development, and policy development.
                </p>
            </section>
            
          <div className="container">
            <div className='row mt-5 justify-content-center'>
              <div className='col-3 city-logo'><a href='https://www.abilenetx.gov' target='blank'><img src={Abilene} alt="abileneLogo"></img></a></div>
              <div className='col-3 city-logo'><a href='https://https://www.cityofbalchsprings.com' target='blank'><img src={BalchSprings} alt="balchLogo"></img></a></div>
              <div className='col-3 city-logo'><a href='https://www.fatetx.gov' target='blank'><img src={Fate} alt="fateLogo"></img></a></div>
              <div className='col-3 city-logo'><a href='https://www.forneytx.gov' target='blank'><img src={Forny} alt="fornyLogo"></img></a></div>
              
              </div>
              <div className='row mt-5 justify-content-center'>
              <div className='col-3 city-logo'><a href='http://www.heathtx.com' target='blank'><img src={Heath} alt="heathLogo"></img></a></div>
              <div className='col-3 city-logo'><a href='https://www.cityofjosephinetx.com' target='blank'><img src={Josephine} alt="josephineLogo"></img></a></div>
              <div className='col-3 city-logo'><a href='https://www.littleelm.org' target='blank'><img src={LittleElm} alt="littleElm"></img></a></div>
              <div className='col-3 city-logo'><a href='https://https://www.cityofbalchsprings.com' target='blank'><img src={Melissa} alt="melissaLogo"></img></a></div>
            </div>
          </div>
            <div className="row justify-content-between">
              <div className="col-sm-4 m-0">
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
              <div className="col-sm-4">
                <div className="row justify-content-center">
                  <img src="place-holder" alt="HumanResources"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder" alt="HumanResources"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder" alt="HumanResources"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder" alt="HumanResources"></img>
                </div>
                <div className="row justify-content-center">Description of service</div>
              </div>
              <div className="col-sm-4 margin">
                <div className="row justify-content-center">
                  <img src="place-holder" alt="HumanResources"></img>
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
