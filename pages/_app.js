import Head from 'next/head';

import Header from '../components/includes/header'
import HeadContent from '../components/layout/head';
import FootContent from '../components/layout/foot';

import '../public/css/hl-vs2015.css'
import '../styles/globals.css'

function Site2023({ Component, pageProps }) {
  return (
    <>
      <Head>
        <HeadContent />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <FootContent />
    </>
  );
}

export default Site2023
