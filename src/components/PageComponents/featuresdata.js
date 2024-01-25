import React from 'react'
import LayoutNone from "../Layouts/TopNavOnly_NoDropdown"


const featuresdata = () => {
  return (
    <div>featuresdata</div>
  )
}

export default featuresdata

 featuresdata.getLayout = function getLayout(page) {
   return <LayoutNone>{page}</LayoutNone>;
 };


export const featured = [
  {
    id: 1,
    tags: ["aasLIS", "bscLIS", "ICTD"],
    photo: require("../../../public/images/ai.jpg"),
    altText: "Maneka and Joanne",
    title: "Library Science talks in AI Conference",
    text: "Maneka Gookool, Joanne Jarvis-Patrick presented at first AI Congerence hosted by UWI Jamaica",
    link: "www.gmail.com",
  },
  // {
  //   id: 2,
  //   tags: ["ICTD", "bscWebDev", "aasWebDev"],
  //   photo: require("../../../images/Links/courses business.jpg"),
  //   altText: "ICPC Students",
  //   title: "Programmers of tomorrow!",
  //   text: "COSTAATT students participate in Regional ICPC programming competition in Cuba.",
  //   link: "www.costaatt.edu.tt.",
  // },
  {
    id: 3,
    tags: ["ICTD", "bscITGen", "aasITGen"],
    photo: require("../../../images/Links/ctrlaltfixtechlogobanner.png"),
    altText: "ctrl-alt-fix Tech",
    title: "COSTAATT graduates launches UPLift App",
    text: "Recent graduates of COSTAATT launched their Health App UPLIFT",
    link: "www.gmail.com",
  },
  // {
  //   id: 4,
  //   tags: ["ICTD", "aasLIS", "bscLIS"],
  //   photo: require("../../../images/Links/courses business.jpg"),
  //   altText: "Students",
  //   title: "Huawei Seeds of Tomorrow",
  //   text: "ACPIC conference taking place at...., Joanne Jarvis-Patrick presentedat first AI Congerence hosted by UWI Jamaica",
  //   link: "www.costaatt.edu.tt.",
  // },
];

export const gradspeak = [
  {
    id: 1,
    tags: ["aasITNetworking", "bscITGen", "ICTD"],
    video: "https://www.youtube.com/watch?v=fn7bh8Kz3wc",
    name: "Keith Harry",
    placeofwork: "Jaimano IT Solutions",
    words:
      "I had the option of going anywhere but I chose COSTAATT, and I made the right the decision. Not only did COSTAATT exceed my expectation but the value I received is priceless",
  },
  {
    id: 2,
    tags: ["aasWebDev", "bscWebDev", "ICTD"],
    video: "https://www.youtube.com/watch?v=fn7bh8Kz3wc",
    name: "Nicholas Mohammed",
    placeofwork: "Jaimano IT Solutions",
    words:
      "I had the option of going anywhere but I chose COSTAATT, and I made the right the decision. Not only did COSTAATT exceed my expectation but the value I received is priceless",
  },
  {
    id: 3,
    tags: ["aasITGen", "bscITGen", "ICTD"],
    video: "https://www.youtube.com/watch?v=fn7bh8Kz3wc",
    name: "Kafra Morris",
    placeofwork: "CTRL-ALT-Fix Solutions",
    words:
      "I had the option of going anywhere but I chose COSTAATT, and I made the right the decision. Not only did COSTAATT exceed my expectation but the value I received is priceless",
  },
];
