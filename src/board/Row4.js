import React from "react";
import Dice from "./Dice";
import "../board.scss";

export default function Row4({ onOpen }) {
  return (
    <div id="row4" className="row-four">
      <div
        className="col"
        onClick={() => onOpen("sum_range_small", null, null, 1)}
      >
        <p>
          SMALL
          <br />
          <span>ARE NUMBERS </span>
        </p>
        <p>
          4 <span>TO </span>
          10
        </p>
        <p>
          1 <span>WINS </span>1
        </p>
        <p>
          LOSE IF ANY <br />
          TRIPLE APPEARS
        </p>
      </div>
      <div className="col">
        <div>
          <p>EACH DOUBLE 1 WINS 10</p>
        </div>
        <div className="inner-col">
          <div
            className="element"
            onClick={() => onOpen("double", 1, null, 10)}
          >
            <Dice num={1} />
            <p>
              DOUBLE
              <br />
              ONE
            </p>
            <Dice num={1} />
          </div>
          <div
            className="element"
            onClick={() => onOpen("double", 2, null, 10)}
          >
            <Dice num={2} />
            <p>
              DOUBLE
              <br />
              TWO
            </p>
            <Dice num={2} />
          </div>
          <div
            className="element"
            onClick={() => onOpen("double", 3, null, 10)}
          >
            <Dice num={3} />
            <p>
              DOUBLE
              <br />
              THREE
            </p>
            <Dice num={3} />
          </div>
        </div>
      </div>
      <div className="col-two">
        <p>1 WINS 180</p>
        <div className="element" onClick={() => onOpen("triple", 1, null, 180)}>
          <Dice num={1} />
          <Dice num={1} />
          <Dice num={1} />
        </div>
        <div className="element" onClick={() => onOpen("triple", 2, null, 180)}>
          <Dice num={2} />
          <Dice num={2} />
          <Dice num={2} />
        </div>
        <div className="element" onClick={() => onOpen("triple", 3, null, 180)}>
          <Dice num={3} />
          <Dice num={3} />
          <Dice num={3} />
        </div>
      </div>
      <div className="col">
        <p>1 WINS 30</p>
        <div
          className="element element-center"
          onClick={() => onOpen("any_triple", null, null, 30)}
        >
          <div className="row-inner">
            <p>ANY TRIPLE</p>
          </div>
          <div className="row-inner">
            <Dice num={1} />
            <Dice num={1} />
            <Dice num={1} />
          </div>
          <div className="row-inner">
            <Dice num={2} />
            <Dice num={2} />
            <Dice num={2} />
          </div>
          <div className="row-inner">
            <Dice num={3} />
            <Dice num={3} />
            <Dice num={3} />
          </div>
          <div className="row-inner">
            <Dice num={4} />
            <Dice num={4} />
            <Dice num={4} />
          </div>
          <div className="row-inner">
            <Dice num={5} />
            <Dice num={5} />
            <Dice num={5} />
          </div>
          <div className="row-inner">
            <Dice num={6} />
            <Dice num={6} />
            <Dice num={6} />
          </div>
        </div>
      </div>
      <div className="col-two">
        <p>1 WINS 180</p>
        <div className="element" onClick={() => onOpen("triple", 4, null, 180)}>
          <Dice num={4} />
          <Dice num={4} />
          <Dice num={4} />
        </div>
        <div className="element" onClick={() => onOpen("triple", 5, null, 180)}>
          <Dice num={5} />
          <Dice num={5} />
          <Dice num={5} />
        </div>
        <div className="element" onClick={() => onOpen("triple", 6, null, 180)}>
          <Dice num={6} />
          <Dice num={6} />
          <Dice num={6} />
        </div>
      </div>
      <div className="col">
        <div>
          <p>EACH DOUBLE 1 WINS 10</p>
        </div>
        <div className="inner-col">
          <div
            className="element"
            onClick={() => onOpen("double", 4, null, 10)}
          >
            <Dice num={4} />
            <p>
              DOUBLE
              <br />
              ONE
            </p>
            <Dice num={4} />
          </div>
          <div
            className="element"
            onClick={() => onOpen("double", 5, null, 10)}
          >
            <Dice num={5} />
            <p>
              DOUBLE
              <br />
              TWO
            </p>
            <Dice num={5} />
          </div>
          <div
            className="element"
            onClick={() => onOpen("double", 6, null, 10)}
          >
            <Dice num={6} />
            <p>
              DOUBLE
              <br />
              THREE
            </p>
            <Dice num={6} />
          </div>
        </div>
      </div>
      <div
        className="col"
        onClick={() => onOpen("sum_range_big", null, null, 1)}
      >
        <p>
          BIG
          <br />
          <span>ARE NUMBERS </span>
        </p>
        <p>
          11 <span>TO </span>
          17
        </p>
        <p>
          1 <span>WINS </span>1
        </p>
        <p>
          LOSE IF ANY <br />
          TRIPLE APPEARS
        </p>
      </div>
    </div>
  );
}
