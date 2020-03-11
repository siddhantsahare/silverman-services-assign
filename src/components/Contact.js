import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <br />
      <br />
      <br />
      <div className="row">
        <div className="container">
          <div className="col l6 m12 s12 contact-1">Let’s work together !</div>
        </div>

        <div className="col l6 m12 s12 center contact-2">
          <div className="form">
            <br />
            <br />
            <div className="contact-text-primary">Get in touch</div>
            <br />
            <br />
            <div className="btn btn-block form-text">Your Name</div>
            <div className="btn btn-block form-text">Your Email</div>
            <div className="btn btn-block form-text-2">Your Message</div>
            <div className="btn form-btn">Submit</div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
