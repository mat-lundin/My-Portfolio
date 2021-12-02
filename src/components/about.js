
const about = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s5">
        <div className="card large">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" alt="Profile pic" src={process.env.PUBLIC_URL + "/images/headshot.jpeg"}></img>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Expand to read about Mat!<i className="material-icons right">more_vert</i></span>
      {/* <p><a href="#">This is a link</a></p> */}
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Mat Lundin<i className="material-icons right">cancel</i></span>
      <p>Mat is a recent graduate of the Coding Bootcamp at the University of Texas, Austin. He is focused mainly on backend development. Before attending the Coding Bootcamp, Mat worked in the tech industry for 10 years, performing software implementations, code patches, bug fixes, and SQL queries.</p>
      {/* <img src="/headshot.jpeg"></img> */}
    </div>
  </div>
  </div>
  </div>
  </div>
           
    )
};

export default about