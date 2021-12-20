import React from 'react';
import portfolioData from '../portfolio.json';

const portfolio = function () {
  return (
    <div className="container">
    <div className="row">
    <div key={portfolioData[0].name} className="col s7 m6 l12">
          <div className="card large hoverable portfolio-card" style={{ width: '20rem' }}>
            <div className="card-image">
              <img className="responsive-img" src={process.env.PUBLIC_URL + portfolioData[0].image} alt={portfolioData[0].name}></img>
              {/* <span className="card-title" style={{backgroundColor: "pink", opacity: 0.89, color: 'black', padding: 0}}>{portfolioData[0].name}</span> */}
            </div>
            <div className="card-content">
            <b>{portfolioData[0].name}</b>
              <p>{portfolioData[0].description}</p>
            </div>
            <div className="card-action">
              {portfolioData[0].url && <a href={portfolioData[0].url} target="_blank">Visit</a>}
              <a href={portfolioData[0].repoUrl} target="_blank">Github</a>
            </div>
          </div>
        </div>
      

    </div>
    <div className="row">
      <br/>
   {portfolioData.map((project) => {
     if (project !== portfolioData[0])
    return (
        <div key={project.name} className="col s7 m4 l4">
          <div className="card hoverable portfolio-card" style={{ width: '20rem' }}>
            <div className="card-image">
              <img className="responsive-img" src={process.env.PUBLIC_URL + project.image} alt={project.name}></img>
              {/* <span className="card-title" style={{backgroundColor: "pink", opacity: 0.89, color: 'black', padding: 0}}>{project.name}</span> */}
            </div>
            <div className="card-content">
              <b>{project.name}</b>
              <p>{project.description}</p>
            </div>
            <div className="card-action">
              {project.url && <a href={project.url} target="_blank">Visit</a>}
              <a href={project.repoUrl} target="_blank">Github</a>
            </div>
          </div>
        </div>
    )
    })}
    </div>
    </div>
    );
};

      export default portfolio;