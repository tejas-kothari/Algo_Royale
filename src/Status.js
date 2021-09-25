import { React, useState } from "react";
import "./board.scss";
import { useSelector } from "react-redux";

export default function Status() {
  const myBoughtItems = useSelector((state) => state.store.myItems);
  const [addedColors, setAddedColors] = useState([]);
  function changeNFT(itemName) {
    const color = itemName.replace(" Dice", "").toLowerCase();
    console.log(color);

    const rows = ["row1", "row2", "row3", "row4"];

    for (var i = 0; i < 4; i++) {
      var list = document
        .getElementById(rows[i])
        .getElementsByClassName("element");
      var listLength = list.length;
      for (var j = 0; j < listLength; j++) {
        console.log(list[j].classList);
        console.log(addedColors);
        for (let k = 0; k < addedColors.length; k++) {
          list[j].classList.remove(addedColors[k]);
        }
        list[j].classList.add(color);
      }
    }
    setAddedColors((oldAddedColors) => [color, ...oldAddedColors]);
  }

  return (
    <div id="status">
      <div className="element">
        <h2>My Assets </h2>
        <div className="userNFT">
          {myBoughtItems.map((item, index) => (
            <img onClick={() => changeNFT(item.itemName)} src={item.image} />
          ))}
          {/* <img onClick={() => changeNFT("platinum")} src={Dice1} />
          <img onClick={() => changeNFT("sapphire")} src={Dice2} />
          <img onClick={() => changeNFT("ruby")} src={Dice3} />
          <img onClick={() => changeNFT("emerald")} src={Dice4} />
          <img onClick={() => changeNFT("amethyst")} src={Dice5} />
          <img onClick={() => changeNFT("obsidian")} src={Dice6} />
          <img onClick={() => changeNFT("citrine")} src={Dice7} />
          <img onClick={() => changeNFT("diamond")} src={Dice8} /> */}
        </div>
      </div>
    </div>
  );
}
