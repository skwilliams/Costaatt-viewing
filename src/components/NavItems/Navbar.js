import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import navStyles from "../../styles/NavItems.module.scss";
import SearchBarModal from "../SearchBarModal";
import { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div>
        <TopNav />
      </div>
      <div>
        <BottomNav />
      </div>{" "}
    </div>
  );
};

export default Navbar;
