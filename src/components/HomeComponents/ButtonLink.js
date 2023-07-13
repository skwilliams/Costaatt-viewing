import React from "react";
import { Button } from "@mui/material";
const ButtonLink = ({ text, color, size, path }) => {
  return (
    <Button
      variant="contained"
      color={color}
      size={size}
      path={path}
      disableElevation
    >
      {text}
    </Button>
  );
};

export default ButtonLink;
