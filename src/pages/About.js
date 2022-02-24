import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BioCards02 from "../components/BioCards02";
import AboutMain from "../images/about-main-image.png";

function About() {
  return (
    <div className='about-env'>
      <Navbar />
      <div id='about' className="about-main-container m-0">
        <section className="w-100 p-0 mb-5">
          <div className="row m-0 position-relative justify-content-center align-items-center" id="shadow">
            <img src={AboutMain} className="about-main-img p-0" alt="about-main"></img>
            <br />
            <h2 className="text-center text-md-start p-0 ps-md-5 top-left text-white header-text-lg">About Us</h2>
          </div>
        </section>
        <BioCards02 />
      </div>
      <Footer />
    </div>

  );
}

export default About;
