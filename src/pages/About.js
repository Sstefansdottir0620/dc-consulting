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
        <section className="w-100">
          <div className="row mb-5" id="shadow">
            <img src={AboutMain} className="about-main-img" alt="about-main"></img>
            <br />
            <h2 className="top-left text-white">About Us</h2>
          </div>
          </section>
        <div className='container justify-content-center' style={{ width: "1000px" }}>
            < section className='row mb-5 body-text'>
                <p>
                DC Municipal Consulting (DCMC) was formed in August of 2017 as a women-owned firm specializing in consulting for local governments. DCMC has completed projects focusing on human resource management, executive recruitment, compensation and pay plan development, and policy development.
                </p>
            </section>
        </div>
        <BioCards02 />
      </div>
      <Footer />
    </div>
  );
}

export default About;
