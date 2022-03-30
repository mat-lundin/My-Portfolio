import React from 'react';
import About from './about';
import Portfolio from './portfolio';
import Resume from './resume';
import Music from './music'

//need to send setActiveTab to About component to make the button work
const curPage = function({activeTab,setActiveTab}){
    if (activeTab === 'about'){
        return <About setActiveTab={setActiveTab}/>
    } else if (activeTab === 'portfolio'){
        return <Portfolio />
    } else if (activeTab === 'music'){
        return <Music />
    } else {
        return <Resume />
    }
};

export default curPage;