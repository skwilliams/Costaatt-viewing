import React from "react"
import { useRef, useImperativeHandle, forwardRef } from "react";
import Navbar from "../NavItems/Navbar";

 

const Header = forwardRef((props,ref) => {

  const navRef = useRef();
  useImperativeHandle(ref, () => ({
    getNavHeight: () => navRef.current.getBoundingClientRect().height,
  }));
  return (
  
    <header ref={navRef}>
      <Navbar />
    </header>
    
  
    
  );
});
Header.displayName = "Header";
export default Header;



// import React from "react";
// import { useRef, useImperativeHandle, forwardRef } from "react";
// import Navbar from "./Navbar";

// const Header = forwardRef((props, ref) => {
//   const navRef = useRef();
//   useImperativeHandle(ref, () => ({
//     getNavHeight: () => navRef.current.getBoundingClientRect().height,
//   }));
//   return (
//     <header ref={navRef}>
//       <Navbar />
//     </header>
//   );
// });

// export default Header;
