import { motion } from 'framer-motion';
import styles from '../../../../styles/skillsHeader.module.scss';
import { theme } from '../../../../styles/theme';

interface Props {
  setPage: (page: 0 | 1 | 2 | 3) => void;
  page: 0 | 1 | 2 | 3;
  title: string;
  selectedPage: 0 | 1 | 2 | 3;
}

const HeaderItem = ({ page, setPage, title, selectedPage }: Props) => {
  return (
    <motion.div
      animate={
        page === selectedPage
          ? {
              fontSize: '40px',
              color: theme.white,
            }
          : {
              fontSize: '20px',
              color: theme.mutedTextOnWhite,
            }
      }
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      className={styles.text_container}
      onClick={() => setPage(selectedPage)}
    >
      <motion.div
        animate={
          page === selectedPage
            ? {
                padding: '15px',
              }
            : {
                padding: '5px',
              }
        }
        className={styles.text}
      >
        <p>{title}</p>
        <motion.div
          animate={
            page === selectedPage
              ? {
                  height: '100%',
                  color: theme.white,
                }
              : { height: '50%', color: theme.mutedTextOnWhite }
          }
          className={styles.not_selected__background}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeaderItem;
