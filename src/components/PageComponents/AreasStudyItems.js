import React from 'react'
import LayoutNone from "../Layouts/TopNavOnly_NoDropdown"



const AreasStudyItems = () => {
  return (
    <div>AreasStudyItems</div>
  )
}

export default AreasStudyItems

AreasStudyItems.getLayout = function getLayout(page) {
  return <LayoutNone>{page}</LayoutNone>;
};

export const areasstudyitems = [
    {
        school: 'sbdt',
        id:1,
        areas: [
            {
                title: 'Accounting',
            },
            {
                title: 'Business Administration',
            },
            {
                title: 'Entrepreneurship',
            },
            {
                title: 'Human Resources',
            },
            {
                title: 'Information Technology',
            },
            {
                title: 'Library Studies',
            },
            {
                title: 'Marketing',
            },
            {
                title: 'Networking',
            },
            {
                title: 'Records Management',
            },
            {
                title: 'Supervisory Management',
            },
            {
                title: 'Web Development',
            },
        ],
    },
    {
        school: 'seces',
        id:2,
        areas: [
            {
                title: 'Biology',
            },
            {
                title: 'Emergency Care ',
            },
            {
                title: 'Enviornmental Health',
            },

            {
                title: 'Natural and Life Science',
            },

            {
                title: 'Occupational Safety and Health',
            },
        ],
    },
    {
        school: 'slaedh',
        id:3,
        areas: [
            {
                title: 'Criminal Justice',
            },
            {
                title: 'Early Childhodd Care and Education',
            },
            {
                title: 'Mathematics',
            },
            {
                title: 'Psychology',
            },
            {
                title: 'Social Work',
            },
        ],
    },
    {
        school: 'kgccdm',
        id:4,
        areas: [
            {
                title: 'Advertising and Promotion',
            },
            {
                title: 'Films and Video Production',
            },
            {
                title: 'Graphic Design',
            },
            {
                title: 'Journalism and PR'
            },
            {
                title: 'Literatures in English',
            },
            {
                title: 'Mass Communications',
            },
            {
                title: 'Music',
            },
            {
                title: 'Spanish',
            },

        ],
    },
    {

        school: 'swed',
        id:5,
        areas: [
            {
                title: 'Corporate and Upskilling Training'
            },
            {
                title: 'Customized Workshops and Short Courses',
            },
            {
                title: 'Professional Development',
            },
            {
                title: 'Translation and Interpretation Services',
            },
            {
                title: 'CollegeStartTT Programme',
            },


        ],
    },
    {

        school: 'snhmt',
        id:6,
        areas: [
            {
                title: 'District Health Visiting',
            },
            {
                title: 'Medical Lab Technology',
            },
            {
                title: 'Midwifery',
            },
            {
                title: 'Nursing',
            },
            {
                title: 'Pharmacy Assistant',
            },
            {
                title: 'Phlebotomy',
            },
            {
                title: 'Radiography',
            },
            {
                title: 'Sonography for Midwives',
            },

        ],
    },

];



