import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contact-section mx-4">
      <div className="text-center greeting">
      Socials :
      </div>
      
        <div className="row row-spacing justify-content-md-center">
          <div className="col-md-2">
            <div className="description">
              <a
                href="https://github.com/Sfor-za"
                target="_blank"
                className="social-link mt-auto"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>Github
              </a>
            </div>
          </div>

          <div className="col-md-2">
            <div className="description">
              <a
                href="https://www.linkedin.com/in/aditya-antony-thomas/"
                target="_blank"
                className="social-link mt-auto ml-n4"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="description">
              <a
                href="https://github.com/Sfor-za"
                target="_blank"
                className="social-link mt-auto ml-n4"
                rel="noopener noreferrer"
                >
                <i className="fa-solid fa-file"></i>Resume
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="description">
              <a
                href="mailto:adityaantonythomas@gmail.com"
                className="social-link mt-auto ml-n4"
                >
                <i className="fa-solid fa-envelope"></i>Gmail
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="description">
              <a
                href="https://www.instagram.com/adii__aditya/"
                target="_blank"
                className="social-link mt-auto ml-n4"
                rel="noopener noreferrer"
                >
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}
