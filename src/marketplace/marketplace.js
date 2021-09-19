import "./marketplace.scss";
import sampleNFTImage from "../images/ennj-artwork-1080x675.png";
import algoIcon from "../images/algoIcon.png";

export default function Marketplace() {
  const itemArr = [
    { itemName: "Board piece 1", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 2", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 3", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 4", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 5", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 6", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 7", price: 45, priceUSD: 450.23 },
    { itemName: "Board piece 8", price: 45, priceUSD: 450.23 },
  ];

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <p>AlgoRoyale NFT Marketplace</p>
      </div>
      <div style={{ padding: "0 200px" }}>
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
                    <h6>(US$ {item.priceUSD})</h6>
                  </div>
                </div>
                <button>Buy NFT</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
