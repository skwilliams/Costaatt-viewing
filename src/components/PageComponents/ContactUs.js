import React from "react";
import ContactStyle from "../../styles/ContactUs.module.scss";
import SendIcon from "@mui/icons-material/Send";

import {
  InputLabel,
  Box,
  TextField,
  FormControl,
  Button,
  Input,
  FormHelperText,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { FaPray } from "react-icons/fa";
import { orange } from "@mui/material/colors";

const ContactUs = () => {
  const [pros, setPros] = React.useState("");
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setPros(event.target.value);
    setYear(event.target.value);
  };
  //   const color=orange[500]

  return (
    <>
      <Box
        sx={{
          //   minWidth: 700,
          width: 1000,
          height: 400,
          backgroundColor: "secondary",
          border: 3,
          borderColor: "secondary.main",
          //   textAlign:'left',

          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          //
        }}
      >
        <div className={ContactStyle.headerform}>
          <Typography variant="h4">
            {" "}
            Learn more about COSTAATT by connecting with us ..
          </Typography>
          <Typography variant="h5">We will be happy to assit you.</Typography>
        </div>

        <FormControl sx={{ m: 2, minWidth: 250 }}>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            // defaultValue="First Name"
          />
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 250 }}>
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            // defaultValue="Email Address"
          />
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 250 }}>
          <InputLabel id="prosepectivelabel">I'm a Prospective</InputLabel>
          <Select
            labelId=""
            id="Prospective"
            value={pros}
            label="I am a prospective   "
            onChange={handleChange}
          >
            <MenuItem value={1}>First Year</MenuItem>
            <MenuItem value={2}>Returning</MenuItem>
            <MenuItem value={3}>Transfer</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 2, minWidth: 250 }}>
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            // defaultValue="Last Name"
          />
        </FormControl>

        <FormControl sx={{ m: 2, minWidth: 250 }}>
          <TextField
            required
            id="outlined-required"
            label="Confirm Email Address"
            // defaultValue="Confirm Email Address"
          />
        </FormControl>

        <FormControl sx={{ m: 2, minWidth: 250 }}>
          <InputLabel id="anticipate">Anticipate Start</InputLabel>
          <Select
            labelId="anticipate"
            id="Prospective"
            value={year}
            label="I am a prospective   "
            onChange={handleChange}
          >
            <MenuItem value={1}>September 2023</MenuItem>
            <MenuItem value={2}>January 2024</MenuItem>
            <MenuItem value={3}>September 2024</MenuItem>
            <MenuItem value={2}>January 2025</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <FormControl sx={{ m: 3, minWidth: 200, textAlign: "center" }}>
            {" "}
            <Button
              color="secondary"
              size="large"
              variant="contained"
              align="center"
              endIcon={<SendIcon />}
            >
              {" "}
              Connect with us
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
