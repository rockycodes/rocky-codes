import React from 'react';
import headshot from '../../public/imgs/headshot2.jpg';

const About = () => {
  return (
    <div className="content about" id="about">
      <div id='main'>
        <img src={headshot}/>
        <p id='title'>hi, i'm rocky</p>
        <p>I'm an educator and social worker turned web developer based in nyc!</p>
        <p>I've always loved math, logic, and building things and, after ten years in human services, I decided to reconnect to my left brain and think about other ways to make a difference in the world.</p>
        <p>From the first time I sat down to write a for-loop, I was hooked. Programming combines my love of problem solving with my love for creating. I attended the Grace Hopper program in NYC and made the full career switch to developer.</p>
        <p>You can currently find me coding around NYC. I'm especially interested in the intersection of technology and social justice and the ways in which tech can faciliate equity and real social change.</p>
        <p>Connect with me on <a href='https://github.com/rockycodes/'>github</a>, <a href='https://www.linkedin.com/in/rachelefine/'>linkedin</a>, or <a href='https://twitter.com/rockycodes'>twitter</a>, or send me a message via the message tab!</p>
      </div>
      <div id='subcontent'>
        <div className='contentBox'>
          <p className='header'>education</p>
          <ul>
            <li>Oberlin College, BA</li>
            <li>Silberman School of Social Work at Hunter College, MSW</li>
            <li>Grace Hopper Program at Fullstack Academy for Software Engineering</li>
          </ul>
        </div>
        <div className='contentBox'>
          <p className='header'>technology</p>
          <ul>
            <li>Comfortable — Javascript, Sequelize, Express, Node.js, React, Redux, Git, HTML, CSS</li>
            <li>Familiar — jQuery, OAuth, Heroku, Webpack, Postgress, Swift, Xcode</li>
            <li>Acquainted — SQL, Socket.io, Mocha, Chai</li>
          </ul>
        </div>
        <div className='contentBox'>
          <p className='header'>fun facts</p>
          <ul>
            <li>I love circus arts and am an amateur aerialist and juggler</li>
            <li>I once took a two month road trip and drove 12,000 miles across the US and Canada, just me and my dog</li>
            <li>I'm an avid reader and especially love dystopic and science fiction</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default About;
