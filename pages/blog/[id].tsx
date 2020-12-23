import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import styles from "../../styles/postPage.module.scss";
import {
  Post as PostInterface,
  PostPreview as PostPreviewInterface,
} from "../../shared/interfaces/post";
import Post from "../../containers/post/post";
import axios from "axios";

interface Props extends PostInterface {}

export default function PostPage({
  title,
  body_markdown,
  readable_publish_date,
}: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Post
        title={title}
        body={body_markdown}
        createdAt={readable_publish_date}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get<PostPreviewInterface[]>(
    "https://dev.to/api/articles?username=ivaanrl"
  );
  const posts = res.data;

  const paths = posts.map((post) => `/blog/${post.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(`https://dev.to/api/articles/${params.id}`);

  return { props: res.data };
};
