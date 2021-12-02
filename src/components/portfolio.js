import React from 'react';
import portfolioData from '../portfolio.json';

const portfolio = function () {
  return (
    <div className="row">
   {portfolioData.map((project) => {
    return (
        <div key={project.name} className="col s7 m4 l3">
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-image">
              <img className="responsive-img" src={process.env.PUBLIC_URL + project.image}></img>
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
    )
    })}
    </div>);
};

      export default portfolio;