import React from 'react';
import musicData from '../music.json';

const music = function() {
    return (
        <div>
        <h2>Music</h2>
        <p>In my spare time, I enjoy using digital audio workspaces (Reason, Ableton, GarageBand) to write and record music.</p>
        <div className='row'>
        {musicData.map(project => {
            return (
                <div key={project.album} className="col s7 m4 l4">
                <div className="card hoverable portfolio-card" style={{ width: '20rem' }}>
                  <div className="card-image">
                    <img className="responsive-img" src={process.env.PUBLIC_URL + project.image} alt={project.name}></img>
                    {/* <span className="card-title" style={{backgroundColor: "pink", opacity: 0.89, color: 'black', padding: 0}}>{project.name}</span> */}
                  </div>
                  <div className="card-content">
                    <b>{project.artist}</b>
                    <a href={project.spotUrl}>Listen on Spotify</a>
                  </div>
                  <div className="card-action">
                    {project.url && <a href={project.url} target="_blank">Visit</a>}
                  </div>
                </div>
              </div> 
            )
        })}
        </div>
        </div>
    )
};

export default music;