import React from 'react'
import popupImage from "../images/popupImage.png";
import CityAledo from "../images/cityaledo - logo.png";
import '../PopUp.css'

function PopUp({trigger, triggerSet}) {
  return (trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 p-0">
                    <img src={popupImage} alt="popupImage" className='popup-image' onClick={() => window.location.href = "https://www.aledotx.gov/"}></img>
                </div>
                <div className="col-sm-4 popup-right p-5 p-sm-2">
                    <div className="row d-flex justify-content-center h-100">
                        <div className="col-8 popup-content-wrap">
                            <div className="text-center">
                                <h1>To apply, please send a cover letter and resume to</h1>
                <p className="fa fa-comment">
                  <a
                    className="link-style contact-info"
                    href="mailto:info@dcmunicipalconsulting.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    recruiting@dcmunicipalconsulting.com
                  </a>
                </p>
                <h1>For more information please click on the link below</h1>
                <div className="col city-logo">
                  <a href="https://www.aledotx.gov/human-resources" target="blank">
                    <img src={CityAledo} alt="cityAledo"></img>
                  </a>
                </div>
                                <button className="close-btn" onClick={() => triggerSet(false)}>close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) : "";
}

export default PopUp