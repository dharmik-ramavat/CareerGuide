import React from "react";
import "./css/AllQuestions.css";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import ReactHtmlParser from "html-react-parser";
import { stringAvatar } from "./utils/Avatar";

function AllQuestions({ question }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
    
  console.log(question.create_at)

  let tag = question.tags;
  const tags = tag?.[0] && JSON.parse(tag[0]);

  console.log(tags)

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>{question?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${question?._id}`}>{question?.title}</Link>
          <div
            style={{
              maxWidth: "90%",
            }}
          >
            <div>{ReactHtmlParser(truncate(question.body, 200))}</div>
          </div>
          <div style={{ display: "flex" }}>
         
            {(tags !== undefined) ? (tags.map((e)=>{
               return <p
              style={{
                margin: "10px 5px",
                padding: "5px 10px",
                backgroundColor: "#007cd446",
                borderRadius: "3px",
              }}
            >
              {e}
            </p>;
            })): ""}
          </div> 
          <div className="author">
            <small>{question.create_at}</small>
            <div className="auth-details">
              <center><Avatar {...stringAvatar(question?.user?.displayName)} /></center>
              <p>
                {question?.user?.displayName
                  ? question?.user?.displayName
                  : "User"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
