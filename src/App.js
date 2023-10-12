import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing">
      <div className="header flex">
        <h1>Vikrant Gupta</h1>
        <div className="rightHeader flex">
          <div>Dummy</div>
          <div>Dummy</div>
        </div>
      </div>
      <div className="intro">
        <div className="flex centerAlign">
          <img
            className="personalImage"
            src="profilePicture.png"
            alt="profileImage"
          />
          <div className="flex vertical">
            <h2>Hello I am Vikrant Gupta</h2>
            <div>I am a problem solver</div>
          </div>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="flex spaceBetween">
          <div className="edCard">
            <h4>10th Grade</h4>
            <p>DAV Public School Ludhiana</p>
          </div>
          <div className="edCard">
            <h4>12th Grade</h4>
            <p>DAV Public School Ludhiana</p>
          </div>
          <div className="edCard">
            <h4>BTech Electrical Engineering</h4>
            <p>Indian Institute of Technology Roorkee</p>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2>Personal Projects</h2>
        <div className="flex spaceBetween">
          <div className="projectCard">
            <h4>Burger Builder</h4>
            <p>An app that makes custom burger</p>
          </div>
          <div className="projectCard">
            <h4>Yelp Camp</h4>
            <p>Social media for campgrounds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
