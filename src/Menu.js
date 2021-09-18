import React, { useState } from "react";
import "./board.scss";

export default function Menu({ walletBal }) {
  const [toggle, setToggle] = useState(false);
  // const [menu, setMenu] = useState();

  // const [balance, setBalance] = useState(1000);

  function showMenu() {
    setToggle(!toggle);
    if (toggle === false) {
      document.getElementById("menu-element").classList.add("expand-menu");
      document.getElementById("board").classList.add("board-filter");
      document.getElementById("status").classList.add("board-filter");
    } else {
      document.getElementById("menu-element").classList.remove("expand-menu");
      document.getElementById("board").classList.remove("board-filter");
      document.getElementById("status").classList.remove("board-filter");
    }
  }

  return (
    <div id="menu">
      <div
        onClick={showMenu}
        // onMouseLeave={showMenu}
        className="element"
        id="menu-element"
      >
        <p>Wallet Balance = {walletBal} ALGOS</p>
      </div>
    </div>
  );
}
