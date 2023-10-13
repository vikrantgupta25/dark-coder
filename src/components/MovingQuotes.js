import React from "react";
import Quote from "./Quote";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./MovingQuotes.css";

export default function MovingQuotes() {
  const [position, setPosition] = React.useState(0);

  const quotes = [
    {
      author: "Steve Jobs",
      quote:
        "Because the people who are crazy enough to think they can change the world are the ones who do.",
      imagePath: "download.jpeg",
    },
    {
      author: "Bill Gates",
      quote:
        "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
      imagePath: "iit-roorkee-1.avif",
    },
    {
      author: "Larry Page",
      quote:
        "If you're changing the world, you're working on important things.You're excited to get up in the morning. ",
      imagePath: "iit-roorkee-1.avif",
    },
    {
      author: "Linus Torvalds",
      quote:
        "See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too.",
      imagePath: "iit-roorkee-1.avif",
    },
  ];

  function leftIconClickHanlder() {
    if (position !== 0) {
      setPosition((position) => position - 1);
    }
  }

  function rightIconClickHandler() {
    if (position !== quotes.length - 1) {
      setPosition((position) => position + 1);
    }
  }

  return (
    <div className="movingQuotes">
      <KeyboardArrowLeftIcon onClick={leftIconClickHanlder} />
      <Quote quote={quotes[position]} />
      <KeyboardArrowRightIcon onClick={rightIconClickHandler} />
    </div>
  );
}
