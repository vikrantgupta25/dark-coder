import React from "react";
import "./App.css";
import MovingQuotes from "./components/MovingQuotes";

function App() {
  return (
    <div className="landing">
      <div className="header flex">
        <h1 className="typed">Vikrant Gupta</h1>
      </div>
      <section className="intro">
        <div className="flex centerAlign">
          <img
            className="personalImage"
            src="profilePicture.png"
            alt="profileImage"
          />
          <div className="flex vertical introText">
            <h2>About Me</h2>
            <p className="aboutMeText">
              Hi I am Vikrant Gupta, a 22 year old Web developer living in
              Bengaluru, India. I am a Software Engineer , currently working
              with awesome folks at Harness. Have a look at my skills or just
              connect with me on LinkedIn. I am always excited to do business
              with like minded people, lets discuss over chai.
            </p>
          </div>
        </div>
      </section>
      <section className="inspirationalQuotes">
        <h2 className="inspiringHeading">Inspiring Quotes</h2>
        <MovingQuotes />
      </section>
    </div>
  );
}

export default App;
