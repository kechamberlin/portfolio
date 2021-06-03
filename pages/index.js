import { Fragment } from 'react';
import Head from 'next/head';
import About from '../components/home-page/about';
import Contact from '../components/home-page/contact';
import FeaturedProjects from '../components/home-page/featured-projects';
import Hero from '../components/home-page/hero';
import { getFeaturedProjects } from '../lib/projects-util';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home | Kris Chamberlin</title>
        <meta
          name="description"
          content="Kris Chamberlin Front End Web Development Portfolio based in Irvine, California"
        />
      </Head>
      <Hero />
      <About />
      <FeaturedProjects projects={props.projects} />
      <Contact />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredProjects = getFeaturedProjects();

  return {
    props: {
      projects: featuredProjects,
    },
  };
}
