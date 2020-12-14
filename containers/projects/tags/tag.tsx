import styles from '../../../styles/tag.module.scss';

interface Props {
  color: string;
  label: string;
}

const Tag = ({ color, label }: Props) => {
  return (
    <div style={{ color }} className={styles.tag}>
      {label}
    </div>
  );
};

export default Tag;
