import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="#">
                Home
              </Link>
              <span className="breadcrumb-item active">Contact</span>
            </nav>
          </div>
        </div>
      </div>
      <>
        {/* Contact Start */}
        <div className="container-fluid">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Contact Us</span>
          </h2>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form bg-light p-30">
                <div id="success" />
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows={8}
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <div className="bg-light p-30 mb-30">
                <iframe
                  style={{ width: "100%", height: 250 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.30354190985!2d76.61481748261635!3d30.7321872875989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1719214886106!5m2!1sen!2sin"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
              <div className="bg-light p-30 mb-3">
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-primary mr-3" />
                  Chandigarh, India
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope text-primary mr-3" />
                  info@example.com
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt text-primary mr-3" />
                  +012 345 67890
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </>
    </>
  );
}

export default ContactUs;
