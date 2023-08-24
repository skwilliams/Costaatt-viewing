import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from 'next/link'

const steps = [
    {
        label:"Apply to College",
        linkto:"applynow"
    },
    {
        label:"Complete Transfer From",
        linkto:""
    },
    {
        label:"Submit to Admission",
        linkto:""
    },
];

export default function SimpleStep() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper  alternativeLabel>
        {steps.map((label) => (
          <Step key={label.label}>
            <Link href={label.linkto}>
            <StepLabel>{label.label}</StepLabel>
            </Link>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
