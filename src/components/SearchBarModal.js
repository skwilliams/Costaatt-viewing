import * as React from "react";
import Button from "@mui/material/Button";
import searchBarStyles from "../styles/SearchBar.module.scss";
import { GrClose } from "react-icons/gr";
import {
  SliderLinks,
  TILES_INFO,
  EVENTS,
  NEWS,
  schoolOptions,
  SuccessLinks,
  FEATURED_NEWS,
} from "../components/HomeComponents/homeLinks";
import { useState } from "react";
import { Padding } from "@mui/icons-material";
export default function SearchBarModal({ handleClose }) {
  return (
    <div className={searchBarStyles.searchModal}>
      <div className={searchBarStyles.searchModalHeading}>
        <h1>Search Costaatt</h1>

        <div className={searchBarStyles.closeButton} onClick={handleClose}>
          <div>Close</div>
          <div>
            <GrClose />
          </div>
        </div>
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
        <h1>Popular Links</h1>
        <br />{" "}
        <div className={searchBarStyles.popularLinks}>
          {schoolOptions.map((menu) => (
            <p>{menu.name}</p>
          ))}
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          similique delectus voluptatem officiis voluptatum facilis, consectetur
          itaque cum! Nobis impedit quo animi totam doloribus soluta ducimus
          minus laboriosam maxime perferendis?
        </p>
      </div>
    </div>
  );
}
