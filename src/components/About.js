import React from "react";
import "./About.css";

export default function about() {
  return (
    <div className="container mt-5 pt-5">
      <div>
        <h5 className="greeting mx-4">Hello there!!</h5>
      </div>
      <div className="name about-content mx-3">I'm Adi</div>
      <div className="about-section mx-4">
        I'm an self-taught front-end Dev, currently expanding my knowledge in
        the front-end world and soon in Back-end too.
        <br />
        <br />
        Physics Enthusiast and Grad studied at Loyola College, Chennai.
        <br />
        <br />
        <br />

      </div>
      <div className="tools mx-4">
        The things I use :
        <div class="container text-center ">
          <div class="row row-spacing justify-content-md-center">
            <div class="col-md-3"><img className="css-image"src={require('./html-logo.png')} alt="html logo"/><div className="description">HTML</div></div>
            <div class="col-md-3"><img className="css-image" src={require('./css-logo.png')} alt="css logo"/><div className="description">CSS</div></div>
            <div class="col-md-3 js-image-container"><img className="js-image mb-n4"src={require('./jsc-logo-2.webp')} alt="js logo"/><div className="js-description">JavaScript</div></div>
          </div>
          <div class="row row-spacing justify-content-md-center">
            <div class="col-md-3"><img className="css-image"src={require('./react-logo.webp')} alt="html logo"/><div className="description">React.js</div></div>
            <div class="col-md-3"><img className="css-image" src={require('./bootstrap-logo.png')} alt="css logo"/><div className="description">Bootstrap</div></div>
            <div class="col-md-3"><img className="css-image my-0"src={require('./vercel-logo.png')} alt="js logo"/><div className="description">Vercel</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
