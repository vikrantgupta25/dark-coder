import { Avatar } from "@mui/material";
import "./Quote.css";

export default function Quote(props) {
  const { imagePath, quote, author } = props.quote;

  return (
    <div className="container quote">
      <Avatar
        alt={author}
        src={imagePath}
        sx={{ height: "5em", width: "5em" }}
      />
      <h4 className="text">
        <i>{quote}</i>
      </h4>
      <p className="author">
        By <b>{author} </b>
      </p>
    </div>
  );
}
