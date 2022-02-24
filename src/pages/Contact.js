import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import "./contact.css";
import Footer from "../components/Footer";
import ContactMain from "../images/services-main.png";

function Contact() {
  let [subject, setSubject] = useState('')
  let [message, setMessage] = useState('')

  const sendMail = () => {
    window.open(`mailto:info@dcmunicipalconsulting.com?subject=${subject}&body=${message}`)
  }

  return (
    <div className="contact-env">
      <Navbar />
      <section id="contact">
        <div className="row contact-main-container m-0 justify-content-center align-items-center" id="shadow">
          <img
            src={ContactMain}
            className="contact-main-img p-0"
            alt="contact-main"
          ></img>
          <br />
          <h2 className="text-center text-white text-md-start p-0 ps-md-5 top-left header-text-lg">Contact Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-10">
              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <form id="contact-form" action="#" method="get">
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required=""
                      onInput={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="col-8">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required=""
                      onInput={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="col-md-offset-2 col-md-2 col-sm-offset-3 col-sm-2">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control btn-sm"
                      name="submit"
                      onClick={sendMail}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4 col-sm-8">
              <div className="contact-info" data-wow-delay="0.4s">
                <div className="row contact-info">
                <h1>Katie Corder, Partner</h1>
                  <div className="col-3">
                    <p className='phone m-0'>phone</p>
                  </div>
                  <div className="col-9">
                    <p className="m-0">214-926-3283</p>
                  </div>
                  <div className="col-3">
                    <p className='email m-0'>email</p>
                  </div>
                  <div className="col-9">
                    <a
                      className="link-style contact-info"
                      href="mailto:info@dcmunicipalconsulting.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Katie@dcmunicipalconsulting.com
                    </a>
                  </div>
                </div>
                <div className="row contact-info">
                  <h1>Molly Deckert, Partner</h1>
                  <div className="col-3">
                    <p className='phone m-0'>phone</p>
                  </div>
                  <div className="col-9">
                    <p className="m-0">816-804-2818</p>
                  </div>
                  <div className="col-3">
                    <p className='email m-0'>email</p>
                  </div>
                  <div className="col-9">
                    <a
                      className="link-style contact-info"
                      href="mailto:info@dcmunicipalconsulting.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Molly@dcmunicipalconsulting.com
                    </a>
                  </div>
                </div>

                <p className="fa fa-map-marker contact-info">
                    DC Municipal Consulting<br></br> PO Box 60039 Dallas, Tx 75360
                </p>
                <p className="fa fa-comment">
                  <a
                    className="link-style contact-info"
                    href="mailto:info@dcmunicipalconsulting.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Info@dcmunicipalconsulting.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
