import React, { Fragment } from 'react';

const Navbar = () => {
  return (
    <Fragment>
      <nav class="navbar">
        <div class="container">
          <div class="nav-wrapper">
            <img
              class="materialboxed brand-logo"
              alt=""
              src="images/concor.png"
            />

            <ul class="right hide-on-med-and-down">
              <li className="li-color">
                <a href="#">Platform</a>
              </li>
              <li className="li-color">
                <a href="#">Services</a>
              </li>

              <li className="li-color">
                <a href="#!">Work</a>
              </li>

              <li className="li-color">
                <a href="#">Team</a>
              </li>

              <li className="li-color li-sign">
                <a href="#">Login</a>
              </li>

              <li className="li-color ">
                <a href="#" className="btn btn-nav">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
