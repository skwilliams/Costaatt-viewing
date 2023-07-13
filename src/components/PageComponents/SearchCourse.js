import React, { useState } from "react";
import ProgCard from"../../styles/ProgCard.module.scss";
import navBarStyles from "../../styles/Nav.module.scss";
import { BiSearch } from "react-icons/bi";



const SearchCourse = () => {
   const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`You searched for: ${name}`)
    }
    return (
  

      <form onClick={handleSubmit} className={ProgCard.magnifyingGlass}>
          <input 
           className={ProgCard.searchbox}
            type="text" 
            value={name}
            placeholder="Search for course"
            onChange={(e) => setName(e.target.value)}
          />
      <BiSearch className={ProgCard.searchIcon} />


 
      </form>
    )  
}

export default SearchCourse