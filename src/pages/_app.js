import '../styles/globals.css';
import Head from 'next/head';

import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {

  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>;
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
