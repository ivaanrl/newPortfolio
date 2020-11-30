import styles from '../../../../styles/skillsHeader.module.scss';
import { motion } from 'framer-motion';
import HeaderItem from './headerItem';

interface Props {
  setPage: (page: 0 | 1 | 2 | 3) => void;
  page: 0 | 1 | 2 | 3;
}

const Header = ({ page, setPage }: Props) => {
  return (
    <div className={styles.container}>
      <HeaderItem
        page={page}
        setPage={setPage}
        title={'Frontend'}
        selectedPage={0}
      />
      <HeaderItem
        page={page}
        setPage={setPage}
        title={'Backend'}
        selectedPage={1}
      />
      <HeaderItem
        page={page}
        setPage={setPage}
        title={'Tools'}
        selectedPage={2}
      />
    </div>
  );
};

export default Header;
