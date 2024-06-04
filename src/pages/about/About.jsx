import React from 'react'
import './about.css'


function About() {
  return (
    <div className='about'>
        <div className="about-container">
          <div className="about-left">
            <div className="img-about">
              <img src="/about2.png" alt="" />
            </div>
          </div>
          <div className="about-right">
            <div className="about-right-text">
            <h1>About me</h1>
              <p>My name is Ebube Oguejiofor, A Nigerian-based Fullstack developer, I ventured into
                 software development because i enjoyed having a little space where my imaginations 
                 can run wild with me in full control. I seamlessly blend creativity and technical finesse
                  to create fascinating digital experiences. I code with a creative spark. Building user-centric
                   digital experiences that ignite!. Be sure to contact me if you want to work together, or you just want to say hi :) </p>
            </div>
          <div className="socials">
              <a href=""><i class="fa-brands fa-x-twitter"></i></a>
              <a href=""><i class="fa-brands fa-facebook-f"></i></a>
              <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
              <a href=""><i class="fa-brands fa-github"></i></a>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About
