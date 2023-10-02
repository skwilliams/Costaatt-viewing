import React from "react";
import HomeStyles from "../styles/Home.module.scss";
import Link from "next/link";

const Button = ({ text, href, backgroundColor, textcolor, click }) => {
  return (
    <div
      //onClick={click}
      style={{
        backgroundColor: backgroundColor,
        color: textcolor,
      }}
      className={HomeStyles.submit}
    >
      <Link href={href}>{text}</Link>
    </div>
  );
};

export default Button;
