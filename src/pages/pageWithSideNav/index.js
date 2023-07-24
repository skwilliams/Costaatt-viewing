import Layout from '@/components/PageWithSideNavComponents/Layout';
import TopNavOnlyLayout from '@/components/Layouts/TopNavOnly_NoDropdown';
import SideNavOnlyLayout from '@/components/Layouts/SideNavOnly_NoTopOrDropdown';
import Programmes from '@/pages/programmes/index';
// import Courses from '../../pages/programmes/allcourses'
// page to take
import React from 'react';

export default function PageWithSideNav() {
  return <Programmes />;
}

PageWithSideNav.getLayout = function getLayout(page) {
  return <TopNavOnlyLayout>{page}</TopNavOnlyLayout>;
};
