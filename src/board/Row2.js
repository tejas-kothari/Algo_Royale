import React from "react";
import Dice from "./Dice";
import "../board.scss";

export default function Row2() {
  return (
    <div className="row-two">
      <div className="element">
        <p>1 WINS 5</p>
      </div>
      <div className="element">
        <Dice num={1} />
        <p>1 AND 2</p>
        <Dice num={2} />
      </div>
      <div className="element">
        <Dice num={1} />
        <p>1 AND 3</p>
        <Dice num={3} />
      </div>
      <div className="element">
        <Dice num={1} />
        <p>1 AND 4</p>
        <Dice num={4} />
      </div>
      <div className="element">
        <Dice num={1} />
        <p>1 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element">
        <Dice num={1} />
        <p>1 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element">
        <Dice num={2} />
        <p>2 AND 3</p>
        <Dice num={3} />
      </div>
      <div className="element">
        <Dice num={2} />
        <p>2 AND 4</p>
        <Dice num={4} />
      </div>
      <div className="element">
        <Dice num={2} />
        <p>2 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element">
        <Dice num={2} />
        <p>2 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element">
        <Dice num={3} />
        <p>3 AND 4</p>
        <Dice num={4} />
      </div>
      <div className="element">
        <Dice num={3} />
        <p>3 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element">
        <Dice num={3} />
        <p>3 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element">
        <Dice num={4} />
        <p>4 AND 5</p>
        <Dice num={5} />
      </div>
      <div className="element">
        <Dice num={4} />
        <p>4 AND 6</p>
        <Dice num={6} />
      </div>
      <div className="element">
        <Dice num={5} />
        <p>5 AND 6</p>
        <Dice num={5} />
      </div>
    </div>
  );
}
