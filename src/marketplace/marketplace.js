import { useState } from "react";
import "./marketplace.scss";
import sampleNFTImage from "../images/ennj-artwork-1080x675.png";
import algoIcon from "../images/algoIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../storeSlice.js";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import algosdk from "algosdk";
import walletshs from "../images/001-wallet.svg";
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function Marketplace() {
  let history = useHistory();
  let match = useRouteMatch();
  console.log(match);
  const myBoughtItems = useSelector((state) => state.store.myItems);
  const dispatch = useDispatch();

  const sendTx = async () => {
    try {
      const myAlgoConnect = new MyAlgoConnect();
      const accountsSharedByUser = await myAlgoConnect.connect();
      console.log(accountsSharedByUser[0].address);

      const appIndex = 1;
      const algodClient = new algosdk.Algodv2(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "http://localhost",
        "4001"
      );
      const suggestedParams = await algodClient.getTransactionParams().do();
    } catch (err) {
      console.log(err);
    }
  };

  const buyItem = async (item, index) => {
    await sendTx();
    dispatch(addItem(item));
    setitemArr((arr) => {
      arr.splice(index, 1);
      console.log(arr);
      return [...arr];
    });
  };

  const [itemArr, setitemArr] = useState([
    { itemName: "Board piece 1", price: 45 },
    { itemName: "Board piece 2", price: 45 },
    { itemName: "Board piece 3", price: 45 },
    { itemName: "Board piece 4", price: 45 },
    { itemName: "Board piece 5", price: 45 },
    { itemName: "Board piece 6", price: 45 },
    { itemName: "Board piece 7", price: 45 },
    { itemName: "Board piece 8", price: 45 },
  ]);

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <p>AlgoRoyale NFT Marketplace</p>

        {match.path === "/marketplace" && match.isExact ? (
          <div onClick={() => history.push("/marketplace/myitems")}>
            <img src={walletshs} />
            <p>My items</p>
          </div>
        ) : (
          <div onClick={() => history.push("/marketplace")}>
            <p>Marketplace</p>
          </div>
        )}
      </div>
      <div style={{ padding: "0 200px" }}>
        <Switch>
          <Route path={match.path} exact>
            <h1>Featured game items</h1>
            <div className="itemsContainer">
              {itemArr.map((item, index) => (
                <div className="itemContainer">
                  <img src={sampleNFTImage} />
                  <div className="itemInfo">
                    <h4>{item.itemName}</h4>
                    <div className="line"></div>
                    <div className="priceInfo">
                      <p>Price</p>
                      <br />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={algoIcon} width="25px" />
                        <p>{item.price}</p>
                        <h6>(US$ {item.price * 1.81})</h6>
                      </div>
                    </div>
                    <button onClick={() => buyItem(item, index)}>
                      Buy NFT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Route>
          <Route path={`${match.path}/myitems`}>
            <h1>My items</h1>
            <div className="itemsContainer">
              {myBoughtItems.map((item, index) => (
                <div className="itemContainer">
                  <img src={sampleNFTImage} />
                  <div className="itemInfo">
                    <h4>{item.itemName}</h4>
                    <div className="line"></div>
                    <div className="priceInfo">
                      <p>Bought at</p>
                      <br />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={algoIcon} width="25px" />
                        <p>{item.price}</p>
                        <h6>(US$ {item.price * 1.81})</h6>
                      </div>
                    </div>
                    <button onClick={() => buyItem(item, index)}>
                      Sell NFT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
