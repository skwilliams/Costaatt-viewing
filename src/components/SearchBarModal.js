import * as React from "react";
import Button from "@mui/material/Button";
import searchBarStyles from "../styles/SearchBar.module.scss";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { Padding } from "@mui/icons-material";
export default function SearchBarModal({ handleClose }) {
  return (
    <div className={searchBarStyles.search}>
      <form style={{ display: "flex" }}>
        <div style={{ fontSize: "2rem", padding: "2rem" }}>Search Costaatt</div>
        <input autoFocus id="name" label="Search" fullWidth />
        <Button onClick={handleClose} style={{ backgroundColor: "white" }}>
          <GrClose />
        </Button>
      </form>
    </div>
  );
}
