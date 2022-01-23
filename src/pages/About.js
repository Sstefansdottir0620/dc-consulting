import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BioCards from "../components/BioCards";

function About() {
  return (
    <div>
      <Navbar />
      
      <div className='container-fluid'>
        <BioCards />
      </div>
      <Footer />
    </div>
  );
}

export default About;
