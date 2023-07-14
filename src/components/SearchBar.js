import React, { useState } from "react";
import navBarStyles from "../styles/Nav.module.scss";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ placeholder }) => {
  const [showInput, setshowInput] = useState(false);

  const displayInput = () => {
    setshowInput(() => !showInput);
  };

  return (
    <>
      <div onClick={displayInput} className={navBarStyles.magnifyingGlass}>
        <BiSearch className={navBarStyles.searchIcon} />
      </div>
      {showInput ? (
        <div className={navBarStyles.searchInput}>
          {/* should go to a search page */}
          <div className={navBarStyles.dropDownSearch}>
            <input type="text" name="" id="" placeholder={placeholder} />
            <button className={navBarStyles.homeSearchButton}>Search</button>
          </div>{" "}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default SearchBar;
