import React from "react";
import MovingQuotes from "./components/MovingQuotes";
import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => emailjs.init("KPyeFk4ROOPeg3x1P"), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_k9z3bcv";
    const templateId = "template_hks30al";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        to_name: "Vikrant",
        message: message,
        subject: subject,
        reply_to: email,
      });
      alert("email successfully sent ");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <div className="landing">
      <div className="header flex">
        <img src="logo-color.png" alt="VG" className="logo" />
      </div>
      <section className="intro">
        <div className="flex avatarPlusText">
          <div className="avatar">
            <Avatar
              src="profilePicture.png"
              alt="profileImage"
              sx={{ height: "15em", width: "15em" }}
            />
            <div className=" flex connectWithMe">
              <a
                href="https://www.linkedin.com/in/vikrant-gupta-0107a9165/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  className="linkedin"
                  sx={{ height: "1.5em", width: "1.5em", cursor: "pointer" }}
                  color="primary"
                />
              </a>
              <a
                href="https://twitter.com/basEsehii"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon
                  className="instagram"
                  sx={{ height: "1.5em", width: "1.5em", cursor: "pointer" }}
                  color="primary"
                />
              </a>
              <a
                href="https://github.com/vikrantgupta25"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  className="github"
                  sx={{ height: "1.3em", width: "1.3em", cursor: "pointer" }}
                />
              </a>
            </div>
          </div>
          <div className="flex vertical introText">
            <h2
              style={{ marginTop: "0px", letterSpacing: "0.5px" }}
              className="aboutMeHeader"
            >
              About Me
            </h2>
            <div>
              <p className="aboutMeText">
                Hi I am <b>Vikrant Gupta</b>, a 22 year old Web developer living
                in Bengaluru, India. I am a Software Engineer, currently working
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
        <h2 className="inspiringHeading">Words To Live By</h2>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "50%" }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "50%", marginLeft: "2em" }}
            />
          </div>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="subject"
          />
          <TextField
            id="message"
            label="Message"
            multiline
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="message"
          />
          <Button
            variant="contained"
            className="submitBtn"
            onClick={handleSubmit}
            disabled={loading}
          >
            Submit
          </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
