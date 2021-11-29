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
        // onClick={()=> MediaStreamAudioDestinationNode('about')}
        >
            <a>About</a></li>
        <li
        // onClick={()=> MediaStreamAudioDestinationNode('projects')}
        // onclick={()=> this.class='active'}
        >
            <a>Projects</a></li>
        <li
        // onClick={()=> MediaStreamAudioDestinationNode('contact')}
        >
            <a>Contact</a></li>
      </ul>
    </div>
  </nav>
  
    )

}

export default navbar