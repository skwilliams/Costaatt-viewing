const allCourses = [
  {
    coursecode: "RCMT 152",
    coursename: "Introduction to Records Management ",
    credits: 3,
  },

  {
    coursecode: "ITEC 129",
    coursename: "Human and Computer Inteface",
    credits: 3,
  },
  {
    coursecode: "ITEC 120",
    coursename: "Introduction to Computer Hardware",
    credits: 3,
  },
  {
    coursecode: "SOCI 102 ",
    coursename: "Introduction to the study of Society ",
    credits: 3,
  },
  {
    coursecode: "LIBS 136",
    coursename: "Introduction to Information Resources in Libraries ",
    credits: 3,
  },

  {
    coursecode: "LIBS 135",
    coursename: "Introduction to Libraries and Information Services  ",
    credits: 3,
  },
  {
    coursecode: "LIBS 140",
    coursename: "Computer Applications in Libraries ",
    credits: 3,
  },

  {
    coursecode: "LIBS 145",
    coursename: "Introduction to Technical Services in Libraries  ",
    credits: 3,
  },

  {
    coursecode: "LIBS 200",
    coursename: "User and Reference Services I   ",
    credits: 3,
  },

  {
    coursecode: "LIBS 248",
    coursename: " Organization of Knowledge: Cataloguing  ",
    credits: 3,
  },
  {
    coursecode: "LIBS 249",
    coursename: "Organization of Knowledge: Classification ",
    credits: 3,
  },
  {
    coursecode: "LIBS 244",
    coursename: "Library Internship  ",
    credits: 3,
  },

  {
    coursecode: "FYEC 100",
    coursename: "First Year Experience ",
    credits: 3,
  },
  {
    coursecode: "LIBS 130",
    coursename: "Fundamental Research Skills ",
    credits: 3,
  },
  {
    coursecode: "WRIT 117",
    coursename: "Fundamentals of Writing",
    credits: 3,
  },
  {
    coursecode: "MATH 116",
    coursename: "Contemporary College Mathematics",
    credits: 3,
  },
];

const programmes = [
  {
    prog_shortname: "bscLIS",
    majorcourses: [
      "LIBS 136",
      "LIBS 135",
      "LIBS 140",
      "LIBS 145",
      "LIBS 200",
      "LIBS 248",
      "LIBS 249",
      "LIBS 244",
    ],
    electivecourses: [],
    corecourses: ["FYEC 100", "LIBS 130", "WRIT 117", "MATH 116", "SOCI 102 "],
    supportcourses: ["RCMT 152", "ITEC 120", "ITEC 129"],
    totalcredits: 120,
    salaries: [
      {
        position:
          "Professional positions in schools, public, academic and special libraries",
        figure: "$11,000 -$15,000",
      },
      {
        position: "Senior (Librarian, Information Specialist, others..)",
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
    ],
    specialMatricReqs: [],
  },
];

const getCourses = function (courseList) {
  const progCourses = [];
  courseList.forEach((courseCode) => {
    progCourses.push(
      allCourses.find((course) => course.coursecode === courseCode)
    );
  });
  return progCourses;
};

// const getCredits = function () {};
export const tuition = function (prog) {
  return [
    {
      studenttype: "TT National",
      costpercredit: 300,
      totalcost: prog.totalcredits * costpercredit,
    },
    {
      studenttype: "Caricom",
      costpercredit: 400,
      totalcost: prog.totalcredits * costpercredit,
    },
    {
      studenttype: "International",
      costpercredit: 750,
      totalcost: prog.totalcredits * costpercredit,
    },
  ];
};

export const getProgStruct = function (shortName) {
  const result = programmes.find(
    (prog) => prog.prog_shortname.toLowerCase() === shortName.toLowerCase()
  );
  return result ? result : null;
};

export const getRequirements = function (prog) {
  return {
    minrequirements: [
      "Minimum five (5) CSEC/GCE O'Level subjects, inclusive of English A and mathematics, Grades 1,2,3* or A, B, C.",
      "Pre-college matriculation",
      "Applicants who possess CAPE or A'Level qualiﬁcations may be considered for advanced standing (the award of credits towards your degree programme)",
    ].concat(prog.specialMatricReqs),
    resources: ["Mid range computer", "Internet Access"],
    // supportingDoc: ["Id card", "Passport", "Education Certificates"],
    supportingDocs: [
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
    ],
  };
};

// ~~~~~~~~~ CODE TO REMOVE ~~~~~~~~~~~~~~~~~
// export const bscLismajor = [];

// export const bscLiscore = [];
// export const bscLissupport = [];

// export const totalcredits = 120;

// ALL Shortnames
// "baAccounting";
// "aasBusAdmin";
// "certSupMgmt";
// "dipSupMgmt";
// "baMgmtEntrep";
// "bbaHRMgmt";
// "bbaMarketing";
// "certWebDev";
// "certCCNA";
// "certRecMgmt";
// "bscLIS";
// "aasITGen";
// "aasWebDev";
// "bscITGen";
// "bscWebDev";
// "bscITNetworking";
// "aasLIS";
// "aasMath";
// "baECCE";
// "certECCE";
// "aasCrimJustice";
// "certCrimJustice";
// "aasSocialWork";
// "bswSocialWork";
// "aaPsychology";
// "aaLitInEnglish";
// "aaFilmVidProd";
// "aaPerfArtMusic";
// "certFilmVidProd";
// "certMusicPerf";
// "baMassComm";
// "baGraphicDes";
// "aasGraphicDes";
// "aasAdvertPromo";
// "aaJournalism";
// "aasJourPubRel";
// "aaSpanish";
// "aaSpanForBus";
// "dipAdvertPromo";
// "certGraphicDes";
// "certWkplaceSkills";
// "certJournalism";
// "certPhotoVid";
// "certAdvertPromo";
// "certPublicRel";
