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
            <a><i class="material-icons left">person</i>About</a></li>
        <li id="portfolio"
        onClick={()=> clickHandler('portfolio', setActiveTab)}
        >
            <a>Portfolio<i class="material-icons left">web</i></a></li>
        <li id="resume"
        onClick={()=> clickHandler('resume', setActiveTab)}
        >
            <a>Resume<i class="material-icons left">subject</i></a></li>
        <li id="contact"
        onClick={()=> clickHandler('contact', setActiveTab)}
        >
            <a>Contact<i class="material-icons left">email</i></a></li>
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