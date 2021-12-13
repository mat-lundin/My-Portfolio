import React from 'react';

// https://www.w3schools.com/html/html_iframe.asp -use this for google drive link

function resume(){
    return (
        <>
        {/* <iframe title="Mat's Resume" src="https://docs.google.com/document/d/16bOQFtUo16ctLdUoqg6EknCXQB88aPyrc2iiiXjkTmk/view?usp=sharing" style={{height:'40rem', width:'100%', border: 'none'}}></iframe> */}
        {/* <embed src={process.env.PUBLIC_URL+"/resume/Mathew Lundin Resume.pdf"} width="500" height="375" 
 type="application/pdf"> </embed> */}
 <object data={process.env.PUBLIC_URL+"/resume/Mathew Lundin Resume.pdf"} style={{height:'40rem', width:'100%'}}></object>
        </>
    )
};

export default resume;