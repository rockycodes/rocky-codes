import React from 'react';
import headshot from '../../public/imgs/headshot2.jpg';

const About = () => {
  return (
    <div className="content about" id="about">
      <img src={headshot}/>
      <div id="text">
        <p className='title'>hi, i'm rocky</p>
        <p>i'm an educator and social worker turned web developer based in nyc!</p>
        <p>i've always loved math, logic, and building things and, after ten years in human services, i decided to reconnect to my left brain and think about other ways to make a difference in the world.</p>
        <p>from the first time i sat down to write a for loop, i was hooked. programming combined my love of problem solving with my love for creating.</p>
        <p>i made the full career switch to developer by attending the Grace Hopper program in NYC, a tuition deferred coding bootcamp for women and non-binary folks.</p>
        <p>you can currently find me coding around nyc and manhattan at various meetups. i'm especially interested in the intersection of tech and social justice and the ways in which well-intentioned technology can go so very wrong.</p>
        <p>connect with me on github, linkedin, or twitter, or send me a message here!</p>
        <p>connect with me on github, linkedin, or twitter, or send me a message here!</p>
        <p className='header title'>technology</p>
        <ul>
          <li>comfortable:<br/>Javascript, Sequelize, Express, Node.js, React, Redux, Git, HTML, CSS</li>
          <li>familiar:<br/>jQuery, OAuth, Heroku, Webpack, Postgress, Swift, Xcode</li>
          <li>acquainted:<br/>SQL, Socket.io, Mocha, Chai</li>
        </ul>
        <p className='header title'>fun facts</p>
        <ul>
          <li>i love circus arts and am an amateur aerialist and juggler</li>
          <li>road trips are my jam. i once took a two month road trip and drove 12,000 miles across the US and Canada, just me and my dog</li>
          <li>i'm an avid reader and especially love dystopic and science fiction</li>
          <li>i believe deeply in social justice, activism, and advocacy</li>
          <li>i love making things! from coding, to knitting, to matchbox dioramas, i always have some type of craftiness going on</li>
        </ul>
      </div>
    </div>
  )
};

export default About;
