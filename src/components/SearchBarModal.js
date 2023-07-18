import * as React from "react";
import Button from "@mui/material/Button";
import input from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BiSearch } from "react-icons/bi";

export default function SearchBarModal() {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <form onClose={handleClose}>
        <div>Search Costaatt</div>
        <label>Form</label>
        <input
          autoFocus
          margin="dense"
          id="name"
          label="Search"
          type="email"
          fullWidth
        />
        <BiSearch />
      </form>
    </div>
  );
}
