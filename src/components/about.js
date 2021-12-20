import React from 'react'

const about = ({ setActiveTab }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s7 m7 l5 offset-s2 ">
          {/* <div className="card large z-depth-5 hide-on-med-and-down">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator responsive-img" alt="Profile pic" src={process.env.PUBLIC_URL + "/images/IMG_4636.jpeg"}></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Welcome to my site! Expand to read more and check out my <a className="waves-effect waves-light btn-small"
                onClick={() => clickHandler('portfolio', setActiveTab)}>
                <i className="material-icons left">web</i>Portfolio</a> for cool projects I've worked on!<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Mat Lundin<i className="material-icons right">cancel</i></span>
              <p>After 10 years in the tech industry, doing implementations, code patches, bug fixes, application support, and a fair amount of SQL, I just graduated from the Coding Bootcamp at the University of Texas, Austin and I'm excited to code!</p>
              <ul>
                <li>
                  <a className="waves-effect waves-light btn-small"
                    onClick={() => clickHandler('portfolio', setActiveTab)}>
                    <i className="material-icons left">web</i>Portfolio</a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn-small"
                    onClick={() => clickHandler('resume', setActiveTab)}>
                    <i className="material-icons left">subject</i>Resume</a>
                </li>
                <li>
                  <a className="waves-effect waves-light btn-small"
                    onClick={() => clickHandler('contact', setActiveTab)}>
                    <i className="material-icons left">email</i>Contact</a>
                </li>
              </ul>
              
            </div>
          </div> */}
          <div className="card z-depth-5">
        <div className="card-image">
          <img src={process.env.PUBLIC_URL + "/images/IMG_4636.jpeg"}></img>
          <span className="card-title">Mat Lundin</span>
        </div>
        <div className="card-content">
          <p>After 10 years in the tech industry, doing implementations, code patches, bug fixes, application support, and a fair amount of SQL, I just graduated from the Coding Bootcamp at the University of Texas, Austin and I'm excited to code!</p>
        </div>
        <div className="card-action">
          <a href="#"
          onClick={() => clickHandler('portfolio', setActiveTab)}
          >My Portfolio</a>
                    <a href="#"
          onClick={() => clickHandler('resume', setActiveTab)}
          >My Resume</a>
        </div>
      </div>
        </div>
      </div>
    </div>

  )
};

function clickHandler(button, setActiveTab) {
  updateClass(button)
  setActiveTab(button)
}

function updateClass(button) {
  const listItems = document.querySelectorAll('li')
  const listEl = document.getElementById(button)

  listItems.forEach((item) => {
    item.className = ''
  })

  listEl.className = 'active'
}

export default about