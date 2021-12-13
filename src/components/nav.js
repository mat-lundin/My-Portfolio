import React from 'react'

function navbar ({ activeTab, setActiveTab }) {
    return (
        <>
    <nav className="nav-wrapper">
    {/* <div className="container"> */}
      <a href="" className="brand-logo left" 
      onClick={()=> setActiveTab('about')}
      >Mat Lundin
          {/* <img src={process.env.PUBLIC_URL + "/images/header.png"} style={{height: '60px'}}></img> */}
          </a>
          <a data-target="mobile" class="right sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li id="about" className="active"
        onClick={()=> clickHandler('about', setActiveTab)}
        >
            <a><i className="material-icons left">person</i>About</a></li>
        <li id="portfolio"
        onClick={()=> clickHandler('portfolio', setActiveTab)}
        >
            <a>Portfolio<i className="material-icons left">web</i></a></li>
        <li id="resume"
        onClick={()=> clickHandler('resume', setActiveTab)}
        >
            <a>Resume<i className="material-icons left">subject</i></a></li>
        <li id="contact"
        onClick={()=> clickHandler('contact', setActiveTab)}
        >
            <a>Contact<i className="material-icons left">email</i></a></li>
      </ul>
      
  
  <ul className="sidenav sidenav-close" id="mobile" styles={{marginLeft: '10px'}}>
      <li id="about-mobile" onClick={()=> clickHandler('about', setActiveTab)}><a><i className="material-icons left">person</i>About</a></li>
      <li id="portfolio-mobile" onClick={()=> clickHandler('portfolio', setActiveTab)}><a><i className="material-icons left">web</i>Portfolio</a></li>
      <li id="resume-mobile" onClick={()=> clickHandler('resume', setActiveTab)}><a><i className="material-icons left">subject</i>Resume</a></li>
      <li id="contact-mobile" onClick={()=> clickHandler('contact', setActiveTab)}><a><i className="material-icons left">email</i>Contact</a></li>
  </ul>
  {/* </div> */}
  </nav>
  </>
    )
};

function clickHandler(button, setActiveTab){
    updateClass(button)
    setActiveTab(button)
}

function updateClass(button){
    const listItems = document.querySelectorAll('li')
    const listEl = document.getElementById(button)

    listItems.forEach((item) => {
        item.className = ''
    })
    
    listEl.className = 'active'
}


export default navbar;