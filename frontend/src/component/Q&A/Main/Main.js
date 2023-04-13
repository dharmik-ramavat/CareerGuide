import React from "react";
import { FilterList } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import "./css/Main.css";

function Main({ questions }) {
  // console.log(questions)
  return (
    <div className="main"  style={{paddingTop:"120px"}}>
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{questions && questions.length} Questions</p>
          {/* <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList />
              <p>Filter</p>
            </div>
          </div> */}
        </div>
        <div className="questions">
          {questions.map((_q) => (
            <>
              <div className="question">
                {/* {console.log(_q.title)} */}
                <AllQuestions question={(_q)}/>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
