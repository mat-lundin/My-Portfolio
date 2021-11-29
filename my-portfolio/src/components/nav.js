import React from 'react';

// use a state var to keep track of active tab?
// const [activeTab, setActiveTab] = useState('home');

const navbar = () => {

    return (
        
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="left">Mat Lundin</a>
      <ul id="nav-mobile" class="right ">
        <li class="active"><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  </nav>
  
    )

}

export default navbar