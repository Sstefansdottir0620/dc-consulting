import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
// import Header from "../components/Header"
import BioCardsHome from "../components/BioCardsHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='container-fluid '>
        <div className='row justify-content-center'
        style={{ width: "1000px" }}>
        <h5>Welcome to DC Municipal Consulting</h5>
              {/* <Blog /> */}
              < section className='row justify-content-center'
              style={{ width: "1000px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et dui id justo finibus
                sollicitudin at et metus. Ut feugiat tellus nec metus commodo,
                sed suscipit nisi gravida. Duis eget vestibulum quam, ut
                porttitor sem. Donec sagittis mi sollicitudin turpis
                <BioCardsHome/>
            </section>
        
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Home;
