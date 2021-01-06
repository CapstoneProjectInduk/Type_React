import React, { useState } from "react";
import FeedCardPresenter from "./FeedCardPresenter";

const FeedCardContainer = () => {
  const [fill, setFill] = useState(false);
  const [comment, setComment] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  const toggleLike = () => {
    setFill(!fill);
  };

  const makeComment = () => {
    setComment((prev) => {
      return [...prev, text];
    });
    setText("");
  };

  const handleCommentText = (args: string) => {
    console.log(args);
    setText(args);
  };

  console.log(comment);
  return (
    <FeedCardPresenter
      fill={fill}
      comment={comment}
      text={text}
      toggleLike={toggleLike}
      makeComment={makeComment}
      handleCommentText={handleCommentText}
    />
  );
};

export default FeedCardContainer;
