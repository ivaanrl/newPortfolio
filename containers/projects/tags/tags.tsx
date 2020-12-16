import Tag from './tag';
import styles from '../../../styles/tag.module.scss';
import { motion } from 'framer-motion';
import { RefObject, useRef } from 'react';

interface Props {
  color: string;
  tags: string[];
  parentRef: RefObject<Element>;
}

const Tags = ({ color, tags, parentRef }: Props) => {
  const ref = useRef(null);

  return (
    <motion.div
      drag={'x'}
      dragConstraints={parentRef}
      className={styles.tags__container}
      ref={ref}
    >
      {tags.map((tag) => (
        <Tag key={tag} color={color} label={tag} />
      ))}
    </motion.div>
  );
};

export default Tags;
