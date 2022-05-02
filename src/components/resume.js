import React from 'react';

// https://www.w3schools.com/html/html_iframe.asp -use this for google drive link

function resume(){
    return (
        <>
        {/* <iframe title="Mat's Resume" src="https://docs.google.com/document/d/16bOQFtUo16ctLdUoqg6EknCXQB88aPyrc2iiiXjkTmk/view?usp=sharing" style={{height:'40rem', width:'100%', border: 'none'}}></iframe> */}
        {/* <embed src={process.env.PUBLIC_URL+"/resume/Mathew Lundin Resume.pdf"} width="500" height="375" 
 type="application/pdf"> </embed> */}
 {/* <object data={process.env.PUBLIC_URL+"/resume/Mathew Lundin Resume.pdf"} style={{height:'48rem', width:'100%'}}><div className="container"><h1 className="orange-text">Looks like you're on a mobile device or your browser doesn't support PDF.<a href="./resume/Mathew Lundin Resume.pdf" download="Mathew Lundin Resume" className="waves-effect waves-light btn-large"><i class="large material-icons">get_app</i> Download Mat's Resume</a></h1><br></br><br></br></div></object> */}
 <iframe src="https://drive.google.com/file/d/16eaoUsDfPBKBA2HG2npFfpKaNyq36ZQO/preview" width="100%" height="800" allow="autoplay"></iframe>
        </>
    )
};

export default resume;