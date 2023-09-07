import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from 'next/link'
import AdmisStyles from "@/styles/Admissions.module.scss"
import SettingsIcon from "@mui/icons-material/Settings";

const steps = [
  {
    label: "Apply to College",
    linkto: "applynow",
  },
  {
    label: "Speak to admissions Counsellor",
    linkto: "admissioncounsellors",
  },
  {
    label: "Download and Complete your Appliation for Transfer",
    linkto: "/pdfs/Transfer Exemption form-revised 110518.pdf",
  },
];

export default function SimpleStep() {
  return (
    <Box sx={{ width: "100%" }} >
      <Stepper >
        {steps.map((label) => (
          <Step key={label.label} >
            
            {/* StepIconComponent={SettingsIcon} */}
             <StepLabel >
              <Link  className={AdmisStyles.stepfont} 
              href={label.linkto}>
             
                {label.label}
              
            </Link></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
