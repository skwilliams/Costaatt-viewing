import React from "react";
import HomeStyles from "../styles/Home.module.scss";

const Button = ({ text, backgroundColor, textcolor, click }) => {
  return (
    <div
      onClick={click}
      style={{
        backgroundColor: backgroundColor,
        color: textcolor,
      }}
      className={HomeStyles.submit}
    >
      <div>{text}</div>
    </div>
  );
};

export default Button;
