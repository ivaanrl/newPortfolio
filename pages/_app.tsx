import Footer from '../containers/footer/footer';
import Navbar from '../containers/navbar/navbar';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
