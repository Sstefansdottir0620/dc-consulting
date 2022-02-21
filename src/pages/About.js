import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BioCards from "../components/BioCards";

function About() {
  return (
    <div>
      <Navbar />
      
      <div className='container-fluid row justify-content-center'>
      <div className='row justify-content-center margin'
        style={{ width: "1000px" }}>
        <h2 class="px-4 mx-1">About Us</h2>
              < section className='row justify-content-center'>
                <span>
                DC Municipal Consulting (DCMC) was formed in August of 2017 as a women-owned firm specializing in consulting for local governments. DCMC has completed projects focusing on human resource management, executive recruitment, compensation and pay plan development, and policy development, including:

                </span>
            </section>
            </div>

        <BioCards />
      </div>
      <Footer />
    </div>
  );
}

export default About;
