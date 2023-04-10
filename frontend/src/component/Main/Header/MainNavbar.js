import React from "react";
import './css/MainNavbar.css'
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { useState } from "react";

function MainNavbar() {
 
  const user = useSelector(selectUser);

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
  

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to='/'><h3>CareerGuide</h3></Link>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..."/>
          </div>
          <div className='menu'>
             <ul>
                <li className="menu-option"><Link to="/">HOME</Link></li>
                <li className="menu-option"><Link to="#">MBA</Link></li>
                <li className="menu-option"><Link to="engineering">ENGINEERING</Link></li>
                <li className="menu-option"><Link to="#">MEDICAL</Link></li>
                <li className="menu-option"><Link to="#">DESIGN</Link></li>
                <li className="menu-option"><Link to="#">STUDY ABROAD</Link></li>
                <li className="menu-option"><Link to="q&a">Q&A</Link></li>
             </ul>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
             <Avatar
              style={{
                cursor: "pointer",
              }}
              {...stringAvatar(user && user.displayName)}
              onClick={() => auth.signOut()}
            />
          </div>
        </div>
      </div>
      {/* <div className="header-container">
        <div className="header-middle">
           <div className='menu'>
             <ul>
                <li className="menu-option"><Link to="/">HOME</Link></li>
                <li className="menu-option"><Link to="#">MBA</Link></li>
                <li className="menu-option"><Link to="engineering">ENGINEERING</Link></li>
                <li className="menu-option"><Link to="#">MEDICAL</Link></li>
                <li className="menu-option"><Link to="#">DESIGN</Link></li>
                <li className="menu-option"><Link to="#">STUDY ABROAD</Link></li>
                <li className="menu-option"><Link to="q&a">Q&A</Link></li>
             </ul>
          </div>
        </div>
      </div> */}


    </header>
  );
}

export default MainNavbar;
