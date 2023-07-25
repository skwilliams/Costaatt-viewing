import React from 'react'
import CourseStyle from '../../styles/Course.module.scss'

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const DegreeCourses = ({courses} ) => {
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell className={CourseStyle.row}>Course Code</TableCell>
            <TableCell className={CourseStyle.coursename}>
              Course Name
            </TableCell>
            <TableCell className={CourseStyle.row}>Credits</TableCell>
          </TableHead>

          {courses.map((row) => (
            <TableRow fullWidth key={row.coursecode}>
              <TableCell className={CourseStyle.row}>
                {row.coursecode}
              </TableCell>
              <TableCell className={CourseStyle.coursename}>
                {row.coursename}
              </TableCell>
              <TableCell className={CourseStyle.row}>{row.credits}</TableCell>
            </TableRow>
          ))}
        </Table>{" "}
      </TableContainer>
    </>
  );
}

export default DegreeCourses