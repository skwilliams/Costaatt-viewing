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

const FeesShortCourses = ({ area }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead sx={{ backgroundColor: "royalblue" }}>
          <TableRow>
            <TableCell>Course Title</TableCell>
            <TableCell>Credits</TableCell>
            <TableCell>Cost (TTD)</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {area.map((row) => (
            <TableRow key={row}>
              <TableCell>{row.courseTitle}</TableCell>
              <TableCell>{row.credits}</TableCell>
              <TableCell>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeesShortCourses;
