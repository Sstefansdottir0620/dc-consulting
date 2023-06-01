import React from 'react'
import popupImage from "../images/Seagoville.png";
import pdfSeagoville from "../images/pdfSeagoville.png";

import '../PopUp.css'

function PopUp({trigger, triggerSet}) {
  return (trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-4 p-0">
                    <img src={popupImage} alt="popupImage" className='popup-image' onClick={() => window.location.href = "https://drive.google.com/file/d/1HiPLnkD-LNovvl42xG2F_4-SKUzvZBj7/view?usp=sharing"}></img>
                </div>
                <div className="col-sm-4 popup-right p-5 p-sm-2">
                    <div className="row d-flex justify-content-center h-100">
                        <div className="col-8 popup-content-wrap">
                            <div className="text-center">
                                <h1>To apply, please send a cover letter and resume to</h1>
                <p className="fa fa-comment">
                  <a
                    className="pop-up-link-style contact-info"
                    href="mailto:info@dcmunicipalconsulting.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    recruiting@dcmunicipalconsulting.com
                  </a>
                </p>
                <h1>For more information please click on the position summary below</h1>

                <div className="col city-logo">
                <p className="fa fa-comment">
                    
                  <a 
                  className="pop-up-link-style"
                  target="blank"
                  href="https://drive.google.com/file/d/1HiPLnkD-LNovvl42xG2F_4-SKUzvZBj7/view?usp=sharing">
                    <img className='pdf' src={pdfSeagoville} alt="pdfSeagoville"></img>
                    City Secretary- Seagoville
                  </a>
                  </p>
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