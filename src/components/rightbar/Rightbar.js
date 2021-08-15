import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="images/gift.png" alt="" />
          <span className="birthdayText">
            <b>Jai and 3 others</b> are celebrating birthdays today.
          </span>
        </div>
        <img src="images/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>
        <div className="rightbarFriendsList">
          <div className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="images/person/6.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
              <span className="rightbarUsername">Naga</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
