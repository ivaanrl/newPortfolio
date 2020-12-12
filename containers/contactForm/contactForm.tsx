import styles from '../../styles/contactForm.module.scss';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { Icon } from '@iconify/react';
import bxsPhone from '@iconify/icons-bx/bxs-phone';
import envelopeFill from '@iconify/icons-bi/envelope-fill';
import personIcon from '@iconify/icons-bi/person';
import envelopeClosed from '@iconify/icons-cil/envelope-closed';
import { useState } from 'react';

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {},
  });

  const [nameFocus, setNameFocus] = useState<boolean>(false);
  const [emailFocus, setEmailFocus] = useState<boolean>(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={modalVariants}
      className={styles.modal__container}
    >
      <motion.div className={styles.container}>
        <div className={styles.contactInfo__main__container}>
          <div className={styles.contactInfo__container}>
            <p className={styles.contactInfo__title}>Contact me</p>
            <div className={styles.contactInfo__itemsContainer}>
              <motion.div
                whileHover={{
                  border: '2px solid #aa3fff',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(67,25,100,0.2)',
                }}
                className={styles.contactInfo__item}
              >
                <div className={styles.contactInfo__itemIconContainer}>
                  <Icon
                    icon={bxsPhone}
                    style={{ fontSize: '25px' }}
                    className={styles.contactInfo__itemIcon}
                  />
                </div>
                <p className={styles.contactInfo__itemText}>+54 2262 612871</p>
              </motion.div>
              <motion.div
                whileHover={{
                  border: '2px solid #aa3fff',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(67,25,100,0.2)',
                }}
                className={styles.contactInfo__item}
              >
                <div className={styles.contactInfo__itemIconContainer}>
                  <Icon
                    icon={envelopeFill}
                    style={{ fontSize: '25px' }}
                    className={styles.contactInfo__itemIcon}
                  />
                </div>
                <p className={styles.contactInfo__itemText}>
                  {' '}
                  roldanlusichivan@gmail.com{' '}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.contactForm__container}>
          <form className={styles.contactForm}>
            <div className={styles.inputAndLabelContainer}>
              <label className={styles.label}>Name</label>
              <div className={styles.inputContainer}>
                <Icon
                  icon={personIcon}
                  className={
                    nameFocus ? styles.inputIcon__focus : styles.inputIcon
                  }
                />
                <input
                  className={styles.input}
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  autoFocus={true}
                  onFocus={() => setNameFocus(true)}
                />
              </div>
            </div>
            <div className={styles.inputAndLabelContainer}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputContainer}>
                <Icon
                  icon={envelopeClosed}
                  className={
                    emailFocus ? styles.inputIcon__focus : styles.inputIcon
                  }
                  style={{
                    top: 'calc(50% - 12px)',
                  }}
                />
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onFocus={() => setEmailFocus(true)}
                />
              </div>
            </div>
            <div className={styles.inputAndLabelContainer}>
              <label className={styles.label}>Message</label>
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </div>

            <motion.button
              whileHover={{
                backgroundColor: '#560496',
                color: '#ffffff',
                borderImageSlice: 1,
                borderImageSource:
                  'linear-gradient(200.54deg,#560496 100%,#ffffff 0%)',
                scale: 1.1,
              }}
              className={styles.submitButton}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
