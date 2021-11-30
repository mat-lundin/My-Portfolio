import React, {useState} from 'react';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume'

const curPage = function(activeTab){

    if (activeTab === 'about'){
        return (
            <div>
        <About />
        </div>
        )
    } else if (activeTab === 'contact'){
        return <Contact />
    } else if (activeTab === 'portfolio'){
        return <Portfolio />
    } else {
        return <Resume />
    }


}

export default curPage