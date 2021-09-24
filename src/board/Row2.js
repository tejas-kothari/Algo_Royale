import React from "react";
import Dice from "./Dice";
import "../board.scss";

export default function Row2({ onOpen }) {
  return (
    <div id="row2" className="row-two">
      <div className="element">
        <p>1 WINS 5</p>
      </div>
      <div className="element" onClick={() => onOpen("two", 1, 2, 5)}>
        <Dice num={1} />
        <p>1 AND 2</p>
        <Dice num={2} />
      </div>
      <div className="element" onClick={() => onOpen("two", 1, 3, 5)}>
        <Dice num={1} />
        <p>1 AND 3</p>
        <Dice num={3} />
      </div>
      <div className="element" onClick={() => onOpen("two", 1, 4, 5)}>
        <Dice num={1} />
        <p>1 AND 4</p>
        <Dice num={4} />
      </div>
      <div className="element" onClick={() => onOpen("two", 1, 5, 5)}>
        <Dice num={1} />
        <p>1 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element" onClick={() => onOpen("two", 1, 6, 5)}>
        <Dice num={1} />
        <p>1 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element" onClick={() => onOpen("two", 2, 3, 5)}>
        <Dice num={2} />
        <p>2 AND 3</p>
        <Dice num={3} />
      </div>
      <div className="element" onClick={() => onOpen("two", 2, 4, 5)}>
        <Dice num={2} />
        <p>2 AND 4</p>
        <Dice num={4} />
      </div>
      <div className="element" onClick={() => onOpen("two", 2, 5, 5)}>
        <Dice num={2} />
        <p>2 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element" onClick={() => onOpen("two", 2, 6, 5)}>
        <Dice num={2} />
        <p>2 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element" onClick={() => onOpen("two", 3, 4, 5)}>
        <Dice num={3} />
        <p>3 AND 4</p>
        <Dice num={4} />
      </div>
      <div className="element" onClick={() => onOpen("two", 3, 5, 5)}>
        <Dice num={3} />
        <p>3 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element" onClick={() => onOpen("two", 3, 6, 5)}>
        <Dice num={3} />
        <p>3 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element" onClick={() => onOpen("two", 4, 5, 5)}>
        <Dice num={4} />
        <p>4 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element" onClick={() => onOpen("two", 4, 6, 5)}>
        <Dice num={4} />
        <p>4 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element" onClick={() => onOpen("two", 5, 6, 5)}>
        <Dice num={5} />
        <p>5 AND 6</p>
        <Dice num={6} />
      </div>
    </div>
  );
}
