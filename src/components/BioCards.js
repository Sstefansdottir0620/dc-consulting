import React, { Component } from "react";
import Profile01 from "../images/profile01.jpg";
import Profile02 from "../images/profile02.jpg";

class BioCards extends Component {
  render() {
    return (
      <div
        className='container-fluid justify-content-between'
        style={{ width: "1000px" }}>
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          <div className='col'>
            <div class='card'>
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
                  experiences include federal grant writing for housing and
                  economic development projects as an independent contractor and
                  executive level recruitment for a national executive search
                  firm. As a recruiter, she worked directly with local
                  government governing bodies, professional staff, and
                  prospective executives to match the right candidate 1 with the
                  right opportunity. Molly successfully placed over 50
                  executives in 25 different Texas communities during her 4 year
                  tenure as a recruiter. Molly has also previously served as
                  Assistant City Administrator for the City of Lenexa Kansas,
                  Senior Budget Analyst for the Office of Budget and Planning,
                  District of Columbia Government in Washington, D.C. and
                  Project Manager/Public Policy Analyst for the National
                  Hispanic Housing Council in Washington, D.C. During her nine
                  years with the City of Lenexa, Molly was responsible for a
                  wide variety of functions including government affairs,
                  economic development, neighborhood revitalization, municipal
                  courts and social services relations. Molly has a Master of
                  Public Administration degree from The George Washington
                  University and a Bachelor of Arts degree from the University
                  of Wisconsin-La Crosse. She also attended the Senior Executive
                  Institute at the University of Virginia.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card'>
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
                  executive recruitment, citizen surveys, grant writing,
                  community award applications, curriculum writing for employee
                  training, development of a webinar series for executive level
                  managers, and market/compensation studies. During her 4 years
                  of consulting as an executive recruiter for a national
                  executive search firm, Katie worked directly with local
                  government governing bodies, professional staff, and
                  prospective executives to match the right candidate with the
                  right opportunity. Katie successfully placed over 30
                  executives in 15 different communities. Katie has also
                  previously served as Assistant City Manager for the City of
                  Rowlett, Texas. During her tenure with Rowlett, Katie oversaw
                  communications, library services, and parks and recreation.
                  She was also responsible for agenda management, budget
                  preparation, and strategic planning. Katie also held
                  management positions for the communities of Sedona, Arizona,
                  and Olathe, Kansas. A graduate of Leadership ICMA and the
                  Senior Executive Institute at the University of Virginia,
                  Katie holds a Bachelor of Business Administration degree from
                  the University of Tulsa and a Master of Public Administration
                  degree from the University of Kansas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BioCards;
