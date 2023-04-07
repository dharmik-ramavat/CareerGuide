import { Public } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./css/sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-options">
            <div className="sidebar-option">
              <Link>Home</Link>
            </div>
            <div className="sidebar-option">
              <Link>PUBLIC</Link>
              <div className="link">
                <div className="link-tag">
                  <Public />
                  <Link>Question</Link>
                </div>
                <div className="tags">
                  <p>Tags</p>
                  <p>Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
