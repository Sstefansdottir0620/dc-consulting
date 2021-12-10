import React, { Component } from "react";
import Profile01 from "../images/profile01.jpg";
import Profile02 from "../images/profile02.jpg";

class BioCardsHome extends Component {
  render() {
    return (
      <div
        className='container-fluid justify-content-between'
        style={{ width: "1000px" }}>
        <div className='row'>
          <div className='col p-4 ml-4'>
            <div class='card p-4'>
              <img
                src={Profile01}
                className='card-img-top'
                alt='Molly Deckert'
              />
              <div className='card-body'>
                <h5 className='card-title'>Molly Deckert, Partner</h5>
                <p className='card-text'>
                  Molly has been engaged in municipal consulting for the past
                  eight years. Prior to forming DCMC, her key project
                  experiences include.....
                </p>
              </div>
            </div>
          </div>
          <div className='col p-4 ml-4'>
            <div className='card p-4'>
              <img
                src={Profile02}
                className='card-img-top'
                alt='Katie Corder'
              />
              <div className='card-body'>
                <h5 className='card-title'>Katie Corder, Partner</h5>
                <p className='card-text'>
                  For the past eight years, Katie has been engaged in municipal
                  consulting. Her professional project experience includes
                  executive recruitment...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BioCardsHome;
