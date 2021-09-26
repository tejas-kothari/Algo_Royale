import { React, useEffect } from "react";
import Die from "./Die";
import { useSelector, useDispatch } from "react-redux";
import { stopDiceRoll } from "../storeSlice.js";
import "../board.scss";
import "../board/dice.scss";

export default function RollDice() {
  const dispatch = useDispatch();
  const indexToNum = ["zero", "one", "two", "three", "four", "five", "six"];
  const { rollTrue, dice1, dice2, dice3 } = useSelector(
    (state) => state.store.diceRoll
  );

  useEffect(() => {
    if (rollTrue) {
      setTimeout(() => dispatch(stopDiceRoll()), 1000);
    }
  }, [rollTrue]);

  return (
    <div id="rolldice">
      <div className="element">
        <Die value={indexToNum[dice1]} rolling={rollTrue} />
        <Die value={indexToNum[dice2]} rolling={rollTrue} />
        <Die value={indexToNum[dice3]} rolling={rollTrue} />
        {/* <button onClick={roll} disabled={rollTrue}>
          {rollTrue ? `Rolling..` : `Roll Dice!`}
        </button> */}
      </div>
    </div>
  );
}
