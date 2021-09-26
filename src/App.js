import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Board from "./Board";
import Menu from "./Menu";
import "./board.scss";
import Status from "./Status";
import Marketplace from "./marketplace/marketplace";
import Welcome from "./welcome/welcome";
import RollDice from "./dice-throw/RollDice";
import { useWindowSize } from "react-use";
import ReactConfetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { stopConfetti } from "./storeSlice";

function App() {
  const dispatch = useDispatch();
  //confetti variables
  const confettiColors = [
    "#A66F41",
    "#B77A48",
    "#C9864F",
    "#D49763",
    "#DFA777",
    "#EAB88B",
    "#F5C89E",
    "#F6CDA7",
    "#F7D2AF",
    "#c11524",
    "#e8322c",
  ];

  //react-use https://github.com/streamich/react-use
  const { width, height } = useWindowSize();
  const [run, setRun] = useState(false);
  const [recycle, setRecycle] = useState(false);
  const reduxRun = useSelector((state) => state.store.runConfetti);

  useEffect(() => {
    if (reduxRun) {
      setRun(true);
      setRecycle(true);
      setTimeout(() => {
        setRecycle(false);
        dispatch(stopConfetti());
      }, 1000);
    }
  }, [reduxRun]);
  // const [run, setRun] = useState(false);
  // const [recycle, setRecycle] = useState(false);

  // function timedRun() {
  //   // setRun(true);
  //   recycle ? setRecycle(false) : setRecycle(true);
  //   // setTimeout(() => setRun(false), 2000);
  // }

  //lose money
  function loseMoney() {
    document.getElementById("menu-element").classList.add("lose");
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Menu />
          <Welcome />
        </Route>
        <Route path="/sicbo" exact>
          <Menu />
          <div id="modal"></div>
          <ReactConfetti
            run={run}
            recycle={recycle}
            initialVelocityX={20}
            initialVelocityY={20}
            colors={confettiColors}
            numberOfPieces={1000}
            // onConfettiComplete={() => dispatch(stopConfetti())}
            confettiSource={{
              x: width / 2,
              y: height / 2,
            }}
          />
          <div className="board-screen">
            <Board />
            <div className="board-screen-child">
              <Status />
              <RollDice />
            </div>
            {/* <button onMouseEnter={timedRun} onMouseLeave={timedRun}>
              Hover to Celebrate!
            </button>
            <button onClick={loseMoney}>Click to lose moneys</button> */}
          </div>
        </Route>
        <Route path="/marketplace">
          <Menu />
          <div id="modal"></div>
          <Marketplace />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
