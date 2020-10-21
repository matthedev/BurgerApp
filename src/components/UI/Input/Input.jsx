import React from "react";
import "./Input.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType.elementConfig) {
    case "input":
      inputElement = (
        <input
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className="inputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
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
