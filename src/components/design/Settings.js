import React from "react";
import "./../../css/settings.css";
const URLIMGBASE =
  "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20images/";

const Settings = ({ color, upperText, lowerText, textSize, textColor }) => {
  return (
    <div className="card">
      <h4>Settings</h4>
      <h5>Change T-shirt color</h5>
      <div className="tshirtColor">
        <img
          onClick={color}
          src={`${URLIMGBASE}black.png`}
          alt="black-color"
          id="black"
        />
        <img
          onClick={color}
          src={`${URLIMGBASE}white.png`}
          alt="white-color"
          id="white"
        />
        <img
          onClick={color}
          src={`${URLIMGBASE}grey.png`}
          alt="grey-color"
          id="grey"
        />
        <img
          onClick={color}
          src={`${URLIMGBASE}blue.png`}
          alt="blue-color"
          id="blue"
        />
        <img
          onClick={color}
          src={`${URLIMGBASE}red.png`}
          alt="red-color"
          id="red"
        />
        <img
          onClick={color}
          src={`${URLIMGBASE}grey.png`}
          alt="grey-color"
          id="grey"
        />
      </div>
      <h5>Write Text</h5>
      <div className="inputs">
        <input
          onChange={upperText}
          type="text"
          placeholder="Upper-Text"
          className="upperText"
        />
        <input
          onChange={lowerText}
          type="text"
          placeholder="Lawer-Text"
          className="lawerText"
        />
      </div>
      <h5>Text Size</h5>
      <input onChange={textSize} type="range" min="12" max="22" />
      <h5>Text Color</h5>
      <select onChange={textColor} className="form-control">
        <option>Write</option>
        <option>Black</option>
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
        <option>Orange</option>
        <option>Grey</option>
      </select>
      <button className="btn">Save</button>
    </div>
  );
};

export default Settings;
