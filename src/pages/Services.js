import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeMain2 from "../images/home-main-image2.png";
import Abilene from "../images/abilene-logo.png";
import BalchSprings from "../images/balchsprings-logo.png";
import Fate from "../images/fate-logo.png";
import Forny from "../images/forny-logo.png";
import Heath from "../images/heath-logo.png";
import Josephine from "../images/josephine-logo.png";
import LittleElm from "../images/elm-logo.png";
import Melissa from "../images/melissa.png";
import MountPleasant from "../images/mountpleasant-logo.png";
import RoyCity from "../images/roycity-logo.png";
import CowTX from "../images/cowtexas-logo.png";
import CityAledo from "../images/cityaledo - logo.png";

function Services() {
  return (
    <div className="services-env">
      <Navbar />
      <div id="services" className="service-main-container">
        <section className="w-100">
          <div
            className="row m-0 position-relative justify-content-center align-items-center"
            id="shadow"
          >
            <img
              src={HomeMain2}
              className="home-main-img p-0"
              alt="service-main"
            ></img>
            <br />
            <h2 className="text-center text-md-start p-0 ps-md-5 top-left header-text-lg text-white">
              Clients and Services
            </h2>
          </div>
          <div className="container justify-content-center">
            <section className="row mb-5 mt-5 body-text ">
              <p>
                DC Municipal Consulting <b>(DCMC)</b> was formed in August of
                2017 as a women-owned firm specializing in consulting for local
                governments. DCMC has completed projects focusing on{" "}
                <b>Human Resource Management</b>, <b>Executive Recruitment</b>,{" "}
                <b>Compensation and Pay Plan Development</b>, and{" "}
                <b>Policy Development</b>.
              </p>
            </section>

            <div className="container mb-5">
              <div className="row mt-5 px-5 justify-content-center">
                <div className="col city-logo">
                  <a href="https://www.abilenetx.gov" target="blank">
                    <img src={Abilene} alt="abileneLogo" />
                  </a>
                </div>
                <div className="col city-logo">
                  <a
                    href="https://https://www.cityofbalchsprings.com"
                    target="blank"
                  >
                    <img src={BalchSprings} alt="balchLogo" />
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.fatetx.gov" target="blank">
                    <img src={Fate} alt="fateLogo" />
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.forneytx.gov" target="blank">
                    <img src={Forny} alt="fornyLogo" />
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="http://www.heathtx.com" target="blank">
                    <img src={Heath} alt="heathLogo"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.cityofjosephinetx.com" target="blank">
                    <img src={Josephine} alt="josephineLogo"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.littleelm.org" target="blank">
                    <img src={LittleElm} alt="littleElm"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.cityofmelissa.com/" target="blank">
                    <img src={Melissa} alt="melissaLogo"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://mpcity.net/" target="blank">
                    <img src={MountPleasant} alt="mountPleasant"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://roysecity.com/" target="blank">
                    <img src={RoyCity} alt="RoyCity"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.cowtx.org/" target="blank">
                    <img src={CowTX} alt="CowTexas"></img>
                  </a>
                </div>
                <div className="col city-logo">
                  <a href="https://www.aledotx.gov/" target="blank">
                    <img src={CityAledo} alt="cityAledo"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-2 justify-content-between service-row">
              <div className="col-sm-4 m-0">
                <div className="row justify-content-center">
                  <div className="col text-left">
                    <div className="row background align-items-center m-0">
                      <h1 className="text-white m-0">Compensation/Pay Plan Review and Market Analysis</h1>
                    </div>
                    <ul>
                      <li>City of Aledo, Texas</li>
                      <li>City of Athens, Texas</li>
                    <li>City of Balch Springs, Texas</li>
                      <li>City of Fate, Texas</li>
                      <li>City of Forney, Texas</li>
                      <li>City of Heath, Texas</li>
                      <li>City of Josephine, Texas</li>
                      <li>City of Melissa, Texas (2019 and 2021)</li>
                      <li>City of Mount Pleasant, Texas</li>
                      <li>City of Royse City, Texas</li>
                      <li>City of Watauga, Texas</li>
                      <li>City of Wilmer, Texas</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0">
                <div className="row justify-content-center">
                  <div className="col text-left">
                    <div className="row background align-items-center m-0">
                      <h1 className='text-white'>Executive Recruitment</h1>
                    </div>
                    <ul>
                      <li>City of Aledo, Texas - Public Works Director</li>
                      <li>City of Josephine, Texas - City Administrator</li>
                      <li>
                        City of Mount Pleasant, Texas -Police Chief, Building
                        Official, Public Works Director/City Engineer, Parks
                        Director, and Planner
                      </li>
                      <li>City of Seagoville, Texas - City Secretary (in progress)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0">
                <div className="row justify-content-center">
                  <div className="col text-left">
                    <div className="row background align-items-center m-0">
                      <h1 className='text-white'>Performance Evaluation Tool Development</h1>
                    </div>
                    <ul>
                      <li>Town of Little Elm, Texas (360 Performance Review Survey Tool Creation and Administration</li>
                      <li>City of MountPleasant, Texas</li>
                      <li>Strategic Government Resources (SGR)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0">
                <div className="row justify-content-center">
                  <div className="col text-left">
                    <div className="row background align-items-center m-0">
                      <h1 className='text-white'>
                      Policy and Procedures Development
                      </h1>
                    </div>
                    <ul>
                      <li>City of Abilene, Texas (Personnel Manual Rewrite and Purchasing Policy Training)</li>
                      <li>Town of Little Elm, Texas (Hiring Policy Development and Training)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0">
                <div className="row justify-content-center">
                  <div className="col text-left">
                    <div className="row background align-items-center m-0">
                      <h1 className='text-white'>Job Description Development</h1>
                    </div>
                    <ul>
                      <li>City of Aledo, CowTexas</li>
                      <li>City of Balch Springs, Texas</li>
                      <li>City of Heath, Texas</li>
                      <li>City of Mount Pleasant, Texas</li>
                      <li>Strategic Government Resources (SGR)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 m-0">
                <div className="row justify-content-center">
                  <div className="col text-left">
                    <div className="row background align-items-center m-0">
                      <h1 className='text-white'>Other Projects</h1>
                    </div>
                    <ul>
                      <li>City of Aledo, Texas (Organizational Assessment)</li>
                      <li>City of Heath, Texas (Grant Writing)</li>
                    </ul>
                  </div>
                </div>
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

