import React from 'react'

function navbar ({ activeTab, setActiveTab }) {
    return (
        <>
    <nav className="nav-wrapper orange">
      <a href="" className="brand-logo left" 
      onClick={()=> setActiveTab('about')}
      >Mat Lundin
          {/* <img src={process.env.PUBLIC_URL + "/images/header.png"} style={{height: '60px'}}></img> */}
          </a>
          <a href="#" data-target="mobile" className="right sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li id="about" className="active"
        onClick={()=> clickHandler('about', setActiveTab)}
        >
            <a><i className="material-icons left">person</i>About</a></li>
        <li id="portfolio"
        onClick={()=> clickHandler('portfolio', setActiveTab)}
        >
            <a>Coding<i className="material-icons left">web</i></a></li>
        <li id="resume"
        onClick={()=> clickHandler('resume', setActiveTab)}
        >
            <a>Resume<i className="material-icons left">subject</i></a></li>
            <li id="email">
            <a href="mailto: matlundin.dev@gmail.com">Email<i className="material-icons left">email</i></a></li>
      </ul>
      
  
  <ul className="sidenav sidenav-close" id="mobile" styles={{marginLeft: '10px'}}>
      <li id="portfolio-mobile" onClick={()=> clickHandler('portfolio', setActiveTab)}><a className="blue-text"><i className="material-icons left blue-text">web</i>Coding</a></li>
      <li id="resume-mobile" onClick={()=> clickHandler('resume', setActiveTab)}><a className="blue-text"><i className="material-icons left blue-text">subject</i>Resume</a></li>
      <li id="resume-mobile"><a className="blue-text"><i className="material-icons left blue-text" href="mailto: matlundin.dev@gmail.com">email</i>Email</a></li>
  </ul>
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