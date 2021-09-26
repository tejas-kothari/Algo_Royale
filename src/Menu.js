import React, { useState } from "react";
import "./board.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu() {
  const walletBal = useSelector((state) => state.store.userBalance);
  let history = useHistory();
  const [toggle, setToggle] = useState(false);
  // const [menu, setMenu] = useState();

  // const [balance, setBalance] = useState(1000);

  function showMenu() {
    console.log("showMenu in Menu.js");
    var boardExists = document.getElementById("board");
    var marketExists = document.getElementById("market");
    var welcomeExists = document.getElementById("welcome");
    setToggle(!toggle);

    if (boardExists != null) {
      if (toggle === false) {
        document.getElementById("menu-element").classList.add("expand-menu");
        document.getElementById("board").classList.add("board-filter");
        document.getElementById("status").classList.add("board-filter");
        document.getElementById("rolldice").classList.add("board-filter");
      } else {
        document.getElementById("menu-element").classList.remove("expand-menu");
        document.getElementById("board").classList.remove("board-filter");
        document.getElementById("status").classList.remove("board-filter");
        document.getElementById("rolldice").classList.remove("board-filter");
      }
    } else if (marketExists != null) {
      if (toggle === false) {
        document.getElementById("menu-element").classList.add("expand-menu");
        document.getElementById("market").classList.add("board-filter");
      } else {
        document.getElementById("menu-element").classList.remove("expand-menu");
        document.getElementById("market").classList.remove("board-filter");
      }
    } else if (welcomeExists != null) {
      console.log("welcomeExists");
      if (toggle === false) {
        document.getElementById("menu-element").classList.add("expand-menu");
        document.getElementById("welcome").classList.add("board-filter");
      } else {
        document.getElementById("menu-element").classList.remove("expand-menu");
        document.getElementById("welcome").classList.remove("board-filter");
      }
    }
  }

  return (
    <div id="menu">
      <div
        // onClick={showMenu}
        onMouseEnter={showMenu}
        onMouseLeave={showMenu}
        className="element"
        id="menu-element"
      >
        <p className="sectionButtons" onClick={() => history.push("/")}>
          Home
        </p>
        <p className="sectionButtons" onClick={() => history.push("/sicbo")}>
          Sic Bo
        </p>
        <p
          className="sectionButtons"
          onClick={() => history.push("/marketplace")}
        >
          {" "}
          Marketplace
        </p>

        <p style={{ marginTop: "2rem" }}>Wallet Balance = {walletBal} ALGOS</p>
      </div>
    </div>
  );
}
