import React, { Component } from "react";
import "../styles/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Get in touch</h1>
            <p className="lead">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us...
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-6">
              <div className="card">
                <i className="fas fa-phone"></i>
                <p>Talk to Sales</p>
                <div className="card-body">
                  <h6 className="card-title">
                    Just pick up the phone to chat with our sales team.
                  </h6>
                  <h3>+1 877 29 0687</h3>
                </div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="card">
                <i className="fas fa-envelope"></i>
                <p>Contact with mail</p>
                <div className="card-body">
                  <h6 className="card-title">
                    For questions on recruitment or employment use mail.
                  </h6>
                  <h3>mans_fashion@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
