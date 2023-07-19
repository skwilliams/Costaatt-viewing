import * as React from "react";
import Button from "@mui/material/Button";
import searchBarStyles from "../styles/SearchBar.module.scss";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import { Padding } from "@mui/icons-material";
export default function SearchBarModal({ handleClose }) {
  return (
    <div className={searchBarStyles.searchModal}>
      <div className={searchBarStyles.searchModalHeading}>
        <h1>Search Costaatt</h1>
        {/* <Button disableElevation onClick={handleClose} variant="contained">
          <GrClose />
        </Button> */}
        <GrClose onClick={handleClose} />
      </div>
      <form
        action="https://www.google.com/search"
        method="get"
        className={searchBarStyles.searchModalInput}
      >
        <input id="search" placeholder="Search" type="text" />
        <Button
          type="submit"
          variant="contained"
          disableElevation
          // onClick={handleClose}
        >
          Search
        </Button>
      </form>
      <div>
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          similique delectus voluptatem officiis voluptatum facilis, consectetur
          itaque cum! Nobis impedit quo animi totam doloribus soluta ducimus
          minus laboriosam maxime perferendis?
        </p>
      </div>
    </div>
  );
}
