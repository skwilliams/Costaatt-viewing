import Layout from '@/components/PageWithSideNavComponents/Layout'
import Landing from '@/components/HomeComponents/Home'  
import Courses from '../../pages/programmes/allcourses'
// page to take
import React from 'react'

export default function PageWithSideNav() {
  return (
    <Layout>
      {/* <Landing />  */}
    { <Courses/> }
    </Layout>
  )
}
