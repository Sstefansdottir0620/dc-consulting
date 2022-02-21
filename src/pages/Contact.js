import React from "react";
import Navbar from "../components/Navbar";
// import "./contact.css";
import Footer from "../components/Footer";
import ServicesMain from "../images/services-main.png";

function Contact() {
  return (
    <div className="contact-env">
      <Navbar />
      <section id='contact' className='contact-main-container'>
        <div className="row">
          <img src={ServicesMain} className="service-main-img" alt="service-main"></img>
            <br />
          <h2 className="top-left">Contact Us</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-sm-10'>
              <div className='wow fadeInUp' data-wow-delay='0.4s'>
                <form id='contact-form' action='#' method='get'>
                  <div className='col-md-6 col-sm-6'>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      placeholder='Name'
                      required=''
                    />
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Email'
                      required=''
                    />
                  </div>
                  <div className='col-md-12 col-sm-12'>
                    <textarea
                      className='form-control'
                      rows='5'
                      name='message'
                      placeholder='Message'
                      required=''></textarea>
                  </div>
                  <div className='col-md-offset-2 col-md-2 col-sm-offset-3 col-sm-2'>
                    <button
                      id='submit'
                      type='submit'
                      className='form-control btn-sm'
                      name='submit'>
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className='col-md-5 col-sm-8'>
              <div className='wow fadeInUp contact-info' data-wow-delay='0.4s'>
                <div className='section-title'>
                  <p>
                    Lorem ipsum dolor sit consectetur adipiscing morbi venenatis
                    et tortor consectetur adipisicing lacinia tortor morbi
                    ultricies.
                  </p>
                </div>

                <p>
                  <i className='fa fa-map-marker'></i>
                </p>
                <p>
                  <i className='fa fa-comment'></i>{" "}
                  <a className="link-style" href='mailto:info@dcmunicipalconsulting.com'target='_blank' rel="noreferrer">
                    info@dcmunicipalconsulting.com
                  </a>
                </p>
                <p>
                  <i className='fa fa-phone'>By phone: </i>
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
