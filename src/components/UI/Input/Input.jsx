import React from "react";
import "./Input.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className="inputElement" {...props} />;
      break;
    case "textarea":
      inputElement = <textarea className="inputElement" {...props} />;
      break;
    default:
      inputElement = <input className="inputElement" {...props} />;
      break;
  }

  return (
    <div className="Input">
      <label className="label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
