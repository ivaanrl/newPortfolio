import { useState } from 'react';
import Footer from '../containers/footer/footer';
import Navbar from '../containers/navbar/navbar';
import ContactForm from '../containers/contactForm/contactForm';
import '../styles/globals.scss';
import Background from '../containers/background/background';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const onMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();

    // set x,y local coordinates
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

    // update MotionValues
    x.set(xValue, true);
    y.set(yValue, true);
  };

  const translateX = useTransform(x, [0, 1], [-2, 2], {
    clamp: true,
  });

  const translateY = useTransform(y, [0, 1], [-5, 5], {
    clamp: true,
  });

  return (
    <motion.div onPointerMove={onMove}>
      <Background translateX={translateX} translateY={translateY} />
      <Navbar showContactForm={() => setShowContactForm(true)} />
      <Component {...pageProps} />
      <Footer showContactForm={() => setShowContactForm(true)} />
      {showContactForm ? (
        <ContactForm hideContactForm={() => setShowContactForm(false)} />
      ) : null}
    </motion.div>
  );
}

export default MyApp;
