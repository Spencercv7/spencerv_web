import React from 'react'
import ReactDom from 'react-dom'
import './home_style.css'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './js/Home_Back_Sketch'

class Home extends React.Component {
      
      
      render() {
            return (
              <div id="home_container">
                  <div class= "header_title">
                        <h2>SPENCER VENABLE.</h2>
                        <h6>Software Developer</h6>
                  </div>
                  <nav class="main_nav"></nav>
                  <P5Wrapper id="home_background_animation" sketch={sketch}></P5Wrapper>
              </div>   
            );
      }
}

export default Home