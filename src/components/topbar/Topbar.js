import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">Get Connected</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search here....."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div>
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Rohit_Sharma_2015_%28cropped%29.jpg"
          alt="Pic"
          className="topbarImg"
        />
      </div>
    </div>
  );
}
