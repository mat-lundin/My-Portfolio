import React from 'react';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';

const curPage = function(state){
    if (state.activeTab === 'about'){
        return <About />
    } else if (state.activeTab === 'contact'){
        return <Contact />
    } else if (state.activeTab === 'portfolio'){
        return <Portfolio />
    } else {
        return <Resume />
    }
};

export default curPage;