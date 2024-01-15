/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./style.css";
import expandIcon from "../assets/expandIcon.png";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const parentComment = useRef(null);

  const handleCollpase = () => {
    setShowReplies(!showReplies);

    parentComment?.current?.scrollIntoView();
  };
  return (
    <div ref={parentComment}>
      <div className="commentHeader">
        {!showReplies && comment.replies ? (
          <img
            className="expandIcon"
            src={expandIcon}
            width={10}
            onClick={() => setShowReplies(!showReplies)}
          />
        ) : null}
        <img className="profileImage" src={comment?.author?.avatar} />
        <div className="authorName">{comment?.author?.name}</div>
      </div>
      <div className="commentInfo">
        <div>{comment.text}</div>
        <div className="repliesContainer">
          <div
            className="replyLine"
            onClick={() => {
              handleCollpase();
            }}
          ></div>
          <div className="replies">
            {showReplies &&
              comment?.replies?.map((reply) => {
                return <Comment key={reply} comment={reply} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
