import React from "react";
import "./dice.scss";

export default function Dice({ num }) {
  if (num === 1) {
    return (
      <div className="dice first-face">
        <span className="dot"></span>
      </div>
    );
  } else if (num === 2) {
    return (
      <div className="dice second-face">
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    );
  } else if (num === 3) {
    return (
      <div className="dice third-face">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    );
  } else if (num === 4) {
    return (
      <div className="fourth-face dice">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  } else if (num === 5) {
    return (
      <div className="fifth-face dice">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sixth-face dice">
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="column">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
}
