import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section text-end mx-4">
      Socials
      <div class="container text-end ">
        <div class="row row-spacing justify-content-md-end">
          <div class="col-md-2">
            <div className="description">
            <a href="https://github.com/Sfor-za" target="_blank"
                  className="social-link mt-auto mr-5" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>Github</a>
            </div>
          </div>
          
          <div class="col-md-2">
            <div className="description">
            <a href="https://www.linkedin.com/in/aditya-antony-thomas/" target="_blank"
                  className="social-link mt-auto mr-5" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
          </div>
        </div>
        <div class="row row-spacing justify-content-md-end">
          <div class="col-md-2">
            <div className="description">
            <a href="https://github.com/Sfor-za" target="_blank"
                  className="social-link mt-auto mr-5" rel="noopener noreferrer">
              <i class="fa-solid fa-file"></i>Resume</a>
            </div>
          </div>
          <div class="col-md-2">
            <div className="description">
            <a href="mailto:adityaantonythomas@gmail.com"
                  className="social-link mt-auto mr-5">
            <i class="fa-solid fa-envelope"></i>Gmail</a>
            </div>
          </div>
          <div class="col-md-2">
            <div className="description">
            <a href="https://www.instagram.com/adii__aditya/" target="_blank"
                  className="social-link mt-auto mr-5" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram"></i>Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
