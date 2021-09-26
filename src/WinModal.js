import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./board.scss";
import { useDispatch, useSelector } from "react-redux";
import algoIcon from "./images/algoIcon.png";
import {
  incUserBalance,
  decUserBalance,
  resetFinishedRolling,
} from "./storeSlice.js";

const MODAL_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  // backgroundColor: "hsla(0,0%,0%,0.3)",
};

export default function WinModal({ open, onClose }) {
  const betAmount = useSelector((state) => state.store.bets.betAmount);
  const betDetails = useSelector((state) => state.store.bets.betDetails);
  console.log(betAmount);
  console.log(betDetails.mult);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={MODAL_STYLES} id="modal-background" onClick={onClose}></div>
      <div className="element" id="submit-bet">
        <div>
          <p className="prob">Congratulation!</p>
          <p>You've won {(betDetails.mult - 1) * betAmount} ALGOS</p>
        </div>

        <button onClick={() => onClose()}>Close</button>
      </div>
    </>,
    document.getElementById("modal")
  );
}
