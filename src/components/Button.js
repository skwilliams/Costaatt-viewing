import Link from "next/link";
import React from "react";
import HomeStyles from "../styles/Home.module.scss";

const Button = ({ text, href, backgroundColor, textcolor }) => {
  return (
    <div
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
