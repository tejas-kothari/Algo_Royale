import { useState } from "react";
import "./marketplace.scss";
import sampleNFTImage from "../images/ennj-artwork-1080x675.png";
import algoIcon from "../images/algoIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { buyItem, sellItem, decUserBalance } from "../storeSlice.js";
import MyAlgoConnect from "@randlabs/myalgo-connect";
import algosdk from "algosdk";
import walletshs from "../images/001-wallet.svg";
import { useHistory } from "react-router-dom";
import SellModal from "./sellModal";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function Marketplace() {
  const [sellModalOpen, setSellModalOpen] = useState(false);
  let history = useHistory();
  let match = useRouteMatch();
  console.log(match);
  const myBoughtItems = useSelector((state) => state.store.myItems);
  const marketplaceItem = useSelector((state) => state.store.marketplaceItems);
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

  const buyItemHTML = async (item, index) => {
    await sendTx();
    dispatch(buyItem(index));
    dispatch(decUserBalance(item.price));
  };

  return (
    <div className="marketplace" id="market">
      <div className="marketplace-header">
        <p></p>

        {match.path === "/marketplace" && match.isExact ? (
          <div onClick={() => history.push("/marketplace/myitems")}>
            <img src={walletshs} />
            <p>My items</p>
          </div>
        ) : (
          <div onClick={() => history.push("/marketplace")}>
            <p> Back to Marketplace</p>
          </div>
        )}
      </div>
      <div style={{ padding: "0 200px" }}>
        <Switch>
          <Route path={match.path} exact>
            <h2>Featured game items</h2>
            <div className="itemsContainer">
              {marketplaceItem.map((item, index) => (
                <div style={item.style} className="itemContainer">
                  <img src={item.image} />
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
                    <button onClick={() => buyItemHTML(item, index)}>
                      Buy NFT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Route>
          <Route path={`${match.path}/myitems`}>
            <h2>My items</h2>
            <div className="itemsContainer">
              {myBoughtItems.map((item, index) => (
                <div style={item.style} className="itemContainer">
                  <img src={item.image} />
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
                    <button onClick={() => setSellModalOpen(true)}>
                      Sell NFT
                    </button>
                    <SellModal
                      open={sellModalOpen}
                      onClose={() => setSellModalOpen(false)}
                      index={index}
                    />
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
