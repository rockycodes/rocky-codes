import React from 'react';
import headshot from '../../public/imgs/headshot2.jpg';

const About = () => {
  return (
    <div className="content about" id="about">
      <img src={headshot}/>
      <div id="text">
        <p>hi, i'm rocky</p>
        <p>i'm an educator and social worker turned web developer based in nyc!</p>
      </div>
    </div>
  )
};

export default About;
