import React from 'react'

function navbar ({ activeTab, setActiveTab }) {
    return (
        
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left">Mat Lundin</a>
      <ul id="nav-mobile" className="right ">
        <li className="active"
        onClick={()=> setActiveTab('about')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>About</a></li>
        <li
        onClick={()=> setActiveTab('portfolio')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.className='active'}
        >
            <a>Portfolio</a></li>
        <li
        onClick={()=> setActiveTab('resume')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>Resume</a></li>
            <li
        onClick={()=> setActiveTab('contact')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>Contact</a></li>
      </ul>
    </div>
  </nav>
    )
};


export default navbar;