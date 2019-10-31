import React from 'react'
import ReactDOM from 'react-dom'

// Component Imports
import Home from './components/home/Home.js'
import Nav from './components/nav/Nav'
import AboutMe from './components/about_me/About_Me'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import ContactMe from './components/contact_me/Contact_Me'

// Style Sheet Imports
import './global_styles.css'

class App extends React.Component {
      render() {
            return(
                  <div>
                        <Nav/>
                        <Home />
                        <AboutMe />
                        <Resume />
                        <Projects />
                        <ContactMe />
                  </div>
            );
      }
}


ReactDOM.render(
      <App />,
      document.getElementById('root')
)