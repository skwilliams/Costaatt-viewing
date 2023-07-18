import React, { useState } from "react";
import navBarStyles from "../styles/Nav.module.scss";
import SearchBarModal from "./SearchBarModal";
import Button from "@mui/material/Button";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ placeholder }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={navBarStyles.magnifyingGlass}>
        <Button onClick={handleClickOpen}>
          <BiSearch />
        </Button>
        <SearchBarModal />
      </div>
    </>
  );
};
export default SearchBar;
