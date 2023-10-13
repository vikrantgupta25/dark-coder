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
      imagePath: "stevejobs.jpeg",
    },
    {
      author: "Bill Gates",
      quote:
        "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
      imagePath: "billGates.webp",
    },
    {
      author: "Larry Page",
      quote:
        "If you're changing the world, you're working on important things.You're excited to get up in the morning. ",
      imagePath: "larryPage.jpeg",
    },
    {
      author: "Linus Torvalds",
      quote:
        "See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too.",
      imagePath: "Linus-Torvalds-2012.webp",
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
      {position !== 0 && (
        <KeyboardArrowLeftIcon
          onClick={leftIconClickHanlder}
          sx={{ cursor: "pointer" }}
        />
      )}
      <Quote quote={quotes[position]} />
      {position !== quotes.length - 1 && (
        <KeyboardArrowRightIcon
          onClick={rightIconClickHandler}
          sx={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}
