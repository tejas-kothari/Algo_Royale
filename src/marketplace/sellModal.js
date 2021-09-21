import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../board.scss";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import algosdk from "algosdk";
import algoIcon from "../images/algoIcon.png";
import { sellItem } from "../storeSlice.js";
import { useDispatch, useSelector } from "react-redux";

const MODAL_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  // backgroundColor: "hsla(0,0%,0%,0.3)",
};

export default function SellModal({ open, onClose, index }) {
  const dispatch = useDispatch();
  const [bet, setBet] = useState(null);
  const [submit, setSubmit] = useState(false);

  if (!open) return null;
  function changeBet(val) {
    setBet(val.target.value);
    setSubmit(false);
  }

  async function onUserSubmit() {
    setSubmit(true);
    await sendTxs();
    console.log("Continuing....");
    dispatch(sellItem({ index: index, sellingPrice: bet }));
    console.log("Passing....");
    setBet(0);
    onClose();
  }

  const sendTxs = async () => {
    try {
      const myAlgoConnect = new MyAlgoConnect();
      const accountsSharedByUser = await myAlgoConnect.connect();
      console.log(accountsSharedByUser[0].address);

      const appIndex = 1;
      const algodClient = new algosdk.Algodv2(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "http://localhost",
        "4001"
      );
      const suggestedParams = await algodClient.getTransactionParams().do();
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div style={MODAL_STYLES} id="modal-background" onClick={onClose}></div>
      <div className="element" id="submit-bet">
        {/* <div>{submit ? <p>{bet} ALGO</p> : null} </div> */}
        <div className="input-bet">
          <img src={algoIcon} />
          <input
            type="number"
            onChange={changeBet}
            placeholder="Bet (Minimum 5 ALGO)"
            // value="5"
            min="5"
          />
        </div>
        {/* <div>
          <p>1 WINS {betDetails.mult}</p>
          <p>
            {bet} WINS {bet * betDetails.mult}
          </p>
        </div> */}
        <button onClick={onUserSubmit}>List on marketplace</button>
        <button
          onClick={() => {
            setBet(0);
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </>,
    document.getElementById("modal")
  );
}
