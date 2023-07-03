import React from "react";
import { Button } from "@mui/material";
const ButtonLink = ({ text, color, size, href }) => {
  return (
    <Button
      variant="contained"
      color={color}
      size={size}
      href={href}
      disableElevation
    >
      {text}
    </Button>
  );
};

export default ButtonLink;
