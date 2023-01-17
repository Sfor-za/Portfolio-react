import React from 'react'
import './Cardgrid.css'

export default function Cardgrid() {
  return (
    <div className="container project-grid">
      <div className="greeting">My Latest Projects :</div>
      <div className="card-system">
        <div className="row row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-spacing">
          <div className="col">
            <div className="card project-card h-100 my-10">
              <img src={require('./images/weather-app-ss.png')} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text mb-2">First useful project. Used APIs and React Hooks and Learned a lot too.</p>
                <a href="https://github.com/Sfor-za/new-weather-app" target="_blank"
                  className="btn btn-primary project-link mt-auto" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                  <a href="https://weatherapp-sforza.vercel.app/" target="_blank"
                  className="btn btn-primary project-link mx-5" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card project-card h-100 my-10">
              <img src={require('./images/product-page-imitation.png')} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Product Landing Page</h5>
                <p className="card-text">While learning Web Dev, I started getting lured into the world of
                  bikes and when this project came up, decided to do an Imitation
                  page of the bike I liked.</p>
                <a href="https://github.com/Sfor-za/FCC-product-landing-project" target="_blank"
                  className="btn btn-primary project-link mt-auto mr-5" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://fcc-product-landing-project.vercel.app/" target="_blank"
                  className="btn btn-primary project-link mx-5" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
        </div><div className="row row-cols-xs-2 row-cols-sm-2 row-cols-md-2 row-spacing">
          <div className="col">
            <div className="card project-card h-100 my-10">
              <img src={require('./images/Max-planck.png')} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tribute Page</h5>
                <p className="card-text mb-2">This was a project I was looking forward too. Being a Physics
                  Enthusiast and Starting my Journey in Web Dev, it was only natural
                  to end up with this.</p>
                <a href="https://github.com/Sfor-za/FCC-tribute-page" target="_blank"
                  className="btn btn-primary project-link mt-auto" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                  <a href="https://fcc-tribute-page-alpha.vercel.app/" target="_blank"
                  className="btn btn-primary project-link mx-5" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card project-card h-100 my-10">
              <img src={require('./images/product-page-imitation.png')} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Product Landing Page</h5>
                <p className="card-text">While learning Web Dev, I started getting lured into the world of
                  bikes and when this project came up, decided to do an Imitation
                  page of the bike I liked.</p>
                <a href="https://github.com/Sfor-za/FCC-product-landing-project" target="_blank"
                  className="btn btn-primary project-link mt-auto mr-5" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://fcc-product-landing-project.vercel.app/" target="_blank"
                  className="btn btn-primary project-link mx-5" rel="noopener noreferrer"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
