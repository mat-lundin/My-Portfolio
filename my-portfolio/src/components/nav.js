// import React, {useState} from 'react';
import React from 'react'
// use a state var to keep track of active tab?


const navbar = () => {
// const [activeTab, setActiveTab] = useState('home');
    return (
        
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo left">Mat Lundin</a>
      <ul id="nav-mobile" class="right ">
        <li class="active"
        // onClick={()=> setActiveTab('about')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>About</a></li>
        <li
        // onClick={()=> setActiveTab('projects')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>Projects</a></li>
        <li
        // onClick={()=> setActiveTab('contact')}
        // will need a separate function for handling active tab classes
        // onclick={()=> this.class='active'}
        >
            <a>Contact</a></li>
      </ul>
    </div>
  </nav>
  
    )

}

export default navbar