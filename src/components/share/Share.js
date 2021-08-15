import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
export default function Share() {
  return (
    <div className="container">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="https://images.news18.com/ibnlive/uploads/2021/08/1628223338_ro.jpg"
            alt="Ro"
          />
          <input
            type="text"
            placeholder="What's in your mind"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span className="shareOptionText">Photo Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="yellow" className="shareOptionIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="sharedButton">Share</button>
        </div>
      </div>
    </div>
  );
}
