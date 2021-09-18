import { useState } from "react";

import "./App.css";
import Board from "./Board";
import Menu from "./Menu";
import "./board.scss";
import Status from "./Status";

function App() {
  const [walletBal, setWalletBal] = useState(1000);

  function val(value) {
    setWalletBal((oldBal) => oldBal - value);
  }

  return (
    <>
      <Menu walletBal={walletBal} />
      <div id="modal"></div>
      <div className="board-screen">
        <Board changeBal={val} />
        <Status />
      </div>
    </>
  );
}

export default App;
