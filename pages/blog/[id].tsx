import { GetStaticPaths, GetStaticProps } from "next";
import styles from "../../styles/postPage.module.scss";
import {
  Post as PostInterface,
  PostPreview as PostPreviewInterface,
} from "../../shared/interfaces/post";
import Post from "../../containers/post/post";

interface Props extends PostInterface {}

export default function PostPage({
  title,
  body_markdown,
  readable_publish_date,
}: Props) {
  return (
    <div className={styles.container}>
      <Post
        title={title}
        body={body_markdown}
        createdAt={readable_publish_date}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://dev.to/api/articles?username=ivaanrl");
  const posts: PostPreviewInterface[] = await res.json();

  const paths = posts.map((post) => `/blog/${post.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://dev.to/api/articles/${params.id}`);
  const post = await res.json();

  return { props: post };
};
