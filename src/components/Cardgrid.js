import React from 'react'
import './Cardgrid.css'

export default function Cardgrid() {
  return (
    <div class="container">
      <div className="card-system">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card project-card h-100 my-10">
              <img src={require('./Max-planck.png')} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Tribute Page</h5>
                <p class="card-text">This was a project I was looking forward too. Being a Physics
                  Enthusiast and Starting my Journey in Web Dev, it was only natural
                  to end up with this.</p>
                <a href="https://github.com/Sfor-za/FCC-tribute-page" target="_blank"
                  class="btn btn-primary project-link mt-auto" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card project-card h-100 my-10">
              <img src={require('./product-page-imitation.png')} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Product Landing Page</h5>
                <p class="card-text">While learning Web Dev, I started getting lured into the world of
                  bikes and when this project came up, decided to do an Imitation
                  page of the bike I liked.</p>
                <a href="https://github.com/Sfor-za/FCC-product-landing-project" target="_blank"
                  class="btn btn-primary project-link mt-auto" rel="noopener noreferrer">GitHub Link</a>
              </div>
            </div>
          </div>
        </div>
        </div>
  </div>
    
  )
}
