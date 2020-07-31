import React from "react";
import "./../../css/display.css";

const Display = ({ display, textFormat }) => {
  return (
    <div className="card1">
      <div className="imgTshirt">
        <img
          className="imageTshirt"
          src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20images/${display.tshirtColor}`}
          alt="img-Tshirt"
        />
      </div>
      <div className="mameText">
        <div className="upperText">
          <p style={{ fontSize: textFormat, color: display.textColor }}>
            {display.upperText}
          </p>
        </div>
        <img
          src="http://via.placeholder.com/150x100"
          className=""
          alt="img-placeholder"
        />
        <div className="lowerText">
          <p style={{ fontSize: textFormat, color: display.textColor }}>
            {display.lowerText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
