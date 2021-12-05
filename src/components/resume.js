import React from 'react';

// https://www.w3schools.com/html/html_iframe.asp -use this for google drive link

function resume(){
    return (
        <>
        <iframe title="Mat's Resume" src="https://docs.google.com/document/d/16bOQFtUo16ctLdUoqg6EknCXQB88aPyrc2iiiXjkTmk/edit?usp=sharing" style={{height:'40rem', width:'100%', border: 'none'}}></iframe>
        </>
    )
};

export default resume;