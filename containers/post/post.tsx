import styles from "../../styles/post.module.scss";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface Props {
  title: string;
  body: string;
  createdAt: string;
}

const Post = ({ title, body, createdAt }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.body__container}>
        <ReactMarkdown className={styles.markdown__container} plugins={[gfm]}>
          {body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
