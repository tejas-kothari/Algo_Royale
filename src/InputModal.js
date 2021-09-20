import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./board.scss";
import Menu from "./Menu";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import algosdk from "algosdk";
import algoIcon from "./images/algoIcon.png";

const MODAL_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  // backgroundColor: "hsla(0,0%,0%,0.3)",
};

export default function InputModal({ open, onClose, betDetails, changeBal }) {
  const [bet, setBet] = useState(null);
  const [submit, setSubmit] = useState(false);

  if (!open) return null;
  function changeBet(val) {
    setBet(val.target.value);
    setSubmit(false);
  }

  function onUserSubmit() {
    setSubmit(true);
    changeBal(bet);
    sendTxs();
    setBet(0);
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  const sendTxs = async () => {
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

    // let optInTxn = algosdk.makeApplicationOptInTxn(
    //   accountsSharedByUser[0].address,
    //   suggestedParams,
    //   appIndex
    // );
    // const signedoptInTxn = await myAlgoConnect.signTransaction(
    //   optInTxn.toByte()
    // );
    // const optInTxnResponse = await algodClient
    //   .sendRawTransaction(signedoptInTxn.blob)
    //   .do();
    // console.log(optInTxnResponse);

    const betArgs = [];

    betArgs.push(new Uint8Array(Buffer.from("bet")));
    betArgs.push(new Uint8Array(Buffer.from("one")));

    betArgs.push(algosdk.encodeUint64(3));
    betArgs.push(algosdk.encodeUint64(4));

    const dice1 = getRandomIntInclusive(1, 6);
    const dice2 = getRandomIntInclusive(1, 6);
    const dice3 = getRandomIntInclusive(1, 6);

    betArgs.push(algosdk.encodeUint64(dice1));
    betArgs.push(algosdk.encodeUint64(dice2));
    betArgs.push(algosdk.encodeUint64(dice3));

    const txn = algosdk.makeApplicationNoOpTxn(
      accountsSharedByUser[0].address,
      suggestedParams,
      appIndex,
      betArgs
    );
    // betArgs.push(new Uint8Array(Buffer.from("test")));
    // const txn = algosdk.makeApplicationNoOpTxn(
    //   accountsSharedByUser[0].address,
    //   suggestedParams,
    //   appIndex,
    //   betArgs
    // );

    const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
    const response = await algodClient.sendRawTransaction(signedTxn.blob).do();
    console.log(response);

    await waitForConfirmation(algodClient, response.txId, 3);

    const appGlobalState = await readGlobalState(
      algodClient,
      "B7JMEWPVRTE6VSFDNFG4OZC7KO7HLTYSTUU5GYXGQPZCHL5CVSYK5ANTBE",
      appIndex
    );

    const betResult = appGlobalState["value"]["uint"];

    console.log("Dice1: " + dice1);
    console.log("Dice2: " + dice2);
    console.log("Dice3: " + dice3);
    console.log("Bet Result: " + betResult);
  };

  async function readGlobalState(client, addr, index) {
    try {
      let accountInfoResponse = await client.accountInformation(addr).do();
      for (let i = 0; i < accountInfoResponse["created-apps"].length; i++) {
        if (accountInfoResponse["created-apps"][i].id == index) {
          console.log("Application's global state:");
          for (
            let n = 0;
            n <
            accountInfoResponse["created-apps"][i]["params"]["global-state"]
              .length;
            n++
          ) {
            console.log(
              accountInfoResponse["created-apps"][i]["params"]["global-state"][
                n
              ]
            );
            return accountInfoResponse["created-apps"][i]["params"][
              "global-state"
            ][n];
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  const waitForConfirmation = async (algodclient, txId, timeout) => {
    if (algodclient == null || txId == null || timeout < 0) {
      throw new Error("Bad arguments.");
    }

    const status = await algodclient.status().do();
    if (typeof status === "undefined")
      throw new Error("Unable to get node status");

    const startround = status["last-round"] + 1;
    let currentround = startround;

    /* eslint-disable no-await-in-loop */
    while (currentround < startround + timeout) {
      const pending = await algodclient
        .pendingTransactionInformation(txId)
        .do();

      if (pending !== undefined) {
        if (
          pending["confirmed-round"] !== null &&
          pending["confirmed-round"] > 0
        )
          return pending;

        if (pending["pool-error"] != null && pending["pool-error"].length > 0)
          throw new Error(
            `Transaction Rejected pool error${pending["pool-error"]}`
          );
      }

      await algodclient.statusAfterBlock(currentround).do();
      currentround += 1;
    }

    /* eslint-enable no-await-in-loop */
    throw new Error(`Transaction not confirmed after ${timeout} rounds!`);
  };

  return ReactDOM.createPortal(
    <>
      <div style={MODAL_STYLES} id="modal-background" onClick={onClose}></div>
      <div className="element" id="submit-bet">
        <div>{submit ? <p>{bet} ALGO</p> : null} </div>
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
        <div>
          <p>1 WINS {betDetails.mult}</p>
          <p>
            {bet} WINS {bet * betDetails.mult}
          </p>
        </div>
        <button onClick={onUserSubmit}>Submit Bet</button>
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
