import styles from '../../styles/navbar.module.scss';
import Image from 'next/image';
import { useCycle } from 'framer-motion';
import useMeasure from 'react-use-measure';
import useWindowDimensions from '../../shared/customHooks/useWindowDimentions';
import { motion } from 'framer-motion';
import { MenuToggle } from './menuToggle';
import Navigation from './navigation';

interface Props {
  showContactForm: () => void;
}

const megaMenu = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 400}px at 87% 50px)`,
    // background: 'rgba(255,255,255,1)',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(1px at 87% 50px)',
    //background: 'rgba(255,255,255,1)',
    opacity: 0,
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navbar = ({ showContactForm }: Props) => {
  const [ref, { height }] = useMeasure();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const windowDimensions = useWindowDimensions();

  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__logo__container}>
        <div className={styles.navbar__logo_image__container}>
          <Image
            width={403}
            height={403}
            alt="ivanrl.dev logo"
            src="/icon/icon_bg_r_x1.png"
            className={styles.navbar__logo_image}
          />
        </div>
        <p>Iván Roldán Lusich</p>
      </div>
      <div className={styles.navbar__right__container}>
        <motion.button
          whileHover={{
            backgroundColor: '#aa3fff',
            color: '#ffffff',
          }}
          className={styles.navbar__contact}
          onClick={showContactForm}
        >
          Contact
        </motion.button>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={ref}
        >
          <motion.div
            className={styles.modal}
            animate={{
              opacity: isOpen ? 1 : 0,
              display: isOpen ? 'block' : 'none',
            }}
            onClick={() => toggleOpen()}
          />
          <motion.div
            animate={{
              height: windowDimensions.height,
            }}
            className={styles.mega_menu__background}
            variants={megaMenu}
          >
            <Navigation />
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
