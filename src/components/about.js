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
              <p>Full stack web development graduate with ten years of experience in the tech industry seeking
an opportunity to work in a challenging role with a technology-driven organization.</p>
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