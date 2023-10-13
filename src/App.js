import React from "react";
import "./App.css";
import MovingQuotes from "./components/MovingQuotes";
import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function App() {
  return (
    <div className="landing">
      <div className="header flex">
        <h1 className="typed">Vikrant Gupta</h1>
      </div>
      <section className="intro">
        <div className="flex centerAlign">
          <div className="avatar">
            <Avatar
              src="profilePicture.png"
              alt="profileImage"
              sx={{ height: "10em", width: "10em" }}
            />
            <div className=" flex connectWithMe">
              <LinkedInIcon className="linkedin" />
              <InstagramIcon className="instagram" />
              <MailOutlineIcon className="mail" />
            </div>
          </div>
          <div className="flex vertical introText">
            <h2 style={{ marginTop: "0px" }}>About Me</h2>
            <div>
              <p className="aboutMeText">
                Hi I am Vikrant Gupta, a 22 year old Web developer living in
                Bengaluru, India. I am a Software Engineer , currently working
                with awesome folks at Harness.
              </p>
              <p className="aboutMeText">
                Have a look at my skills or just connect with me on LinkedIn. I
                am always excited to do business with like minded people, lets
                discuss over chai.
              </p>
            </div>
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
