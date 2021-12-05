import React from 'react';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';

//need to send setActiveTab to About component to make the button work
const curPage = function({activeTab,setActiveTab}){
    if (activeTab === 'about'){
        return <About setActiveTab={setActiveTab}/>
    } else if (activeTab === 'contact'){
        return <Contact />
    } else if (activeTab === 'portfolio'){
        return <Portfolio />
    } else {
        return <Resume />
    }
};

export default curPage;