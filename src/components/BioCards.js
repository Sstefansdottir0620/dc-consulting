import React, { Component } from "react";
import Profile01 from "../images/profile01.jpg";
import Profile02 from "../images/profile02.jpg";

class BioCards extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-between my-5">
            <div className="col-md-6">
                <img src={Profile01} className="card-img-top py-3 py-md-0" alt="Molly Deckert" />
            </div>
            <div className="col-md-6">
                <h5>Molly Deckert, Partner</h5>
                <p className="card-text">
                  Molly Deckert has provided consulting services to
                  municipalities for ten years. Prior to forming <b>DCMC</b>, her key
                  project experiences included federal grant writing for housing
                  and economic development projects as an independent contractor
                  and executive level recruitment for a national executive
                  search firm.
                  <p>As a recruiter, she worked directly with
                  governing bodies, professional staff, and prospective
                  executives to match the right candidate with the right
                  opportunity. Molly successfully placed over 50 executives in
                  25 Texas communities during her four- year tenure as a
                  recruiter.</p>
                  <p>Molly previously served as Assistant City
                  Administrator for the City of Lenexa Kansas; Senior Budget
                  Analyst for the Office of Budget and Planning, District of
                  Columbia Government in Washington, D.C.; and Project
                  Manager/Public Policy Analyst for the National Hispanic
                  Housing Council in Washington, D.C.</p>
                  <p>During her nine years with
                  the City of Lenexa, Molly oversaw government affairs, economic
                  development, neighborhood revitalization, municipal courts and
                  social services relations.</p>
                  <p></p>Molly has a Master of Public
                  Administration degree from The George Washington University
                  and a Bachelor of Arts degree from the University of
                  Wisconsin-La Crosse. She also attended the Senior Executive
                  Institute at the University of Virginia.</p>
                
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-md-6">
              <img
                src={Profile02}
                className="card-img-top py-3 py-md-0"
                alt="Katie Corder"
              />
            </div>
            <div className="col-md-6">
                <h5>Katie Corder, Partner</h5>
                <p className="card-text">
                  For the past ten years, Katie has been engaged in municipal
                  consulting. Her professional project experience includes
                  executive recruitment, citizen surveys, grant writing,
                  community award applications, curriculum writing for employee
                  training, development of a webinar series for executive level
                  managers, and market/compensation studies.</p>
                  <p className="card-text">During her four
                  years of consulting as an executive recruiter for a national
                  executive search firm, Katie worked directly with governing
                  bodies, professional staff, and prospective executives to
                  match the right candidate with the right opportunity. Katie
                  successfully placed over 30 executives in 15 communities.</p>

                  <p className="card-text">Katie previously served as Assistant City Manager for the City
                  of Rowlett, Texas. During her tenure with Rowlett, Katie
                  oversaw communications, library services, and parks and
                  recreation. She managed City Council agendas, prepared
                  budgets, and developed strategic planning. Katie also held
                  management positions for the communities of Sedona, Arizona,
                  and Olathe, Kansas.</p>
                  <p className="card-text">A graduate of Leadership ICMA and the
                  Senior Executive Institute at the University of Virginia,
                  Katie holds a Bachelor of Business Administration degree from
                  the University of Tulsa and a Master of Public Administration
                  degree from the University of Kansas.</p>
              
            </div>
        </div>
    </div>
    );
  }
}

export default BioCards;
