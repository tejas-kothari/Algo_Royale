import React from "react";

const Die = (props) => {
  return (
    <div className="Die">
      <i
        className={`fas fa-dice-${props.value} ${
          props.rolling && "shaking"
        } faDice`}
      ></i>
    </div>
  );
};

Die.defaultProps = { number: "six" };

export default Die;
