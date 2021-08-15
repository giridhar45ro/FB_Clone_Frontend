import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/images/person/5.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Virat</span>
            <span className="postDate">10 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey its My first Post</span>
          <img src="/images/person/5.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/images/like.png" alt="" />
            <img className="likeIcon" src="/images/heart.png" alt="" />
            <span className="postLikeCounter">50 likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommenttext">5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
