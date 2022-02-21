import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import BioCardsHome from "../components/BioCardsHome";
import HomeMain from "../images/home-main.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='row justify-content-center'>
      <section className="w-100">
        <div className='row'>
      <img src={HomeMain} alt="home-main"></img>
      </div>
      </section>
        <div className='row justify-content-center margin'
        style={{ width: "1000px" }}>
        <h6 class="px-4 mx-1">Welcome to DC Municipal Consulting</h6>
              {/* <Blog /> */}
              < section className='row justify-content-center'
              style={{ width: "1000px" }}>
                <span class="px-3 mx-2">
                Your people, your process, your strategies, your synergies… Your city is more than a collection of streets and buildings. It’s a rich set of collaborations and relationships focused on making a community a better place. 

Let DC Municipal Consulting’s 40 years of combined experience in municipal government and consulting in human resource management, executive recruitment, compensation and pay plan development, and policy development help your city achieve its goals. 

                </span>
                
                <BioCardsHome/>
            </section>
        
        </div>
      </div>
      <Header />
      <Footer />
    </div>

  );
}

export default Home;
