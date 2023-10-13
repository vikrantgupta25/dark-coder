import React from "react";
import MovingQuotes from "./components/MovingQuotes";
import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";

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
              sx={{ height: "15em", width: "15em" }}
            />
            <div className=" flex connectWithMe">
              <LinkedInIcon
                className="linkedin"
                sx={{ height: "1.5em", width: "1.5em" }}
              />
              <InstagramIcon
                className="instagram"
                sx={{ height: "1.5em", width: "1.5em" }}
              />
              <MailOutlineIcon
                className="mail"
                sx={{ height: "1.5em", width: "1.5em" }}
              />
            </div>
          </div>
          <div className="flex vertical introText">
            <h2 style={{ marginTop: "0px", letterSpacing: "0.5px" }}>
              About Me
            </h2>
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
      <section>
        <div className="textAlign">
          <h2 className="contactFormHeading">Chai with me ?</h2>
          <p>
            I am always excited to work on some awesome projects, message me and
            let's discuss over chai.
          </p>
        </div>

        <div className="contactForm">
          <div className="flex">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              sx={{ width: "50%" }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              sx={{ width: "50%", marginLeft: "2em" }}
            />
          </div>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            className="subject"
          />
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            className="message"
          />
          <Button variant="contained" className="submitBtn">
            Submit
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
