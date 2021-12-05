
const about = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s5 offset-s2">
        <div className="card large">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator responsive-img" alt="Profile pic" src={process.env.PUBLIC_URL + "/images/headshot.jpeg"}></img>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Welcome to my site! Expand to read more about me and be sure to check out my <a class="waves-effect waves-light btn-small"><i class="material-icons left">web</i>Portfolio</a> for cool projects I've worked on!<i className="material-icons right">more_vert</i></span>
      {/* <p><a href="#">This is a link</a></p> */}
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Mat Lundin<i className="material-icons right">cancel</i></span>
      <p>After 10 years in the tech industry, doing implementations, code patches, bug fixes, application support, and a fair amount of SQL, I just graduated from the Coding Bootcamp at the University of Texas, Austin and I'm excited to code!</p>
      {/* <img src="/headshot.jpeg"></img> */}
    </div>
  </div>
  </div>
    {/* <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img className="responsive-img" src={process.env.PUBLIC_URL + "/images/flower.jpeg"}></img>
          <span class="card-title">Just a nice photo I took</span>
          
        </div>
        
      </div>
    </div> */}
  
          
  </div>
  </div>
           
    )
};

export default about