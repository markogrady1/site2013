import Header from '../components/includes/header'
import '../styles/globals.css'

function Site2023({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default Site2023
