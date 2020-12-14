import Tag from './tag';
import styles from '../../../styles/tag.module.scss';

interface Props {
  color: string;
  tags: string[];
}

const Tags = ({ color, tags }: Props) => {
  return (
    <div className={styles.tags__container}>
      {tags.map((tag) => (
        <Tag key={tag} color={color} label={tag} />
      ))}
    </div>
  );
};

export default Tags;
