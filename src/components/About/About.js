import React from 'react';
import "./About.css"

/* function About({ theme }) {
    console.log('targ '+ theme)
  return (
    <div className={`aboutSection ${theme}-theme`}>
        <p>The current theme is: {theme}</p>
    </div>
  );
} */

const About = ({ theme }) => (
    <div className={`aboutSection ${theme}-theme`}>
        <p>The current theme is: {theme}</p>
    </div>
);

export default About;
