import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const FeesAndFunding = ({ dept }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "royalblue" }}>
          <TableRow>
            <TableCell>Programme</TableCell>
            <TableCell>Total Credit</TableCell>
            <TableCell>National (TTD)</TableCell>
            <TableCell>CARICOM (TTD)</TableCell>
            <TableCell> International (TTD)</TableCell>
            <TableCell> Approved for GATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dept.map((row) => (
            <TableRow key={row}>
              <TableCell>{row.Programme}</TableCell>
              <TableCell>{row.Total_Credit}</TableCell>
              <TableCell>{row.National}</TableCell>
              <TableCell>{row.CARICOM}</TableCell>
              <TableCell>{row.International}</TableCell>
              <TableCell>{row.GATE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeesAndFunding;
