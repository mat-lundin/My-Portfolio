import React from 'react';
import portfolioData from '../portfolio.json';

const portfolio = function(){
    return (
    portfolioData.map((project) => {
    return (
        // <div className="row">
    <div key= {project.name} className="col s4 m7">
      <div className="card">
        <div className="card-image">
          <img src={project.image}></img>
          <span className="card-title">{project.name}</span>
        </div>
        <div className="card-content">
          <p>{project.description}</p>
        </div>
        <div className="card-action">
          <a href={project.url}>Visit</a>
        </div>
      </div>
    </div>
//   </div>
    )
    }));
};

export default portfolio;