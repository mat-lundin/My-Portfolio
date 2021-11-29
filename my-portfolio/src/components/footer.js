import React from 'react';

const footer = () => {
    return (
        <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Visit me!</h5>
              <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="https://github.com/mat-lundin">GitHub</a></li>
                <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/mathew-lundin/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          Built in React by Mat Lundin
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
};

export default footer;