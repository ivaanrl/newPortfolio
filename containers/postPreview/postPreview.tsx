import Image from "next/image";
import { PostPreview as PostPreviewInterface } from "../../shared/interfaces/post";
import styles from "../../styles/postPreview.module.scss";
import { motion } from "framer-motion";

interface Props extends PostPreviewInterface {}

const PostPreview = ({
  id,
  title,
  description,
  comments_count,
  cover_image,
  readable_publish_date,
  positive_reactions_count,
}: Props) => {
  return (
    <a className={styles.container} href={`/blog/${id}`}>
      <div className={styles.title__container}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.body__container}>
        <div className={styles.image__container}>
          <Image
            height={420}
            width={1000}
            src={cover_image}
            alt={`${title} cover image`}
            className={styles.image}
          />
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.footer}>
        <p className={styles.created_at}>{readable_publish_date}</p>
        <div className={styles.stats__container}>
          {
            //<div className={styles.reactions}>{positive_reactions_count}</div>
            //<div className={styles.comment_count}>{comments_count}</div>
          }
        </div>
      </div>
    </a>
  );
};

export default PostPreview;
