import React from 'react';

const footer = () => {
    return (
        <footer className="page-footer orange">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              {/* <h5 className="white-text">Visit me!</h5> */}
              {/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
              <h5 className="white-text">Contact me!</h5>
                <a className="white-text" href="mailto: matlundin.dev@gmail.com">matlundin.dev@gmail.com</a>
              <ul>
                {/* <li><a className="grey-text text-lighten-3" href="https://github.com/mat-lundin" target="_blank">GitHub</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/mathew-lundin/" target="_blank">LinkedIn</a></li> */}
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/mat-lundin" target="_blank" rel="noreferrer" role="button"><i className="fab fa-github" ></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/mathew-lundin/" target="_blank" rel="noreferrer" role="button"><i className="fab fa-linkedin-in"></i></a>
                
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">

            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          Built in React by Mat Lundin
          {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
          </div>
        </div>
      </footer>
    )
};

export default footer;