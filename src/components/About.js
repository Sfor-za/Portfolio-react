import React from "react";
import "./About.css";

export default function about() {
  return (
    <div className="container mt-5 pt-5">
      <div>
        <h5 className="greeting mx-n5">Hello there!!</h5>
      </div>
      <div className="name about-content mx-n5">I'm Adi</div>
      <div className="about-section ">
        I'm an self-taught front-end Dev, currently expanding my knowledge in
        the front-end world and soon in Back-end too.
        <br />
        Physics Enthusiast and Grad studied at Loyola College, Chennai.
        <br />
        Video Game connoisseur and an Average Table Tennis enjoyer,  who likes to sing sometimes.
        

      </div>
      <div className="tools">
        The things I use :
        <div class="container text-center ">
          <div class="row row-spacing justify-content-md-center">
            <div class="col-md-3"><img className="css-image"src={require('./images/html-logo.png')} alt="html logo"/><div className="description">HTML</div></div>
            <div class="col-md-3"><img className="css-image" src={require('./images/css-logo.png')} alt="css logo"/><div className="description">CSS</div></div>
            <div class="col-md-3 js-image-container"><img className="js-image mb-n4"src={require('./images/jsc-logo-2.webp')} alt="js logo"/><div className="js-description">JavaScript</div></div>
          </div>
          <div class="row row-spacing justify-content-md-center">
            <div class="col-md-3"><img className="css-image"src={require('./images/react-logo.webp')} alt="html logo"/><div className="description">React.js</div></div>
            <div class="col-md-3"><img className="css-image" src={require('./images/bootstrap-logo.png')} alt="css logo"/><div className="description">Bootstrap</div></div>
            <div class="col-md-3"><img className="css-image my-0"src={require('./images/vercel-logo.png')} alt="js logo"/><div className="description">Vercel</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
