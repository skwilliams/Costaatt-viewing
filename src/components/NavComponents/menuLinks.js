export const topNavLinksLeft = [
  {
    title: "School Departments",
    submenu: [
      {
        title: "School of Liberal Arts, Education and Digital Humanities",
        path: "/programmes/schools/liberal",
        submenu: [
          {
            title: "Criminal Justice, Human Security and Legal Studies",
            path: "/programmes/schools/liberal/CRIM",
          },
          {
            title: "Social and Behavioural Sciences Department ",
            path: "/programmes/schools/liberal/SABS",
          },
          {
            title: "Education",
            path: "/programmes/schools/liberal/EDUC",
          },
        ],
      },
      {
        title: "School of Nursing, Health and Medical Technologies",
        path: "/programmes/schools/nursing",
        submenu: [
          {
            title: "Department of Nursing",
            path: "/programmes/schools/nursing/NURS",
          },

          {
            title: "Department of Health Science Technologies",
            path: "/programmes/schools/nursing/HMST",
          },
        ],
      },
      {
        title: "School of Environment, Circular Economy and Sustainability",
        path: "/programmes/schools/enviro",
        submenu: [
          {
            title: "Environmental and Sustainability Studiess",
            path: "/programmes/schools/enviro/ENVS",
          },
          {
            title: "Natural and Life Sciences",
            path: "/programmes/schools/enviro/NLSC",
          },
        ],
      },
      {
        title: "School of Business and Digital Technologies",
        path: "/programmes/schools/busIT",

        submenu: [
          {
            title: "Management and Digital Entrepreneurship",
            path: "/programmes/schools/busIT/MGDE",
          },
          {
            title: "ICTs and Digital Technologies",
            path: "/programmes/schools/busIT/ICTD",
          },
        ],
      },
      {
        title: "School of Workforce Enhancement and Development",
        path: "/programmes/schools/workF",

        submenu: [
          {
            title: "Upskilling Academy",
            path: "/programmes/schools/workF/UPSK",
          },
          {
            title: "CollegeStarTT",
            path: "/programmes/schools/workF/CSTT",
          },
          {
            title: "Translation and Interpretation",
            path: "/programmes/schools/workF/CFTI",
          },
        ],
      },
      {
        title: "Ken Gordon School of Communication,Creative and Digital Media",
        path: "/programmes/schools/kengord",

        submenu: [
          {
            title: "Creative Industries and Culture ",
            path: "/programmes/schools/kengord/CIAC",
          },
          {
            title: "Digital Media",
            path: "/programmes/schools/kengord/DMAC",
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
    ],
    submenuImage: [
      {
        img: require("../../../public/images/dummyImg1.jpg"),
        title: "Academic Calendar",
        path: "/programmes/academiccalendar",
      },
      {
        img: require("../../../public/images/dummyImg1.jpg"),
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
        img: require("../../../public/images/dummyImg1.jpg"),
        title: "How to Register ",
        path: "/admissions/howtoregister",
      },
      {
        img: require("../../../public/images/dummyImg1.jpg"),
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
        img: require("../../../public/images/dummyImg1.jpg"),

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
        path: "/costaattlife/Careermgt",
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
        img: require("../../../public/images/dummyImg1.jpg"),
        title: "Sports",
        path: "/costaattlife/sports",
      },
      {
        img: require("../../../public/images/dummyImg1.jpg"),
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
        path: "/about/ataglance",
      },

      {
        title: "History",
        path: "/about/history",
      },
      {
        title: "Accreditation",
        path: "/about/accreditation",
      },
      {
        title: "Quality Assurance",
        path: "/about/qualityassurance",
      },
      {
        title: "College Leadership",
        path: "/about/leadership",
      },
    ],
    submenuImage: [
      {
        img: require("../../../public/images/dummyImg1.jpg"),
        title: "Careers",
        path: "/about/careers",
      },
    ],
  },
];
