import { useState } from 'react';
import Footer from '../containers/footer/footer';
import Navbar from '../containers/navbar/navbar';
import ContactForm from '../containers/contactForm/contactForm';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  return (
    <>
      <Navbar showContactForm={() => setShowContactForm(true)} />
      <Component {...pageProps} />
      <Footer showContactForm={() => setShowContactForm(true)} />
      {showContactForm ? (
        <ContactForm hideContactForm={() => setShowContactForm(false)} />
      ) : null}
    </>
  );
}

export default MyApp;
