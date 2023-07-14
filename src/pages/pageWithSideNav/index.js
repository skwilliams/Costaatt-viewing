import Layout from '@/components/PageWithSideNavComponents/Layout';
import Programmes from '@/pages/programmes/index';
// import Courses from '../../pages/programmes/allcourses'
// page to take
import React from 'react';

export default function PageWithSideNav() {
  return <Programmes />;
}

PageWithSideNav.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
