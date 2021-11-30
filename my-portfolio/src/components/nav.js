import React from 'react'

function navbar ({ activeTab, setActiveTab }) {
    return (
        
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left"
      onclick
      >Mat Lundin</a>
      <ul id="nav-mobile" className="right ">
        <li id="about" className="active"
        onClick={()=> clickHandler('about', setActiveTab)}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>About</a></li>
        <li id="portfolio"
        onClick={()=> clickHandler('portfolio', setActiveTab)}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.className='active'}
        >
            <a>Portfolio</a></li>
        <li id="resume"
        onClick={()=> clickHandler('resume', setActiveTab)}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>Resume</a></li>
        <li id="contact"
        onClick={()=> clickHandler('contact', setActiveTab)}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
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