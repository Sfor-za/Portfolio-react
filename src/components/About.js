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
        I'm a self-taught front-end Dev, currently expanding my knowledge in
        the front-end world and soon in Back-end too.
        <br />
        Physics Enthusiast and Grad studied at Loyola College, Chennai.
        <br />
        Video Game connoisseur and an Average Table Tennis enjoyer,  who likes to sing sometimes.
        

      </div>
      <div className="tools">
         <div className="greeting">The things I use :</div> 
        <div className="container text-center ">
          <div className="row row-cols-auto  justify-content-center logo">
            <div className="col-4"><img className="css-image"src={require('./images/html-logo.png')} alt="html logo"/><div className="description">HTML</div></div>
            <div className="col-4"><img className="css-image" src={require('./images/css-logo.png')} alt="css logo"/><div className="description">CSS</div></div>
            <div className="col-4"><img className="css-image" src={require('./images/jsc-logo.png')} alt="js logo"/><div className="description">JavaScript</div></div>
          </div>
          <div className="row row-cols-auto justify-content-center logo">
            <div className="col-4"><img className="css-image"src={require('./images/react-logo.webp')} alt="html logo"/><div className="description">React.js</div></div>
            <div className="col-4"><img className="css-image" src={require('./images/bootstrap-logo.png')} alt="css logo"/><div className="description">Bootstrap</div></div>
            <div className="col-4"><img className="css-image my-0"src={require('./images/vercel-logo.png')} alt="js logo"/><div className="description">Vercel</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
