import React from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  AOS.init({
    duration: 3000,
  });

  return (
    <div className='home' data-aos="fade-in">
      <div className="intro">
        <h1>Hello World!,<br/> I am Kreesta</h1>
      </div>
      <div className="intro-text" >
        <p>I'm a fullstack developer with a proven track record of breathing life
          into websites – from personal passion projects to successful freelance
          gigs and client contracts. My experience spans the entire web
          development spectrum, crafting robust back-ends, dazzling front-ends,
          and everything in between. Think of me as your one-stop shop for crafting
          a seamless web experience. Let's create something magical...(minus the spells of course!)</p>
      </div>
    </div>
  );
}

export default Home;
