import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import BioCardsHome from "../components/BioCardsHome";
import HomeMain2 from "../images/home-main-image2.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="row m-0 justify-content-center">
        <section className="w-100 p-0">
          <div className="row home-main-container m-0" id="shadow">
            <img src={HomeMain2} alt="home-main" className="p-0"></img>
            <h2 className="top-left text-white w-100">
              Your people, your process, <br></br>your strategies, your
              synergies…
            </h2>
          </div>
        </section>
        <div
          className="row justify-content-center margin"
          style={{ width: "1000px" }}
        >
          {/* <Blog /> */}
          <section
            className="row justify-content-center"
            style={{ width: "1000px" }}
          >
            <p className="body-text">
              Your people, your process, your strategies, your synergies… Your
              city is more than a collection of streets and buildings. It’s a
              rich set of collaborations and relationships focused on making a
              community a better place. Let DC Municipal Consulting’s 40 years
              of combined experience in municipal government and consulting in
              human resource management, executive recruitment, compensation and
              pay plan development, and policy development help your city
              achieve its goals.
            </p>

            <BioCardsHome />
            
          </section>
        </div>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
