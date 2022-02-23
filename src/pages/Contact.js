import React from "react";
import Navbar from "../components/Navbar";
// import "./contact.css";
import Footer from "../components/Footer";
import ContactMain from "../images/services-main.png";

function Contact() {
  return (
    <div className="contact-env">
      <Navbar />
      <section id="contact">
        <div className="row contact-main-container" id="shadow">
          <img
            src={ContactMain}
            className="contact-main-img"
            alt="contact-main"
          ></img>
          <br />
          <h2 className="top-left">Contact Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-10">
              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <form id="contact-form" action="#" method="get">
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>
                  <div className="col-md-offset-2 col-md-2 col-sm-offset-3 col-sm-2">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control btn-sm"
                      name="submit"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-5 col-sm-8">
              <div className="contact-info" data-wow-delay="0.4s">
                <div className="row contact-info">
                <h1>Katie Corder, Partner</h1>
                  <div className="col-md-3">
                    <p className='phone'>phone</p>
                  </div>
                  <div className="col-md-6">
                    <p>214-926-3283</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p className='email'>email</p>
                  </div>
                  <div className="col-md-6">
                    {" "}
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
                  <p className='phone'>phone</p>
                  </div>
                  <div className="col-6">
                    <p>816-804-2818</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                  <p className='email'>email</p>
                  </div>
                  <div className="col-6">
                    {" "}
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
