import React from "react";
import Profilephoto from "../Profilephoto.jpg";
import "./style.css";

function Card({ FullName, Address, About }) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container">
          <img src={Profilephoto} alt="Profilephoto" />
        </div>
      </div>
      <div className="lower-container">
        <h3> {FullName} </h3>
        <h4> {Address} </h4>
        <p> {About} </p>
        <button>Visit Profile</button>
      </div>
    </div>
  );
}

export default Card;
