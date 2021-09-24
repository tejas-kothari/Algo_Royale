import { useState } from "react";
import Dice from "./Dice";
import InputModal from "../InputModal";
import "../board.scss";

export default function Row1({ onOpen }) {
  const [rowValue1, setRowValue1] = useState(1);

  const a = 1;
  const b = 2;
  const c = 3;

  function upgradeRow1() {
    setRowValue1((prevCount) => prevCount + 0.5);

    if (rowValue1 > 0 && rowValue1 <= 1) {
      document.getElementById("row1").classList.add("sapphire");
    }
    if (rowValue1 > 1 && rowValue1 <= 2) {
      document.getElementById("row1").classList.add("ruby");
    }
  }

  return (
    <>
      <div id="row1" className="row-one">
        <div className="element" onClick={() => onOpen("one", 1, null, 2)}>
          <p>ONE</p>
          <Dice num={1} />
        </div>
        <div className="element" onClick={() => onOpen("one", 2, null, 2)}>
          <p>TWO</p>
          <Dice num={2} />
        </div>
        <div className="element" onClick={() => onOpen("one", 3, null, 2)}>
          <p>THREE</p>
          <Dice num={3} />
        </div>
        <div className="element" onClick={() => onOpen("one", 4, null, 2)}>
          <p>FOUR</p>
          <Dice num={4} />
        </div>
        <div className="element" onClick={() => onOpen("one", 5, null, 2)}>
          <p>FIVE</p>
          <Dice num={5} />
        </div>
        <div className="element" onClick={() => onOpen("one", 6, null, 2)}>
          <p>SIX</p>
          <Dice num={6} />
        </div>
      </div>
      <div className="row-one">
        <p>1 wins {a + rowValue1} on one dice </p>
        <p>1 wins {b + rowValue1} on two dice</p>
        <p>1 wins {c + rowValue1} on three dice</p>
      </div>
      {/* <button onClick={upgradeRow1}>Upgrade Row 1</button> */}
    </>
  );
}
