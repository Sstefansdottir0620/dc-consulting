import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BioCards02 from "../components/BioCards02";
import AboutMain from "../images/about-main-image.png";

function About() {
  return (
    <div className='about-env'>
      <Navbar />
      <div id='about' className="about-main-container">
        <section className="w-100 p-0 mb-5">
          <div className="row m-0" id="shadow">
            <img src={AboutMain} className="about-main-img p-0" alt="about-main"></img>
            <br />
            <h2 className="top-left text-white">About Us</h2>
          </div>
        </section>
        <BioCards02 />
      </div>
      <Footer />
    </div>

  );
}

export default About;
