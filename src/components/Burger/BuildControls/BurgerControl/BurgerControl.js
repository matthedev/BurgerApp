import React from "react";
import "./BurgerControl.css";

const BurgerControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less" onClick={props.Remove} disabled={props.disabled}>
        Remove
      </button>
      <button className="More" onClick={props.Add}>
        Add
      </button>
    </div>
  );
};

export default BurgerControl;
