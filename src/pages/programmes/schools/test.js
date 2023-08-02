import React from 'react'
import Layout from '../../../components/PageWithSideNavComponents/Layout'
import { LocaleRouteNormalizer } from 'next/dist/server/future/normalizers/locale-route-normalizer';

const test = () => {
  return (
    
    <div>
        Lorem
    </div>
  )
}
test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default test