import React from 'react';
import ReactDOM from 'react-dom';
import './nav_style.css'

class Nav extends React.Component {
      render() {
            return(
                  <nav id="main_nav">
                        <ul>
                              <li><a className="nav-link nav-link-ltr">home</a></li>
                              <li><a className="nav-link nav-link-ltr">about me</a></li>
                              <li><a className="nav-link nav-link-ltr">resume</a></li>
                              <li><a className="nav-link nav-link-ltr">projects</a></li>
                              <li><a className="nav-link nav-link-ltr">contact me</a></li>
                        </ul>
                  </nav>
            );
      }
}



export default Nav
