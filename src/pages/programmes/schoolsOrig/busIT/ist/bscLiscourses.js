import React from 'react'

const bscLiscourses = () => {
  return (
    <div>bscLiscourses</div>
  )
}

export default bscLiscourses

export const bscLismajor = [
  {
    credittype: "Major Courses",
    coursecode: "LIBS 136",
    coursename: "Introduction to Information Resources in Libraries ",
    credits: 3,
  },

  {
    credittype: "Major Courses",
    coursecode: "LIBS 135",
    coursename: "Introduction to Libraries and Information Services  ",
    credits: 3,
  },

  {
    credittype: "Major Courses",

    coursecode: "LIBS 140",
    coursename: "Computer Applications in Libraries ",
    credits: 3,
  },

  {
    credittype: "Major Courses",

    coursecode: "LIBS 145",
    coursename: "Introduction to Technical Services in Libraries  ",
    credits: 3,
  },

  {
    credittype: "Major Courses",

    coursecode: "LIBS 200",
    coursename: "User and Reference Services I   ",
    credits: 3,
  },

  {
    credittype: "Major Courses",

    coursecode: "LIBS 248",
    coursename: " Organization of Knowledge: Cataloguing  ",
    credits: 3,
  },
  {
    credittype: "Major Courses",

    coursecode: "LIBS 249",
    coursename: "Organization of Knowledge: Classification ",
    credits: 3,
  },
  {
    credittype: "Major Courses",
    coursecode: "LIBS 244",
    coursename: "Library Internship  ",
    credits: 3,
  },
];

export const bscLiscore = [
  {
    credittype: "Core Courses",
    coursecode: "FYEC 100",
    coursename: "First Year Experience ",
    credits: 3,
  },
  {
    credittype: "Core Courses",
    coursecode: "LIBS 130",
    coursename: "Fundamental Research Skills ",
    credits: 3,
  },
  {
    credittype: "Core Courses",
    coursecode: "WRIT 117",
    coursename: "Fundamentals of Writing",
    credits: 3,
  },
  {
    credittype: "Core Courses",
    coursecode: "MATH 116",
    coursename: "Contemporary College Mathematics",
    credits: 3,
  },
];
export const bscLissupport = [
  {
    credittype: "Support Courses",
    coursecode: "RCMT 152",
    coursename: "Introduction to Records Management ",
    credits: 3,
  },

  {
    credittype: "Support Courses",
    coursecode: "ITEC 129",
    coursename: "Human and Computer Inteface",
    credits: 3,
  },
  {
    credittype: "Support Courses",
    coursecode: "ITEC 120",
    coursename: "Introduction to Computer Hardware",
    credits: 3,
  },
  {
    credittype: "Support Courses",
    coursecode: "SOCI 102 ",
    coursename: "Introduction to the study of Society ",
    credits: 3,
  },
];

export const totalcredits=120;
export const tuition = [
  {
    studenttype: "TT National",
    costpercredit: "$ 300",
    totalcost: "$ 36,000",
  },
  {
    studenttype: "Caricom",
    costpercredit: "$ 400",
    totalcost:"$ 48,000",
  },
  {

  studenttype:"International",
  costpercredit:"$ 750",
  totalcost:"$ 90,000",

},
];
export const salaries = [
  {
    position: " Professional positions in schools, public, academic and special libraries ",
    figure: "$11,000 -$15,000",
  },
  {
    position: " Senior (Librarian, Information Specialist, others..)",
    figure: "$11,000 -$15,000",
  },
  {
    position: "School Librarian",
    figure: "$11,000 -$15,000",
  },
    {
    position: "Records Manager 1",
    figure: "$7,800 -$10,200",
  },

  
  
];

export const minrequirements=[
  "Minimum five (5) CSEC/GCE O'Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A, B, C." ,
  "Pre-college matriculation",
  "Applicants who possess CAPE or A'Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme)"

];

export const supportingDoc=[
 "Id card","Passport","Education Certificates"

];
export const resources=[
  "Mid range computer","Internet Access"
]

export const supportDocA = [
  {
    nationality: "TT Nationals",
    id: "Yes",
    passport: "",
    birthCert: "Yes",
    academicCert: "Yes",
    },
    {
    nationality: "Non-Nationals",
    id: "",
    passport: "Yes",
    birthCert: "",
    academicCert: "Yes",
  },
    


];