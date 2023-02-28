import React from 'react';
import './css/AllQuestions.css';
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';

function AllQuestions() {
  return (
    <div className="all-questions">
        <div className="all-questions-container">
            <div className="all-questions-left">
                <div className="all-options">
                    <div className="all-option">
                        <p>0</p>
                        <span>Votes</span>
                    </div>
                    <div className="all-option">
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className="all-option">
                        <small>0 Views</small>
                    </div>
                </div>
            </div>
            <div className="question-answer">
                <Link to='/question'>How to use drag and drop  in ant design?</Link>
                <div style={{width:"90%"}}>
                    <div>What i want is an example about how to make the drag and drop of my table that works properly.</div>
                </div>
                <div style={{
                    display: "flex"
                }}>
                    <span className='question-tags'>React</span>
                    <span className='question-tags'>ant</span>
                    <span className='question-tags'>frontend</span>
                </div>
                <div className="author">
                    <small>Timestamp</small>
                    <div className="author-details">
                        <Avatar/>
                        <p>@UserName</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllQuestions
