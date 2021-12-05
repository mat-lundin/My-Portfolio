import React from 'react'

function navbar ({ activeTab, setActiveTab }) {
    return (
        
    <nav>
    <div className="nav-wrapper">
      <a href="" className="brand-logo left"
      onClick={()=> setActiveTab('about')}
      >Mat Lundin - Web Developer</a>
      <ul id="nav-mobile" className="right ">
        <li id="about" className="active"
        onClick={()=> clickHandler('about', setActiveTab)}
        >
            <a>About</a></li>
        <li id="portfolio"
        onClick={()=> clickHandler('portfolio', setActiveTab)}
        >
            <a>Portfolio</a></li>
        <li id="resume"
        onClick={()=> clickHandler('resume', setActiveTab)}
        >
            <a>Resume</a></li>
        <li id="contact"
        onClick={()=> clickHandler('contact', setActiveTab)}
        >
            <a>Contact</a></li>
      </ul>
    </div>
  </nav>
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