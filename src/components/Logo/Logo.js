import React from "react";
import BurgerLogo from "../../assets/Images/BurgerLogo.png";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div
      className="Logo"
      style={{ height: props.height, marginBottom: props.marginBottom }}
    >
      <img src={BurgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
