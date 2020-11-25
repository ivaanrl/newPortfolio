import Head from 'next/head';
import Hero from '../containers/hero/hero';
import Projects from '../containers/projects/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Iván Roldán Lusich Portfolio</title>
      </Head>
      <Hero />
      <Projects />
    </>
  );
}
