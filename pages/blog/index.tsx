import { GetStaticProps } from "next";
import Head from "next/head";
import PostPreview from "../../containers/postPreview/postPreview";
import { PostPreview as PostPreviewInterface } from "../../shared/interfaces/post";
import styles from "../../styles/blog.module.scss";
import axios from "axios";

interface Props {
  posts: PostPreviewInterface[];
}

export default function Blog({ posts }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iván Roldán Lusich - Blog</title>
      </Head>
      <div className={styles.title}>My Posts</div>
      <div className={styles.posts__container}>
        {posts.map((post) => (
          <PostPreview {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get<PostPreviewInterface>(
    "https://dev.to/api/articles?username=ivaanrl"
  );

  return {
    props: {
      posts: response.data,
    },

    revalidate: 1,
  };
};
