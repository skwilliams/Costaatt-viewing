export const topNavLinksLeft = [
  {
    title: "School Departments",
    submenu: [
      {
        title: "School Of Liberal Arts, Education And Digital Humanities",
        path: "programmes",
        submenu: [
          {
            title: "Criminal Justice, Human Security and Legal Studies",
            path: "programmes",
          },
          {
            title: "Social and Behavioural Sciences Department ",
            path: "programmes",
          },
          {
            title: "Education",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Nursing, Health and Medical Technologies",
        path: "programmes",
        submenu: [
          {
            title: "Department of Nursing",
            path: "programmes",
          },
          {
            title: "Department of Health Science Technologies",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Environment, Circular Economy and Sustainability",
        path: "programmes",
        submenu: [
          {
            title: "Criminal Justice, Human Security and Legal Studies",
            path: "programmes",
          },
          {
            title: "Natural and Life Sciences",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Business and Digital Technologies",
        path: "programmes",
        submenu: [
          {
            title: "Management and Digital Entrepreneurship",
            path: "programmes",
          },
          {
            title: "ICTs and Digital Technologies",
            path: "programmes",
          },
        ],
      },
      {
        title: "School of Workforce Enhancement and Development",
        path: "programmes",

        submenu: [
          {
            title: "Upskilling Academy",
            path: "programmes",
          },
          {
            title: "CollegeStarTT",
            path: "programmes",
          },
          {
            title: "Translation and Interpretation",
            path: "programmes",
          },
        ],
      },
      {
        title: "Ken Gordon School of Communication,Creative and Digital Media",
        path: "programmes",

        submenu: [
          {
            title: "Creative Industries and Culture ",
            path: "programmes",
          },
          {
            title: "Digital Media",
            path: "programmes",
          },
        ],
      },
    ],
  },

  {
    title: "Faculty & Staff",
    path: "/facultystaff",
  },
  {
    title: "MY COSTAATT",
    path: "https://id.quicklaunch.io/authenticationendpoint/login.do?commonAuthCallerPath=%2Fpassivests&forceAuth=false&passiveAuth=false&tenantDomain=costaatt.edu.tt&wa=wsignin1.0&wct=2023-12-12T18%3A53%3A00Z&wctx=rm%3D0%26id%3Dpassive%26ru%3D%252fcas%252flogin%253fservice%253dhttps%25253A%25252F%25252Fmy.costaatt.edu.tt%25252Fpaf%25252Fauthorize&wtrealm=https%3A%2F%2Fcas-costaatt.quicklaunch.io%2F&sessionDataKey=e15b0fcf-9c94-4f15-9f66-2eb65f1db66a&relyingParty=https%3A%2F%2Fcas-costaatt.quicklaunch.io%2F&type=passivests&sp=costaattedutt&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL",
  },
  {
    title: "Alumni",
    path: "/alumni",
  },
];

export const topNavLinksRight = [
  // {
  //   title: "Request Info",
  //   path: "/requestinfo",
  // },

  {
    id: "apply",
    title: "Apply",
    path: "/apply",
  },
  {
    title: "Directory",
    path: "/",
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
    path: "/costaattlife",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Directory",
    path: "/directory",
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
        path: "/programmes/Allprogrammes",
      },

      {
        title: "College Core",
        path: "/programmes/Collegecore",
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
        title: "Admission Counsellor",
        path: "/programmes/admissioncounsellors",
      },
    ],
  },
  {
    title: "Admissions and Aid ",
    submenu: [
      {
        title: "Registry Services",
        path: "/admissions",
      },
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
    title: "Services",

    submenu: [
      {
        title: "Customized Training",
        path: "/services/customtraining",
      },

      {
        title: "Translation and Interpretation",
        path: "/services/translation",
      },
    ],
    submenuImage: [
      {
        img: require("../../../public/images/services/RoofTop-Terrace-2.jpg"),

        title: "Rent A Space ",
        path: "/services/rentspace",
      },
    ],
  },
  {
    title: "COSTAATT Life ",

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
        path: "/costaattlife/itfacilities",
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
        title: "Student Council",
        path: "/costaattlife/studentcouncil",
      },
    ],
  },

  {
    title: "About Us",
    submenu: [
      {
        title: "Profile at a Glance",
        path: "/about/Ataglance",
      },

      {
        title: "History",
        path: "/about/history",
      },
      {
        title: "Accreditation And Quality Assurance",
        path: "/about/Accreditation",
      },
      {
        title: "College Leadership",
        path: "/about/leadership",
      },
    ],
    submenuImage: [
      {
        img: require("../../../images/Links/dummyImg1.jpg"),
        title: "Careers",
        path: "/about/careers",
      },
      // {
      //    img: require("../../../images/Links/dummyImg2.jpg"),

      //   title: "Accreditation And Quality Assurance",
      //   path: "/about/accreditation",
      // },

      // },
    ],
  },

  // {
  //   title: "Directory",
  //   path: "/",
  // },
];
