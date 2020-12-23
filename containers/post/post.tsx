import styles from "../../styles/post.module.scss";
import ReactMarkdown from "react-markdown";

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
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;
