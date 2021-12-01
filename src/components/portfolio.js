import React from 'react';
import portfolioData from '../portfolio.json';

const portfolio = function(){
    portfolioData.map((project) => {
    return (
        <>
        <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg"></img>
          <span className="card-title">{project.name}</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
  </>
    )
    })
};

export default portfolio;