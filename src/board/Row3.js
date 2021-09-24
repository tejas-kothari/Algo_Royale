import React from "react";

import "../board.scss";

export default function Row3({ onOpen }) {
  return (
    <div id="row3" className="row-three">
      <div className="element" onClick={() => onOpen("sum", 4, null, 60)}>
        <p>4</p>
        <p>1 WINS 60</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 5, null, 30)}>
        <p>5</p>
        <p>1 WINS 30</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 6, null, 17)}>
        <p>6</p>
        <p>1 WINS 17</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 7, null, 12)}>
        <p>7</p>
        <p>1 WINS 12</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 8, null, 8)}>
        <p>8</p>
        <p>1 WINS 8</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 9, null, 6)}>
        <p>9</p>
        <p>1 WINS 6</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 10, null, 6)}>
        <p>10</p>
        <p>1 WINS 6</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 11, null, 6)}>
        <p>11</p>
        <p>1 WINS 6</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 12, null, 60)}>
        <p>12</p>
        <p>1 WINS 60</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 13, null, 6)}>
        <p>13</p>
        <p>1 WINS 6</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 14, null, 12)}>
        <p>14</p>
        <p>1 WINS 12</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 15, null, 17)}>
        <p>15</p>
        <p>1 WINS 17</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 16, null, 30)}>
        <p>16</p>
        <p>1 WINS 30</p>
      </div>
      <div className="element" onClick={() => onOpen("sum", 17, null, 60)}>
        <p>17</p>
        <p>1 WINS 60</p>
      </div>
    </div>
  );
}
