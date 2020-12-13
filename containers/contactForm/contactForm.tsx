import { useEffect, useState } from 'react';
import styles from '../../styles/contactForm.module.scss';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import { Icon } from '@iconify/react';
import bxsPhone from '@iconify/icons-bx/bxs-phone';
import envelopeFill from '@iconify/icons-bi/envelope-fill';
import personIcon from '@iconify/icons-bi/person';
import envelopeClosed from '@iconify/icons-cil/envelope-closed';
import closeFill from '@iconify/icons-eva/close-fill';
import { contactFormValidationSchema } from './validationSchema';

interface Props {
  hideContactForm: () => void;
}

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactForm = ({ hideContactForm }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: ({ name, email, message }) => {
      emailjs.send(
        'gmail',
        'template_6UyWUtVR',
        { name, email, message },
        'user_Tqu4Qb768TWFhX3VukiG7',
      );
    },
    validationSchema: contactFormValidationSchema,
    validateOnBlur: true,
    validateOnChange: true,
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.container}
      >
        <motion.button
          whileHover={{
            rotate: 360,
            scale: 1.1,
            transition: {
              duration: 0.5,
            },
          }}
          whileTap={{
            scale: 0.9,
          }}
          className={styles.close__buttonContainer}
          onClick={hideContactForm}
        >
          <Icon icon={closeFill} className={styles.close__button} />
        </motion.button>
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
          <form className={styles.contactForm} onSubmit={formik.handleSubmit}>
            <div className={styles.inputAndLabelContainer}>
              <label className={styles.label}>Name</label>
              <div className={styles.inputContainer}>
                <Icon
                  icon={personIcon}
                  className={
                    formik.touched.name && formik.errors.name
                      ? styles.inputIconError
                      : nameFocus
                      ? styles.inputIcon__focus
                      : styles.inputIcon
                  }
                />
                <input
                  className={
                    formik.touched.name && formik.errors.name
                      ? styles.inputInvalid
                      : styles.input
                  }
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  autoFocus={true}
                  onFocus={() => setNameFocus(true)}
                  onBlur={(e) => {
                    setNameFocus(false);
                    formik.handleBlur(e);
                  }}
                />
              </div>
              {formik.touched.name && formik.errors.name ? (
                <div className={styles.input__error}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div className={styles.inputAndLabelContainer}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputContainer}>
                <Icon
                  icon={envelopeClosed}
                  className={
                    formik.touched.email && formik.errors.email
                      ? styles.inputIconError
                      : emailFocus
                      ? styles.inputIcon__focus
                      : styles.inputIcon
                  }
                  style={{
                    top: 'calc(50% - 12px)',
                  }}
                />
                <input
                  className={
                    formik.touched.email && formik.errors.email
                      ? styles.inputInvalid
                      : styles.input
                  }
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={(e) => {
                    setEmailFocus(false);
                    formik.handleBlur(e);
                  }}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className={styles.input__error}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className={styles.inputAndLabelContainer}>
              <label className={styles.label}>Message</label>
              <textarea
                className={
                  formik.touched.message && formik.errors.message
                    ? styles.textareaError
                    : styles.textarea
                }
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className={styles.input__error}>
                  {formik.errors.message}
                </div>
              ) : null}
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
              type="submit"
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
