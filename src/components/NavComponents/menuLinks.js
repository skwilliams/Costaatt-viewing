export const topNavLinksLeft = [
  {
    title: "Schools",
    submenu: [
      {
        title: "The School Of Liberal Arts, Education And Digital Humanities",
        path: "programmes",
        backgroundColor: "orange",
        left: "100px",
        width: "100%",
        position: "absolute",
        submenu: [
          {
            title: "Department of Social and Behavioural Sciences",
            path: "programmes",
          },
          {
            title:
              "Department of Languages, Literature and Communication Studies",
            path: "programmes",
          },
          {
            title: "Department of Mathematics",
            path: "programmes",
          },
          {
            title: "Department of Fine and Performing Arts",
            path: "programmes",
          },
          {
            title: "Department of Criminal Justice and Legal Studies",
            path: "programmes",
          },
          {
            title: "Office of the Dean",
            path: "programmes",
          },
        ],
      },

      {
        title: "School of Nursing, Health and Medical Technologies",
        path: "programmes",
        backgroundColor: "orange",
        left: "200px",
        position: "absolute",
        submenu: [
          {
            title: "Department of Nursing",
            path: "programmes",
          },
          {
            title: "Department of Health Science Technologies",
            path: "programmes",
          },
          {
            title: "Department of Environmental Studies",
            path: "programmes",
          },
          {
            title: "Natural and Life Sciences",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Environment, Circular Economy and Sustainability",
        path: "programmes",
        backgroundColor: "orange",
        left: "200px",
        position: "absolute",
        submenu: [
          {
            title: "Dept One",
            path: "programmes",
          },
          {
            title: "Dept One",
            path: "programmes",
          },
          {
            title: "Dept One",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Business and Digital Technologies",
        path: "programmes",
        backgroundColor: "orange",
        left: "200px",
        position: "absolute",
        submenu: [
          {
            title: "Department of Management and Entrepreneurship",
            path: "programmes",
          },
          {
            title: "Department of Information Science and Technology",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Workforce Enhancement and Development",
        path: "programmes",
        backgroundColor: "orange",
        left: "400px",
        position: "absolute",
        submenu: [
          {
            title: "Dept One",
            path: "programmes",
          },
          {
            title: "Dept One",
            path: "programmes",
          },
          {
            title: "Dept One",
            path: "programmes",
          },
        ],
      },
    ],
  },

  {
    title: "Current Students",
    path: "currentstudents",
  },
  {
    title: "Faculty & Staff",
    path: "facultystaff",
  },
  {
    title: "MY COSTAATT",
    path: "programmes",
  },
  {
    title: "Alumni",
    path: "alumni",
  },
  {
    title: "Facilities",
    path: "facilities",
  },
];

export const topNavLinksRight = [
  {
    title: "Request Info",
    path: "/requestinfo",
  },

  {
    id: "apply",
    title: "Apply",
    path: "/apply",
  },
];
export const footerLinks = [
  {
    title: "Programmes",
    path: "/programmes",
  },
  {
    title: "Admissions and Aid",
    path: "/admissions/applynow",
  },
  {
    title: "COSTAATT Life",
    path: "/",
  },
  {
    title: "About",
    path: "/",
  },
  {
    title: "Directory",
    path: "/",
  },
  {
    title: "Current Students",
    path: "/currentstudents",
  },
  {
    title: "Faculty & Staff",
    path: "/facultystaff",
  },
  {
    title: "MY COSTAATT",
    path: "/programmes",
  },
  {
    title: "Alumni",
    path: "/alumni",
  },
  {
    title: "Facilities",
    path: "/facilities",
  },
];
export const mainNavLinks = [
  {
    title: "Programmes",
    submenu: [
      {
        title: "Overview",
        path: "/programmes",
      },
      {
        title: "All Programmes",
        path: "/programmes/allprogrammes",
      },

      {
        title: "College Core",
        path: "/programmes/collegecore",
      },
      {
        title: "Professional Development Courses",
        path: "/programmes/shortcourses",
      },
      {
        title: "School of Nursing, Health and Medical Technologies",
        path: "/programmes/schools/nursing",
      },
      {
        title: "School of Liberal Arts, Education and Digital Humanities",
        path: "/programmes/schools/liberal",
      },
      {
        title: "School of Environment, Circular Economy and Sustainability",
        path: "/programmes/schools/enviro",
      },
      {
        title:
          "The Ken Gordon School of Communication Creative and Digital Media",
        path: "/programmes/schools/kengord",
      },
      {
        title: "School of Business and Digital Technologies",
        path: "/programmes/schools/busIT",
      },
      {
        title: "School of Workforce Enhancement and Development",
        path: "/programmes/schools/workF",
      },
    ],
    submenuImage: [
      {
        img: require("../../../images/Links/dummyImg1.jpg"),
        title: "Academic Calendar",
        path: "/programmes/academiccalendar",
      },
      {
        img: require("../../../images/Links/dummyImg2.jpg"),
        title: "Academic Advising",
        path: "/programmes/advising",
      },
    ],
  },
  {
    title: "Admissions and Aid ",
    submenu: [
      {
        title: "Apply Now",
        path: "/admissions/howtoapply",
      },
      {
        title: "Admission Requirements",
        path: "/admissions/requirements",
      },
      {
        title: "Fees and Funding",
        path: "/admissions/feesandfunding",
      },
      {
        title: "Our Programmes",
        path: "/programmes/allprogrammes",
      },
      {
        title: "Professional Development Application",
        path: "/admissions/developmentcoursesApp",
      },
      {
        title: "Transfer Credit and Exemptions ",
        path: "/admissions/transfercredits",
      },
    ],
    submenuImage: [
      {
        img: require("../../../images/Links/dummyImg1.jpg"),
        title: "How to Register ",
        path: "/admissions/howtoregister",
      },
      {
        img: require("../../../images/Links/dummyImg2.jpg"),
        title: "Visit us",
        path: "/admissions/visitus",
      },
    ],
  },
  {
    title: "COSTAATT Life ",
    // path: "/",
    submenu: [
      {
        title: "Student Clubs and Organizations",
        path: "/costaattlife/studentorg",
      },
      {
        title: "Health and wellness",
        path: "/costaattlife/healthwell",
      },
      {
        title: "Career Management",
        path: "/costaattlife/careermgt",
      },
      {
        title: "College Library",
        path: "/costaattlife/library",
      },
      {
        title: "I.T. Facilities",
        path: "/costaattlife/itservices",
      },
      {
        title: "Compass Center",
        path: "/costaattlife/compasscenter",
      },
      {
        title: "Events",
        path: "/events",
      },
    ],
    submenuImage: [
      {
        img: require("../../../images/Links/dummyImg1.jpg"),
        title: "Sports",
        path: "/costaattlife/sports",
      },
      {
        img: require("../../../images/Links/dummyImg2.jpg"),
        title: "Studnet Council",
        path: "/costaattlife/studentcouncil",
      },
    ],
  },
  {
    title: "About",
    path: "/",
    submenu: [
      {
        title: "Overview of Costaatt",
        path: "/",
      },
      {
        title: "History",
        path: "/",
      },
      {
        title: "Institutional Profile",
        path: "/",
      },
      {
        title: "Accreditation",
        path: "/",
      },
      {
        title: "College Leadership",
        path: "/",
      },
      {
        title: "Careers",
        path: "/",
      },
    ],
    submenuImage: [
      {
        img: require("../../../images/Links/dummyImg1.jpg"),
        title: "Academic Calendar",
        path: "/programmes",
      },
      {
        img: require("../../../images/Links/dummyImg2.jpg"),
        title: "Areas of Study",
        path: "/programmes",
      },
    ],
  },

  {
    title: "Directory",
    path: "/",
  },
];
