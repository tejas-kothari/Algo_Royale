import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Board from "./Board";
import Menu from "./Menu";
import "./board.scss";
import Status from "./Status";
import Marketplace from "./marketplace/marketplace";
import Welcome from "./welcome/welcome";

function App() {
  const [walletBal, setWalletBal] = useState(1000);

  function val(value) {
    setWalletBal((oldBal) => oldBal - value);
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/sicbo" exact>
          <Menu walletBal={walletBal} />
          <div id="modal"></div>
          <div className="board-screen">
            <Board changeBal={val} />
            <Status />
          </div>
        </Route>
        <Route path="/marketplace">
          <div id="modal"></div>
          <Marketplace />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
