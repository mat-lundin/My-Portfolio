import React from 'react';
import portfolioData from '../portfolio.json';

const portfolio = function () {
  return (
    <div className="row">
   {portfolioData.map((project) => {
    return (
        <div key={project.name} className="col s7 m6 l3">
          <div className="card" style={{ width: '20rem' }}>
            <div className="card-image">
              <img className="responsive-img" src={process.env.PUBLIC_URL + project.image}></img>
              <span className="card-title" style={{backgroundColor: "black", opacity: 0.5}}>{project.name}</span>
            </div>
            <div className="card-content">
              <p>{project.description}</p>
            </div>
            <div className="card-action">
              {project.url && <a href={project.url}>Visit</a>}
              <a href={project.repoUrl}>Github</a>
            </div>
          </div>
        </div>
    )
    })}
    </div>);
};

      export default portfolio;