import React from 'react'

const about = ({ setActiveTab }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s7 m7 l5 offset-s2 ">
          <div className="card z-depth-5">
            <div className="card-image">
              <img src={process.env.PUBLIC_URL + "/images/IMG_4636.jpeg"} alt="Mat Lundin"></img>
              <span className="card-title">Mat Lundin</span>
            </div>
            <div className="card-content">
              <p>After 10 years in the tech industry, doing implementations, code patches, bug fixes, application support, and a fair amount of SQL, I just graduated from the Coding Bootcamp at the University of Texas, Austin and I'm excited to code!</p>
            </div>
            <div className="card-action">
              <a href="#"
                onClick={() => clickHandler('portfolio', setActiveTab)}
              >Coding</a>
              <br className="hide-on-med-and-up"></br>
              <a href="#"
                onClick={() => clickHandler('resume', setActiveTab)}
              >Resume</a>
              <br className="hide-on-med-and-up"></br>
                            <a href="https://github.com/mat-lundin" target="_blank" rel="noreferrer">GitHub</a>
                            <br className="hide-on-med-and-up"></br>
                            <a href="https://www.linkedin.com/in/mathew-lundin/" target="_blank" rel="noreferrer">LinkedIn</a>
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