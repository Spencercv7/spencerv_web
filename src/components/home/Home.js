import React from 'react'
import ReactDom from 'react-dom'
import './home_style.css'
import Home_Box from './home_components/Home_Box'

class Home extends React.Component {
      render() {
            return (
              <div id="home_container">
                  <div id="home_deco_box"></div>
                  <Home_Box/>
                  <nav class="main_nav"></nav>
              </div>   
            );
      }
}

export default Home