const allCourses = [
  {
    coursecode: "ACCT 126",
    coursename: "Fundamentals of Accounting",
    credits: 3,
  },
  {
    coursecode: "ACCT 210",
    coursename: "Cost and Management Accounting",
    credits: 3,
  },
  {
    coursecode: "ACCT 215",
    coursename: "Intermediate Accounting I",
    credits: 3,
  },
  {
    coursecode: "ACCT 216",
    coursename: "Intermediate Accounting II",
    credits: 3,
  },
  {
    coursecode: "ACCT 222",
    coursename: "Accounting Systems and Applications",
    credits: 3,
  },
  {
    coursecode: "ACCT 230",
    coursename: "Intermediate Cost Accounting",
    credits: 3,
  },
  {
    coursecode: "ACCT 250",
    coursename: "Auditing",
    credits: 3,
  },
  {
    coursecode: "ACCT 310",
    coursename: "Business Tax",
    credits: 3,
  },
  {
    coursecode: "ACCT 410",
    coursename: "Advanced Financial Reporting",
    credits: 3,
  },
  {
    coursecode: "ACCT 415",
    coursename: "Advanced Auditing",
    credits: 3,
  },
  {
    coursecode: "ACCT 420",
    coursename: "Advanced Cost and Management",
    credits: 3,
  },
  {
    coursecode: "ACCT 499",
    coursename: "Accounting Simulation",
    credits: 4,
  },
  {
    coursecode: "ADVT 230",
    coursename: "Principles of Advertising",
    credits: 3,
  },
  {
    coursecode: "ADVT 240",
    coursename: "Copywriting",
    credits: 3,
  },
  {
    coursecode: "ADVT 241",
    coursename: "Digital Photography and Animation for Advertising",
    credits: 3,
  },
  {
    coursecode: "ADVT 244",
    coursename: "Advertising and Promotions Internship",
    credits: 3,
  },
  {
    coursecode: "ADVT 255",
    coursename: "Advertising and Promotions Practicum (AAS only)",
    credits: 3,
  },
  {
    coursecode: "ADVT 320",
    coursename: "Media Buying and Planning",
    credits: 3,
  },
  {
    coursecode: "ADVT 330",
    coursename: "Advertising Campaigns",
    credits: 3,
  },
  {
    coursecode: "ADVT 420",
    coursename: "Client Relations",
    credits: 3,
  },
  {
    coursecode: "ADVT 430",
    coursename: "Advertising Research",
    credits: 3,
  },
  {
    coursecode: "ADVT 444",
    coursename: "Advertising and Promotions Internship",
    credits: 4,
  },
  {
    coursecode: "ADVT 455",
    coursename: "Advertising and Promotions Practicum",
    credits: 4,
  },
  {
    coursecode: "ADVT 460",
    coursename: "Advertising Strategies",
    credits: 3,
  },
  {
    coursecode: "ADVT 499",
    coursename: "Senior Project – Advertising and Promotions",
    credits: 3,
  },
  {
    coursecode: "ARTS 120",
    coursename: "Survey of Art History",
    credits: 1,
  },
  {
    coursecode: "BUSI 120",
    coursename: "Business Orientation",
    credits: 1,
  },
  {
    coursecode: "BUSI 203",
    coursename: "Leadership and Ethics OR",
    credits: 3,
  },
  {
    coursecode: "BUSI 216",
    coursename: "Introduction to International Business",
    credits: 3,
  },
  {
    coursecode: "CLTR 120",
    coursename: "Introduction to the Culture of Trinidad and Tobago",
    credits: 1,
  },
  {
    coursecode: "COMM 105",
    coursename: "The Job Interview",
    credits: 1,
  },
  {
    coursecode: "COMM 108",
    coursename: "Oral Presentation Skills",
    credits: 3,
  },
  {
    coursecode: "COMM 118",
    coursename: "Communication in the Workplace",
    credits: 3,
  },
  {
    coursecode: "COMM 119",
    coursename: "Advanced Grammar for Office Professionals",
    credits: 3,
  },
  {
    coursecode: "COMM 120",
    coursename:
      "Critical Reading and Writing for Journalism and Communication Majors",
    credits: 4,
  },
  {
    coursecode: "COMM 121",
    coursename: "Introduction to Mass Communication",
    credits: 3,
  },
  {
    coursecode: "COMM 130",
    coursename: "Communication III: Understanding Human Communication",
    credits: 3,
  },
  {
    coursecode: "COMM 135",
    coursename: "Voice and Presentation",
    credits: 3,
  },
  {
    coursecode: "COMM 351",
    coursename: "Social Media Communications",
    credits: 3,
  },
  {
    coursecode: "COMM 365",
    coursename: "Audience and Reception",
    credits: 3,
  },
  {
    coursecode: "COMM 450",
    coursename: "Music as Communication",
    credits: 3,
  },
  {
    coursecode: "COMM 452",
    coursename: "Film as Communication",
    credits: 3,
  },
  {
    coursecode: "COMM 455",
    coursename: "Media/ Public Relations Practicum",
    credits: 4,
  },
  {
    coursecode: "COMM 462",
    coursename: "Mass Communication Research Fundamentals",
    credits: 3,
  },
  {
    coursecode: "COMM 499",
    coursename: "Senior Project – Mass Communication",
    credits: 4,
  },
  {
    coursecode: "ECCE 100",
    coursename: "Introduction to the World of the Learner",
    credits: 3,
  },
  {
    coursecode: "ECCE 200",
    coursename: "Emergent Literacy Methods",
    credits: 3,
  },
  {
    coursecode: "ECON 110",
    coursename: "Introduction to General Economics",
    credits: 3,
  },
  {
    coursecode: "ECON 120",
    coursename: "Principles of Microeconomics",
    credits: 3,
  },
  {
    coursecode: "ECON 125",
    coursename: "Principles of Macroeconomics",
    credits: 3,
  },
  {
    coursecode: "EDUC 124",
    coursename: "Sign Language I",
    credits: 3,
  },
  {
    coursecode: "EDUC 201",
    coursename: "Education Foundations for School Librarians",
    credits: 3,
  },
  {
    coursecode: "ENGL 200",
    coursename: "Comparative Literature",
    credits: 3,
  },
  {
    coursecode: "ENTP 210",
    coursename: "Fundamentals of Entrepreneurship",
    credits: 3,
  },
  {
    coursecode: "ENTP 220",
    coursename: "Caribbean Business Environments",
    credits: 4,
  },
  {
    coursecode: "ENTP 310",
    coursename: "Managing Family Enterprise",
    credits: 3,
  },
  {
    coursecode: "ENTP 410",
    coursename: "Social Entrepreneurship",
    credits: 3,
  },
  {
    coursecode: "ENVH 102",
    coursename: "World Issues in Public Health",
    credits: 1,
  },
  {
    coursecode: "ENVS 121",
    coursename: "Environmental Issues and Sustainability",
    credits: 1,
  },
  {
    coursecode: "FILM 140",
    coursename: "Introduction to Video Production",
    credits: 3,
  },
  {
    coursecode: "FILM 150",
    coursename: "Script Writing I",
    credits: 3,
  },
  {
    coursecode: "FILM 261",
    coursename: "Single Camera Production",
    credits: 3,
  },
  {
    coursecode: "FILM 271",
    coursename: "Video and Film Editing",
    credits: 3,
  },
  {
    coursecode: "FINC 205",
    coursename: "Financial Management",
    credits: 3,
  },
  {
    coursecode: "FINC 310",
    coursename: "Corporate Finance",
    credits: 3,
  },
  {
    coursecode: "FYEC 400",
    coursename: "Final Year Signature Portfolio",
    credits: 3,
  },
  {
    coursecode: "GRDE 122",
    coursename: "Principles of Design",
    credits: 3,
  },
  {
    coursecode: "GRDE 123",
    coursename: "Introduction to Drawing and Painting",
    credits: 3,
  },
  {
    coursecode: "GRDE 124",
    coursename: "Visual Thinking and Advertising Concepts",
    credits: 3,
  },
  {
    coursecode: "GRDE 127",
    coursename: "Digital Communication Design",
    credits: 3,
  },
  {
    coursecode: "GRDE 128",
    coursename: "Introduction to Commercial Design",
    credits: 3,
  },
  {
    coursecode: "GRDE 129",
    coursename: "Introduction to Graphic Design",
    credits: 3,
  },
  {
    coursecode: "GRDE 130",
    coursename: "Typography I (Calligraphy and Letterform)",
    credits: 3,
  },
  {
    coursecode: "GRDE 153",
    coursename: "Image Manipulation",
    credits: 3,
  },
  {
    coursecode: "GRDE 182",
    coursename: "Vector Graphics",
    credits: 3,
  },
  {
    coursecode: "GRDE 215",
    coursename: "Digital Photography",
    credits: 3,
  },
  {
    coursecode: "GRDE 225",
    coursename: "Photoshop for Photographers",
    credits: 3,
  },
  {
    coursecode: "GRDE 230",
    coursename: "Typography II (Logos and Creating Identities)",
    credits: 3,
  },
  {
    coursecode: "GRDE 233",
    coursename: "3D Design: Rendering and Storyboarding",
    credits: 3,
  },
  {
    coursecode: "GRDE 234",
    coursename: "Publication Design",
    credits: 3,
  },
  {
    coursecode: "GRDE 245",
    coursename: "Art History",
    credits: 3,
  },
  {
    coursecode: "GRDE 253",
    coursename: "Introduction to Motion Graphics",
    credits: 3,
  },
  {
    coursecode: "GRDE 255",
    coursename: "Graphic Design Practicum",
    credits: 3,
  },
  {
    coursecode: "GRDE 353",
    coursename: "Advanced Image Manipulation and Vector Graphics",
    credits: 3,
  },
  {
    coursecode: "GRDE 363",
    coursename: "Colour Theory",
    credits: 3,
  },
  {
    coursecode: "GRDE 419",
    coursename: "Design for The Web",
    credits: 3,
  },
  {
    coursecode: "GRDE 440",
    coursename: "Graphic Design Concepts I",
    credits: 3,
  },
  {
    coursecode: "GRDE 442",
    coursename: "Graphic Design Concepts II",
    credits: 3,
  },
  {
    coursecode: "GRDE 453",
    coursename: "Packaging and Post Production",
    credits: 3,
  },
  {
    coursecode: "GRDE 499",
    coursename: "Senior Project/Graphic Design",
    credits: 4,
  },
  {
    coursecode: "HIST 210",
    coursename: "History of Trinidad and Tobago",
    credits: 3,
  },
  {
    coursecode: "HIST 235",
    coursename: "Latin America History 20th Century",
    credits: 3,
  },
  {
    coursecode: "ITEC 115",
    coursename: "Information Systems  Project Management",
    credits: 3,
  },
  {
    coursecode: "ITEC 121",
    coursename: "Productivity Tools",
    credits: 3,
  },
  {
    coursecode: "ITEC 122",
    coursename: "Introduction to Operating Systems",
    credits: 3,
  },
  {
    coursecode: "ITEC 124",
    coursename: "Operating Systems Platforms",
    credits: 3,
  },
  {
    coursecode: "ITEC 129",
    coursename: "User Experience Design",
    credits: 3,
  },
  {
    coursecode: "ITEC 133",
    coursename: "Programming I",
    credits: 3,
  },
  {
    coursecode: "ITEC 180",
    coursename: "Foundations of Web Development",
    credits: 3,
  },
  {
    coursecode: "ITEC 225",
    coursename: "Systems Analysis",
    credits: 3,
  },
  {
    coursecode: "ITEC 229",
    coursename: "Human and Computer Interface Design",
    credits: 3,
  },
  {
    coursecode: "ITEC 235",
    coursename: "Object Oriented Programming I",
    credits: 3,
  },
  {
    coursecode: "ITEC 236",
    coursename: "Object Oriented Programming II",
    credits: 3,
  },
  {
    coursecode: "ITEC 240",
    coursename: "Web Page Design",
    credits: 3,
  },
  {
    coursecode: "ITEC 244",
    coursename: "Internet Technology",
    credits: 3,
  },
  {
    coursecode: "ITEC 245",
    coursename: "Introduction to Scripting Languages",
    credits: 3,
  },
  {
    coursecode: "ITEC 250",
    coursename: "Computer Networks, Architecture and Protocol",
    credits: 3,
  },
  {
    coursecode: "ITEC 251",
    coursename: "Network Management I",
    credits: 3,
  },
  {
    coursecode: "ITEC 260",
    coursename: "Information Security Standards and Control",
    credits: 3,
  },
  {
    coursecode: "ITEC 270",
    coursename: "Database Design I",
    credits: 3,
  },
  {
    coursecode: "ITEC 280",
    coursename: "Three Tier Web Programming",
    credits: 3,
  },
  {
    coursecode: "ITEC 285",
    coursename: "Client Server Technology",
    credits: 3,
  },
  {
    coursecode: "ITEC 292",
    coursename: "Data Structures",
    credits: 3,
  },
  {
    coursecode: "ITEC 322",
    coursename: "Advanced Operating Systems Platform",
    credits: 3,
  },
  {
    coursecode: "ITEC 325",
    coursename: "Project Skills for Developers",
    credits: 3,
  },
  {
    coursecode: "ITEC 330",
    coursename: "Advanced Interface Design and Software Testing",
    credits: 3,
  },
  {
    coursecode: "ITEC 340",
    coursename: "Time Based Media and UI Programming",
    credits: 3,
  },
  {
    coursecode: "ITEC 345",
    coursename: "Web Client-Side Programming and Libraries",
    credits: 3,
  },
  {
    coursecode: "ITEC 346",
    coursename: "Web Server-Side Programming with Libraries",
    credits: 3,
  },
  {
    coursecode: "ITEC 347",
    coursename: "Web Development using Proprietary Technology",
    credits: 3,
  },
  {
    coursecode: "ITEC 351",
    coursename: "Advanced Routing Protocol Concepts",
    credits: 3,
  },
  {
    coursecode: "ITEC 352",
    coursename: "LAN Switching and VLANs",
    credits: 3,
  },
  {
    coursecode: "ITEC 360",
    coursename: "Security Management",
    credits: 3,
  },
  {
    coursecode: "ITEC 363",
    coursename: "Network Security",
    credits: 3,
  },
  {
    coursecode: "ITEC 370",
    coursename: "Managing Data for Web Applications",
    credits: 3,
  },
  {
    coursecode: "ITEC 385",
    coursename: "Developing E-commerce Applications",
    credits: 3,
  },
  {
    coursecode: "ITEC 420",
    coursename: "Cyber Security",
    credits: 3,
  },
  {
    coursecode: "ITEC 435",
    coursename: "Cloud Computing and Development",
    credits: 3,
  },
  {
    coursecode: "ITEC 437",
    coursename: "Internet of Things",
    credits: 3,
  },
  {
    coursecode: "ITEC 444",
    coursename: "IT Senior Internship",
    credits: 3,
  },
  {
    coursecode: "ITEC 447",
    coursename: "Mobile Application Development",
    credits: 3,
  },
  {
    coursecode: "ITEC 450",
    coursename: "Building Content Management Systems",
    credits: 3,
  },
  {
    coursecode: "ITEC 451",
    coursename: "Network Management II",
    credits: 3,
  },
  {
    coursecode: "ITEC 452",
    coursename: "WAN Technologies",
    credits: 3,
  },
  {
    coursecode: "ITEC 453",
    coursename: "Introduction to Mobile Technologies",
    credits: 3,
  },
  {
    coursecode: "ITEC 455",
    coursename: "IT Senior Practicum",
    credits: 3,
  },
  {
    coursecode: "ITEC 456",
    coursename: "Wireless Networking",
    credits: 3,
  },
  {
    coursecode: "ITEC 457",
    coursename: "Data Centre Construction",
    credits: 3,
  },
  {
    coursecode: "ITEC 485",
    coursename: "API Programming",
    credits: 3,
  },
  {
    coursecode: "ITEC 490",
    coursename: "Systems Administration for the Web",
    credits: 3,
  },
  {
    coursecode: "ITEC 499",
    coursename: "IT Senior Project",
    credits: 3,
  },
  {
    coursecode: "JOUR 123",
    coursename: "Fundamentals of Reporting",
    credits: 3,
  },
  {
    coursecode: "JOUR 131",
    coursename: "Ethics in Journalism and Public Relations",
    credits: 3,
  },
  {
    coursecode: "JOUR 135",
    coursename: "Photo Journalism",
    credits: 3,
  },
  {
    coursecode: "JOUR 244",
    coursename: "Media/Public Relations Internship",
    credits: 4,
  },
  {
    coursecode: "JOUR 255",
    coursename: "Media/Public Relations Practicum",
    credits: 4,
  },
  {
    coursecode: "JOUR 275",
    coursename: "Critical Analysis of Media and TV Coverage",
    credits: 3,
  },
  {
    coursecode: "JOUR 281",
    coursename: "Broadcast News Writing",
    credits: 3,
  },
  {
    coursecode: "JOUR 298",
    coursename: "Multimedia Journalism",
    credits: 3,
  },
  {
    coursecode: "JOUR 305",
    coursename: "Data Literacy for Media Practice",
    credits: 3,
  },
  {
    coursecode: "JOUR 341",
    coursename: "Reporting in the Global Context",
    credits: 3,
  },
  {
    coursecode: "JOUR 354",
    coursename: "Feature Writing",
    credits: 3,
  },
  {
    coursecode: "JOUR 360",
    coursename: "Copy Editing",
    credits: 3,
  },
  {
    coursecode: "JOUR 360",
    coursename: "Copy Editing",
    credits: 3,
  },
  {
    coursecode: "JOUR 444",
    coursename: "Media Internship/ Practicum",
    credits: 4,
  },
  {
    coursecode: "JOUR 453",
    coursename: "Business and Energy Reporting",
    credits: 3,
  },
  {
    coursecode: "JOUR 460",
    coursename: "Newspaper and Magazine Editing",
    credits: 3,
  },
  {
    coursecode: "JOUR 498",
    coursename: "Investigative Reporting",
    credits: 3,
  },
  {
    coursecode: "LAST 120",
    coursename: "Introduction to Latin American Studies",
    credits: 3,
  },
  {
    coursecode: "LAST 121",
    coursename: "International Relations and Latin America",
    credits: 3,
  },
  {
    coursecode: "LAST 225",
    coursename: "Doing Business in Latin America",
    credits: 3,
  },
  {
    coursecode: "LAST 225",
    coursename: "Doing Business in Latin America",
    credits: 3,
  },
  {
    coursecode: "LAST 375",
    coursename: "Trade and Economics in Latin America",
    credits: 3,
  },
  {
    coursecode: "LAWW 115",
    coursename: "Legal Aspects of Records Management",
    credits: 3,
  },
  {
    coursecode: "LAWW 130",
    coursename: "Caribbean Legal Systems",
    credits: 3,
  },
  {
    coursecode: "LAWW 140",
    coursename: "Criminal Law",
    credits: 3,
  },
  {
    coursecode: "LAWW 200",
    coursename: "Legal Writing and Research",
    credits: 3,
  },
  {
    coursecode: "LAWW 213",
    coursename: "Estates Law",
    credits: 3,
  },
  {
    coursecode: "LAWW 215",
    coursename: "Elements of Contract Law",
    credits: 3,
  },
  {
    coursecode: "LAWW 220",
    coursename: "Civil Procedure",
    credits: 3,
  },
  {
    coursecode: "LAWW 270",
    coursename: "Laws Affecting Journalism and Public Relations",
    credits: 3,
  },
  {
    coursecode: "LAWW 310",
    coursename: "Business Law",
    credits: 3,
  },
  {
    coursecode: "LIBS 147",
    coursename: "Introduction to Archival Studies",
    credits: 3,
  },
  {
    coursecode: "LIBS 240",
    coursename: "Creating Records: Caribbean Historical Frameworks",
    credits: 3,
  },
  {
    coursecode: "LIBS 260",
    coursename: "Young Adult Sources and Service",
    credits: 3,
  },
  {
    coursecode: "LIBS 267",
    coursename: "Integrated Marketing Communications for Libraries",
    credits: 3,
  },
  {
    coursecode: "LIBS 273",
    coursename: "Introduction to Children’s Literature",
    credits: 3,
  },
  {
    coursecode: "LIBS 274",
    coursename: "Introduction to Caribbeana and Its Sources I",
    credits: 3,
  },
  {
    coursecode: "LIBS 300",
    coursename: "User Services II",
    credits: 3,
  },
  {
    coursecode: "LIBS 334",
    coursename: "Archival Preservation and Access",
    credits: 3,
  },
  {
    coursecode: "LIBS 352",
    coursename: "Instructional Design for Information Literacy",
    credits: 3,
  },
  {
    coursecode: "LIBS 370",
    coursename: "Digital Libraries",
    credits: 3,
  },
  {
    coursecode: "LIBS 371",
    coursename: "Technology for Archives",
    credits: 3,
  },
  {
    coursecode: "LIBS 372",
    coursename: "Serials Management",
    credits: 3,
  },
  {
    coursecode: "LIBS 375",
    coursename: "Caribbeana and its Sources II",
    credits: 3,
  },
  {
    coursecode: "LIBS 376",
    coursename: "School Media Centres",
    credits: 3,
  },
  {
    coursecode: "LIBS 379",
    coursename: "Management of Libraries and Information Centres",
    credits: 3,
  },
  {
    coursecode: "LIBS 433",
    coursename: "Current Issues in Libraries",
    credits: 3,
  },
  {
    coursecode: "LIBS 472",
    coursename: "Educational Technology in the School Curriculum",
    credits: 3,
  },
  {
    coursecode: "LIBS 477",
    coursename: "Collection Development and Management",
    credits: 3,
  },
  {
    coursecode: "LIBS 478",
    coursename: "School Media Resources in the Curriculum",
    credits: 3,
  },
  {
    coursecode: "LIBS 499",
    coursename: "Senior Project: Information and Library Science",
    credits: 3,
  },
  {
    coursecode: "MATH 117",
    coursename: "College Algebra",
    credits: 3,
  },
  {
    coursecode: "MATH 118",
    coursename: "Pre-Calculus",
    credits: 3,
  },
  {
    coursecode: "MATH 119",
    coursename: "Finite Mathematics",
    credits: 3,
  },
  {
    coursecode: "MATH 143",
    coursename: "Discrete Mathematics",
    credits: 3,
  },
  {
    coursecode: "MGMT 125",
    coursename: "Principles of Management",
    credits: 3,
  },
  {
    coursecode: "MGMT 200",
    coursename: "Events Management",
    credits: 3,
  },
  {
    coursecode: "MGMT 205",
    coursename: "Management of Information Systems",
    credits: 3,
  },
  {
    coursecode: "MGMT 210",
    coursename: "Introduction of Project Management",
    credits: 2,
  },
  {
    coursecode: "MGMT 300",
    coursename: "Organisational Behaviour",
    credits: 3,
  },
  {
    coursecode: "MKTG 125",
    coursename: "Customer Service Fundamentals",
    credits: 3,
  },
  {
    coursecode: "MKTG 205",
    coursename: "Principles of Marketing",
    credits: 3,
  },
  {
    coursecode: "MKTG 290",
    coursename: "Digital Marketing",
    credits: 3,
  },
  {
    coursecode: "MKTG 300",
    coursename: "E-Commerce Design and Development",
    credits: 3,
  },
  {
    coursecode: "MKTG 305",
    coursename: "Fundamentals of Selling",
    credits: 3,
  },
  {
    coursecode: "MKTG 310",
    coursename: "Retailing",
    credits: 3,
  },
  {
    coursecode: "MKTG 315",
    coursename: "Service Marketing",
    credits: 3,
  },
  {
    coursecode: "MKTG 320",
    coursename: "Consumer Behaviour",
    credits: 3,
  },
  {
    coursecode: "MKTG 325",
    coursename: "Integrated Marketing Communications",
    credits: 3,
  },
  {
    coursecode: "MKTG 330",
    coursename: "International Marketing",
    credits: 3,
  },
  {
    coursecode: "MKTG 405",
    coursename: "Customer Relationship Management",
    credits: 3,
  },
  {
    coursecode: "MKTG 410",
    coursename: "Brand Management",
    credits: 3,
  },
  {
    coursecode: "MUSC 120",
    coursename: "Survey of the History of Music",
    credits: 1,
  },
  {
    coursecode: "PORT 150",
    coursename: "Brazilian Culture and Language I",
    credits: 3,
  },
  {
    coursecode: "PORT 250",
    coursename: "Brazilian Culture and Language II",
    credits: 3,
  },
  {
    coursecode: "PSYC 103",
    coursename: "Understanding Human Behaviour and Diversity",
    credits: 3,
  },
  {
    coursecode: "PUBR 139",
    coursename: "Introduction to Strategic Public Relations",
    credits: 3,
  },
  {
    coursecode: "PUBR 221",
    coursename: "Image, Etiquette and Protocol",
    credits: 2,
  },
  {
    coursecode: "PUBR 351",
    coursename: "Applied Public Relations Planning",
    credits: 3,
  },
  {
    coursecode: "RCMT 152",
    coursename: "Introduction to Records Management",
    credits: 4,
  },
  {
    coursecode: "RCMT 153",
    coursename: "Fundamentals of Electronics Records Management",
    credits: 4,
  },
  {
    coursecode: "RCMT 154",
    coursename: "Introduction to Archival Management",
    credits: 3,
  },
  {
    coursecode: "RCMT 190",
    coursename: "Records Management Practicum",
    credits: 3,
  },
  {
    coursecode: "RELI 205",
    coursename: "Comparative Religion",
    credits: 3,
  },
  {
    coursecode: "SCIE 121",
    coursename: "Fundamentals of Natural Sciences",
    credits: 3,
  },
  {
    coursecode: "SCIE 201",
    coursename: "Contemporary Issues in Science OR",
    credits: 1,
  },
  {
    coursecode: "SPAN 100",
    coursename: "Introduction to Spanish",
    credits: 3,
  },
  {
    coursecode: "SPAN 103",
    coursename: "Basic Spanish: All About Me",
    credits: 3,
  },
  {
    coursecode: "SPAN 105",
    coursename: "Spanish for Travel and Tourism",
    credits: 3,
  },
  {
    coursecode: "SPAN 107",
    coursename: "Spanish for Social Settings",
    credits: 3,
  },
  {
    coursecode: "SPAN 121",
    coursename: "Conversation in Spanish",
    credits: 4,
  },
  {
    coursecode: "SPAN 122",
    coursename: "Spanish for Business I",
    credits: 4,
  },
  {
    coursecode: "SPAN 123",
    coursename: "Spanish for Business II",
    credits: 4,
  },
  {
    coursecode: "SPAN 130",
    coursename: "Spanish Stylistics I",
    credits: 3,
  },
  {
    coursecode: "SPAN 140",
    coursename: "Spanish Language I",
    credits: 4,
  },
  {
    coursecode: "SPAN 150",
    coursename: "Contrastive Grammar",
    credits: 4,
  },
  {
    coursecode: "SPAN 210",
    coursename: "Latin American Civilisation and Culture I",
    credits: 4,
  },
  {
    coursecode: "SPAN 211",
    coursename: "Latin American Civilisation and Culture II",
    credits: 3,
  },
  {
    coursecode: "SPAN 230",
    coursename: "Introduction to Translation",
    credits: 3,
  },
  {
    coursecode: "SPAN 231",
    coursename: "Spanish Language II",
    credits: 4,
  },
  {
    coursecode: "SPAN 240",
    coursename: "Introduction to Interpretation Techniques",
    credits: 3,
  },
  {
    coursecode: "SPAN 246",
    coursename: "Socio-Cultural Issues in Latin America I",
    credits: 3,
  },
  {
    coursecode: "SPAN 247",
    coursename: "Internship: Study Abroad",
    credits: 3,
  },
  {
    coursecode: "SPAN 277",
    coursename: "Independent Study",
    credits: 3,
  },
  {
    coursecode: "SPAN 295",
    coursename: "Spanish Language III",
    credits: 4,
  },
  {
    coursecode: "SPAN 310",
    coursename: "Spanish For Business III",
    credits: 3,
  },
  {
    coursecode: "SPAN 315",
    coursename: "Translation and Interpreting Techniques",
    credits: 3,
  },
  {
    coursecode: "SPAN 447",
    coursename: "Spanish for Business - Immersion Abroad",
    credits: 3,
  },
  {
    coursecode: "SPAN 477",
    coursename: "Independent Study",
    credits: 3,
  },
  {
    coursecode: "SPAN 450",
    coursename: "Spanish Language IV",
    credits: 4,
  },
  {
    coursecode: "STAT 120",
    coursename: "Fundamentals of Statistics",
    credits: 3,
  },
  {
    coursecode: "RCMT 150",
    coursename: "Introduction to Records Management ",
    credits: 3,
  },

  {
    coursecode: "ITEC 229",
    coursename: "Human and Computer Inteface Design",
    credits: 3,
  },
  {
    coursecode: "ITEC 120",
    coursename: "Introduction to Computer Hardware",
    credits: 3,
  },
  {
    coursecode: "SOCI 102",
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
    coursename: "First Year Experience Course",
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
  {
    coursecode: "XXXX ###",
    coursename: "Elective",
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
    specialcourses: [],
    electivecourses: [],
    corecourses: ["FYEC 100", "LIBS 130", "WRIT 117", "MATH 116", "COMM 108"],
    supportcourses: ["RCMT 152", "ITEC 120", "ITEC 129", "SOCI 102"],
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
    semester: ["September", "January"],
    campus: ["City Campus"],
    duration: ["Full-time: 4 yrs", "Part-time: 6 yrs"],
    mode: ["Blended"],
    GATE: ["Approved"],
    specialMatricReqs: [],
  },
  {
    prog_shortname: "aasITGen",
    majorcourses: [
      "ITEC 120",
      "ITEC 122",
      "ITEC 133",
      "ITEC 229",
      "ITEC 240",
      "ITEC 250",
      "ITEC 260",
      "ITEC 270",
    ],
    specialcourses: [
      "ITEC 115",
      "ITEC 124",
      "ITEC 225",
      "ITEC 235",
      "ITEC 244",
    ],
    electivecourses: ["XXXX ###"],
    corecourses: ["FYEC 100", "LIBS 130", "WRIT 117", "MATH 117", "COMM 108"],
    supportcourses: ["MATH 118", "GRDE 129"],
    totalcredits: 64,
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
    semester: ["September", "January"],
    campus: ["City Campus", "South Campus"],
    duration: ["Full-time: 4 yrs", "Part-time: 6 yrs"],
    mode: ["Blended"],
    GATE: ["Approved"],
    specialMatricReqs: [],
  },
];

export const getCourses = function (courseList) {
  const progCourses = [];
  courseList.forEach((courseCode) => {
    progCourses.push(
      allCourses.find(
        (course) => course.coursecode.trim() === courseCode.trim()
      )
    );
  });
  return progCourses;
};

// const getCredits = function () {};
export const getTuition = function (prog) {
  return [
    {
      studenttype: "TT National",
      costpercredit: 300,
      totalcost: prog.totalcredits * 300,
    },
    {
      studenttype: "Caricom",
      costpercredit: 400,
      totalcost: prog.totalcredits * 400,
    },
    {
      studenttype: "International",
      costpercredit: 750,
      totalcost: prog.totalcredits * 750,
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
// "aaFilmVidProd";
// "aaJournalism";
// "aaLitInEnglish";
// "aaPerfArtMusic";
// "aaPsychology";
// "aasAdvertPromo";
// "aasBusAdmin";
// "aasCrimJustice";
// "aasGraphicDes";
// "aasITGen";
// "aasJourPubRel";
// "aasLIS";
// "aasvMath";
// "aaSpanForBus";
// "aaSpanish";
// "aasSocialWork";
// "aasWebDev";
// "baAccounting";
// "baECCE";
// "baGraphicDes";
// "baMassComm";
// "baMgmtEntrep";
// "bbaHRMgmt";
// "bbaMarketing";
// "bscITGen";
// "bscITNetworking";
// "bscLIS";
// "bscWebDev";
// "bswSocialWork";
// "certAdvertPromo";
// "certCCNA";
// "certCrimJustice";
// "certECCE";
// "certFilmVidProd";
// "certGraphicDes";
// "certJournalism";
// "certMusicPerf";
// "certPhotoVid";
// "certPublicRel";
// "certRecMgmt";
// "certSupMgmt";
// "certWebDev";
// "certWkplaceSkills";
// "dipAdvertPromo";
// "dipSupMgmt";
