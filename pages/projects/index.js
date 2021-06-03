import Head from 'next/head';
import { Fragment } from 'react';
import AllProjects from '../../components/projects/all-projects';
import { getAllProjects } from '../../lib/projects-util';

export default function AllProjectsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Full Project Collection | Kris Chamberlin </title>
        <meta
          name="description"
          content="Full Project Collection for Kris Chamberlin Front End Web Development Portfolio"
        />
      </Head>
      <AllProjects projects={props.projects} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
}
