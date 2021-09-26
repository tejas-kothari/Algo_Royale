import React, { useState } from "react";

import Row1 from "./board/Row1";
import Row2 from "./board/Row2";
import Row3 from "./board/Row3";
import Row4 from "./board/Row4";
import InputModal from "./InputModal";
import "./board.scss";
import WinModal from "./WinModal";

export default function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWinOpen, setIsWinOpen] = useState(false);

  // betType represents the the kind of bet - "one", "two", "sum", "sum_range_small", "sum_range_big", "double", "triple", "any_triple"
  // for row1, all of them are going to be type "one"
  // for row2, type "two"
  // for row3, type "sum"
  // for row4, it going to be different for each piece
  // val1 and val2 represent the number of the dice or sum you bet on
  // so whenever you call the openclose function, you supply the bet type and the values associted
  // mult = multiplier

  const [betDetails, setBetDetails] = useState({});

  function openClose(betType, val1, val2, mult) {
    if (isOpen === false) {
      setIsOpen(true);
      document.getElementById("board").classList.add("board-filter");
      document.getElementById("status").classList.add("board-filter");
      document.getElementById("rolldice").classList.add("board-filter");
    } else {
      setIsOpen(false);
      document.getElementById("board").classList.remove("board-filter");
      document.getElementById("status").classList.remove("board-filter");
      document.getElementById("rolldice").classList.remove("board-filter");
    }

    setBetDetails({
      betType: betType,
      val1: val1,
      val2: val2,
      mult: mult,
    });
  }

  return (
    <div className="board-screen-child" id="board">
      <Row4 onOpen={openClose} />
      <Row3 onOpen={openClose} />
      <Row2 onOpen={openClose} />
      <Row1 onOpen={openClose} />
      <InputModal
        open={isOpen}
        onClose={openClose}
        betDetails={betDetails}
        openWin={() => setIsWinOpen(true)}
      />
      <WinModal open={isWinOpen} onClose={() => setIsWinOpen(false)} />
      {/* {isOpen ? null : (
            <button onClick={() => setIsOpen(true)}>open modal</button>
          )} */}
    </div>
  );
}
