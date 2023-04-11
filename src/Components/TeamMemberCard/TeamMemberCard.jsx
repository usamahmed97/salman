import React from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, title, circleImgSrc, mainImgSrc }) => {
  return (
    <div className="person">
      <div className="container">
        <div className="container-inner">
          <img className="circle" src={circleImgSrc} />
          <img className="img img1" src={mainImgSrc} />
        </div>
      </div>
      <div className="divider"></div>
      <div className="name">{name}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default TeamMemberCard;
